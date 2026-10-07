"""Inventory source and routes without loading credentials or running applications."""
import hashlib
import json
import os
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / 'portifolio' / 'review'
SKIP = {'node_modules', '.git', '.next', '.venv', 'venv', 'dist', 'build', 'target', 'vendor', 'generated', 'prepared', '__pycache__', 'dataset', 'audio', 'logs', 'cache', 'out'}
MANIFESTS = {'package.json', 'Cargo.toml', 'pom.xml', 'build.gradle.kts', 'requirements.txt'}
SOURCE = {'.ts', '.tsx', '.js', '.jsx', '.py', '.rs', '.kt', '.java', '.cs', '.cvm', '.pest', '.prisma'}
projects = []
excluded = []
for directory in sorted(ROOT.iterdir()):
    if not directory.is_dir() or directory.name.startswith('.'):
        continue
    manifests, routes, evidence, docs = [], [], [], []
    for base, directories, files in os.walk(directory):
        directories[:] = sorted(d for d in directories if d not in SKIP and not d.startswith('.'))
        for name in sorted(files):
            if name.startswith('.') or name.startswith('next-env'):
                continue
            file = Path(base) / name
            relative = str(file.relative_to(ROOT))
            if name in MANIFESTS:
                entry = {'file': relative}
                if name == 'package.json':
                    package = json.loads(file.read_text())
                    entry.update(name=package.get('name'), scripts=list(package.get('scripts', {})), dependencies=list(package.get('dependencies', {})), installed=(file.parent / 'node_modules').exists())
                manifests.append(entry)
            if name.lower().startswith('readme') or name == 'AGENTS.md':
                docs.append(relative)
            if file.suffix not in SOURCE or name.endswith('.d.ts'):
                continue
            content = file.read_bytes()
            evidence.append({'file': relative, 'sha256': hashlib.sha256(content).hexdigest(), 'bytes': len(content)})
            if name in {'page.tsx', 'page.jsx', 'route.ts', 'route.js'} and '/app/' in relative:
                route = relative.split('/app/', 1)[1].rsplit('/', 1)[0] if '/app/' in relative and relative.split('/app/', 1)[1].count('/') else ''
                route = '/'.join(part for part in route.split('/') if not (part.startswith('(') and part.endswith(')')))
                routes.append({'path': '/' + route, 'kind': 'api' if name.startswith('route.') else 'page', 'file': relative})
    if directory.name in {'eval', 'architecture'} or not evidence:
        excluded.append({'directory': directory.name, 'reason': 'supporting documentation or no application source', 'documents': docs})
        continue
    remote = subprocess.run(['git', '-C', str(directory), 'remote', 'get-url', 'origin'], capture_output=True, text=True).stdout.strip()
    if remote:
        # Never persist remote credentials embedded in a URL.
        import re
        remote = re.sub(r'(https?://)[^/@]+@', r'\1', remote)
    projects.append({'directory': directory.name, 'remote': remote, 'manifests': manifests, 'documents': docs, 'routes': routes, 'sourceFiles': evidence, 'sourceCount': len(evidence), 'review': 'static inventory', 'runtime': 'not verified'})
OUTPUT.mkdir(exist_ok=True)
(OUTPUT / 'source-audit.json').write_text(json.dumps({'projects': projects, 'excluded': excluded}, ensure_ascii=False, indent=2) + '\n')
print(f'{len(projects)} project directories, {sum(p["sourceCount"] for p in projects)} source files, {sum(len(p["routes"]) for p in projects)} route entries')
