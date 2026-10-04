'use client';

import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getProjects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectGallery from '@/components/ProjectGallery';
import ProjectStage from '@/components/ProjectStage';

export default function ProjectDetailContent({ projectId }: { projectId: string }) {
  const { language, t } = useLanguage();
  const project = getProjects(language).find((entry) => entry.id === projectId);
  if (!project) return null;
  return <div className="relative z-10 min-h-screen">
    <Navbar />
    <main className="mx-auto max-w-5xl px-4 pb-24 pt-24 sm:px-6">
      <Link href="/projects" className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-dracula-comment hover:text-dracula-cyan"><ArrowLeft className="h-4 w-4" />{t.projectDetail.back}</Link>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="rounded-full border px-3 py-1 text-xs" style={{ color: project.color, borderColor: `${project.color}44` }}>{project.category}</span>
        <ProjectStage stage={project.stage} />
        {project.year && <span className="text-xs text-dracula-comment">{project.year}</span>}
      </div>
      <h1 className="text-3xl font-semibold tracking-tight text-dracula-fg sm:text-5xl">{project.name}</h1>
      <p className="mt-4 text-lg leading-relaxed text-dracula-comment">{project.shortDesc}</p>
      <ProjectGallery key={project.id} captures={project.captures ?? []} />
      <p className="mt-8 text-sm leading-7 text-dracula-comment sm:text-base">{project.longDesc}</p>
      <section className="mt-10">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-fg">{t.projectDetail.highlights}</h2>
        <div className="grid gap-3 sm:grid-cols-2">{project.highlights.map((highlight) => <div key={highlight.label} className="rounded-xl border border-dracula-card bg-dracula-surface p-4">
          <h3 className="mb-1 text-xs font-semibold text-dracula-cyan">{highlight.label}</h3><p className="text-sm text-dracula-fg">{highlight.value}</p>
        </div>)}</div>
      </section>
      <section className="mt-10">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-fg">{t.projectDetail.stack}</h2>
        <div className="flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-lg border border-dracula-card px-3 py-2 text-xs text-dracula-comment">{tech}</span>)}</div>
      </section>
      <div className="mt-10 flex flex-wrap gap-3">
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-dracula-card px-4 py-3 text-sm text-dracula-cyan">{t.projectDetail.live}<ExternalLink className="h-4 w-4" /></a>}
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-dracula-card px-4 py-3 text-sm text-dracula-cyan">{t.projectDetail.repository}<ExternalLink className="h-4 w-4" /></a>}
      </div>
    </main>
    <Footer />
  </div>;
}
