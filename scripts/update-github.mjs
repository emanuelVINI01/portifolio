import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { readCatalog } from './catalog.mjs';
const { projectMetadata, projectCopy } = readCatalog();
const changes = projectMetadata.filter((project) => project.githubUrl).map((project) => ({
  projectId: project.id,
  repository: project.githubUrl.replace('https://github.com/', ''),
  description: projectCopy.en[project.id].shortDesc,
}));
const apply = process.argv.includes('--apply');
const results = [];
function save() { writeFileSync(new URL('../review/github-publication.json', import.meta.url), JSON.stringify(results, null, 2) + '\n'); }
function gh(args, input) { return spawnSync('gh', args, { encoding: 'utf8', ...(input ? { input } : {}) }); }
if (!apply) {
  for (const change of changes) console.log(JSON.stringify({ command: 'gh', args: ['repo', 'edit', change.repository, '--description', change.description] }));
  process.exit(0);
}
const auth = gh(['auth', 'status']);
if (auth.status !== 0) {
  results.push({ status: 'blocked', action: 'authentication', reason: 'gh auth status failed; no descriptions or profile README were published' });
  save(); console.error('GitHub authentication is unavailable. No remote changes were made.'); process.exit(1);
}
for (const change of changes) {
  const inspect = gh(['repo', 'view', change.repository, '--json', 'nameWithOwner,isFork,isArchived,viewerPermission']);
  if (inspect.status !== 0) { results.push({ repository: change.repository, status: 'blocked', reason: 'Repository could not be read' }); save(); continue; }
  const repository = JSON.parse(inspect.stdout);
  if (repository.isFork || repository.isArchived || !['ADMIN', 'MAINTAIN', 'WRITE'].includes(repository.viewerPermission)) {
    results.push({ repository: change.repository, status: 'blocked', reason: 'Fork, archived repository or insufficient write access' }); save(); continue;
  }
  const edit = gh(['repo', 'edit', change.repository, '--description', change.description]);
  const confirm = edit.status === 0 ? gh(['repo', 'view', change.repository, '--json', 'description']) : null;
  const verified = confirm?.status === 0 && JSON.parse(confirm.stdout).description === change.description;
  results.push({ repository: change.repository, status: verified ? 'published' : 'blocked', ...(verified ? {} : { reason: 'Description edit or verification failed' }) });
  save();
}
if (process.argv.includes('--profile')) {
  const endpoint = 'repos/emanuelVINI01/emanuelVINI01/contents/README.md';
  const current = gh(['api', endpoint]);
  if (current.status === 0) {
    const original = JSON.parse(current.stdout);
    const content = readFileSync(new URL('../review/profile-README.md', import.meta.url));
    const payload = JSON.stringify({ message: 'docs: update portfolio profile', sha: original.sha, content: content.toString('base64') });
    const update = gh(['api', '--method', 'PUT', endpoint, '--input', '-'], payload);
    const check = update.status === 0 ? gh(['api', endpoint]) : null;
    const verified = check?.status === 0 && Buffer.from(JSON.parse(check.stdout).content, 'base64').equals(content);
    results.push({ repository: 'emanuelVINI01/emanuelVINI01', action: 'profile-readme', status: verified ? 'published' : 'blocked' });
  } else results.push({ repository: 'emanuelVINI01/emanuelVINI01', action: 'profile-readme', status: 'blocked', reason: 'Existing profile README could not be read; no repository was created' });
  save();
}
if (results.some((result) => result.status === 'blocked')) process.exitCode = 1;
