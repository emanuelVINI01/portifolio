'use client';

import { useEffect, useRef } from 'react';

// Update CSS directly: visibility changes do not need a React render.
export default function useDecorativeMotion() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const touch = window.matchMedia('(pointer: coarse)');
    let visible = false;
    const update = () => {
      element.dataset.motionActive = String(
        visible && !document.hidden && !reducedMotion.matches && !touch.matches,
      );
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });

    observer.observe(element);
    document.addEventListener('visibilitychange', update);
    reducedMotion.addEventListener('change', update);
    touch.addEventListener('change', update);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
      reducedMotion.removeEventListener('change', update);
      touch.removeEventListener('change', update);
    };
  }, []);

  return ref;
}
