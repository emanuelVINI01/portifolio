'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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
}

export default function ProjectPod({ project, onClick, index = 0 }: ProjectPodProps) {
  const [hovered, setHovered] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.28, delay: index * 0.04 }}
      whileHover={{ y: -6 }}
      onClick={() => onClick(project)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex h-full cursor-pointer flex-col rounded-xl border p-5 transition-colors"
      style={{
        background: hovered ? 'rgba(68,71,90,0.72)' : 'rgba(52,55,70,0.72)',
        borderColor: hovered ? `${project.color}66` : 'rgba(68,71,90,0.72)',
        boxShadow: hovered ? `0 18px 45px ${project.glowColor}` : '0 10px 30px rgba(0,0,0,0.18)',
        backdropFilter: 'blur(16px)',
      }}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <span
          className="rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest"
          style={{
            color: project.color,
            background: `${project.color}12`,
            borderColor: `${project.color}33`,
          }}
        >
          {project.category}
        </span>
        {project.year && (
          <span className="text-xs font-medium text-dracula-comment">{project.year}</span>
        )}
      </div>

      <h3 className="mb-2 text-lg font-semibold tracking-tight text-dracula-fg">
        {project.name}
      </h3>

      <p className="mb-5 text-sm leading-relaxed text-dracula-comment">{project.shortDesc}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.badges.slice(0, 4).map((badge) => {
          const conf = BADGE_CONFIG[badge];
          const Icon = conf?.icon ?? Sparkles;
          const color = conf?.color ?? 'var(--dracula-purple)';

          return (
            <span
              key={badge}
              className="inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[10px] font-semibold"
              style={{
                color,
                background: `${color}12`,
                borderColor: `${color}2e`,
              }}
            >
              <Icon className="h-3 w-3" />
              {badge}
            </span>
          );
        })}
      </div>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-dracula-card/70 bg-dracula-bg/40 px-2 py-1 text-[10px] text-dracula-comment"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-dracula-card/60 pt-4 text-xs">
        <span className="font-medium text-dracula-fg">{t.common.viewProject}</span>
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-dracula-green transition-colors hover:text-dracula-cyan"
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
            className="inline-flex items-center gap-1.5 text-dracula-comment transition-colors hover:text-dracula-cyan"
          >
            GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
