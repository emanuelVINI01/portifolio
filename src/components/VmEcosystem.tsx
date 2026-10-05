'use client';

import Link from 'next/link';
import { ArrowRight, Cpu, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getProjects } from '@/data/projects';
import { vmEcosystemIds } from '@/data/vmEcosystem';
import { pick } from '@/i18n/dictionaries';

export default function VmEcosystem() {
  const { language, t } = useLanguage();
  const projects = getProjects(language);
  const components = vmEcosystemIds.map((id) => projects.find((project) => project.id === id)!);
  const steps = [
    { id: 'cvm-compiler', label: '.cvm → IR → .asm' },
    { id: 'cvm-runtime', label: pick(language, { pt: 'my-vm executa o Assembly', en: 'my-vm executes Assembly', de: 'my-vm führt Assembly aus' }) },
    { id: 'my-vm-os', label: pick(language, { pt: 'Desktop, aplicativos e arquivos', en: 'Desktop, applications and files', de: 'Desktop, Anwendungen und Dateien' }) },
  ];

  return (
    <section id="my-vm" aria-labelledby="my-vm-title" className="story-section-flat-deep scroll-mt-20 border-y border-dracula-card/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-dracula-orange">
          <Cpu className="h-4 w-4" aria-hidden="true" />
          {pick(language, { pt: 'Linguagem, runtime e sistema', en: 'Language, runtime and system', de: 'Sprache, Laufzeit und System' })}
        </div>
        <h2 id="my-vm-title" className="text-3xl font-semibold tracking-tight text-dracula-fg sm:text-4xl">
          {pick(language, { pt: 'O ecossistema my-vm', en: 'The my-vm ecosystem', de: 'Das my-vm-Ökosystem' })}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-dracula-comment sm:text-base">
          {pick(language, {
            pt: 'Uma arquitetura própria para estudar a ligação entre linguagem e execução. O compilador transforma CVM em Assembly, a máquina virtual simula os dispositivos e o sistema usa essa base para construir um desktop. O frontend Python registra a primeira versão desse caminho.',
            en: 'A custom architecture for studying how language connects to execution. The compiler transforms CVM into Assembly, the virtual machine simulates devices and the system builds a desktop on that foundation. The Python frontend records the first version of this approach.',
            de: 'Eine eigene Architektur, um den Weg von Sprache zur Ausführung zu untersuchen. Der Compiler übersetzt CVM in Assembly, die virtuelle Maschine simuliert Geräte und das System baut darauf einen Desktop auf. Das Python-Frontend dokumentiert den ersten Ansatz.',
          })}
        </p>

        <ol aria-label={pick(language, { pt: 'Fluxo de compilação e execução', en: 'Compilation and execution flow', de: 'Kompilierungs- und Ausführungsablauf' })} className="my-8 grid gap-3 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.id}>
              <Link href={`/projects/${step.id}`} className="flex h-full items-center gap-3 rounded-xl border border-dracula-orange/25 bg-dracula-orange/5 p-4 text-sm text-dracula-fg transition-colors hover:border-dracula-orange/70 focus-visible:outline-2 focus-visible:outline-dracula-orange">
                <span className="font-mono text-dracula-orange">0{index + 1}</span>
                <span className="min-w-0 flex-1 break-words">{step.label}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-dracula-orange" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ol>

        <div className="grid gap-4 md:grid-cols-2">
          {components.map((project) => (
            <article key={project.id} className="flex flex-col rounded-2xl border border-dracula-card/70 bg-dracula-bg/45 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-dracula-orange">{t.projectStage[project.stage]}</p>
              <h3 className="mt-2 text-lg font-semibold text-dracula-fg">{project.name}</h3>
              <p className="mt-3 text-sm leading-7 text-dracula-comment">{project.longDesc}</p>
              <dl className="my-5 space-y-3 text-sm">
                {project.highlights.map((highlight) => (
                  <div key={highlight.label}>
                    <dt className="font-semibold text-dracula-fg">{highlight.label}</dt>
                    <dd className="mt-1 text-dracula-comment">{highlight.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-auto flex flex-wrap items-center gap-4 pt-2 text-sm">
                <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 font-semibold text-dracula-cyan hover:underline">
                  {t.common.viewProject}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-dracula-comment hover:text-dracula-fg">
                    GitHub<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
