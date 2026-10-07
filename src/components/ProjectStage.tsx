'use client';

import type { ProjectStage as Stage } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

export default function ProjectStage({ stage }: { stage: Stage }) {
  const { t } = useLanguage();
  return <span className="rounded-full border border-dracula-border/70 px-2.5 py-1 text-[10px] font-semibold text-dracula-comment">{t.projectStage[stage]}</span>;
}
