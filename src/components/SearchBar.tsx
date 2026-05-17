'use client';

import { useState, useRef, useId } from 'react';
import { Search, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = 'Search projects...' }: SearchBarProps) {
  const [waves, setWaves] = useState<number[]>([]);
  const counterRef = useRef(0);
  const id = useId();
  const { language } = useLanguage();

  const addWave = () => {
    const key = counterRef.current++;
    setWaves((prev) => [...prev, key]);
    setTimeout(() => {
      setWaves((prev) => prev.filter((k) => k !== key));
    }, 1200);
  };

  return (
    <div className="relative mx-auto w-full max-w-full sm:max-w-lg">
      {/* Wave rings */}
      {waves.map((k) => (
        <span
          key={k}
          className="search-wave"
          style={{ animationDuration: '1.2s' }}
        />
      ))}

      {/* Input container */}
      <div
        className="relative flex min-w-0 items-center rounded-xl border transition-all duration-300"
        style={{
          background: 'rgba(36,39,54,0.82)',
          backdropFilter: 'blur(16px)',
          borderColor: value ? 'var(--dracula-cyan)' : 'rgba(255,255,255,0.08)',
          boxShadow: value ? '0 0 20px rgba(139, 233, 253, 0.15)' : 'none',
        }}
      >
        <Search
          size={16}
          className="absolute left-4"
          style={{
            color: value ? 'var(--dracula-cyan)' : 'var(--dracula-comment)',
            filter: value ? 'drop-shadow(0 0 6px var(--dracula-cyan))' : 'none',
            transition: 'color 0.2s, filter 0.2s',
          }}
        />
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            addWave();
          }}
          placeholder={placeholder}
          className="w-full min-w-0 bg-transparent py-3 pl-11 pr-11 font-mono text-sm outline-none placeholder:opacity-40"
          style={{ color: 'var(--foreground)' }}
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute right-4 rounded-md p-1 transition-colors"
            style={{ color: 'var(--dracula-comment)' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--dracula-red)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--dracula-comment)')}
            aria-label={language === 'pt' ? 'Limpar busca' : 'Clear search'}
          >
            <X size={14} />
          </button>
        )}
      </div>
    </div>
  );
}
