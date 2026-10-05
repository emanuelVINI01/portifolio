'use client';

import { useRef, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

type Props = {
  src: string;
  alt: string;
  size: number;
  accent: string;
  className?: string;
  float?: 'normal' | 'slow';
  parallax?: number;
};

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export default function DepthIllustration({
  src,
  alt,
  size,
  accent,
  className = '',
  float = 'normal',
  parallax = 24,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const hydrated = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
  const prefersReducedMotion = hydrated && reducedMotion;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-parallax, parallax]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`relative ${prefersReducedMotion ? '' : float === 'slow' ? 'animate-float-slow' : 'animate-float'} ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-full opacity-30 blur-3xl"
        style={{ background: accent }}
      />
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="relative drop-shadow-2xl"
      />
    </motion.div>
  );
}
