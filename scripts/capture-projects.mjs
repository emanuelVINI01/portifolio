import { createRequire } from 'node:module';
import { existsSync, readFileSync, mkdirSync, writeFileSync, mkdtempSync, rmSync, readdirSync, openSync, closeSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir, homedir } from 'node:os';
import { spawn, spawnSync } from 'node:child_process';

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
const resume = process.argv.includes('--resume');
const manifestPath = join(output, requested ? `${requested}-manifest.json` : 'manifest.json');
if (resume && existsSync(manifestPath)) {
  const previous = JSON.parse(readFileSync(manifestPath));
  results.push(...previous.results.filter((entry) => entry.status === 'captured' && existsSync(join(output, entry.file))));
}
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
  const directory = resolve(root, process.env[`REVIEW_SOURCE_${recipe.id.replaceAll('-', '_').toUpperCase()}`] || recipe.directory);
  if (['node', 'npm'].includes(recipe.start.command) && !existsSync(join(directory, 'node_modules'))) throw new Error('Dependencies are not installed');
  const env = { ...process.env, NODE_ENV: 'development' };
  if (recipe.requiresDatabase) {
    const name = `REVIEW_DATABASE_URL_${recipe.id.replaceAll('-', '_').toUpperCase()}`;
    const value = process.env[name];
    if (!value) throw new Error(`Missing ${name}: use a migrated, seeded, dedicated local _review database`);
    const url = new URL(value);
    if (!['localhost', '127.0.0.1', '[::1]'].includes(url.hostname) || !url.pathname.endsWith('_review')) throw new Error('Review database must be local and end in _review');
    env.DATABASE_URL = value;
    env.PRISMA_DATABASE_URL = value;
    if (url.protocol === 'mysql:') {
      Object.assign(env, { DATABASE_HOST: url.hostname, DATABASE_PORT: url.port, DATABASE_USER: decodeURIComponent(url.username), DATABASE_PASSWORD: decodeURIComponent(url.password), DATABASE_NAME: url.pathname.slice(1), SHADOW_DATABASE_URL: value.replace('_review', '_shadow_review'), REDIS_URL: process.env.REVIEW_REDIS_URL || 'redis://127.0.0.1:55449' });
    }
    env.AUTH_SECRET = process.env.REVIEW_AUTH_SECRET || 'portfolio-local-review-only-secret-20261005';
    env.AUTH_TRUST_HOST = 'true';
    env.AUTH_URL = `http://127.0.0.1:${port}`;
    env.NEXTAUTH_URL = env.AUTH_URL;
    env.AUTH_GITHUB_ID = 'local-review';
    env.AUTH_GITHUB_SECRET = 'local-review';
  }
  const args = recipe.start.args.map((argument) => argument.replace('{port}', String(port)));
  const logDirectory = join(portfolio, 'review/logs');
  mkdirSync(logDirectory, { recursive: true });
  const log = openSync(join(logDirectory, `${recipe.id}-server.log`), 'w');
  const child = spawn(recipe.start.command, args, { cwd: directory, env, detached: true, stdio: ['ignore', log, log] });
  closeSync(log);
  children.add(child);
  let launchError;
  child.on('error', (error) => { launchError = error; });
  const base = `http://127.0.0.1:${port}`;
  const deadline = Date.now() + 90000;
  while (Date.now() < deadline) {
    if (launchError || child.exitCode !== null) { stop(child); throw launchError ?? new Error(`Server exited with code ${child.exitCode}`); }
    try {
      const response = await fetch(base, { signal: AbortSignal.timeout(1500), redirect: 'manual' });
      if (response.status < 500) return { base, child };
    } catch { /* wait for startup */ }
    await new Promise((resolveWait) => setTimeout(resolveWait, 300));
  }
  stop(child);
  throw new Error('Server did not become ready within 90 seconds');
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
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(area.settleMs ?? 1500);
  if (area.requiresAuth) await page.waitForFunction(() => {
    const visible = (element) => element.getBoundingClientRect().width > 0 && element.getBoundingClientRect().height > 0;
    const spinners = [...document.querySelectorAll('[class*="animate-spin"]')].filter(visible);
    return spinners.length === 0;
  }, null, { timeout: 30000 });
  if (/this page couldn.t load|application error:|internal server error/i.test(await page.locator('body').innerText())) throw new Error('Application error screen; screenshot rejected');
  await page.addStyleTag({ content: 'nextjs-portal { display: none !important; }' }).catch(() => {});
  await page.waitForFunction(() => document.readyState === 'complete', null, { timeout: 10000 });
  await page.evaluate(() => Promise.race([document.fonts.ready, new Promise((done) => setTimeout(done, 5000))]));
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight * 0.8) {
      window.scrollTo({ top: y, behavior: 'instant' });
      await new Promise((done) => setTimeout(done, 90));
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  if (viewport === 'mobile' && area.mobileFocus) {
    await page.locator(area.mobileFocus).first().evaluate((element) => element.scrollIntoView({ block: 'start', behavior: 'instant' }));
  }
  await page.waitForTimeout(500);
  if (!(await page.locator('body').innerText()).trim()) throw new Error('Empty page; screenshot rejected');
  const directory = join(output, recipe.id);
  mkdirSync(directory, { recursive: true });
  const filename = `${area.id}-${viewport}.png`;
  const path = join(directory, filename);
  await page.screenshot({ path, fullPage: true, animations: 'disabled', mask: [page.locator('input[type="password"], input[name*="secret" i], input[name*="token" i], input[name*="apiKey" i], [data-sensitive]')] });
  const bytes = readFileSync(path);
  record(recipe, area, viewport, 'captured', {
    file: `${recipe.id}/${filename}`, width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20),
    caption: recipe.requiresDatabase ? Object.fromEntries(Object.entries(area.caption).map(([language, caption]) => [language, `${caption} · ${{pt:'dados de demonstração',en:'demo data',de:'Demodaten'}[language]}`])) : area.caption, capturedAt: new Date().toISOString(), reviewed: false,
  });
}

