import { readFileSync, writeFileSync, copyFileSync, mkdirSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { readCatalog } from './catalog.mjs';
const root = fileURLToPath(new URL('..', import.meta.url));
const input = resolve(process.argv[2] || resolve(root, 'review/captures/manifest.json'));
const sourceRoot = resolve(input, '..');
const manifest = JSON.parse(readFileSync(input));
const knownIds = new Set(readCatalog().projectMetadata.map((project) => project.id));
const target = resolve(root, 'src/data/capturedProjects.json');
const capturedProjects = JSON.parse(readFileSync(target));
const reviewed = manifest.results.filter((entry) => entry.status === 'captured' && entry.reviewed === true);
const plans = [];
for (const capture of reviewed) {
  assert.ok(knownIds.has(capture.projectId), 'Unknown project');
  assert.ok(['desktop', 'mobile', 'native', 'terminal'].includes(capture.viewport), 'Invalid viewport');
  assert.ok(capture.capturedAt && !Number.isNaN(Date.parse(capture.capturedAt)), 'Missing capture timestamp');
  const inputFile = resolve(sourceRoot, capture.file);
  assert.ok(!relative(sourceRoot, inputFile).startsWith('..'), 'Image outside capture directory');
  const filename = `${capture.area}-${capture.viewport}.png`;
  assert.match(filename, /^[a-z0-9-]+\.png$/);
  const bytes = readFileSync(inputFile);
  assert.equal(bytes.subarray(1, 4).toString(), 'PNG');
  assert.equal(bytes.readUInt32BE(16), capture.width);
  assert.equal(bytes.readUInt32BE(20), capture.height);
  for (const language of ['pt', 'en', 'de']) assert.ok(capture.caption[language]?.trim(), 'Missing translated caption');
  const src = `/projects/${capture.projectId}/${filename}`;
  const record = { src, width: capture.width, height: capture.height, caption: capture.caption, alt: capture.caption, viewport: capture.viewport, origin: 'local', capturedAt: capture.capturedAt };
  const records = capturedProjects[capture.projectId] ?? [];
  capturedProjects[capture.projectId] = [...records.filter((entry) => entry.src !== src), record];
  plans.push({ inputFile, directory: resolve(root, 'public/projects', capture.projectId), filename });
}
if (plans.length === 0) { console.log('No visually reviewed captures to attach. Existing images are preserved.'); process.exit(0); }
for (const plan of plans) { mkdirSync(plan.directory, { recursive: true }); copyFileSync(plan.inputFile, resolve(plan.directory, plan.filename)); }
writeFileSync(target, JSON.stringify(capturedProjects, null, 2) + '\n');
console.log(`Attached ${plans.length} visually reviewed captures.`);
