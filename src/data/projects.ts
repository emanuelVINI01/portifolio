import type { Language } from '@/i18n/dictionaries';
import { projectMetadata } from './projectMetadata';
import { projectCopy } from './projectCopy';
import capturedProjects from './capturedProjects.json';

export type ProjectCategory = 'Full Stack' | 'Minecraft' | 'React & AI' | 'Systems' | 'Tools & Automation' | 'Mobile' | 'Research';
export type ProjectStage = 'application' | 'experiment' | 'legacy' | 'scaffold';
export type BadgeType = 'Transactional' | 'Auth' | 'API' | 'Dashboard' | 'Open Source' | 'Speed Optimized' | 'Real-Time' | 'Search' | 'Analytics' | 'File Upload' | 'Utility' | 'Portfolio' | 'TypeScript' | 'AI' | 'Discord Bot' | 'Browser Extension' | 'Java' | 'Electron' | 'Legacy' | 'Bare Metal' | 'Tested';
export type LocalizedText = Record<Language, string>;

export interface ProjectCapture {
  src: string;
  width: number;
  height: number;
  caption: LocalizedText;
  alt: LocalizedText;
  viewport: 'desktop' | 'mobile' | 'native' | 'terminal';
  origin: 'existing' | 'local';
  capturedAt?: string;
}

export interface ProjectMetadata {
  id: string;
  stage: ProjectStage;
  category: ProjectCategory;
  tech: string[];
  color: string;
  glowColor: string;
  githubUrl?: string;
  liveUrl?: string;
  images?: string[];
  captures?: ProjectCapture[];
  badges: BadgeType[];
  runCommands?: string[];
  year?: number;
}

export interface ProjectCopy {
  name: string;
  shortDesc: string;
  longDesc: string;
  highlights: { label: string; value: string }[];
}

export type Project = ProjectMetadata & ProjectCopy;

const priority = ['swiss-learn', 'simple-bank', 'apiflash', 'snippetvault', 'typedash', 'browia', 'cvm-runtime', 'cvm-compiler'];
const stageOrder: Record<ProjectStage, number> = { application: 0, experiment: 1, legacy: 2, scaffold: 3 };
const orderedMetadata = [...projectMetadata].sort((a, b) => {
  const rank = (id: string) => priority.includes(id) ? priority.indexOf(id) : priority.length;
  return rank(a.id) - rank(b.id) || stageOrder[a.stage] - stageOrder[b.stage];
});

const PROJECTS_BY_LANG = Object.fromEntries(
  (['pt', 'en', 'de'] as const).map((language) => [
    language, orderedMetadata.map((project) => ({
      ...project,
      ...projectCopy[language][project.id],
      captures: [...((capturedProjects as Record<string, ProjectCapture[]>)[project.id] ?? []), ...(project.captures ?? [])],
    })),
  ]),
) as Record<Language, Project[]>;

export const getProjects = (language: Language): Project[] => PROJECTS_BY_LANG[language];

const categories: { key: ProjectCategory | 'all'; label: LocalizedText; color: string }[] = [
  { key: 'all', label: { pt: 'Todos', en: 'All', de: 'Alle' }, color: '#bd93f9' },
  { key: 'Full Stack', label: { pt: 'Full Stack', en: 'Full Stack', de: 'Full Stack' }, color: '#bd93f9' },
  { key: 'Minecraft', label: { pt: 'Minecraft', en: 'Minecraft', de: 'Minecraft' }, color: '#50fa7b' },
  { key: 'React & AI', label: { pt: 'Interfaces & IA', en: 'Interfaces & AI', de: 'Oberflächen & KI' }, color: '#ff79c6' },
  { key: 'Systems', label: { pt: 'Sistemas', en: 'Systems', de: 'Systeme' }, color: '#ff5555' },
  { key: 'Tools & Automation', label: { pt: 'Ferramentas & automação', en: 'Tools & automation', de: 'Werkzeuge & Automatisierung' }, color: '#8be9fd' },
  { key: 'Mobile', label: { pt: 'Mobile', en: 'Mobile', de: 'Mobile' }, color: '#f1fa8c' },
  { key: 'Research', label: { pt: 'Pesquisa', en: 'Research', de: 'Forschung' }, color: '#ffb86c' },
];
export const getCategories = (language: Language) => categories.map(({ label, ...category }) => ({ ...category, label: label[language] }));
