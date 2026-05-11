'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  DatabaseZap,
  ExternalLink,
  GitFork,
  Layers,
  ShieldCheck,
  Terminal,
  Copy,
} from 'lucide-react';

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

  const journey = [
    {
      label: t.journey.step1Label,
      title: t.journey.step1Title,
      text: t.journey.step1Text,
    },
    {
      label: t.journey.step2Label,
      title: t.journey.step2Title,
      text: t.journey.step2Text,
    },
    {
      label: t.journey.step3Label,
      title: t.journey.step3Title,
      text: t.journey.step3Text,
    },
  ];

  const stats = [
    { label: t.hero.statsLabel1, value: '40', detail: t.hero.statsDetail1 },
    { label: t.hero.statsLabel2, value: 'JVM', detail: t.hero.statsDetail2 },
    { label: t.hero.statsLabel3, value: 'Full-stack', detail: t.hero.statsDetail3 },
  ];

  return (
    <>
      <ParallaxGrid />

      <div className="relative z-10 min-h-screen">
        <Navbar />

        <main>
          <section className="mx-auto grid min-h-[92vh] max-w-6xl items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-dracula-green/25 bg-dracula-green/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-dracula-green">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {t.common.available}
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-dracula-fg sm:text-5xl lg:text-6xl">
                {t.hero.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-dracula-comment sm:text-lg">
                {t.hero.subtitle}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-dracula-purple px-5 py-3 text-sm font-semibold text-dracula-bg shadow-lg shadow-dracula-purple/20 transition-transform hover:-translate-y-0.5"
                >
                  {t.common.viewProjects}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-dracula-green/25 bg-dracula-green/10 px-5 py-3 text-sm font-semibold text-dracula-green transition-colors hover:border-dracula-green/60"
                >
                  {copiedEmail ? t.hero.emailCopied : t.hero.contactMe}
                  <Copy className="h-4 w-4" />
                </button>
                <a
                  href="https://github.com/emanuelVINI01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-dracula-cyan/25 bg-dracula-cyan/10 px-5 py-3 text-sm font-semibold text-dracula-cyan transition-colors hover:border-dracula-cyan/60"
                >
                  {t.common.publicGithub}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-4 text-sm text-dracula-comment">
                <span className="text-dracula-fg">{t.hero.emailLabel}:</span>{' '}
                <span className="select-all text-dracula-green">{contactEmail}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="relative space-y-4"
            >
              <div className="absolute -inset-6 rounded-[32px] bg-dracula-surface/35 blur-2xl" />

              <div className="relative flex items-center justify-between rounded-2xl border border-dracula-card/80 bg-dracula-surface/80 p-5 shadow-2xl shadow-black/25 backdrop-blur">
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

              <div className="relative grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-dracula-card/70 bg-dracula-surface/75 p-4 shadow-lg shadow-black/15">
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-dracula-comment">
                      {stat.label}
                    </div>
                    <div className="mt-2 text-xl font-semibold text-dracula-fg">{stat.value}</div>
                    <div className="mt-1 text-xs leading-relaxed text-dracula-comment">{stat.detail}</div>
                  </div>
                ))}
              </div>

              <div className="relative rounded-xl border border-dracula-card/70 bg-dracula-surface/75 p-5 shadow-lg shadow-black/15">
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

          <section id="servicos" className="border-y border-dracula-card/60 bg-dracula-surface/35">
            <div className="mx-auto max-w-6xl px-6 py-20">
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
                {services.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="rounded-xl border border-dracula-card/80 bg-dracula-bg/35 p-6"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-dracula-purple/25 bg-dracula-purple/10">
                      <Icon className="h-5 w-5 text-dracula-purple" />
                    </div>
                    <h3 className="text-lg font-semibold text-dracula-fg">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-dracula-comment">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-24">
            <div className="mb-10 max-w-2xl">
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-orange">
                {t.journey.label}
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-dracula-fg">
                {t.journey.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-dracula-comment">
                {t.journey.subtitle}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {journey.map((item, index) => (
                <div
                  key={item.title}
                  className="relative rounded-xl border border-dracula-card/80 bg-dracula-surface/60 p-6"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="rounded-full border border-dracula-orange/25 bg-dracula-orange/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-dracula-orange">
                      {item.label}
                    </span>
                    <span className="text-xs text-dracula-comment">0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dracula-fg">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-dracula-comment">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="stack" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr]">
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

          <section id="projetos" className="border-t border-dracula-card/60 bg-dracula-surface/35">
            <div className="mx-auto max-w-6xl px-6 py-24">
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
