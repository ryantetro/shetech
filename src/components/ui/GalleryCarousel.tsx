'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import React, { useEffect, useMemo, useState } from 'react';

type GalleryCarouselProps = {
  images: string[];
  className?: string;
};

export const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ images, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const length = useMemo(() => images.length, [images.length]);

  useEffect(() => {
    if (!length || isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % length);
    }, 4200);

    return () => clearInterval(interval);
  }, [length, isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + length) % length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % length);
  };

  const offsets = useMemo(
    () =>
      images.map((_, index) => {
        let offset = index - activeIndex;
        if (offset > length / 2) {
          offset -= length;
        }
        if (offset < -length / 2) {
          offset += length;
        }
        return offset;
      }),
    [activeIndex, images, length]
  );

  return (
    <div
      className={cn('relative overflow-visible', className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-[#BD1C81] transition-all"
        aria-label="Show previous gallery image"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-[#BD1C81] transition-all"
        aria-label="Show next gallery image"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="relative h-[420px] w-full">
        {images.map((src, index) => {
          const offset = offsets[index];
          const isVisible = Math.abs(offset) <= 2;
          return (
            <div
              key={src}
              role="listitem"
              className="absolute top-0 left-1/2 h-[410px] w-[320px] rounded-xl shadow-2xl border-4 border-white transition-all duration-500 ease-out bg-white overflow-hidden cursor-pointer"
              style={{
                zIndex: 10 - Math.abs(offset),
                opacity: isVisible ? 1 : 0,
                transform: `translateX(calc(-50% + ${offset * 220}px)) scale(${1 - Math.abs(offset) * 0.15})`,
                pointerEvents: isVisible ? 'auto' : 'none',
              }}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                fill
                src={src}
                alt={`SheTech Explorer Day ${index + 1}`}
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 320px"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
