'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { type Language, type Dictionary, dictionaries } from '@/i18n/dictionaries';

interface LanguageContextProps {
  language: Language;
  t: Dictionary;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const SUPPORTED_LANGUAGES: Language[] = ['pt', 'en', 'de'];

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      let storedLang: Language | null = null;
      try { storedLang = localStorage.getItem('app-lang') as Language | null; } catch { /* storage can be disabled */ }
      if (storedLang && SUPPORTED_LANGUAGES.includes(storedLang)) {
        setLanguageState(storedLang);
      } else {
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('pt')) {
          setLanguageState('pt');
        } else if (browserLang.startsWith('de')) {
          setLanguageState('de');
        } else {
          setLanguageState('en');
        }
      }
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try { localStorage.setItem('app-lang', lang); } catch { /* keep the selected language for this session */ }
  };

  const t = dictionaries[language];

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
