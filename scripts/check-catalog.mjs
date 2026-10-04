import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readCatalog } from './catalog.mjs';
const root = fileURLToPath(new URL('..', import.meta.url));
const { projectMetadata, projectCopy } = readCatalog();
const ids = projectMetadata.map((project) => project.id);
assert.equal(new Set(ids).size, ids.length, 'Duplicate project ID');
for (const language of ['pt', 'en', 'de']) {
  assert.deepEqual(Object.keys(projectCopy[language]).sort(), [...ids].sort(), `Unaligned ${language} translations`);
  for (const id of ids) {
    const copy = projectCopy[language][id];
    for (const field of ['name', 'shortDesc', 'longDesc']) assert.ok(copy[field]?.trim(), `${id}: missing ${language} ${field}`);
    assert.ok(copy.highlights.length > 0, `${id}: no highlights`);
  }
}
for (const project of projectMetadata) {
  assert.match(project.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.ok(['application', 'experiment', 'legacy', 'scaffold'].includes(project.stage), `${project.id}: invalid stage`);
  assert.ok(project.tech.length > 0, `${project.id}: missing technologies`);
  for (const url of [project.githubUrl, project.liveUrl].filter(Boolean)) {
    const parsed = new URL(url);
    assert.equal(parsed.protocol, 'https:');
    assert.ok(!parsed.username && !parsed.password, 'Credentials in public URL');
  }
  if (project.githubUrl) assert.match(project.githubUrl, /^https:\/\/github\.com\/emanuelVINI01\/[A-Za-z0-9_.-]+$/);
  const capturePaths = new Set();
  for (const capture of project.captures ?? []) {
    assert.ok(!capturePaths.has(capture.src), `${project.id}: duplicate image`);
    capturePaths.add(capture.src);
    assert.ok(capture.src.startsWith(`/projects/${project.id}/`), `${project.id}: image outside project`);
    const file = resolve(root, 'public', capture.src.slice(1));
    assert.ok(!relative(resolve(root, 'public'), file).startsWith('..'));
    assert.ok(existsSync(file), `Missing image: ${capture.src}`);
    assert.ok(capture.width > 0 && capture.height > 0, 'Missing image dimensions');
    const bytes = readFileSync(file);
    assert.equal(bytes.subarray(1, 4).toString(), 'PNG', 'Expected a PNG capture');
    assert.equal(bytes.readUInt32BE(16), capture.width, `${capture.src}: width mismatch`);
    assert.equal(bytes.readUInt32BE(20), capture.height, `${capture.src}: height mismatch`);
    for (const language of ['pt', 'en', 'de']) {
      assert.ok(capture.caption[language]?.trim() && capture.alt[language]?.trim(), `${capture.src}: missing caption/alt`);
    }
    assert.ok(['desktop', 'mobile', 'native', 'terminal'].includes(capture.viewport));
    assert.ok(['existing', 'local'].includes(capture.origin));
    if (capture.origin === 'local') assert.ok(capture.capturedAt && !Number.isNaN(Date.parse(capture.capturedAt)));
  }
}
console.log(`Catalog valid: ${ids.length} projects, 3 languages, ${projectMetadata.reduce((count, project) => count + (project.captures?.length ?? 0), 0)} image references.`);
