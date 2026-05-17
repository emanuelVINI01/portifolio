# portifolio

Portfólio técnico interativo de Emanuel Vini, construído para apresentar trajetória, projetos e evidências de engenharia de forma auditável. Este repositório funciona como índice público da evolução técnica: da base Java/Kotlin em servidores e automação até a fase atual com produtos web, sistemas transacionais e ferramentas para desenvolvedores.

## Propósito

O projeto não é apenas uma landing page. Ele organiza a narrativa profissional em torno de provas: repositórios, stacks, decisões de arquitetura, linha do tempo e projetos com contexto suficiente para avaliação técnica. A leitura foi pensada como vitrine técnica: times de engenharia conseguem escanear a história, inspecionar evidências, filtrar projetos e abrir runbooks com blocos de comando.

## Linha técnica

- 2020-2021: entrada por Java, Minecraft, `.jar`, `plugin.yml`, Bukkit/Spigot e debugging direto em runtime.
- 2022-2023: evolução para JVM, Kotlin, bots de Discord, APIs multi-servidor, SQL e automações ligadas a comunidades reais.
- 2026: consolidação em aplicações demonstráveis com Next.js, TypeScript, Prisma, PostgreSQL, Fastify, autenticação, dashboards e sistemas transacionais.

## Stack

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React e React Icons

## Arquitetura do repositório

- `app/`: rotas principais, landing page e catálogo de projetos.
- `src/components/`: componentes de UI, navegação, motion, cards, modal e terminal visual.
- `src/data/projects.ts`: catálogo tipado dos projetos em português e inglês.
- `src/i18n/`: dicionários de conteúdo e copy bilíngue.
- `context/contexto_github.md`: snapshot histórico usado como base de auditoria dos repositórios.

## Decisões de design

- Interface dark, orientada a terminal e leitura técnica, sem depender de uma apresentação genérica de currículo.
- Conteúdo bilíngue com `LanguageContext`, mantendo português e inglês alinhados.
- Cards e modais tratam projetos como evidências auditáveis, não como vitrines vazias.
- Motion é usado para guiar leitura e hierarquia visual, não para esconder falta de conteúdo.

## Execução local

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Qualidade

```bash
npm run lint
npm run build
```

Use `npm run lint` antes de mudanças de UI e `npm run build` quando alterar estrutura de rotas, componentes compartilhados, dados de projetos ou dicionários.
