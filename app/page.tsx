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
import {
  SiCloudflare,
  SiDiscord,
  SiGithub,
  SiLinux,
  SiOvh,
  SiTypescript,
} from 'react-icons/si';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProjectModal from '@/components/ProjectModal';
import ProjectPod from '@/components/ProjectPod';
import { getProjects, type Project } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

const TechOrbit = dynamic(() => import('@/components/TechOrbit'), { ssr: false });
const ParallaxGrid = dynamic(() => import('@/components/ParallaxGrid'), { ssr: false });

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { t, language } = useLanguage();
  const contactEmail = 'contact@emanuelvini.dev';

  const projects = getProjects(language);
  const featuredProjects = ['transactional-wallet-ledger', 'apiflash', 'snippetvault']
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
  const glossaryIcons = [Code2, Cpu, Server, WalletCards, Bot];

  const stats = [
    { label: t.hero.statsLabel1, value: '37', detail: t.hero.statsDetail1 },
    { label: t.hero.statsLabel2, value: '2021', detail: t.hero.statsDetail2 },
    {
      label: t.hero.statsLabel3,
      value: language === 'pt' ? 'IA' : 'AI',
      detail: t.hero.statsDetail3,
    },
  ];

  return (
    <>
      <ParallaxGrid />

      <div className="relative z-10 min-h-screen">
        <Navbar />

        <main className="story-page-background relative overflow-hidden pb-24 md:pb-0">
          <section id="home" className="mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-6xl scroll-mt-20 items-center gap-8 px-4 pb-10 pt-20 sm:px-6 sm:pb-16 sm:pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-dracula-green/25 bg-dracula-green/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-dracula-green sm:mb-7 sm:text-xs">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span className="truncate">{t.common.available}</span>
              </div>

              <h1 className="max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight text-dracula-fg sm:text-5xl lg:text-6xl">
                {t.hero.title}
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-dracula-comment sm:mt-6 sm:text-lg sm:leading-8">
                {t.hero.subtitle}
              </p>
              <div className="mt-7 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap">
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
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="relative space-y-4"
            >
              <div className="absolute -inset-4 rounded-[28px] bg-dracula-surface/35 blur-2xl sm:-inset-6 sm:rounded-[32px]" />

              <div className="relative flex items-center justify-between rounded-2xl border border-dracula-card/80 bg-dracula-surface/80 p-4 shadow-2xl shadow-black/25 backdrop-blur sm:p-5">
                <div className="flex items-center gap-3">
                  <Image
                    src="https://github.com/emanuelVINI01.png"
                    alt="emanuelVINI"
                    width={48}
                    height={48}
                    unoptimized
                    className="rounded-xl border border-dracula-purple/40"
                  />
                  <div>
                    <div className="text-sm font-semibold text-dracula-fg">emanuelVINI</div>
                    <div className="text-xs text-dracula-comment">emanuelVINI01</div>
                  </div>
                </div>
                <span className="rounded-full border border-dracula-green/25 bg-dracula-green/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-dracula-green">
                  {t.common.online}
                </span>
              </div>

              <div className="relative grid grid-cols-3 gap-2 sm:gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="min-w-0 rounded-xl border border-dracula-card/70 bg-dracula-surface/75 p-3 shadow-lg shadow-black/15 sm:p-4">
                    <div className="truncate text-[9px] font-semibold uppercase tracking-widest text-dracula-comment sm:text-[10px]">
                      {stat.label}
                    </div>
                    <div className="mt-2 text-base font-semibold text-dracula-fg sm:text-xl">{stat.value}</div>
                    <div className="mt-1 line-clamp-3 text-[10px] leading-relaxed text-dracula-comment sm:text-xs">{stat.detail}</div>
                  </div>
                ))}
              </div>

              <div className="relative rounded-xl border border-dracula-card/70 bg-dracula-surface/75 p-4 shadow-lg shadow-black/15 sm:p-5">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-dracula-fg">
                  <Terminal className="h-3.5 w-3.5 text-dracula-cyan" />
                  {t.hero.stackLabel}
                </div>
                <div className="grid gap-2 text-sm text-dracula-comment">
                  <span>{t.hero.stack1}</span>
                  <span>{t.hero.stack2}</span>
                  <span>{t.hero.stack3}</span>
                </div>
              </div>
            </motion.div>
          </section>

          <section
            id="story"
            className="story-section-flat scroll-mt-20 border-y border-dracula-card/60"
          >
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-24">
              <div className="mb-12 max-w-3xl">
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
                >
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

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative overflow-hidden rounded-xl border border-dracula-card/80 bg-dracula-surface/85 shadow-2xl shadow-black/25"
                >
                  <div className="flex items-center justify-between border-b border-dracula-card/70 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-dracula-red" />
                      <span className="h-2.5 w-2.5 rounded-full bg-dracula-orange" />
                      <span className="h-2.5 w-2.5 rounded-full bg-dracula-green" />
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-dracula-comment">
                      discord://infra-command-center
                    </div>
                  </div>
                  <div className="space-y-3 p-5 font-mono text-xs leading-6">
                    {t.story.commandCenter.terminal.map((line, index) => (
                      <motion.div
                        key={line}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + index * 0.08 }}
                        className={line.startsWith('$') ? 'text-dracula-green' : 'text-dracula-comment'}
                      >
                        {line}
                      </motion.div>
                    ))}
                    <div className="inline-flex items-center gap-2 text-dracula-cyan">
                      <span>awaiting_next_event</span>
                      <span className="h-4 w-2 animate-[blink_1s_steps(2)_infinite] bg-dracula-cyan" />
                    </div>
                  </div>
                </motion.div>
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
                <div>
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
              <div className="mb-10 max-w-2xl">
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

          <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-24">
            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
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
                      {t.common.verifyOnGithub}
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
