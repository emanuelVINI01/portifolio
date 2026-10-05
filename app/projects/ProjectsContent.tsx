'use client';

import { useCallback, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSearchParams, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { LayoutGrid, MousePointerClick, SearchX, Sparkles } from 'lucide-react';

import CommandTerminal, { type CommandTerminalLine } from '@/components/CommandTerminal';
import Footer from '@/components/Footer';
import VmEcosystem from '@/components/VmEcosystem';
import FilterSwitch from '@/components/FilterSwitch';
import Navbar from '@/components/Navbar';
import ProjectModal from '@/components/ProjectModal';
import ProjectPod from '@/components/ProjectPod';
import SearchBar from '@/components/SearchBar';
import { getCategories, getProjects, type Project } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import { pick } from '@/i18n/dictionaries';
import DepthIllustration from '@/components/ui/DepthIllustration';

const ParallaxGrid = dynamic(() => import('@/components/ParallaxGrid'), { ssr: false });

export default function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');
  const { t, language } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();

  const projects = getProjects(language);
  const categories = getCategories(language);

  const selectedProject = projects.find((project) => project.id === searchParams.get('project')) ?? null;

  const handleSelectProject = (project: Project) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('project', project.id);
    router.replace(`/projects?${params.toString()}`, { scroll: false });
  };

  const handleCloseProject = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('project');
    const qs = params.toString();
    router.replace(qs ? `/projects?${qs}` : '/projects', { scroll: false });
  }, [router, searchParams]);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchCategory = activeCategory === 'all' || project.category === activeCategory;
      const normalizedQuery = query.trim().toLowerCase();
      const matchQuery =
        !normalizedQuery ||
        project.name.toLowerCase().includes(normalizedQuery) ||
        project.shortDesc.toLowerCase().includes(normalizedQuery) ||
        project.category.toLowerCase().includes(normalizedQuery) ||
        t.projectStage[project.stage].toLowerCase().includes(normalizedQuery) ||
        project.tech.some((tech) => tech.toLowerCase().includes(normalizedQuery)) ||
        project.badges.some((badge) => badge.toLowerCase().includes(normalizedQuery));

      return matchCategory && matchQuery;
    });
  }, [activeCategory, query, projects, t.projectStage]);

  const counts = useMemo(() => {
    return categories.reduce<Record<string, number>>((acc, category) => {
      acc[category.key] =
        category.key === 'all'
          ? projects.length
          : projects.filter((project) => project.category === category.key).length;
      return acc;
    }, {});
  }, [categories, projects]);

  const spotlightProjects = useMemo(() => {
    const spotlightIds = ['simple-bank', 'swiss-learn', 'snippetvault'];
    return spotlightIds
      .map((id) => projects.find((project) => project.id === id))
      .filter(Boolean) as Project[];
  }, [projects]);

  const projectCommandLines: CommandTerminalLine[] = [
    {
      kind: 'command',
      value: `portfolio projects --category ${activeCategory} --query "${query || '*'}"`,
    },
    {
      kind: 'output',
      tone: 'success',
      value: pick(language, {
        pt: `${filtered.length} projetos prontos para auditoria tecnica`,
        en: `${filtered.length} projects ready for technical review`,
        de: `${filtered.length} Projekte bereit zur technischen Prüfung`,
      }),
    },
    {
      kind: 'command',
      value: 'portfolio spotlight --rank architecture,ux,proof',
    },
    {
      kind: 'output',
      tone: 'info',
      value: pick(language, {
        pt: 'destaques: estudo de idiomas, simulação bancária e organização de snippets',
        en: 'highlights: language learning, banking simulation and snippet organization',
        de: 'Highlights: Sprachenlernen, Banksimulation und Snippet-Verwaltung',
      }),
    },
  ];

  return (
    <>
      <ParallaxGrid />

      <div className="relative z-10 min-h-screen">
        <Navbar />

        <main className="story-page-background relative overflow-hidden pb-24 lg:pb-0">
          <section className="mx-auto max-w-6xl px-4 pb-8 pt-20 sm:px-6 sm:pb-12 sm:pt-32">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative max-w-3xl"
              >
                <DepthIllustration
                  src="/illustrations/launch-day-dark.svg"
                  alt="Projects launch"
                  size={128}
                  accent="var(--dracula-cyan)"
                  float="slow"
                  className="absolute -right-6 -top-16 hidden w-28 opacity-80 lg:block xl:-right-10 xl:w-32"
                />

                <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-cyan">
                  {t.nav.projects}
                </div>
                <h1 className="text-3xl font-semibold tracking-tight text-dracula-fg sm:text-5xl">
                  {t.projects.title}
                </h1>
                <p className="mt-5 text-sm leading-7 text-dracula-comment sm:text-base">
                  {t.projects.subtitle}
                </p>
              </motion.div>

              <CommandTerminal
                title="portfolio://project-index"
                subtitle={pick(language, { pt: 'catalogo filtravel com sinais tecnicos', en: 'filterable catalog with technical signals', de: 'filterbarer Katalog mit technischen Signalen' })}
                badge={pick(language, { pt: 'projetos', en: 'projects', de: 'Projekte' })}
                status={pick(language, { pt: 'catalogo sincronizado', en: 'catalog synced', de: 'Katalog synchronisiert' })}
                lines={projectCommandLines}
                accent="var(--dracula-cyan)"
                dense
              />
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="max-w-2xl"
              >
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-dracula-purple/25 bg-dracula-purple/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-dracula-purple">
                  <Sparkles className="h-3.5 w-3.5" />
                  {t.projects.spotlightLabel}
                </div>
                <h2 className="text-xl font-semibold tracking-tight text-dracula-fg sm:text-2xl">
                  {t.projects.spotlightTitle}
                </h2>
                <p className="mt-3 text-sm leading-7 text-dracula-comment">
                  {t.projects.spotlightText}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 }}
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-dracula-card/70 bg-dracula-bg/35 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-dracula-comment"
              >
                <MousePointerClick className="h-4 w-4 text-dracula-cyan" />
                {t.common.viewProject}
              </motion.div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[0.92fr_1.16fr_0.92fr] lg:items-center">
              {spotlightProjects.map((project, index) => {
                const isCenter = index === 1;

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: isCenter ? 28 : 18, scale: isCenter ? 0.96 : 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.18 + index * 0.08, duration: 0.45, ease: 'easeOut' }}
                    className={isCenter ? 'relative z-10' : 'relative lg:pt-10 lg:opacity-90'}
                  >
                    <ProjectPod
                      project={project}
                      onClick={handleSelectProject}
                      index={index}
                      spotlight={isCenter}
                    />
                  </motion.div>
                );
              })}
            </div>
          </section>

          <VmEcosystem />

          <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="space-y-4 rounded-2xl border border-dracula-card/70 bg-dracula-bg/55 p-3 shadow-2xl shadow-black/20 backdrop-blur sm:p-4"
            >
              <div className="flex items-center gap-2 px-1 text-xs font-semibold uppercase tracking-widest text-dracula-comment">
                <LayoutGrid className="h-4 w-4 text-dracula-cyan" />
                {t.projects.allProjectsLabel}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <FilterSwitch
                  options={categories.map((category) => ({
                    ...category,
                    label: `${category.label} (${counts[category.key]})`,
                  }))}
                  value={activeCategory}
                  onChange={(key) => {
                    setActiveCategory(key);
                    setQuery('');
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <SearchBar
                  value={query}
                  onChange={setQuery}
                  placeholder={t.common.searchPlaceholder}
                />
              </motion.div>
            </motion.div>
          </section>

          <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-24">
            <motion.div
              key={`${activeCategory}-${filtered.length}-${query}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 text-sm text-dracula-comment"
            >
              <span className="font-semibold text-dracula-purple">{filtered.length}</span>{' '}
              {filtered.length === 1 ? t.common.projectFound : t.common.projectsFound}
              {query && (
                <span>
                  {' '}{t.common.for} <span className="text-dracula-cyan">&quot;{query}&quot;</span>
                </span>
              )}
            </motion.div>

            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                <motion.div layout className="grid gap-x-4 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 lg:pt-5">
                  <AnimatePresence mode="popLayout">
                    {filtered.map((project, index) => {
                      const isCenterColumn = index % 3 === 1;

                      return (
                        <motion.div
                          key={project.id}
                          layout
                          className={isCenterColumn ? 'lg:-mt-5 lg:mb-5' : 'lg:mt-2'}
                        >
                          <ProjectPod
                            project={project}
                            onClick={handleSelectProject}
                            index={index}
                          />
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center rounded-2xl border border-dracula-card/70 bg-dracula-surface/50 px-6 py-20 text-center"
                >
                  <SearchX className="mb-4 h-9 w-9 text-dracula-comment" />
                  <div className="mb-2 text-sm font-semibold text-dracula-fg">
                    {t.common.noProjectsFound}
                  </div>
                  <div className="max-w-sm text-xs leading-6 text-dracula-comment">
                    {t.common.adjustSearch}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </main>

        <Footer />
      </div>

      <ProjectModal project={selectedProject} onClose={handleCloseProject} />
    </>
  );
}
