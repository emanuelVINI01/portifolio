'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BarChart3,
  CheckCircle2,
  ExternalLink,
  FileUp,
  Gauge,
  GitFork,
  KeyRound,
  Radio,
  Search,
  Shield,
  Sparkles,
  Terminal,
  WalletCards,
} from 'lucide-react';
import { type Project } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

const BADGE_CONFIG: Record<string, { icon: typeof Sparkles; color: string }> = {
  Transactional: { icon: WalletCards, color: 'var(--dracula-cyan)' },
  Auth: { icon: KeyRound, color: 'var(--dracula-green)' },
  API: { icon: Terminal, color: 'var(--dracula-cyan)' },
  Dashboard: { icon: BarChart3, color: 'var(--dracula-purple)' },
  'Open Source': { icon: GitFork, color: 'var(--dracula-green)' },
  'Speed Optimized': { icon: Gauge, color: 'var(--dracula-cyan)' },
  'Real-Time': { icon: Radio, color: 'var(--dracula-pink)' },
  Search: { icon: Search, color: 'var(--dracula-purple)' },
  Analytics: { icon: BarChart3, color: 'var(--dracula-green)' },
  'File Upload': { icon: FileUp, color: 'var(--dracula-yellow)' },
  Utility: { icon: CheckCircle2, color: 'var(--dracula-orange)' },
  Portfolio: { icon: Sparkles, color: 'var(--dracula-purple)' },
  TypeScript: { icon: Shield, color: 'var(--dracula-cyan)' },
};

interface ProjectPodProps {
  project: Project;
  onClick: (p: Project) => void;
  index?: number;
  spotlight?: boolean;
}

export default function ProjectPod({ project, onClick, index = 0, spotlight = false }: ProjectPodProps) {
  const [hovered, setHovered] = useState(false);
  const { t } = useLanguage();
  const isElevated = hovered || spotlight;
  const openProject = () => onClick(project);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: spotlight ? 30 : 20, scale: spotlight ? 0.98 : 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.34, delay: index * 0.04, ease: 'easeOut' }}
      whileHover={{ y: spotlight ? -10 : -7, scale: spotlight ? 1.015 : 1.01 }}
      onClick={openProject}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;

        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openProject();
        }
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`${t.common.viewProject}: ${project.name}`}
      className={`group relative flex h-full min-w-0 max-w-full cursor-pointer flex-col overflow-hidden rounded-xl border p-4 transition-colors sm:p-5 ${
        spotlight ? 'lg:-mt-5 lg:mb-5' : ''
      }`}
      style={{
        background: isElevated ? 'rgba(62,65,82,0.86)' : 'rgba(52,55,70,0.72)',
        borderColor: isElevated ? `${project.color}66` : 'rgba(68,71,90,0.72)',
        boxShadow: isElevated
          ? `0 24px 70px rgba(0,0,0,0.34), 0 0 0 1px ${project.color}24, 0 0 38px ${project.glowColor}`
          : '0 10px 30px rgba(0,0,0,0.18)',
        backdropFilter: 'blur(16px)',
      }}
    >
      <AnimatePresence>
        {isElevated && (
          <motion.span
            aria-hidden="true"
            initial={{ x: '-120%', opacity: 0 }}
            animate={{ x: '120%', opacity: [0, 0.75, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, repeat: spotlight ? Infinity : 0, repeatDelay: 1.8 }}
            className="pointer-events-none absolute left-0 top-0 h-px w-2/3"
            style={{ background: project.color }}
          />
        )}
      </AnimatePresence>

      {spotlight && (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="pointer-events-none absolute right-4 top-4 h-14 w-14 rounded-full border"
          style={{
            borderColor: `${project.color}24`,
            boxShadow: `inset 0 0 24px ${project.color}12`,
          }}
        />
      )}

      <div className="mb-4 flex items-start justify-between gap-3">
        <span
          className="min-w-0 max-w-full truncate rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest sm:text-[10px]"
          style={{
            color: project.color,
            background: `${project.color}12`,
            borderColor: `${project.color}33`,
          }}
        >
          {project.category}
        </span>
        {project.year && (
          <motion.span
            animate={{
              color: isElevated ? project.color : 'var(--dracula-comment)',
            }}
            className="text-xs font-medium"
          >
            {project.year}
          </motion.span>
        )}
      </div>

      <h3 className="mb-2 min-w-0 text-base font-semibold tracking-tight text-dracula-fg sm:text-lg">
        {project.name}
      </h3>

      <p className="mb-5 min-w-0 text-sm leading-relaxed text-dracula-comment">{project.shortDesc}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.badges.slice(0, 4).map((badge) => {
          const conf = BADGE_CONFIG[badge];
          const Icon = conf?.icon ?? Sparkles;
          const color = conf?.color ?? 'var(--dracula-purple)';

          return (
            <motion.span
              key={badge}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              whileHover={{ y: -2 }}
              className="inline-flex max-w-full items-center gap-1 rounded-md border px-2 py-1 text-[10px] font-semibold"
              style={{
                color,
                background: `${color}12`,
                borderColor: `${color}2e`,
              }}
            >
              <Icon className="h-3 w-3" />
              {badge}
            </motion.span>
          );
        })}
      </div>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map((tech) => (
          <motion.span
            key={tech}
            whileHover={{ y: -2, borderColor: project.color }}
            className="max-w-full rounded-md border border-dracula-card/70 bg-dracula-bg/40 px-2 py-1 text-[10px] text-dracula-comment"
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <div className="mt-auto flex min-w-0 flex-col gap-3 border-t border-dracula-card/60 pt-4 text-xs sm:flex-row sm:items-center sm:justify-between">
        <motion.span
          animate={{ color: isElevated ? project.color : 'var(--dracula-fg)' }}
          className="inline-flex items-center gap-1.5 font-medium"
        >
          {t.common.viewProject}
          <motion.span animate={{ x: isElevated ? 3 : 0 }} aria-hidden="true">
            -&gt;
          </motion.span>
        </motion.span>
        <div className="grid min-w-0 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex min-w-0 items-center gap-1.5 text-dracula-green transition-colors hover:text-dracula-cyan"
            >
              {t.common.liveProject}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="inline-flex min-w-0 items-center gap-1.5 text-dracula-comment transition-colors hover:text-dracula-cyan"
          >
            GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
