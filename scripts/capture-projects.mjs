import { createRequire } from 'node:module';
import { existsSync, readFileSync, mkdirSync, writeFileSync, mkdtempSync, rmSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir, homedir } from 'node:os';
import { spawn } from 'node:child_process';

const root = fileURLToPath(new URL('../..', import.meta.url));
const portfolio = join(root, 'portifolio');
const allRecipes = JSON.parse(readFileSync(join(portfolio, 'review/recipes.json')));
const requested = process.argv.find((argument) => argument.startsWith('--project='))?.split('=')[1];
if (requested && !allRecipes.some((recipe) => recipe.id === requested)) throw new Error(`Unknown project: ${requested}`);
const recipes = requested ? allRecipes.filter((recipe) => recipe.id === requested) : allRecipes;
if (process.argv.includes('--list')) {
  for (const recipe of recipes) console.log(`${recipe.id}: ${recipe.kind}; ${recipe.areas.length} areas; ${recipe.directory ?? 'source unavailable'}`);
  process.exit(0);
}
const output = resolve(process.env.SCREENSHOT_DIR || join(portfolio, 'review/captures'));
mkdirSync(output, { recursive: true });
const results = [];
const manifestPath = join(output, requested ? `${requested}-manifest.json` : 'manifest.json');
function save() {
  const summary = JSON.stringify({ createdAt: new Date().toISOString(), results }, null, 2) + '\n';
  writeFileSync(manifestPath, summary);
  writeFileSync(join(portfolio, 'review/last-capture-run.json'), summary);
}
function record(recipe, area, viewport, status, extra = {}) {
  results.push({ projectId: recipe.id, area: area.id, viewport, status, ...extra });
  save();
}
function safeError(error) {
  return String(error?.message ?? error).split('\n')[0].replace(/(https?:\/\/)[^\s/@]+:[^\s/@]+@/g, '$1[redacted]@');
}
function plannedViewports(recipe) {
  return recipe.kind === 'web' ? ['desktop', 'mobile'] : [recipe.kind === 'electron' || recipe.kind === 'expo' ? 'native' : recipe.kind === 'terminal' ? 'terminal' : 'desktop'];
}
function recordBlocked(recipe, reason) {
  for (const area of recipe.areas.length ? recipe.areas : [{ id: 'project' }]) {
    for (const viewport of plannedViewports(recipe)) {
      if (!results.some((result) => result.projectId === recipe.id && result.area === area.id && result.viewport === viewport)) record(recipe, area, viewport, 'blocked', { reason });
    }
  }
}
const require = createRequire(import.meta.url);
let chromium, electron, browser, chromiumExecutable;
try {
  const playwrightPath = process.env.PLAYWRIGHT_MODULE || (existsSync(join(portfolio, 'node_modules/playwright')) ? 'playwright' : join(root, 'swiss-learn/node_modules/playwright'));
  ({ chromium, _electron: electron } = require(playwrightPath));
  let executablePath = process.env.CHROMIUM_PATH;
  if (!executablePath && !existsSync(chromium.executablePath())) {
    const cache = join(homedir(), '.cache/ms-playwright');
    for (const name of existsSync(cache) ? readdirSync(cache).filter((name) => /^chromium-\d+$/.test(name)).sort().reverse() : []) {
      const candidate = join(cache, name, 'chrome-linux64/chrome');
      if (existsSync(candidate)) { executablePath = candidate; break; }
    }
  }
  chromiumExecutable = executablePath;
  browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
} catch (error) {
  for (const recipe of recipes) recordBlocked(recipe, recipe.kind === 'unavailable' ? 'Project source is unavailable' : ['terminal', 'manual', 'expo'].includes(recipe.kind) ? recipe.prerequisites.join(' ') : safeError(error));
  for (const recipe of recipes) for (const area of recipe.manualAreas ?? []) record(recipe, area, 'native', 'blocked', { reason: area.reason });
  console.error(`Chromium could not start; ${results.length} blocked entries saved to ${manifestPath}. No images were created.`);
  process.exit(1);
}

