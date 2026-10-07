import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const ts = require('typescript');
export function readTypedData(relativeFile) {
  const source = readFileSync(new URL(`../src/data/${relativeFile}`, import.meta.url), 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
  const compiled = { exports: {} };
  new Function('exports', 'module', outputText)(compiled.exports, compiled);
  return compiled.exports;
}
export function readCatalog() {
  const { projectMetadata } = readTypedData('projectMetadata.ts');
  const { projectCopy } = readTypedData('projectCopy.ts');
  const captures = JSON.parse(readFileSync(new URL('../src/data/capturedProjects.json', import.meta.url)));
  return { projectMetadata: projectMetadata.map((project) => ({ ...project, captures: [...(project.captures ?? []), ...(captures[project.id] ?? [])] })), projectCopy };
}
