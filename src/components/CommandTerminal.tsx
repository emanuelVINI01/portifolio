'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Copy, Terminal } from 'lucide-react';
import { SiCloudflare, SiLinux, SiNextdotjs, SiPrisma, SiReact, SiTypescript } from 'react-icons/si';
import { useLanguage } from '@/context/LanguageContext';
import { pick } from '@/i18n/dictionaries';
import useDecorativeMotion from '@/components/useDecorativeMotion';

export type CommandTerminalLine =
  | {
      kind: 'command';
      value: string;
      prompt?: string;
    }
  | {
      kind: 'output';
      value: string;
      tone?: 'muted' | 'info' | 'success' | 'warning' | 'danger';
    };

interface CommandTerminalProps {
  title: string;
  subtitle?: string;
  badge?: string;
  status?: string;
  lines: CommandTerminalLine[];
  accent?: string;
  copyValue?: string;
  className?: string;
  dense?: boolean;
}

const toneClasses: Record<NonNullable<Extract<CommandTerminalLine, { kind: 'output' }>['tone']>, string> = {
  muted: 'text-dracula-comment',
  info: 'text-dracula-cyan',
  success: 'text-dracula-green',
  warning: 'text-dracula-orange',
  danger: 'text-dracula-red',
};

export default function CommandTerminal({
  title,
  subtitle,
  badge,
  status,
  lines,
  accent = 'var(--dracula-cyan)',
  copyValue,
  className = '',
  dense = false,
}: CommandTerminalProps) {
  const [copied, setCopied] = useState(false);
  const ref = useDecorativeMotion();
  const { language } = useLanguage();

  const textToCopy = useMemo(() => {
    if (copyValue) return copyValue;

    return lines
      .map((line) => (line.kind === 'command' ? `$ ${line.value}` : line.value))
      .join('\n');
  }, [copyValue, lines]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      data-motion-active="false"
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`decorative-motion command-terminal relative w-full min-w-0 max-w-full overflow-hidden rounded-[18px] border bg-[#1e1e24] shadow-2xl shadow-black/40 ${className}`}
      style={{
        borderColor: `color-mix(in srgb, ${accent} 38%, rgba(68, 71, 90, 0.76))`,
        boxShadow: `0 24px 80px rgba(0,0,0,0.32), 0 0 44px color-mix(in srgb, ${accent} 16%, transparent)`,
        '--terminal-accent': accent,
      } as React.CSSProperties}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--terminal-accent),transparent)] opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.055),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_42%)]" />

      <div className="relative flex items-center justify-between gap-3 border-b border-dracula-card/70 px-3 py-3 sm:px-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-dracula-red" />
            <span className="h-2.5 w-2.5 rounded-full bg-dracula-orange" />
            <span className="h-2.5 w-2.5 rounded-full bg-dracula-green" />
          </div>
          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-2">
              <Terminal className="h-3.5 w-3.5 shrink-0 text-dracula-cyan" />
              <span className="truncate text-xs font-semibold text-dracula-fg">{title}</span>
            </div>
            {subtitle && (
              <div className="mt-0.5 truncate text-[10px] text-dracula-comment">{subtitle}</div>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {badge && (
            <span className="hidden rounded-full border border-dracula-card/70 bg-dracula-bg/45 px-2 py-1 text-[9px] font-semibold uppercase tracking-widest text-dracula-comment sm:inline-flex">
              {badge}
            </span>
          )}
          <motion.button
            type="button"
            onClick={handleCopy}
            whileTap={{ scale: 0.92 }}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-dracula-card/70 bg-dracula-bg/40 text-dracula-comment transition-colors hover:border-dracula-cyan/50 hover:text-dracula-cyan"
            aria-label={pick(language, { pt: 'Copiar comandos', en: 'Copy commands', de: 'Befehle kopieren' })}
            title={pick(language, { pt: 'Copiar comandos', en: 'Copy commands', de: 'Befehle kopieren' })}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? 'done' : 'copy'}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.16 }}
              >
                {copied ? <CheckCircle2 className="h-4 w-4 text-dracula-green" /> : <Copy className="h-4 w-4" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <div className={`relative min-w-0 font-mono ${dense ? 'p-3 text-[11px] leading-5 sm:p-4' : 'p-3 text-xs leading-6 sm:p-5 sm:text-[13px]'}`}>
        <div className="space-y-1.5">
          {lines.map((line, index) => {
            const number = String(index + 1).padStart(2, '0');

            return (
              <motion.div
                key={`${line.kind}-${index}`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 + index * 0.055, duration: 0.24 }}
                className="grid min-w-0 grid-cols-[1.25rem_minmax(0,1fr)] gap-2 sm:grid-cols-[1.65rem_minmax(0,1fr)] sm:gap-3"
              >
                <span className="select-none text-right text-dracula-comment/45 tabular-nums">{number}</span>
                {line.kind === 'command' ? (
                  <div className="min-w-0 break-words">
                    <span className="mr-2 text-dracula-purple">{line.prompt ?? 'emanuel@portfolio'}</span>
                    <span className="mr-2 text-dracula-comment">~/prod</span>
                    <span className="mr-2 text-dracula-green">$</span>
                    <code className="break-all text-dracula-fg sm:break-words">{line.value}</code>
                  </div>
                ) : (
                  <code className={`min-w-0 break-words ${toneClasses[line.tone ?? 'muted']}`}>
                    <span className="select-none text-dracula-comment/55">=&gt; </span>
                    {line.value}
                  </code>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-5 border-t border-white/5 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 rounded-xl bg-black/20 p-1.5 border border-white/5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-dracula-card/50 transition-colors text-dracula-cyan" title="React"><SiReact className="h-4 w-4" /></div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-dracula-card/50 transition-colors text-[#3178c6]" title="TypeScript"><SiTypescript className="h-4 w-4" /></div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-dracula-card/50 transition-colors text-dracula-fg" title="Next.js"><SiNextdotjs className="h-4 w-4" /></div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-dracula-card/50 transition-colors text-dracula-purple" title="Prisma"><SiPrisma className="h-4 w-4" /></div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-dracula-card/50 transition-colors text-dracula-yellow" title="Linux"><SiLinux className="h-4 w-4" /></div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-dracula-card/50 transition-colors text-dracula-orange" title="Cloudflare"><SiCloudflare className="h-4 w-4" /></div>
            </div>
            
            <div className="flex flex-col items-end gap-1">
              <div className="inline-flex items-center gap-2 text-dracula-cyan">
                <span className="h-1.5 w-1.5 rounded-full bg-dracula-cyan shadow-[0_0_8px_rgba(139,233,253,0.85)]" />
                <span className="text-[9px] font-bold uppercase tracking-widest">
                  {status ?? pick(language, { pt: 'sistema pronto', en: 'system ready', de: 'System bereit' })}
                </span>
              </div>
              <div className="flex h-4 items-center gap-1.5 text-[9px] text-dracula-comment uppercase tracking-widest font-semibold">
                <span>{pick(language, { pt: 'aguardando', en: 'awaiting', de: 'wartend' })}</span>
                <span className="h-3 w-1.5 animate-[blink_1s_steps(2)_infinite] bg-dracula-cyan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