const children = new Set();
const temporary = new Set();
function stop(child) {
  if (child.exitCode === null) {
    try { process.kill(-child.pid, 'SIGTERM'); } catch { child.kill('SIGTERM'); }
  }
  children.delete(child);
}
async function launchWeb(recipe, port) {
  const directory = resolve(root, recipe.directory);
  if (!existsSync(join(directory, 'node_modules'))) throw new Error('Dependencies are not installed');
  const env = { ...process.env, NODE_ENV: 'development' };
  if (recipe.requiresDatabase) {
    const name = `REVIEW_DATABASE_URL_${recipe.id.replaceAll('-', '_').toUpperCase()}`;
    const value = process.env[name];
    if (!value) throw new Error(`Missing ${name}: use a migrated, seeded, dedicated local _review database`);
    const url = new URL(value);
    if (!['localhost', '127.0.0.1', '[::1]'].includes(url.hostname) || !url.pathname.endsWith('_review')) throw new Error('Review database must be local and end in _review');
    env.DATABASE_URL = value;
  }
  const args = recipe.start.args.map((argument) => argument.replace('{port}', String(port)));
  const child = spawn(recipe.start.command, args, { cwd: directory, env, detached: true, stdio: 'ignore' });
  children.add(child);
  let launchError;
  child.on('error', (error) => { launchError = error; });
  const base = `http://127.0.0.1:${port}`;
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    if (launchError || child.exitCode !== null) { stop(child); throw launchError ?? new Error(`Server exited with code ${child.exitCode}`); }
    try {
      const response = await fetch(base, { signal: AbortSignal.timeout(1500), redirect: 'manual' });
      if (response.status < 500) return { base, child };
    } catch { /* wait for startup */ }
    await new Promise((resolveWait) => setTimeout(resolveWait, 300));
  }
  stop(child);
  throw new Error('Server did not become ready within 30 seconds');
}
async function applySteps(page, steps = []) {
  for (const step of steps) {
    const locator = step.selector ? page.locator(step.selector).first() : page.getByRole(step.role, { name: new RegExp(step.name, 'i') }).first();
    if (step.action === 'click') await locator.click({ timeout: 5000 });
    else if (step.action === 'fill') await locator.fill(step.value, { timeout: 5000 });
    else throw new Error(`Unsupported interaction: ${step.action}`);
  }
}
async function screenshot(page, recipe, area, viewport) {
  await applySteps(page, area.steps);
  await page.waitForFunction(() => document.readyState === 'complete', null, { timeout: 10000 });
  await page.evaluate(() => Promise.race([document.fonts.ready, new Promise((done) => setTimeout(done, 5000))]));
  if (!(await page.locator('body').innerText()).trim()) throw new Error('Empty page; screenshot rejected');
  const directory = join(output, recipe.id);
  mkdirSync(directory, { recursive: true });
  const filename = `${area.id}-${viewport}.png`;
  const path = join(directory, filename);
  await page.screenshot({ path, fullPage: true, animations: 'disabled', mask: [page.locator('input[type="password"], input[name*="secret" i], input[name*="token" i], input[name*="apiKey" i], [data-sensitive]')] });
  const bytes = readFileSync(path);
  record(recipe, area, viewport, 'captured', {
    file: `${recipe.id}/${filename}`, width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20),
    caption: area.caption, capturedAt: new Date().toISOString(), reviewed: false,
  });
}

