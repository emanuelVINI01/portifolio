'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Copy, Terminal } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

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
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`command-terminal relative overflow-hidden rounded-2xl border bg-dracula-surface/85 shadow-2xl shadow-black/25 backdrop-blur ${className}`}
      style={{
        borderColor: `color-mix(in srgb, ${accent} 38%, rgba(68, 71, 90, 0.76))`,
        boxShadow: `0 24px 80px rgba(0,0,0,0.32), 0 0 44px color-mix(in srgb, ${accent} 16%, transparent)`,
        '--terminal-accent': accent,
      } as React.CSSProperties}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--terminal-accent),transparent)] opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.055),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_42%)]" />

      <div className="relative flex items-center justify-between gap-3 border-b border-dracula-card/70 px-4 py-3">
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
            aria-label={language === 'pt' ? 'Copiar comandos' : 'Copy commands'}
            title={language === 'pt' ? 'Copiar comandos' : 'Copy commands'}
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

      <div className={`relative font-mono ${dense ? 'p-4 text-[11px] leading-5' : 'p-5 text-xs leading-6 sm:text-[13px]'}`}>
        <div className="space-y-1.5">
          {lines.map((line, index) => {
            const number = String(index + 1).padStart(2, '0');

            return (
              <motion.div
                key={`${line.kind}-${line.value}-${index}`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 + index * 0.055, duration: 0.24 }}
                className="grid grid-cols-[1.65rem_minmax(0,1fr)] gap-3"
              >
                <span className="select-none text-right text-dracula-comment/45 tabular-nums">{number}</span>
                {line.kind === 'command' ? (
                  <div className="min-w-0">
                    <span className="mr-2 text-dracula-purple">{line.prompt ?? 'emanuel@portfolio'}</span>
                    <span className="mr-2 text-dracula-comment">~/prod</span>
                    <span className="mr-2 text-dracula-green">$</span>
                    <code className="break-words text-dracula-fg">{line.value}</code>
                  </div>
                ) : (
                  <code className={`break-words ${toneClasses[line.tone ?? 'muted']}`}>
                    <span className="select-none text-dracula-comment/55">=&gt; </span>
                    {line.value}
                  </code>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-dracula-card/60 pt-3">
          <div className="inline-flex items-center gap-2 text-dracula-cyan">
            <span className="h-2 w-2 rounded-full bg-dracula-cyan shadow-[0_0_12px_rgba(139,233,253,0.85)]" />
            <span className="text-[10px] font-semibold uppercase tracking-widest">
              {status ?? (language === 'pt' ? 'pronto para auditoria' : 'ready for audit')}
            </span>
          </div>
          <div className="flex h-5 items-center gap-2 text-[10px] text-dracula-comment">
            <span>{language === 'pt' ? 'aguardando evento' : 'awaiting event'}</span>
            <span className="h-4 w-2 animate-[blink_1s_steps(2)_infinite] bg-dracula-cyan" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