try {
  let port = Number(process.env.REVIEW_BASE_PORT || 3200);
  for (const recipe of recipes) {
    console.log(`Reviewing ${recipe.id} (${recipe.kind})`);
    for (const area of recipe.manualAreas ?? []) record(recipe, area, 'native', 'blocked', { reason: area.reason });
    let child, desktopApp, extensionContext;
    try {
      if (recipe.kind === 'web') {
        const existingBase = process.argv.find((argument) => argument.startsWith('--base-url='))?.slice(11);
        if (existingBase) {
          if (!requested || !['127.0.0.1', 'localhost', '[::1]'].includes(new URL(existingBase).hostname)) throw new Error('An existing server requires one project and a local URL');
          recipe.base = existingBase;
        } else {
          if (!process.argv.includes('--start')) throw new Error('Pass --start to launch local applications');
          ({ base: recipe.base, child } = await launchWeb(recipe, port++));
        }
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
              if (resume && results.some((entry) => entry.projectId === recipe.id && entry.area === area.id && entry.viewport === viewport && entry.status === 'captured')) continue;
              if (area.requiresAuth && !existsSync(state)) { record(recipe, area, viewport, 'blocked', { reason: 'A private local demo session is required' }); continue; }
              await context.clearCookies();
              if (area.requiresAuth) await context.addCookies(JSON.parse(readFileSync(state)).cookies);
              let missing;
              const path = area.path.replace(/\$\{([A-Z_]+)\}/g, (_, name) => { const value = process.env[`REVIEW_${recipe.id.replaceAll('-', '_').toUpperCase()}_${name}`] ?? process.env[name]; if (!value) missing = name; return encodeURIComponent(value ?? ''); });
              if (missing) { record(recipe, area, viewport, 'blocked', { reason: `Missing demo identifier: ${missing}` }); continue; }
              const page = await context.newPage();
              const settled = new Set();
              page.on('response', async (response) => {
                if (response.status() < 400) { await response.finished().catch(() => {}); settled.add(new URL(response.url()).pathname); }
              });
              try {
                const response = await page.goto(new URL(path, recipe.base).href, { waitUntil: 'load', timeout: 90000 });
                if (!response || response.status() >= 400) throw new Error(`Page returned HTTP ${response?.status()}`);
                if (area.requiresAuth && /\/(login|signin)(\/|$)/.test(new URL(page.url()).pathname)) throw new Error('Demo session was rejected; authentication screen is not the requested area');
                for (const path of area.readyRequests ?? []) {
                  const deadline = Date.now() + 90000;
                  while (!settled.has(path) && Date.now() < deadline) await page.waitForTimeout(100);
                  if (!settled.has(path)) throw new Error(`Data did not load: ${path}`);
                }
                if (area.readyText) await page.getByText(area.readyText, { exact: false }).first().waitFor({ timeout: 30000 });
                await screenshot(page, recipe, area, viewport);
              } catch (error) { record(recipe, area, viewport, 'blocked', { reason: safeError(error) }); }
              finally { await page.close(); }
            }
          } finally { await context.close(); }
        }
      } else if (recipe.kind === 'electron') {
        if (!process.argv.includes('--start')) throw new Error('Pass --start to launch desktop applications');
        const directory = resolve(root, process.env[`REVIEW_SOURCE_${recipe.id.replaceAll('-', '_').toUpperCase()}`] || recipe.directory);
        const main = resolve(directory, recipe.main);
        if (!existsSync(main)) throw new Error('Build the Electron main process before capture');
        const temp = mkdtempSync(join(tmpdir(), 'portfolio-electron-'));
        temporary.add(temp);
        mkdirSync(join(temp, 'profile'));
        const wrapper = join(temp, 'main.cjs');
        writeFileSync(wrapper, `const {app}=require('electron');\napp.setPath('userData', ${JSON.stringify(join(temp, 'profile'))});\nrequire(${JSON.stringify(main)});\n`);
        desktopApp = await electron.launch({ executablePath: require(join(directory, 'node_modules/electron')), args: ['--no-sandbox', wrapper], cwd: directory, env: { ...process.env, ELECTRON_DISABLE_SANDBOX: '1' }, timeout: 30000 });
        const page = await desktopApp.firstWindow();
        if (recipe.demoStorage) { await page.evaluate((storage) => { for (const [key, value] of Object.entries(storage)) localStorage.setItem(key, value); }, recipe.demoStorage); }
        for (const area of recipe.areas) {
          try { await page.reload({ waitUntil: 'load' }); await screenshot(page, recipe, area, 'native'); }
          catch (error) { record(recipe, area, 'native', 'blocked', { reason: safeError(error) }); }
        }
      } else if (recipe.kind === 'terminal' && recipe.run) {
        const directory = resolve(root, recipe.directory);
        const execution = spawnSync(recipe.run.command, recipe.run.args, { cwd: directory, timeout: recipe.run.timeout || 60000, encoding: 'utf8', maxBuffer: 1024 * 1024 });
        if (execution.error || execution.status !== 0) throw new Error(`Terminal command failed (exit ${execution.status}): ${safeError(execution.error || execution.stderr || execution.stdout)}`);
        const transcript = `$ ${recipe.run.label || [recipe.run.command, ...recipe.run.args].join(' ')}\n\n${execution.stdout}`.replace(/\x1b\[[0-9;]*m/g, '').replaceAll(root + '/', '');
        const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
        try {
          await page.setContent('<!doctype html><html><body style="margin:0;background:#151622;color:#edf0f7;padding:48px;font:18px/1.6 monospace"><h1 style="font-size:22px;color:#bd93f9"></h1><pre style="white-space:pre-wrap;overflow-wrap:anywhere"></pre></body></html>');
          await page.locator('h1').evaluate((node, title) => { node.textContent = title; }, recipe.id + ' · execução local');
          await page.locator('pre').evaluate((node, value) => { node.textContent = value; }, transcript);
          await screenshot(page, recipe, recipe.areas[0], 'terminal');
        } finally { await page.close(); }
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
