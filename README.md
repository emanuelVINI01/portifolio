# emanuelVINI Portfolio

Interactive portfolio for Emanuel Vini, a full-stack developer focused on web products, resilient APIs, transactional systems, automation, and polished product interfaces.

The site is built as a technical evaluation surface: recruiters and engineering teams can scan the story, inspect project evidence, filter portfolio work, and open project runbooks with command-style code blocks.

## Highlights

- Proof-driven landing page with GitHub-backed career milestones.
- Animated project cards, spotlight projects, filters, search, and modal details.
- Command-terminal UI for audit-style code snippets and local runbooks.
- Bilingual content with Portuguese and English dictionaries.
- Motion system powered by Framer Motion and responsive Tailwind CSS layouts.
- Next.js App Router structure with reusable components and typed project data.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- React Icons

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Commands

```bash
npm run lint
npm run build
```

Use `npm run lint` before committing UI changes. Use `npm run build` when changing shared components, project data, layout metadata, or language dictionaries.

## Project Structure

```txt
app/
  page.tsx              Main landing page
  projects/page.tsx     Searchable project catalog
src/components/         UI, motion, navigation, project, and terminal components
src/data/projects.ts    Typed project catalog in PT/EN
src/i18n/               Dictionaries used by the language provider
public/                 Static assets
```

## Content Model

Portfolio projects live in `src/data/projects.ts`. Each project includes:

- short and long descriptions
- category, badges, stack, and year
- GitHub and live URLs
- technical highlights
- colors used by the UI glow system

Localized interface copy lives in `src/i18n/dictionaries.ts`. Keep the `pt` and `en` dictionaries aligned because the English dictionary is typed from the Portuguese shape.

## Description

This portfolio presents Emanuel Vini as a product-minded full-stack developer. It connects early Java/Kotlin and infrastructure experience with current TypeScript, Next.js, Prisma, Fastify, PostgreSQL, and AI-assisted engineering work. The interface is intentionally dark, command-oriented, and proof-focused so technical reviewers can evaluate both the projects and the thinking behind them.
