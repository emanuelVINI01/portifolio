'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlitchTitleProps {
  children: string | ReactNode;
  text: string; // for data-text attribute (glitch layers)
  className?: string;
}

export default function GlitchTitle({ children, text, className = '' }: GlitchTitleProps) {
  return (
    <h1
      data-text={text}
      className={`glitch-title select-none cursor-default ${className}`}
      style={{
        background: 'linear-gradient(135deg, var(--dracula-purple) 0%, var(--dracula-cyan) 60%, var(--dracula-pink) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
      }}
    >
      {children}
    </h1>
  );
}

export function GlitchSubtitle({ children }: { children: ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="text-sm md:text-base max-w-xl mx-auto text-center leading-relaxed"
      style={{ color: 'var(--dracula-comment)' }}
    >
      {children}
    </motion.p>
  );
}
