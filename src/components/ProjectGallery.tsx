'use client';

import { useId, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import type { ProjectCapture } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

export default function ProjectGallery({ captures }: { captures: ProjectCapture[] }) {
  const { t, language } = useLanguage();
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const imageScroller = useRef<HTMLDivElement>(null);
  const titleId = useId();
  if (captures.length === 0) return null;
  const current = captures[index] ?? captures[0];
  const move = (offset: number) => {
    setIndex((value) => (value + offset + captures.length) % captures.length);
    imageScroller.current?.scrollTo(0, 0);
  };

  return (
    <section aria-label={t.gallery.title} className="mt-7 space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-dracula-fg">{t.gallery.title}</h2>
        <span aria-live="polite" className="text-xs text-dracula-comment">{index + 1} / {captures.length}</span>
      </div>
      <figure>
        <button type="button" aria-label={`${t.gallery.expand}: ${current.caption[language]}`} onClick={() => { imageScroller.current?.scrollTo(0, 0); dialog.current?.showModal(); }} className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl border border-dracula-border/70 bg-dracula-bg focus-visible:outline-2 focus-visible:outline-dracula-cyan">
          <Image src={current.src} alt={current.alt[language]} width={current.width} height={current.height} unoptimized className="max-h-[32rem] w-full object-cover object-top" />
          <Expand aria-hidden="true" className="absolute right-3 top-3 h-8 w-8 rounded-md bg-dracula-bg/90 p-1.5 text-dracula-fg" />
        </button>
        <figcaption className="mt-2 text-xs leading-relaxed text-dracula-comment">{current.caption[language]}{current.origin === 'existing' && <span className="ml-2">· {t.gallery.existing}</span>}</figcaption>
      </figure>
      {captures.length > 1 && <div className="flex gap-2 overflow-x-auto pb-2">
        {captures.map((capture, position) => <button key={capture.src} type="button" aria-label={`${t.gallery.select}: ${capture.caption[language]}`} aria-pressed={index === position} onClick={() => setIndex(position)} className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-lg border-2 focus-visible:outline-2 focus-visible:outline-dracula-cyan ${index === position ? 'border-dracula-cyan' : 'border-dracula-border'}`}>
          <Image src={capture.src} alt="" fill sizes="112px" unoptimized className="object-cover object-top" />
        </button>)}
      </div>}
      <dialog ref={dialog} aria-labelledby={titleId} onCancel={(event) => { event.preventDefault(); dialog.current?.close(); }} onKeyDown={(event) => {
        if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); dialog.current?.close(); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); event.stopPropagation(); move(-1); }
        if (event.key === 'ArrowRight') { event.preventDefault(); event.stopPropagation(); move(1); }
      }} className="fixed inset-0 m-auto max-h-[94dvh] w-[min(96vw,90rem)] max-w-none overflow-auto rounded-xl border border-dracula-border bg-dracula-bg p-4 text-dracula-fg backdrop:bg-black/85">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 id={titleId} className="text-sm">{current.caption[language]}</h2>
          <button type="button" onClick={() => dialog.current?.close()} aria-label={t.gallery.close} className="rounded-lg border border-dracula-border p-2"><X className="h-5 w-5" /></button>
        </div>
        <div ref={imageScroller} className="max-h-[75dvh] overflow-auto">
          <Image src={current.src} alt={current.alt[language]} width={current.width} height={current.height} unoptimized className="mx-auto h-auto w-auto max-w-full" />
        </div>
        {captures.length > 1 && <div className="mt-3 flex items-center justify-center gap-4">
          <button type="button" aria-label={t.gallery.previous} onClick={() => move(-1)} className="rounded-lg border border-dracula-border p-2"><ChevronLeft className="h-5 w-5" /></button>
          <span aria-live="polite">{index + 1} / {captures.length}</span>
          <button type="button" aria-label={t.gallery.next} onClick={() => move(1)} className="rounded-lg border border-dracula-border p-2"><ChevronRight className="h-5 w-5" /></button>
        </div>}
      </dialog>
    </section>
  );
}
