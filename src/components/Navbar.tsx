'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();

  const navLinks = [
    { label: t.nav.services, href: '/#servicos' },
    { label: t.nav.stack, href: '/#stack' },
    { label: t.nav.projects, href: '/projects' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-40"
      style={{
        background: scrolled ? 'rgba(40,42,54,0.88)' : 'rgba(40,42,54,0.46)',
        backdropFilter: 'blur(18px)',
        borderBottom: scrolled ? '1px solid rgba(68,71,90,0.65)' : '1px solid rgba(68,71,90,0.24)',
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative h-9 w-9 overflow-hidden rounded-lg border border-dracula-purple/40 bg-dracula-purple/10 shadow-[0_0_20px_rgba(189,147,249,0.18)] transition-colors group-hover:border-dracula-cyan/50">
            <Image
              src="https://github.com/emanuelVINI01.png"
              alt="emanuelVINI"
              width={36}
              height={36}
              unoptimized
              className="h-full w-full object-cover"
            />
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-dracula-fg sm:inline">
            emanuelVINI
            <span className="text-dracula-comment"> / Full-stack</span>
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-5">
          <div className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-dracula-comment transition-colors hover:text-dracula-cyan"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-lg border border-dracula-card bg-dracula-card/30 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-dracula-fg transition-colors hover:border-dracula-purple/50 hover:text-dracula-purple md:hidden"
          >
            <Layers className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{t.nav.projects}</span>
          </Link>

          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 rounded-lg border border-dracula-card bg-dracula-card/30 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-dracula-fg transition-colors hover:border-dracula-purple/50 hover:text-dracula-purple"
            title="Toggle Language"
          >
            <Globe className="h-3.5 w-3.5" />
            <span>{language.toUpperCase()}</span>
          </button>

          <a
            href="https://github.com/emanuelVINI01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-dracula-cyan/25 bg-dracula-cyan/10 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-dracula-cyan transition-colors hover:border-dracula-cyan/60 hover:bg-dracula-cyan/15"
          >
            <span className="hidden sm:inline">GitHub</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