try {
  let port = 3200;
  for (const recipe of recipes) {
    console.log(`Reviewing ${recipe.id} (${recipe.kind})`);
    for (const area of recipe.manualAreas ?? []) record(recipe, area, 'native', 'blocked', { reason: area.reason });
    let child, desktopApp, extensionContext;
    try {
      if (recipe.kind === 'web') {
        if (!process.argv.includes('--start')) throw new Error('Pass --start to launch local applications');
        ({ base: recipe.base, child } = await launchWeb(recipe, port++));
        for (const viewport of ['desktop', 'mobile']) {
          const state = join(portfolio, 'review/private', `${recipe.id}.storage.json`);
          const context = await browser.newContext({ viewport: viewport === 'desktop' ? { width: 1440, height: 1000 } : { width: 390, height: 844 }, locale: 'pt-BR', reducedMotion: 'reduce', ...(existsSync(state) ? { storageState: state } : {}) });
          await context.route('**/*', async (route) => {
            const request = route.request();
            if (request.isNavigationRequest() && !['127.0.0.1', 'localhost', '[::1]'].includes(new URL(request.url()).hostname)) await route.abort();
            else await route.continue();
          });
          try {
            for (const area of recipe.areas) {
              if (area.requiresAuth && !existsSync(state)) { record(recipe, area, viewport, 'blocked', { reason: 'A private local demo session is required' }); continue; }
              let missing;
              const path = area.path.replace(/\$\{([A-Z_]+)\}/g, (_, name) => { if (!process.env[name]) missing = name; return encodeURIComponent(process.env[name] ?? ''); });
              if (missing) { record(recipe, area, viewport, 'blocked', { reason: `Missing demo identifier: ${missing}` }); continue; }
              const page = await context.newPage();
              try {
                const response = await page.goto(new URL(path, recipe.base).href, { waitUntil: 'load', timeout: 30000 });
                if (!response || response.status() >= 400) throw new Error(`Page returned HTTP ${response?.status()}`);
                if (area.requiresAuth && /\/(login|signin)(\/|$)/.test(new URL(page.url()).pathname)) throw new Error('Demo session was rejected; authentication screen is not the requested area');
                await screenshot(page, recipe, area, viewport);
              } catch (error) { record(recipe, area, viewport, 'blocked', { reason: safeError(error) }); }
              finally { await page.close(); }
            }
          } finally { await context.close(); }
        }
      } else if (recipe.kind === 'electron') {
        if (!process.argv.includes('--start')) throw new Error('Pass --start to launch desktop applications');
        const directory = resolve(root, recipe.directory);
        const main = resolve(directory, recipe.main);
        if (!existsSync(main)) throw new Error('Build the Electron main process before capture');
        const temp = mkdtempSync(join(tmpdir(), 'portfolio-electron-'));
        temporary.add(temp);
        mkdirSync(join(temp, 'profile'));
        const wrapper = join(temp, 'main.cjs');
        writeFileSync(wrapper, `const {app}=require('electron');\napp.setPath('userData', ${JSON.stringify(join(temp, 'profile'))});\nrequire(${JSON.stringify(main)});\n`);
        desktopApp = await electron.launch({ executablePath: require(join(directory, 'node_modules/electron')), args: [wrapper], cwd: directory, timeout: 30000 });
        const page = await desktopApp.firstWindow();
        if (recipe.demoStorage) { await page.evaluate((storage) => { for (const [key, value] of Object.entries(storage)) localStorage.setItem(key, value); }, recipe.demoStorage); }
        for (const area of recipe.areas) {
          try { await page.reload({ waitUntil: 'load' }); await screenshot(page, recipe, area, 'native'); }
          catch (error) { record(recipe, area, 'native', 'blocked', { reason: safeError(error) }); }
        }
      } else if (recipe.kind === 'extension') {
        const path = resolve(root, recipe.directory, recipe.extensionDirectory);
        if (!existsSync(join(path, 'manifest.json'))) throw new Error('Build the extension first: npm run build:extension');
        const temp = mkdtempSync(join(tmpdir(), 'portfolio-extension-'));
        temporary.add(temp);
        extensionContext = await chromium.launchPersistentContext(temp, { ...(chromiumExecutable ? { executablePath: chromiumExecutable } : { channel: 'chromium' }), headless: true, args: [`--disable-extensions-except=${path}`, `--load-extension=${path}`] });
        const worker = extensionContext.serviceWorkers()[0] ?? await extensionContext.waitForEvent('serviceworker', { timeout: 15000 });
        const id = new URL(worker.url()).hostname;
        const manifest = JSON.parse(readFileSync(join(path, 'manifest.json')));
        for (const area of recipe.areas) {
          const page = await extensionContext.newPage();
          try { await page.goto(`chrome-extension://${id}/${manifest.side_panel?.default_path ?? manifest.action.default_popup}`); await screenshot(page, recipe, area, 'desktop'); }
          catch (error) { record(recipe, area, 'desktop', 'blocked', { reason: safeError(error) }); }
          finally { await page.close(); }
        }
      } else throw new Error(recipe.prerequisites.join(' '));
    } catch (error) {
      recordBlocked(recipe, safeError(error));
    } finally {
      if (child) stop(child);
      await desktopApp?.close();
      await extensionContext?.close();
    }
  }
} finally {
  for (const child of children) stop(child);
  await browser.close();
  for (const directory of temporary) rmSync(directory, { recursive: true, force: true });
  save();
}
console.log(`${results.filter((result) => result.status === 'captured').length} captures; ${results.filter((result) => result.status === 'blocked').length} blocked. Inspect images before attaching them.`);
if (results.some((result) => result.status === 'blocked')) process.exitCode = 1;
