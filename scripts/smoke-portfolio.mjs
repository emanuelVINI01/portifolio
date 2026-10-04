import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { existsSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { readCatalog } from './catalog.mjs';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || (existsSync(fileURLToPath(new URL('../node_modules/playwright', import.meta.url))) ? 'playwright' : fileURLToPath(new URL('../../swiss-learn/node_modules/playwright', import.meta.url))));
const base = new URL(process.env.PORTFOLIO_REVIEW_URL || 'http://127.0.0.1:3200');
assert.ok(['127.0.0.1', 'localhost', '[::1]'].includes(base.hostname), 'Smoke checks require a local review server');
const results = [];
let browser;
const { projectCopy } = readCatalog();
async function check(name, callback) {
  try { await callback(); results.push({ name, status: 'passed' }); }
  catch (error) { results.push({ name, status: 'failed', reason: error.message.split('\n')[0] }); throw error; }
}
try {
  browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}) });
  const context = await browser.newContext({ locale: 'pt-BR', viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await check('Case content and loaded screenshot', async () => {
    const response = await page.goto(new URL('/projects/simple-bank', base).href);
    assert.equal(response.status(), 200);
    await page.getByRole('heading', { name: 'Simple Bank', exact: true }).waitFor();
    await page.getByText(projectCopy.pt['simple-bank'].shortDesc, { exact: true }).waitFor();
    await page.locator('figure img').first().waitFor();
    await page.waitForFunction(() => document.querySelector('figure img')?.naturalWidth > 0);
  });
  await check('Gallery selection, expansion, arrows and Escape', async () => {
    await page.getByRole('button', { name: 'Selecionar imagem: Dashboard mobile', exact: true }).click();
    await page.getByRole('button', { name: 'Ampliar imagem: Dashboard mobile', exact: true }).click();
    const dialog = page.locator('dialog[open]');
    await dialog.waitFor();
    await page.keyboard.press('ArrowRight');
    await dialog.getByRole('heading', { name: 'Formulário de transferência mobile', exact: true }).waitFor();
    await page.keyboard.press('Escape');
    await dialog.waitFor({ state: 'hidden' });
  });
  await check('Detail translation and document language', async () => {
    await page.locator('button[aria-haspopup="listbox"]').first().click();
    await page.getByRole('option', { name: 'English', exact: true }).click();
    await page.getByText(projectCopy.en['simple-bank'].shortDesc, { exact: true }).waitFor();
    await page.waitForFunction(() => document.documentElement.lang === 'en');
  });
  await check('Project modal deep link, focus and close', async () => {
    await page.goto(new URL('/projects?project=simple-bank', base).href);
    const modal = page.locator('[role="dialog"][aria-modal="true"]');
    await modal.waitFor();
    assert.equal(await modal.evaluate((element) => element.contains(document.activeElement)), true);
    await page.reload();
    await modal.waitFor();
    await page.keyboard.press('Escape');
    await page.waitForURL((url) => !url.searchParams.has('project'));
    await modal.waitFor({ state: 'hidden' });
  });
  await check('Search with no results and clear', async () => {
    await page.getByRole('textbox').fill('no-project-with-this-name-784');
    await page.getByText('No projects found', { exact: true }).waitFor();
    await page.getByRole('button', { name: 'Clear search', exact: true }).click();
    await page.getByRole('link', { name: 'View project: SwissLearn', exact: true }).first().waitFor();
  });
  await check('Mobile layout and unknown case', async () => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(new URL('/projects/simple-bank', base).href);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth));
    const missing = await page.goto(new URL('/projects/unknown-review-case', base).href);
    assert.equal(missing.status(), 404);
  });
} catch (error) {
  if (!results.length) results.push({ name: 'Browser startup', status: 'blocked', reason: error.message.split('\n')[0] });
  process.exitCode = 1;
} finally {
  await browser?.close();
  const output = fileURLToPath(new URL('../review/browser-verification.json', import.meta.url));
  writeFileSync(output, JSON.stringify(results, null, 2) + '\n');
  console.log(JSON.stringify(results));
}
