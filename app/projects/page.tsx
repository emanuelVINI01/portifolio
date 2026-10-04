import { Suspense } from 'react';
import type { Metadata } from 'next';
import ProjectsContent from './ProjectsContent';

// `ProjectsContent` reads `useSearchParams()` (for the `?project=` deep-link).
// On a fully static route that bails the whole tree to client-side-only
// rendering, so crawlers never see the project grid/links in the initial
// HTML. Forcing per-request rendering keeps real content (and real links to
// /projects/[slug]) in the HTML Google actually fetches.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Projetos',
  description:
    'Projetos de Emanuel Missena: aplicações web, ferramentas IA, automação e experimentos em Rust. Escopo, tecnologias, estágio de implementação e telas.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projetos | Emanuel Vini',
    description:
      'Aplicações, experimentos e projetos históricos de Emanuel Missena, com tecnologias, descrições e galerias de telas.',
    url: 'https://emanuelmissena.com/projects',
    type: 'website',
  },
};

export default function ProjectsPage() {
  return (
    <Suspense>
      <ProjectsContent />
    </Suspense>
  );
}
