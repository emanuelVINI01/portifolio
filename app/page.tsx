'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowRightLeft,
  BarChart3,
  BookOpen,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Cpu,
  DatabaseZap,
  ExternalLink,
  GitFork,
  GitCommitHorizontal,
  Layers,
  Server,
  ShieldCheck,
  Terminal,
  Copy,
  WalletCards,
} from 'lucide-react';


import Footer from '@/components/Footer';
import VmEcosystem from '@/components/VmEcosystem';
import CommandTerminal, { type CommandTerminalLine } from '@/components/CommandTerminal';
import Navbar from '@/components/Navbar';
import ProjectModal from '@/components/ProjectModal';
import ProjectPod from '@/components/ProjectPod';
import ParallaxGrid from '@/components/ParallaxGrid';
import useDecorativeMotion from '@/components/useDecorativeMotion';
import { getProjects, type Project } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import { Flag } from '@/components/ui/flag';
import DepthIllustration from '@/components/ui/DepthIllustration';
import { pick } from '@/i18n/dictionaries';
import { SiCloudflare, SiDiscord, SiGithub, SiLinux, SiNextdotjs, SiOvh, SiPrisma, SiTypescript } from 'react-icons/si';


const TechOrbit = dynamic(() => import('@/components/TechOrbit'), { ssr: false });

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const heroMotionRef = useDecorativeMotion();
  const { t, language } = useLanguage();
  const contactEmail = 'contact@emanuelvini.dev';

  const projects = getProjects(language);
  const featuredProjects = ['simple-bank', 'swiss-learn', 'snippetvault']
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean) as Project[];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      setCopiedEmail(false);
    }
  };

  const services = [
    {
      icon: DatabaseZap,
      title: t.services.s1Title,
      text: t.services.s1Text,
    },
    {
      icon: BarChart3,
      title: t.services.s2Title,
      text: t.services.s2Text,
    },
    {
      icon: ShieldCheck,
      title: t.services.s3Title,
      text: t.services.s3Text,
    },
  ];

  const principleIcons = [BookOpen, Server, WalletCards, BrainCircuit];
  const commandLogoRail = [
    { icon: SiDiscord, label: 'Discord', color: '#5865f2' },
    { icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
    { icon: SiOvh, label: 'OVHcloud', color: '#8be9fd' },
    { icon: SiLinux, label: 'Linux', color: '#f1fa8c' },
    { icon: SiCloudflare, label: 'Cloudflare', color: '#ffb86c' },
    { icon: SiGithub, label: 'GitHub', color: '#f8f8f2' },
  ];
  const commandPowerIcons = [DatabaseZap, Terminal, ShieldCheck, WalletCards];
  const timelineIcons = [Code2, GitCommitHorizontal, Server, Bot, DatabaseZap, BrainCircuit];
  const getTimelineLinkLabel = (href: string) => {
    if (href.includes('?tab=repositories')) return t.common.publicGithub;
    return href.split('/').filter(Boolean).pop() ?? t.common.verifyOnGithub;
  };
  const glossaryIcons = [Code2, Cpu, Server, WalletCards, Bot];
  const heroCommandLines: CommandTerminalLine[] = [
    {
      kind: 'command',
      value: 'npm run lint',
    },
    {
      kind: 'output',
      tone: 'success',
      value: pick(language, {
        pt: 'interface validada: motion, responsivo, filtros e modal de projetos',
        en: 'interface validated: motion, responsive layout, filters, and project modal',
        de: 'Interface validiert: Motion, responsives Layout, Filter und Projekt-Modal',
      }),
    },
    {
      kind: 'command',
      value: 'npm run build',
    },
    {
      kind: 'output',
      tone: 'info',
      value: pick(language, {
        pt: 'Next.js 16 + React 19 + Tailwind CSS entregando portfolio auditável',
        en: 'Next.js 16 + React 19 + Tailwind CSS shipping an auditable portfolio',
        de: 'Next.js 16 + React 19 + Tailwind CSS liefern ein auditierbares Portfolio',
      }),
    },
    {
      kind: 'command',
      value: 'open /projects/swiss-learn',
    },
    {
      kind: 'output',
      tone: 'warning',
      value: pick(language, {
        pt: 'prioridade: domínio educacional, sessões de estudo e revisão espaçada',
        en: 'priority: learning domain, study sessions and spaced repetition',
        de: 'Priorität: Lerndomäne, Lernsitzungen und verteiltes Wiederholen',
      }),
    },
  ];
  const opsCommandLines: CommandTerminalLine[] = t.story.commandCenter.terminal.map((line) => {
    if (line.startsWith('$')) {
      return { kind: 'command', value: line.replace(/^\$\s*/, '') };
    }

    return {
      kind: 'output',
      tone: line.includes('recovered') || line.includes('recuperado') ? 'success' : 'warning',
      value: line,
    };
  });

  const stats = [
    { label: t.hero.statsLabel1, value: String(projects.length), detail: t.hero.statsDetail1 },
    { label: t.hero.statsLabel2, value: '2021', detail: t.hero.statsDetail2 },
    {
      label: t.hero.statsLabel3,
      value: pick(language, { pt: 'IA', en: 'AI', de: 'KI' }),
      detail: t.hero.statsDetail3,
    },
  ];

  return (
    <>
      <ParallaxGrid />

      <div className="relative z-10 min-h-screen">
        <Navbar />

        <main className="story-page-background relative overflow-hidden pb-24 lg:pb-0">
          <section id="home" className="mx-auto grid max-w-6xl scroll-mt-20 items-center gap-6 px-4 pb-6 pt-[4.5rem] sm:px-6 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-10 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-dracula-green/25 bg-dracula-green/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-dracula-green sm:mb-4 sm:text-xs">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span className="truncate">{t.common.available}</span>
              </div>

              <h1 className="text-[clamp(1.6rem,4vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-dracula-fg">
                {t.hero.title}
              </h1>

              <p className="mt-3 max-w-xl text-[clamp(0.78rem,1.3vw,0.9rem)] leading-relaxed text-dracula-comment sm:mt-4">
                {t.hero.subtitle}
              </p>
              <div className="mt-5 grid gap-3 sm:flex sm:flex-wrap">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-dracula-purple px-5 py-3 text-sm font-semibold text-dracula-bg shadow-lg shadow-dracula-purple/20 transition-transform hover:-translate-y-0.5"
                >
                  {t.common.viewProjects}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://github.com/emanuelVINI01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-dracula-card/70 bg-dracula-bg/25 px-5 py-3 text-sm font-semibold text-dracula-comment transition-colors hover:border-dracula-card hover:text-dracula-fg"
                >
                  {t.common.publicGithub}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18 }}
                className="mt-5 grid max-w-2xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-xl border border-dracula-card/70 bg-dracula-bg/25 p-2 pl-3 text-sm text-dracula-comment shadow-lg shadow-black/10 backdrop-blur sm:inline-grid sm:grid-cols-[auto_auto] sm:gap-3 sm:pl-4"
              >
                <div className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-dracula-fg sm:mr-2 sm:inline sm:text-xs">
                    {t.hero.emailLabel}
                  </span>
                  <span className="block truncate select-all text-dracula-green sm:inline">
                    {contactEmail}
                  </span>
                </div>
                <motion.button
                  type="button"
                  onClick={copyEmail}
                  aria-label={copiedEmail ? t.hero.emailCopied : t.hero.contactMe}
                  title={copiedEmail ? t.hero.emailCopied : t.hero.contactMe}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  animate={{
                    backgroundColor: copiedEmail ? '#50fa7b' : 'rgba(68, 71, 90, 0.24)',
                    color: copiedEmail ? '#282a36' : '#a7b0c8',
                    borderColor: copiedEmail ? '#50fa7b' : 'rgba(68, 71, 90, 0.78)',
                    boxShadow: copiedEmail
                      ? '0 0 0 4px rgba(80, 250, 123, 0.13), 0 0 26px rgba(80, 250, 123, 0.24)'
                      : '0 0 0 0 rgba(80, 250, 123, 0)',
                  }}
                  transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                  className="relative inline-flex h-10 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-lg border px-3 text-xs font-semibold transition-colors hover:text-dracula-fg"
                >
                  {copiedEmail && (
                    <motion.span
                      aria-hidden="true"
                      initial={{ scale: 0, opacity: 0.42 }}
                      animate={{ scale: 2.1, opacity: 0 }}
                      transition={{ duration: 0.55, ease: 'easeOut' }}
                      className="absolute inset-0 rounded-full bg-dracula-green"
                    />
                  )}
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copiedEmail ? 'copied' : 'copy'}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="relative z-10 inline-flex items-center gap-2"
                    >
                      {copiedEmail ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      <span>
                        {copiedEmail ? t.hero.emailCopied : t.hero.copyEmailShort}
                      </span>
                    </motion.span>
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              ref={heroMotionRef}
              data-motion-active="false"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="decorative-motion relative space-y-4"
            >
              <div className="absolute -inset-4 rounded-[28px] bg-dracula-surface/35 blur-2xl sm:-inset-6 sm:rounded-[32px]" />
              
              <div className="absolute -top-12 -right-6 z-20 animate-float hidden md:block">
                <Flag code="br" size={56} className="rotate-12 drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]" />
              </div>
              <div className="absolute -bottom-8 -left-4 z-20 animate-float-slow hidden md:block">
                <Flag code="us" size={48} className="-rotate-12 drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]" />
              </div>
              <div className="absolute top-1/2 -right-12 z-20 animate-float hidden md:block">
                <Flag code="de" size={40} className="rotate-45 drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]" />
              </div>

              
              <div className="relative grid grid-cols-3 gap-2 sm:gap-3">
                {stats.map((stat, idx) => {
                  const icons = [
                    <div key="gh" className="flex h-6 w-6 items-center justify-center rounded-md border border-white/5 bg-[#25252b] text-dracula-fg shadow-[0_0_10px_rgba(255,255,255,0.05)]"><SiGithub className="h-3.5 w-3.5" /></div>,
                    <div key="pr" className="flex h-6 w-6 items-center justify-center rounded-md border border-dracula-purple/20 bg-[#25252b] text-dracula-purple shadow-[0_0_10px_rgba(189,147,249,0.15)]"><SiPrisma className="h-3.5 w-3.5" /></div>,
                    <div key="nx" className="flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-[#25252b] text-dracula-fg shadow-[0_0_10px_rgba(255,255,255,0.1)]"><SiNextdotjs className="h-3.5 w-3.5" /></div>,
                  ];
                  return (
                    <div key={stat.label} className="group min-w-0 rounded-[14px] border border-white/5 bg-[#1e1e24] p-3 shadow-lg shadow-black/20 transition-all hover:bg-[#23232a] sm:p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-2">
                        {icons[idx]}
                        <div className="text-base font-semibold text-dracula-fg sm:text-lg">{stat.value}</div>
                      </div>
                      <div className="truncate text-[9px] font-semibold uppercase tracking-wider text-dracula-comment">
                        {stat.label}
                      </div>
                      <div className="mt-1.5 line-clamp-2 text-[9px] leading-relaxed text-dracula-comment/70 sm:text-[10px]">
                        {stat.detail}
                      </div>
                    </div>
                  );
                })}
              </div>

              <CommandTerminal
                title={t.hero.commandTitle}
                subtitle={t.hero.commandSubtitle}
                badge={t.hero.stackLabel}
                status={t.hero.commandStatus}
                lines={heroCommandLines}
                accent="var(--dracula-purple)"
                className="relative"
              />
            </motion.div>
          </section>

          {/* ABOUT ME SECTION */}
          <section id="about" className="story-section-flat scroll-mt-20 border-y border-dracula-card/60">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-24">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-70px' }}
                  transition={{ duration: 0.45 }}
                  className="relative mx-auto w-full max-w-md lg:mx-0"
                >
<div className="relative flex flex-col rounded-[20px] border border-[#3a3a44] bg-gradient-to-br from-[#1c1c21] to-[#121214] shadow-2xl shadow-black/60 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.25]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '8px 8px' }} />
                
                <div className="relative z-10 p-5 pb-16 sm:pb-5 sm:pr-[40%]">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-1.5 w-1.5 rounded-full bg-dracula-purple shadow-[0_0_8px_rgba(189,147,249,0.8)]" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-dracula-purple drop-shadow-[0_0_8px_rgba(189,147,249,0.5)]">VERIFIED ENGINEER PROFILE</span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      <Image
                        src="https://github.com/emanuelVINI01.png"
                        alt="Emanuel Vini – EmanuelMissena"
                        width={48}
                        height={48}
                        unoptimized
                        className="relative z-10 rounded-xl border border-white/10 shadow-lg"
                      />
                      <span className="absolute -bottom-1 -right-1 z-20 h-3 w-3 rounded-full border-2 border-[#1c1c21] bg-dracula-green" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xl font-bold text-white tracking-tight">Emanuel Vini</span>
                        <span className="rounded-md border border-dracula-purple/20 bg-dracula-purple/10 px-1.5 py-0.5 text-[9px] font-semibold tracking-wider text-dracula-purple">EmanuelMissena</span>
                      </div>
                      <div className="mt-1 text-xs text-dracula-comment font-medium tracking-wide">{t.aboutMe.roleTag}</div>
                    </div>
                  </div>
                </div>


                <div className="relative z-30 mt-auto border-t border-white/5 bg-black/40 backdrop-blur-md p-3 px-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-dracula-orange/10 border border-dracula-orange/20">
                      <span className="text-[10px] font-bold text-dracula-orange">Rs</span>
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-dracula-fg/5 border border-dracula-fg/10">
                      <span className="text-[10px] font-bold text-dracula-fg">Nx</span>
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-dracula-purple/10 border border-dracula-purple/20">
                      <span className="text-[10px] font-bold text-dracula-purple">Pr</span>
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-dracula-pink/10 border border-dracula-pink/20">
                      <span className="text-[10px] font-bold text-dracula-pink">Jv</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                     <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest">
                       <span className="text-dracula-comment">LOW-LEVEL</span>
                       <span className="w-12 h-[1px] bg-gradient-to-r from-dracula-comment to-dracula-green opacity-50" />
                       <span className="text-dracula-green">HIGH-LEVEL</span>
                     </div>
                     <div className="text-[7px] text-dracula-comment/60 font-mono mt-1 tracking-wider">{t.aboutMe.buildingSince}</div>
                  </div>
                </div>


                {/*
                <div className="relative w-full aspect-[4/3] border-t border-white/5">
                  <Image
                    src="/profile.png"
                    alt="Emanuel Vini"
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div> */}
              </div>
            </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-70px' }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="relative"
                >
                  <DepthIllustration
                    src="/illustrations/about-me-dark.svg"
                    alt="About me"
                    size={112}
                    accent="var(--dracula-purple)"
                    float="slow"
                    className="absolute -right-4 -top-16 hidden w-24 opacity-80 lg:block xl:-right-10 xl:w-28"
                  />

                  <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-purple">
                    {t.aboutMe.label}
                  </div>
                  <h2 className="text-3xl font-semibold tracking-tight text-dracula-fg sm:text-4xl">
                    {t.aboutMe.title}
                  </h2>
                  <p className="mt-4 text-lg text-dracula-comment">
                    {t.aboutMe.subtitle}
                  </p>

                  <div className="mt-8 space-y-5 text-sm leading-7 text-dracula-fg/80 sm:text-base sm:leading-8">
                    <p>{t.aboutMe.p1}</p>
                    <p>{t.aboutMe.p2}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* SKILLS SECTION */}
          <section id="skills" className="story-section-flat-deep scroll-mt-20 border-b border-dracula-card/60">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-24">
              <div className="mb-12 max-w-3xl">
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-pink">
                  {t.skills.label}
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-dracula-fg sm:text-4xl">
                  {t.skills.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-dracula-comment sm:text-base">
                  {t.skills.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                {[
                  { name: 'Next.js', color: 'text-dracula-fg', bg: 'bg-dracula-fg/10', border: 'border-dracula-fg/20' },
                  { name: 'Prisma', color: 'text-[#5a67d8]', bg: 'bg-[#5a67d8]/10', border: 'border-[#5a67d8]/20' },
                  { name: 'AWS', color: 'text-[#ff9900]', bg: 'bg-[#ff9900]/10', border: 'border-[#ff9900]/20' },
                  { name: 'AI Management & Claude', color: 'text-[#d97757]', bg: 'bg-[#d97757]/10', border: 'border-[#d97757]/20' },
                  { name: 'GitHub', color: 'text-dracula-fg', bg: 'bg-dracula-fg/10', border: 'border-dracula-fg/20' },
                  { name: 'Advanced Linux', color: 'text-dracula-yellow', bg: 'bg-dracula-yellow/10', border: 'border-dracula-yellow/20' },
                  { name: 'Docker', color: 'text-[#2496ed]', bg: 'bg-[#2496ed]/10', border: 'border-[#2496ed]/20' },
                  { name: 'Redis', color: 'text-[#dc382d]', bg: 'bg-[#dc382d]/10', border: 'border-[#dc382d]/20' },
                  { name: 'Zod', color: 'text-[#3068b7]', bg: 'bg-[#3068b7]/10', border: 'border-[#3068b7]/20' },
                  { name: 'Java', color: 'text-[#b07219]', bg: 'bg-[#b07219]/10', border: 'border-[#b07219]/20' },
                  { name: 'Kotlin', color: 'text-[#a97bff]', bg: 'bg-[#a97bff]/10', border: 'border-[#a97bff]/20' },
                ].map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center gap-2 rounded-xl border ${skill.border} ${skill.bg} px-4 py-2.5 text-sm font-semibold shadow-sm backdrop-blur`}
                  >
                    <span className={skill.color}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="story"
            className="story-section-flat scroll-mt-20 border-y border-dracula-card/60"
          >
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-24">
              <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-pink">
                    {t.story.label}
                  </div>
                  <h2 className="text-3xl font-semibold tracking-tight text-dracula-fg sm:text-4xl">
                    {t.story.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-dracula-comment sm:text-base">
                    {t.story.subtitle}
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="hidden md:block w-48 shrink-0 lg:w-56"
                >
                  <DepthIllustration
                    src="/illustrations/hiking-dark.svg"
                    alt="Story illustration"
                    size={224}
                    accent="var(--dracula-pink)"
                    float="slow"
                  />
                </motion.div>
              </div>

              <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-70px' }}
                  transition={{ duration: 0.45 }}
                  className="rounded-xl border border-dracula-card/80 bg-dracula-bg/35 p-6"
                >
                  <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-dracula-cyan">
                    {t.story.narrativeLabel}
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight text-dracula-fg">
                    {t.story.narrativeTitle}
                  </h3>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-dracula-comment">
                    {t.story.narrative.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {t.story.principles.map((item, index) => {
                    const Icon = principleIcons[index];

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-70px' }}
                        transition={{ duration: 0.42, delay: index * 0.06 }}
                        whileHover={{ y: -4, borderColor: 'rgba(189, 147, 249, 0.42)' }}
                        className="rounded-xl border border-dracula-card/80 bg-dracula-surface/60 p-5"
                      >
                        <div className="mb-5 flex items-center justify-between gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-dracula-purple/25 bg-dracula-purple/10">
                            <Icon className="h-5 w-5 text-dracula-purple" />
                          </div>
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-dracula-comment">
                            {item.kicker}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-dracula-fg">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-dracula-comment">{item.text}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section
            className="story-section-flat-deep relative overflow-hidden border-b border-dracula-card/60"
          >
            <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-24">
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <DepthIllustration
                    src="/illustrations/secure-server-dark.svg"
                    alt="Infrastructure command center"
                    size={132}
                    accent="var(--dracula-cyan)"
                    className="absolute -right-2 -top-20 hidden w-28 opacity-85 lg:block xl:-right-8 xl:w-32"
                  />

                  <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-cyan">
                    {t.story.commandCenter.label}
                  </div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-dracula-purple/25 bg-dracula-purple/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-dracula-purple">
                    <Bot className="h-3.5 w-3.5" />
                    {t.story.commandCenter.eyebrow}
                  </div>
                  <h2 className="text-3xl font-semibold leading-tight tracking-tight text-dracula-fg sm:text-4xl">
                    {t.story.commandCenter.title}
                  </h2>
                  <p className="mt-5 text-sm leading-8 text-dracula-comment sm:text-base">
                    {t.story.commandCenter.lead}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {commandLogoRail.map(({ icon: Icon, label, color }) => (
                      <motion.div
                        key={label}
                        whileHover={{ y: -3, scale: 1.03 }}
                        className="inline-flex items-center gap-2 rounded-xl border border-dracula-card/80 bg-dracula-surface/70 px-3 py-2 text-xs font-semibold text-dracula-fg shadow-lg shadow-black/10"
                      >
                        <Icon className="h-4 w-4" style={{ color }} />
                        {label}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <CommandTerminal
                  title="discord://infra-command-center"
                  subtitle={t.story.commandCenter.eyebrow}
                  badge="ChatOps"
                  status={pick(language, { pt: 'incidente estabilizado', en: 'incident stabilized', de: 'Vorfall stabilisiert' })}
                  lines={opsCommandLines}
                  accent="var(--dracula-green)"
                />
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-3">
                {t.story.commandCenter.stats.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="rounded-xl border border-dracula-card/80 bg-dracula-surface/60 p-5"
                  >
                    <div className="text-3xl font-semibold text-dracula-cyan">{item.value}</div>
                    <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-dracula-fg">
                      {item.label}
                    </div>
                    <p className="mt-3 text-xs leading-6 text-dracula-comment">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  className="rounded-xl border border-dracula-card/80 bg-dracula-bg/40 p-6"
                >
                  <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-orange">
                    {t.story.commandCenter.sceneTitle}
                  </div>
                  <p className="text-sm leading-8 text-dracula-comment">
                    {t.story.commandCenter.scene}
                  </p>
                </motion.div>

                <div className="grid gap-3">
                  {t.story.commandCenter.flow.map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-center gap-3 rounded-xl border border-dracula-card/80 bg-dracula-surface/60 p-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-dracula-green/25 bg-dracula-green/10 text-xs font-semibold text-dracula-green">
                        0{index + 1}
                      </div>
                      <span className="text-sm leading-6 text-dracula-fg">{step}</span>
                      <ArrowRightLeft className="ml-auto h-4 w-4 shrink-0 text-dracula-comment" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {t.story.commandCenter.powers.map((item, index) => {
                  const Icon = commandPowerIcons[index];

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ delay: index * 0.06 }}
                      whileHover={{ y: -4 }}
                      className="rounded-xl border border-dracula-card/80 bg-dracula-surface/60 p-5"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-dracula-purple/25 bg-dracula-purple/10">
                        <Icon className="h-5 w-5 text-dracula-purple" />
                      </div>
                      <h3 className="text-sm font-semibold leading-6 text-dracula-fg">{item.title}</h3>
                      <p className="mt-3 text-xs leading-6 text-dracula-comment">{item.text}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-green">
                    {t.story.commandCenter.proofKicker}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-dracula-fg">
                    {t.story.commandCenter.proofTitle}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-dracula-comment">
                    {t.story.commandCenter.proofNote}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-dracula-comment">
                    {t.story.commandCenter.closer}
                  </p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute -top-10 -right-4 hidden w-32 opacity-70 lg:block"
                  >
                    <DepthIllustration
                      src="/illustrations/secure-login-dark.svg"
                      alt="Secure evidence"
                      size={128}
                      accent="var(--dracula-green)"
                    />
                  </motion.div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {t.story.commandCenter.proofLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-xl border border-dracula-card/80 bg-dracula-bg/45 p-4 transition-colors hover:border-dracula-green/45"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="font-semibold text-dracula-fg">{item.name}</div>
                        <ExternalLink className="h-4 w-4 text-dracula-comment transition-colors group-hover:text-dracula-green" />
                      </div>
                      <div className="mt-2 text-xs leading-6 text-dracula-comment">{item.meta}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="services"
            className="story-section-flat scroll-mt-20 border-y border-dracula-card/60"
          >
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
              <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-cyan">
                    {t.services.label}
                  </div>
                  <h2 className="text-3xl font-semibold tracking-tight text-dracula-fg">
                    {t.services.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-dracula-comment">
                    {t.services.subtitle}
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="hidden md:block w-48 shrink-0 lg:w-56"
                >
                  <DepthIllustration
                    src="/illustrations/online-learning-dark.svg"
                    alt="Services illustration"
                    size={224}
                    accent="var(--dracula-cyan)"
                    float="slow"
                  />
                </motion.div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {services.map(({ icon: Icon, title, text }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-70px' }}
                    transition={{ duration: 0.42, delay: index * 0.07 }}
                    whileHover={{ y: -4, borderColor: 'rgba(139, 233, 253, 0.42)' }}
                    className="rounded-xl border border-dracula-card/80 bg-dracula-bg/35 p-6"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-dracula-purple/25 bg-dracula-purple/10">
                      <Icon className="h-5 w-5 text-dracula-purple" />
                    </div>
                    <h3 className="text-lg font-semibold text-dracula-fg">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-dracula-comment">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <VmEcosystem />

          <section id="my-bet-spotlight" className="story-section-flat scroll-mt-20 border-y border-dracula-card/60">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
              {projects.filter((project) => project.id === 'swiss-learn').map((project) => (
                <div key={project.id} className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <p className="mb-3 text-xs uppercase tracking-widest text-dracula-cyan">{t.projects.spotlightLabel}</p>
                    <h2 className="text-3xl font-semibold text-dracula-fg">{project.name}</h2>
                    <p className="mt-4 leading-7 text-dracula-comment">{project.shortDesc}</p>
                    <p className="mt-4 text-sm leading-7 text-dracula-comment">{project.longDesc}</p>
                    <Link href={`/projects/${project.id}`} className="mt-6 inline-flex items-center gap-2 text-dracula-cyan">{t.common.viewProject}<ArrowRight className="h-4 w-4" /></Link>
                  </div>
                  <div className="space-y-3">
                    {project.highlights.map((highlight) => <div key={highlight.label} className="rounded-xl border border-dracula-card p-5">
                      <h3 className="mb-2 text-xs font-semibold uppercase text-dracula-cyan">{highlight.label}</h3>
                      <p className="text-sm leading-7 text-dracula-comment">{highlight.value}</p>
                    </div>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-24">
            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between relative">
              <div className="max-w-3xl">
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-orange">
                  {t.story.timelineLabel}
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-dracula-fg">
                  {t.story.timelineTitle}
                </h2>
                <p className="mt-4 text-sm leading-7 text-dracula-comment">
                  {t.story.timelineSubtitle}
                </p>
              </div>
              <div className="flex flex-col items-end gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="hidden lg:block w-40"
                >
                  <DepthIllustration
                    src="/illustrations/celebrating-dark.svg"
                    alt="Timeline success"
                    size={160}
                    accent="var(--dracula-orange)"
                  />
                </motion.div>
                <a
                  href="https://github.com/emanuelVINI01?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-xl border border-dracula-orange/25 bg-dracula-orange/10 px-4 py-2 text-sm font-semibold text-dracula-orange transition-colors hover:border-dracula-orange/60"
                >
                  {t.common.verifyOnGithub}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {t.story.timeline.map((item, index) => {
                const Icon = timelineIcons[index];

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-70px' }}
                    transition={{ duration: 0.42, delay: index * 0.05 }}
                    whileHover={{ y: -4, borderColor: 'rgba(255, 184, 108, 0.42)' }}
                    className="rounded-xl border border-dracula-card/80 bg-dracula-surface/60 p-6"
                  >
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-dracula-orange/25 bg-dracula-orange/10">
                          <Icon className="h-5 w-5 text-dracula-orange" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-dracula-orange">
                          {item.period}
                        </span>
                      </div>
                      <span className="text-xs text-dracula-comment">0{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-dracula-fg">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-dracula-comment">{item.text}</p>
                    <div className="mt-5 rounded-lg border border-dracula-card/70 bg-dracula-bg/35 p-4 text-xs leading-6 text-dracula-comment">
                      <span className="font-semibold text-dracula-fg">Proof: </span>
                      {item.proof}
                    </div>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-dracula-cyan transition-colors hover:text-dracula-green"
                    >
                      {getTimelineLinkLabel(item.href)}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section
            className="story-section-flat border-y border-dracula-card/60"
          >
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-24">
              <div className="mb-10 max-w-3xl">
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-green">
                  {t.story.proofLabel}
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-dracula-fg">
                  {t.story.proofTitle}
                </h2>
                <p className="mt-4 text-sm leading-7 text-dracula-comment">
                  {t.story.proofSubtitle}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {t.story.evidence.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-70px' }}
                    transition={{ duration: 0.42, delay: index * 0.06 }}
                    whileHover={{ y: -4, borderColor: 'rgba(80, 250, 123, 0.42)' }}
                    className="rounded-xl border border-dracula-card/80 bg-dracula-bg/35 p-5"
                  >
                    <div className="text-3xl font-semibold text-dracula-green">{item.value}</div>
                    <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-dracula-fg">
                      {item.label}
                    </div>
                    <p className="mt-3 text-xs leading-6 text-dracula-comment">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16">
                <div className="mb-8 max-w-3xl">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-cyan">
                    {t.story.glossaryLabel}
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight text-dracula-fg">
                    {t.story.glossaryTitle}
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                  {t.story.glossary.map((item, index) => {
                    const Icon = glossaryIcons[index];

                    return (
                      <motion.div
                        key={item.term}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-70px' }}
                        transition={{ duration: 0.42, delay: index * 0.05 }}
                        whileHover={{ y: -4, borderColor: 'rgba(139, 233, 253, 0.42)' }}
                        className="rounded-xl border border-dracula-card/80 bg-dracula-bg/35 p-5"
                      >
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-dracula-cyan/25 bg-dracula-cyan/10">
                          <Icon className="h-5 w-5 text-dracula-cyan" />
                        </div>
                        <h3 className="text-sm font-semibold leading-6 text-dracula-fg">
                          {item.term}
                        </h3>
                        <p className="mt-3 text-xs leading-6 text-dracula-comment">{item.text}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section id="stack" className="mx-auto grid max-w-6xl scroll-mt-20 items-center gap-8 px-4 py-12 sm:px-6 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-purple">
                {t.stack.label}
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-dracula-fg">
                {t.stack.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-dracula-comment">
                {t.stack.subtitle}
              </p>
              <div className="mt-6 grid gap-3 text-sm text-dracula-comment">
                <div className="flex items-center gap-3">
                  <Code2 className="h-4 w-4 text-dracula-cyan shrink-0" />
                  <span>{t.stack.item1}</span>
                </div>
                <div className="flex items-center gap-3">
                  <DatabaseZap className="h-4 w-4 text-dracula-green shrink-0" />
                  <span>{t.stack.item2}</span>
                </div>
                <div className="flex items-center gap-3">
                  <GitFork className="h-4 w-4 text-dracula-purple shrink-0" />
                  <span>{t.stack.item3}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center overflow-hidden py-4">
              <div className="scale-[0.78] sm:scale-100">
                <TechOrbit />
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="story-section-flat scroll-mt-20 border-t border-dracula-card/60"
          >
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-24">
              <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-green">
                    {t.projects.label}
                  </div>
                  <h2 className="text-3xl font-semibold tracking-tight text-dracula-fg">
                    {t.projects.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-dracula-comment">
                    {t.projects.subtitle}
                  </p>
                </div>
                <Link
                  href="/projects"
                  className="inline-flex w-fit items-center gap-2 rounded-xl border border-dracula-purple/25 bg-dracula-purple/10 px-4 py-2 text-sm font-semibold text-dracula-purple transition-colors hover:border-dracula-purple/60"
                >
                  {t.common.viewAll}
                  <Layers className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {featuredProjects.map((project, index) => (
                  <ProjectPod
                    key={project.id}
                    project={project}
                    onClick={setSelectedProject}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
