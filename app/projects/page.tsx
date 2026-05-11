'use client';

import { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';
import { SearchX } from 'lucide-react';

import Footer from '@/components/Footer';
import FilterSwitch from '@/components/FilterSwitch';
import Navbar from '@/components/Navbar';
import ProjectModal from '@/components/ProjectModal';
import ProjectPod from '@/components/ProjectPod';
import SearchBar from '@/components/SearchBar';
import { getCategories, getProjects, type Project } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

const ParallaxGrid = dynamic(() => import('@/components/ParallaxGrid'), { ssr: false });

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t, language } = useLanguage();

  const projects = getProjects(language);
  const categories = getCategories(language);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchCategory = activeCategory === 'all' || project.category === activeCategory;
      const normalizedQuery = query.toLowerCase();
      const matchQuery =
        !normalizedQuery ||
        project.name.toLowerCase().includes(normalizedQuery) ||
        project.shortDesc.toLowerCase().includes(normalizedQuery) ||
        project.category.toLowerCase().includes(normalizedQuery) ||
        project.tech.some((tech) => tech.toLowerCase().includes(normalizedQuery)) ||
        project.badges.some((badge) => badge.toLowerCase().includes(normalizedQuery));

      return matchCategory && matchQuery;
    });
  }, [activeCategory, query, projects]);

  const counts = useMemo(() => {
    return categories.reduce<Record<string, number>>((acc, category) => {
      acc[category.key] =
        category.key === 'all'
          ? projects.length
          : projects.filter((project) => project.category === category.key).length;
      return acc;
    }, {});
  }, [categories, projects]);

  return (
    <>
      <ParallaxGrid />

      <div className="relative z-10 min-h-screen">
        <Navbar />

        <main>
          <section className="mx-auto max-w-6xl px-6 pb-12 pt-32">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl"
            >
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-cyan">
                {t.nav.projects}
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-dracula-fg sm:text-5xl">
                {t.projects.title}
              </h1>
              <p className="mt-5 text-sm leading-7 text-dracula-comment sm:text-base">
                {t.projects.subtitle}
              </p>
            </motion.div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-8">
            <div className="space-y-4">
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
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-24">
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
                <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <AnimatePresence mode="popLayout">
                    {filtered.map((project, index) => (
                      <ProjectPod
                        key={project.id}
                        project={project}
                        onClick={setSelectedProject}
                        index={index}
                      />
                    ))}
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

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
