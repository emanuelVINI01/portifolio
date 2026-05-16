'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import CommandTerminal, { type CommandTerminalLine } from '@/components/CommandTerminal';
import { type Project } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language } = useLanguage();
  const repoName = project?.githubUrl.split('/').filter(Boolean).pop() ?? 'project';
  const runbookLines: CommandTerminalLine[] = project
    ? [
        { kind: 'command', value: `git clone ${project.githubUrl}.git` },
        { kind: 'command', value: `cd ${repoName}` },
        { kind: 'command', value: 'npm install' },
        { kind: 'command', value: 'npm run dev' },
        {
          kind: 'output',
          tone: 'success',
          value:
            language === 'pt'
              ? 'ambiente local pronto para revisar arquitetura, UX e contratos'
              : 'local environment ready to review architecture, UX, and contracts',
        },
      ]
    : [];

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(33,34,44,0.82)', backdropFilter: 'blur(10px)' }}
          onClick={onClose}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border"
            style={{
              background: 'rgba(40,42,54,0.98)',
              borderColor: `${project.color}44`,
              boxShadow: `0 24px 80px ${project.glowColor}, 0 20px 70px rgba(0,0,0,0.42)`,
            }}
          >
            <div
              className="flex items-center justify-between border-b px-6 py-4"
              style={{ borderColor: 'rgba(68,71,90,0.7)' }}
            >
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-dracula-comment">
                  {language === 'pt' ? 'Projeto selecionado' : 'Selected Project'}
                </div>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-dracula-fg">
                  {project.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-dracula-card bg-dracula-card/30 p-2 text-dracula-comment transition-colors hover:border-dracula-red/50 hover:text-dracula-red"
                aria-label={language === 'pt' ? 'Fechar detalhes do projeto' : 'Close project details'}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-7 p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                  style={{
                    color: project.color,
                    background: `${project.color}12`,
                    borderColor: `${project.color}33`,
                  }}
                >
                  {project.category}
                </span>
                {project.updatedAt && (
                  <span className="text-xs text-dracula-comment">
                    {language === 'pt' ? `Atualizado no GitHub em ${project.updatedAt}` : `Updated on GitHub on ${project.updatedAt}`}
                  </span>
                )}
              </div>

              <p className="text-sm leading-relaxed text-dracula-comment">{project.longDesc}</p>

              <CommandTerminal
                title={language === 'pt' ? 'runbook do projeto' : 'project runbook'}
                subtitle={language === 'pt' ? 'comandos base para auditoria local' : 'base commands for local audit'}
                badge={project.year ? String(project.year) : undefined}
                status={language === 'pt' ? 'comandos copiaveis' : 'copy-ready commands'}
                lines={runbookLines}
                accent={project.color}
                dense
              />

              <div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-fg">
                  {language === 'pt' ? 'Destaques técnicos' : 'Technical Highlights'}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight.label}
                      className="rounded-xl border border-dracula-card/70 bg-dracula-surface/70 p-4"
                    >
                      <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-dracula-comment">
                        {highlight.label}
                      </div>
                      <div className="text-sm font-medium text-dracula-fg">{highlight.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-fg">
                  Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-dracula-card bg-dracula-bg/40 px-3 py-1.5 text-xs text-dracula-comment"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-dracula-green/25 bg-dracula-green/10 px-4 py-2 text-sm font-semibold text-dracula-green transition-colors hover:border-dracula-green/60 hover:bg-dracula-green/15"
                  >
                    {language === 'pt' ? 'Abrir app' : 'Open app'}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-dracula-cyan/25 bg-dracula-cyan/10 px-4 py-2 text-sm font-semibold text-dracula-cyan transition-colors hover:border-dracula-cyan/60 hover:bg-dracula-cyan/15"
                >
                  {language === 'pt' ? 'Abrir repositório' : 'Open repository'}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
