'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { type Language, type Dictionary, dictionaries } from '@/i18n/dictionaries';

interface LanguageContextProps {
  language: Language;
  t: Dictionary;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('pt');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const storedLang = localStorage.getItem('app-lang') as Language | null;
      if (storedLang && (storedLang === 'pt' || storedLang === 'en')) {
        setLanguageState(storedLang);
      } else {
        const browserLang = navigator.language.toLowerCase();
        setLanguageState(browserLang.startsWith('en') ? 'en' : 'pt');
      }
      setMounted(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app-lang', lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => {
      const newLang = prev === 'pt' ? 'en' : 'pt';
      localStorage.setItem('app-lang', newLang);
      return newLang;
    });
  };

  const t = dictionaries[language];

  // While not mounted, render children with default language (pt) to prevent hydration mismatches
  // but it's safe to just return provider. Wait, hydration mismatch on text is possible.
  // We'll let React handle it or the user can ignore brief flash.
  // Next.js might complain if text differs between server (pt) and client (en) on first render.
  
  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage, setLanguage }}>
      <div className={mounted ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'}>
         {children}
      </div>
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
