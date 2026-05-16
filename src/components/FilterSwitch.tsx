'use client';

import { motion } from 'framer-motion';

interface FilterSwitchProps {
  options: { key: string; label: string; color: string }[];
  value: string;
  onChange: (key: string) => void;
}

export default function FilterSwitch({ options, value, onChange }: FilterSwitchProps) {
  return (
    <div
      className="flex snap-x items-center gap-2 overflow-x-auto rounded-2xl p-1.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible"
      style={{
        background: 'rgba(36,39,54,0.82)',
        border: '1px solid rgba(68,71,90,0.7)',
        backdropFilter: 'blur(16px)',
      }}
    >
      {options.map((opt) => {
        const isActive = value === opt.key;
        return (
          <motion.button
            key={opt.key}
            onClick={() => onChange(opt.key)}
            className="relative flex shrink-0 snap-start items-center gap-2 rounded-xl px-3 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors duration-200 sm:px-4 sm:text-xs"
            style={{
              color: isActive ? opt.color : 'var(--dracula-comment)',
              minWidth: 0,
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Active background */}
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `${opt.color}18`,
                  border: `1px solid ${opt.color}44`,
                  boxShadow: `0 0 12px ${opt.color}33`,
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}

            {/* LED dot */}
            <span
              className="relative w-1.5 h-1.5 rounded-full shrink-0"
              style={{
                background: isActive ? opt.color : 'var(--dracula-border)',
                boxShadow: isActive ? `0 0 6px ${opt.color}` : 'none',
                transition: 'background 0.2s, box-shadow 0.2s',
              }}
            />

            <span className="relative">{opt.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
