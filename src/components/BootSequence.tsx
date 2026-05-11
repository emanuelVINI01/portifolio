'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINES = [
  '> BIOS v2.6.1 (C) emanuelVINI systems',
  '[INITIALIZING CORE]...',
  '[LOADING MODULES].........',
  '[LOADING PROJECTS]...',
  '[AUTH] USER: EMANUEL_VINI',
  '[STATUS] READY - ALL SYSTEMS NOMINAL',
];

export default function BootSequence({ onDone }: { onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < LINES.length) {
        setVisibleLines((prev) => [...prev, LINES[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          setTimeout(onDone, 600);
        }, 500);
      }
    }, 320);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'var(--dracula-bg)' }}
        >
          <div className="max-w-xl w-full px-6 font-mono">
            <div
              className="text-xs mb-4 font-bold tracking-widest"
              style={{ color: 'var(--dracula-comment)' }}
            >
              SYSTEM BOOT - MARCH 2026
            </div>
            <div className="space-y-1">
              {visibleLines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-sm"
                  style={{
                    color:
                      line?.startsWith('[STATUS]')
                        ? 'var(--dracula-green)'
                        : line?.startsWith('[AUTH]')
                        ? 'var(--dracula-cyan)'
                        : line?.startsWith('[LOADING')
                        ? 'var(--dracula-purple)'
                        : 'var(--dracula-comment)',
                  }}
                >
                  {line}
                </motion.div>
              ))}
              {visibleLines.length < LINES.length && (
                <span
                  className="inline-block w-2 h-4 ml-1 align-middle"
                  style={{
                    background: 'var(--dracula-purple)',
                    animation: 'blink 1s step-end infinite',
                  }}
                />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
