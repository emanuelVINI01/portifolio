'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  BookOpenText,
  BriefcaseBusiness,
  ExternalLink,
  Globe,
  Home,
  Layers,
  Orbit,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

type SectionId = 'home' | 'story' | 'projects' | 'stack' | 'services';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const { language, t, toggleLanguage } = useLanguage();
  const pathname = usePathname();

  const sectionIds = useMemo<SectionId[]>(
    () => ['home', 'story', 'services', 'stack', 'projects'],
    [],
  );

  const navLinks = useMemo(
    () => [
      { id: 'story' as SectionId, label: t.nav.story, href: '/#story', icon: BookOpenText },
      { id: 'services' as SectionId, label: t.nav.services, href: '/#services', icon: BriefcaseBusiness },
      { id: 'stack' as SectionId, label: t.nav.stack, href: '/#stack', icon: Orbit },
      { id: 'projects' as SectionId, label: t.nav.projects, href: '/projects', icon: Layers },
    ],
    [t.nav.projects, t.nav.services, t.nav.stack, t.nav.story],
  );

  const mobileNavLinks = useMemo(
    () => [
      { id: 'home' as SectionId, label: t.nav.home, href: '/#home', icon: Home },
      { id: 'story' as SectionId, label: t.nav.story, href: '/#story', icon: BookOpenText },
      { id: 'projects' as SectionId, label: t.nav.projects, href: '/projects', icon: Layers },
      { id: 'stack' as SectionId, label: t.nav.stack, href: '/#stack', icon: Orbit },
      { id: 'services' as SectionId, label: t.nav.services, href: '/#services', icon: BriefcaseBusiness },
    ],
    [t.nav.home, t.nav.projects, t.nav.services, t.nav.stack, t.nav.story],
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      const frame = requestAnimationFrame(() => {
        setActiveSection(pathname.startsWith('/projects') ? 'projects' : 'home');
      });

      return () => cancelAnimationFrame(frame);
    }

    const ratios = new Map<SectionId, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id as SectionId, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        const bestMatch = sectionIds
          .map((id) => ({ id, ratio: ratios.get(id) ?? 0 }))
          .sort((a, b) => b.ratio - a.ratio)[0];

        if (bestMatch && bestMatch.ratio > 0) {
          setActiveSection(bestMatch.id);
        }
      },
      {
        rootMargin: '-28% 0px -52% 0px',
        threshold: [0, 0.08, 0.16, 0.32, 0.56, 0.8, 1],
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const frame = requestAnimationFrame(() => {
      const hash = window.location.hash.replace('#', '') as SectionId;
      if (sectionIds.includes(hash)) {
        setActiveSection(hash);
      } else if (window.scrollY < 120) {
        setActiveSection('home');
      }
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname, sectionIds]);

  return (
    <>
      <motion.nav
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="fixed inset-x-0 top-0 z-40"
        style={{
          background: scrolled ? 'rgba(40,42,54,0.9)' : 'rgba(40,42,54,0.58)',
          backdropFilter: 'blur(18px)',
          borderBottom: scrolled ? '1px solid rgba(68,71,90,0.65)' : '1px solid rgba(68,71,90,0.24)',
        }}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
          <Link href="/" className="group flex min-w-0 items-center gap-2.5">
            <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-lg border border-dracula-purple/40 bg-dracula-purple/10 shadow-[0_0_20px_rgba(189,147,249,0.18)] transition-colors group-hover:border-dracula-cyan/50 sm:h-9 sm:w-9">
              <Image
                src="https://github.com/emanuelVINI01.png"
                alt="emanuelVINI"
                width={36}
                height={36}
                unoptimized
                className="h-full w-full object-cover"
              />
            </span>
            <span className="min-w-0 text-sm font-semibold tracking-tight text-dracula-fg">
              emanuelVINI
              <span className="hidden text-dracula-comment sm:inline"> / Full-stack</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-5">
            <div className="hidden items-center gap-5 md:flex">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative text-xs font-semibold uppercase tracking-widest transition-colors hover:text-dracula-cyan ${
                      isActive ? 'text-dracula-cyan' : 'text-dracula-comment'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="desktop-nav-active"
                        className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 rounded-full bg-dracula-cyan shadow-[0_0_10px_rgba(139,233,253,0.75)]"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <button
              onClick={toggleLanguage}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-dracula-card bg-dracula-card/30 px-2.5 text-xs font-semibold uppercase tracking-widest text-dracula-fg transition-colors hover:border-dracula-purple/50 hover:text-dracula-purple sm:px-3"
              title="Toggle Language"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{language.toUpperCase()}</span>
            </button>

            <a
              href="https://github.com/emanuelVINI01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-dracula-cyan/25 bg-dracula-cyan/10 px-2.5 text-xs font-semibold uppercase tracking-widest text-dracula-cyan transition-colors hover:border-dracula-cyan/60 hover:bg-dracula-cyan/15 sm:px-3"
            >
              <span className="hidden sm:inline">GitHub</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </motion.nav>

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-dracula-card/80 bg-dracula-bg/95 px-3 pb-[calc(env(safe-area-inset-bottom)+0.55rem)] pt-2 shadow-[0_-16px_34px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden">
        <div className="mx-auto grid h-16 max-w-md grid-cols-5 items-stretch gap-1">
          {mobileNavLinks.map(({ icon: Icon, label, href, id }) => {
            const isActive = activeSection === id;

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative flex h-full min-w-0 flex-col items-center justify-between rounded-xl px-1 py-1.5 text-[10px] font-semibold uppercase tracking-tight transition-colors ${
                  isActive ? 'text-dracula-fg' : 'text-dracula-comment hover:text-dracula-cyan'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="mobile-nav-pill"
                    className="absolute inset-0 rounded-xl border border-dracula-purple/35 bg-dracula-surface shadow-lg shadow-black/25"
                    transition={{ type: 'spring', stiffness: 430, damping: 36 }}
                  />
                )}
                <span
                  className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${
                    isActive
                      ? 'bg-dracula-purple/15 text-dracula-purple'
                      : 'text-dracula-comment'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="relative z-10 block h-3 max-w-full truncate leading-3">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
