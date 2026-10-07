'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const contactEmail = 'contact@emanuelvini.dev';

  const footerLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.services, href: '/#services' },
    { label: t.nav.projects, href: '/projects' },
    { label: t.nav.stack, href: '/#stack' },
  ];

  return (
    <footer className="w-full border-t border-dracula-card/70 bg-dracula-bg text-dracula-comment">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-32 pt-10 sm:gap-10 sm:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:items-start">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3 text-dracula-fg">
              <span className="relative h-10 w-10 overflow-hidden rounded-lg border border-dracula-purple/40 bg-dracula-purple/10 shadow-[0_0_22px_rgba(189,147,249,0.18)]">
                <Image
                  src="https://github.com/emanuelVINI01.png"
                  alt="emanuelVINI"
                  width={40}
                  height={40}
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="font-semibold tracking-tight">emanuelVINI</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-dracula-fg">
              <Sparkles className="h-3.5 w-3.5 text-dracula-cyan" />
              {t.common.navigation}
            </div>
            <div className="grid gap-2 text-sm">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-dracula-cyan"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-dracula-fg">
              <ShieldCheck className="h-3.5 w-3.5 text-dracula-green" />
              {t.common.contact}
            </div>
            <div className="grid gap-3 text-sm">
              <span className="inline-flex w-fit select-all rounded-lg border border-dracula-green/20 bg-dracula-green/10 px-3 py-2 text-dracula-fg">
                {contactEmail}
              </span>
              <a
                href="https://github.com/emanuelVINI01"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-dracula-cyan/20 bg-dracula-cyan/10 px-3 py-2 text-dracula-fg transition-colors hover:border-dracula-cyan/50 hover:text-dracula-cyan"
              >
                GitHub
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <span>{t.footer.availableText}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-dracula-card/50 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} emanuelVINI. {t.common.allRightsReserved}</p>
          <p className="text-dracula-comment/80">emanuelvini.dev</p>
        </div>
      </div>
    </footer>
  );
}
