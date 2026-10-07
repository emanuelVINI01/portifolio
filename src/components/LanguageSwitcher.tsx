'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Flag, LOCALE_FLAG, type FlagCode } from '@/components/ui/flag';
import type { Language } from '@/i18n/dictionaries';

const OPTIONS: { code: Language; flag: FlagCode; nativeName: string }[] = [
  { code: 'pt', flag: 'br', nativeName: 'Português' },
  { code: 'en', flag: 'us', nativeName: 'English' },
  { code: 'de', flag: 'de', nativeName: 'Deutsch' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointer = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', handlePointer);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('pointerdown', handlePointer);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        title="Language"
        className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-dracula-card bg-dracula-card/30 px-2 text-xs font-semibold uppercase tracking-widest text-dracula-fg transition-colors hover:border-dracula-purple/50 hover:text-dracula-purple sm:px-2.5"
      >
        <Flag code={LOCALE_FLAG[language]} size={16} />
        <span>{language.toUpperCase()}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-40 overflow-hidden rounded-xl border border-dracula-card bg-dracula-surface/95 shadow-2xl shadow-black/40 backdrop-blur-xl"
          >
            {OPTIONS.map((option) => {
              const isActive = option.code === language;

              return (
                <button
                  key={option.code}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    setLanguage(option.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-sm transition-colors ${
                    isActive ? 'bg-dracula-purple/10 text-dracula-purple' : 'text-dracula-comment hover:bg-dracula-card/40 hover:text-dracula-fg'
                  }`}
                >
                  <Flag code={option.flag} size={18} />
                  <span className="flex-1 font-medium">{option.nativeName}</span>
                  {isActive && <Check className="h-3.5 w-3.5" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
