'use client';

import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { MotionConfig } from 'framer-motion';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user"><LanguageProvider>{children}</LanguageProvider></MotionConfig>;
}
