'use client';

import Image from 'next/image';
import useDecorativeMotion from '@/components/useDecorativeMotion';

type Props = {
  src: string;
  alt: string;
  size: number;
  accent: string;
  className?: string;
  float?: 'normal' | 'slow';
};

export default function DepthIllustration({
  src,
  alt,
  size,
  accent,
  className = '',
  float = 'normal',
}: Props) {
  const ref = useDecorativeMotion();

  return (
    <div
      ref={ref}
      data-motion-active="false"
      className={`decorative-motion relative ${className}`}
    >
      <div className={float === 'slow' ? 'animate-float-slow' : 'animate-float'}>
        <div
          aria-hidden="true"
          className="absolute -inset-6 rounded-full opacity-30"
          style={{ background: `radial-gradient(closest-side, ${accent}, transparent)` }}
        />
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="relative drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
