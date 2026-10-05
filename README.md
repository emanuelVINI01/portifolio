# Portfolio · Emanuel Missena

Portfólio em português, inglês e alemão com 39 cases de aplicações web, ferramentas, experimentos Rust e projetos históricos Java/Kotlin. O catálogo identifica o estágio de cada projeto e descreve funcionalidades encontradas no código disponível. SwissLearn, Simple Bank e SnippetVault abrem a seleção de destaques.

Next.js 16, React 19, TypeScript, Tailwind CSS 4 e Framer Motion compõem a interface. Cada projeto tem URL própria, metadados de compartilhamento e descrições traduzidas. A galeria preserva a proporção das imagens e permite ampliar, selecionar miniaturas e navegar pelo teclado.

## Executar e verificar

```bash
npm ci
npm run dev
```

Abra http://localhost:3000. Para validar alterações:

```bash
npm run lint
npm run typecheck
npm run review:check
npm run build
```

O script de build usa webpack. O build padrão Turbopack foi bloqueado neste ambiente ao abrir uma porta para processar CSS; webpack compilou os 39 cases sem essa dependência.

As fontes JetBrains Mono e Fira Code são locais; o build não baixa fontes. A [licença SIL OFL](public/fonts/OFL.txt) acompanha os arquivos. Fontes originais: [JetBrains Mono](https://github.com/google/fonts/tree/main/ofl/jetbrainsmono), [Fira Code](https://github.com/google/fonts/tree/main/ofl/firacode).

## Conteúdo

- `src/data/projectMetadata.ts`: IDs, tecnologias, estágio, URLs e imagens anteriores.
- `src/data/projectCopy.ts`: nomes, descrições e destaques PT/EN/DE.
- `src/data/capturedProjects.json`: imagens novas que passaram por inspeção visual.
- `src/i18n/dictionaries.ts`: textos da interface.
- `app/projects/[slug]/page.tsx`: rotas estáticas, SEO e dados estruturados.
- `src/components/ProjectGallery.tsx`: galeria compartilhada pelo case e pelo modal.

Preserve IDs existentes ao revisar textos para manter links diretos. Projetos sem remoto identificado não exibem links GitHub inventados. Os cinco screenshots já existentes recebem a indicação de captura anterior.

## Revisão dos projetos

A [avaliação](review/avaliacao.md) registra mudanças e bloqueios. A [avaliação individual](review/project-assessments.md) cobre os 39 cases e os diretórios auxiliares. O inventário estático está em `review/source-audit.json`; inventariar arquivos não representa execução ou leitura integral do código.

```bash
npm run review:audit
node scripts/capture-projects.mjs --list
npm run review:capture
```

As receitas em `review/recipes.json` apontam para os projetos irmãos neste workspace. Web é capturado em desktop/mobile; Electron e extensão Chrome têm execução própria. CLI, Minecraft, Discord e Expo nativo precisam do runtime correspondente. Use `node scripts/capture-projects.mjs --start --project=swiss-learn` para limitar a execução.

O capturador precisa de Playwright e Chromium disponíveis. Procura Playwright neste repositório e em `../swiss-learn/node_modules/playwright`; caminhos explícitos podem ser definidos em `PLAYWRIGHT_MODULE` e `CHROMIUM_PATH`. Nenhuma dependência Playwright é instalada automaticamente.

Projetos com banco exigem `REVIEW_DATABASE_URL_<ID_EM_MAIÚSCULAS_COM_UNDERSCORES>` para um banco local preparado cujo nome termine em `_review`. O script não aplica migrações nem cria usuários. Sessões fictícias para telas protegidas ficam em `review/private/<id>.storage.json`, ignorado pelo Git. Rotas dinâmicas usam `DEMO_ID` e `DEMO_USER_ID` previstos nas receitas. Leia os pré-requisitos antes de executar.

Capturas ficam em `review/captures/`, com origem, dimensões e status no manifesto. Após inspecionar cada PNG, marcar somente as imagens aprovadas com `reviewed: true` e anexar:

```bash
npm run review:attach
npm run review:check
```

O importador valida caminhos, IDs, dimensões e legendas traduzidas. Não há imagens geradas ou páginas GitHub usadas como substituto das interfaces.

Para verificar interações do portfólio com um servidor local já aberto:

```bash
PORTFOLIO_REVIEW_URL=http://127.0.0.1:3000 npm run review:smoke
```

O smoke cobre conteúdo, carregamento de imagens, galeria, idiomas, foco/link direto do modal, busca, largura mobile e 404. Resultado em `review/browser-verification.json`.

## Publicação no GitHub

```bash
npm run review:github
node scripts/update-github.mjs --apply --profile
```

O primeiro comando mostra as descrições sem publicar. O segundo verifica autenticação e permissões antes de editar descrições e o README existente do perfil, gerado a partir do catálogo. Preserva homepage/topics e confirma cada escrita. Resultado em `review/github-publication.json`.

Na execução de 04/10/2026, autenticação/rede GitHub estavam indisponíveis; Chromium e portas locais também foram bloqueados pelo ambiente. O build passou, mas capturas novas, validação visual e publicação continuam pendentes.

## Ecossistema my-vm

A home (`/#my-vm`) e o catálogo (`/projects#my-vm`) têm uma seção dedicada aos quatro componentes, traduzida em PT/EN/DE. O fluxo liga CVM, IR, Assembly, runtime e desktop.

- `cvm-runtime`: VM Rust, memória e dispositivos simulados.
- `cvm-compiler`: frontend Pest e geração de IR/Assembly; otimização ainda pass-through.
- `my-vm-os`: desktop CVM, aplicativos e VFS em RAM.
- `my-vm-legacy-compiler`: frontend Python histórico e suas incompatibilidades com a ISA atual.

`src/data/vmEcosystem.ts` define os componentes; `src/components/VmEcosystem.tsx` apresenta os mesmos textos do catálogo. Os IDs anteriores permanecem estáveis. O compilador legado tem repositório público e link GitHub na seção e no catálogo.
