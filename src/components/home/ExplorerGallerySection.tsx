'use client';

import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GalleryCarousel } from '@/components/ui/GalleryCarousel';

export const EXPLORER_GALLERY_IMAGES = [
  '/shetech-gallery/KinserStudios-SheTech25-0926.jpg',
  '/shetech-gallery/KinserStudios-SheTech25-1414.jpg',
  '/shetech-gallery/KinserStudios-SheTech25-1494.jpg',
  '/shetech-gallery/KinserStudios-SheTech25-1949.jpg',
  '/shetech-gallery/KinserStudios-SheTech25-2510.jpg',
  '/shetech-gallery/KinserStudios-SheTech25-2532.jpg',
  '/shetech-gallery/KinserStudios-SheTech25-2541.jpg',
  '/shetech-gallery/KinserStudios-SheTech25-2830.jpg',
  '/shetech-gallery/KinserStudios-Womentechcouncil-shetech-explorerday-1109.jpg',
];

export const ExplorerGallerySection = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection direction="fade" delay={0}>
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.5em] text-slate-400 mb-2">Moments</p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">SheTech Explorer Day Gallery</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A peek behind the scenes from Utah’s largest hands-on STEM experience.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={100}>
        <div className="relative">
          <GalleryCarousel images={EXPLORER_GALLERY_IMAGES} />
        </div>
      </AnimatedSection>
    </div>
  </section>
);
