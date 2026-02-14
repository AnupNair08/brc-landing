"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Slide = { src: string; alt: string };

export default function Carousel({ slides, intervalMs = 4000 }: { slides: Slide[]; intervalMs?: number }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const go = (dir: 1 | -1) => setIndex((prev) => (prev + dir + slides.length) % slides.length);
  const goto = (i: number) => setIndex(i);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), intervalMs);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [slides, intervalMs]);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="relative aspect-[3/4] w-full sm:aspect-[4/3] md:aspect-[16/9]">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundColor: '#fffbec' }}
          >
            <Image src={s.src} alt={s.alt} fill priority={i === index} className="object-contain" />
          </div>
        ))}
      </div>

      <button
        aria-label="Previous"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur hover:bg-black/60"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button
        aria-label="Next"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur hover:bg-black/60"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goto(i)}
            className={`h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'} ring-1 ring-white/40`}
          />
        ))}
      </div>
    </div>
  );
}


