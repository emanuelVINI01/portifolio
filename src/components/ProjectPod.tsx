'use client';

import ProjectStage from '@/components/ProjectStage';

import { useState } from 'react';
import type { MouseEvent } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Atom,
  BarChart3,
  Binary,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Coffee,
  Cpu,
  Database,
  ExternalLink,
  FileUp,
  FlaskConical,
  Gauge,
  GitFork,
  History,
  KeyRound,
  Landmark,
  LayoutTemplate,
  Library,
  Link2,
  PartyPopper,
  Puzzle,
  Radio,
  Search,
  Server,
  Share2,
  Shield,
  SlidersHorizontal,
  Sparkles,
  Swords,
  Terminal,
  WalletCards,
  Wrench,
  Zap,
} from 'lucide-react';
import { type Project } from '@/data/projects';
import { getCardPatternStyle, getProjectVisual } from '@/data/projectVisuals';
import { useLanguage } from '@/context/LanguageContext';

const BADGE_CONFIG: Record<string, { icon: typeof Sparkles; color: string }> = {
  Transactional: { icon: WalletCards, color: '#8be9fd' },
  Auth: { icon: KeyRound, color: '#50fa7b' },
  API: { icon: Terminal, color: '#8be9fd' },
  Dashboard: { icon: BarChart3, color: '#bd93f9' },
  'Open Source': { icon: GitFork, color: '#50fa7b' },
  'Speed Optimized': { icon: Gauge, color: '#8be9fd' },
  'Real-Time': { icon: Radio, color: '#ff79c6' },
  Search: { icon: Search, color: '#bd93f9' },
  Analytics: { icon: BarChart3, color: '#50fa7b' },
  'File Upload': { icon: FileUp, color: '#f1fa8c' },
  Utility: { icon: CheckCircle2, color: '#ffb86c' },
  Portfolio: { icon: Sparkles, color: '#bd93f9' },
  TypeScript: { icon: Shield, color: '#8be9fd' },
  AI: { icon: BrainCircuit, color: '#ff79c6' },
  'Discord Bot': { icon: Bot, color: '#bd93f9' },
  Java: { icon: Coffee, color: '#ffb86c' },
  Legacy: { icon: History, color: '#a7b0c8' },
  'Browser Extension': { icon: Puzzle, color: '#8be9fd' },
  Electron: { icon: Atom, color: '#8be9fd' },
  'Bare Metal': { icon: Cpu, color: '#ff5555' },
  Tested: { icon: FlaskConical, color: '#50fa7b' },
};

export const WATERMARK_ICONS: Record<string, typeof Sparkles> = {
  landmark: Landmark,
  cpu: Cpu,
  binary: Binary,
  zap: Zap,
  puzzle: Puzzle,
  'brain-circuit': BrainCircuit,
  library: Library,
  gauge: Gauge,
  bot: Bot,
  server: Server,
  swords: Swords,
  'layout-template': LayoutTemplate,
  'link-2': Link2,
  shield: Shield,
  'party-popper': PartyPopper,
  database: Database,
  wrench: Wrench,
  'sliders-horizontal': SlidersHorizontal,
  'share-2': Share2,
  sparkles: Sparkles,
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
  const visual = getProjectVisual(project.id);
  const WatermarkIcon = WATERMARK_ICONS[visual.icon] ?? Sparkles;
  const patternStyle = getCardPatternStyle(visual.pattern, project.color);

  const handleCardClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
    openProject();
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: spotlight ? 30 : 20, scale: spotlight ? 0.98 : 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.34, delay: index * 0.04, ease: 'easeOut' }}
      whileHover={{ y: spotlight ? -10 : -7, scale: spotlight ? 1.015 : 1.01 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`group relative flex h-full min-w-0 max-w-full cursor-pointer flex-col overflow-hidden rounded-xl border p-4 transition-colors sm:p-5 ${
        spotlight ? 'lg:-mt-5 lg:mb-5' : ''
      }`}
      style={{
        background: isElevated ? 'rgba(62,65,82,0.95)' : 'rgba(52,55,70,0.92)',
        borderColor: isElevated ? `${project.color}66` : 'rgba(68,71,90,0.72)',
        boxShadow: isElevated
          ? `0 24px 70px rgba(0,0,0,0.34), 0 0 0 1px ${project.color}24, 0 0 38px ${project.glowColor}`
          : '0 10px 30px rgba(0,0,0,0.18)',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{ ...patternStyle, opacity: isElevated ? 0.9 : 0.55 }}
      />
      <WatermarkIcon
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 -right-4 z-0 h-24 w-24 rotate-[-8deg] transition-transform duration-300 group-hover:rotate-0"
        style={{ color: project.color, opacity: isElevated ? 0.16 : 0.09 }}
      />
      {visual.pattern === 'circuit' &&
        [
          'left-2.5 top-2.5 border-l border-t',
          'right-2.5 top-2.5 border-r border-t',
          'left-2.5 bottom-2.5 border-l border-b',
          'right-2.5 bottom-2.5 border-r border-b',
        ].map((corner) => (
          <span
            key={corner}
            aria-hidden="true"
            className={`pointer-events-none absolute z-0 h-2.5 w-2.5 ${corner}`}
            style={{ borderColor: `${project.color}80` }}
          />
        ))}

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

      <div className="relative flex h-full min-w-0 flex-col">
      <div className="mb-3 flex items-start justify-between gap-3">
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
        <ProjectStage stage={project.stage} />
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

      <div
        className="mb-2 min-w-0 truncate font-mono text-[10px] tracking-tight"
        style={{ color: `${project.color}b3` }}
      >
        {visual.tag}
      </div>

      <h3 className="mb-2 min-w-0 text-base font-semibold tracking-tight text-dracula-fg sm:text-lg">
        {project.name}
      </h3>

      <p className="mb-5 min-w-0 text-sm leading-relaxed text-dracula-comment">{project.shortDesc}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.badges.slice(0, 4).map((badge) => {
          const conf = BADGE_CONFIG[badge];
          const Icon = conf?.icon ?? Sparkles;
          const color = conf?.color ?? '#bd93f9';

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
              className="relative z-20 inline-flex min-w-0 items-center gap-1.5 transition-colors"
              style={{ color: project.color }}
            >
              <span className="truncate max-w-[120px] sm:max-w-[160px]">{project.liveUrl.replace(/^https?:\/\//, '')}</span>
              <ExternalLink className="h-3.5 w-3.5 shrink-0" />
            </a>
          )}
          {project.githubUrl && <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="relative z-20 inline-flex min-w-0 items-center gap-1.5 transition-colors"
            style={{ color: 'var(--dracula-comment)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = project.color)}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--dracula-comment)')}
          >
            GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>}
        </div>
      </div>
      </div>

      <Link
        href={`/projects/${project.id}`}
        onClick={handleCardClick}
        aria-label={`${t.common.viewProject}: ${project.name}`}
        className="absolute inset-0 z-10"
      />
    </motion.article>
  );
}
