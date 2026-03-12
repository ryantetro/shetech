'use client';

import React from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, Button, StickerHeader, GraphPaperBackground } from '@/components/ui';

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Navy Navy/Gold Theme */}
        <section className="relative overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-[60vh] flex items-center bg-[#EBEBF5]">
          <GraphPaperBackground />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection direction="down" delay={0} initialLoad>
                {/* Sticker Header */}
                <div className="mb-8">
                  <StickerHeader label="Fund Your Future" title="Scholarships" variant="teal" />
                </div>

                <p className="text-lg sm:text-xl text-[#00008B] mb-8 leading-relaxed max-w-2xl mx-auto font-medium">
                  SheTech highlights scholarship opportunities to help you fund your future in STEM.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://ushe.edu/state-scholarships-aid/" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-[#00A6CE] text-white hover:bg-[#0086a6] font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide"
                    >
                      View Opportunities
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Video Section - Context */}
        {/* Media Spotlight Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Video Column */}
              <AnimatedSection direction="right" delay={0}>
                <div className="h-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-slate-50 relative aspect-video lg:aspect-auto">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/NLZBL7UFW5s"
                    title="SheTech Scholarship Advice"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </AnimatedSection>

              {/* Sleek Photo Card */}
              <AnimatedSection direction="left" delay={200}>
                <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/shetech-gallery/KinserStudios-SheTech25-2830.jpg"
                    alt="SheTech Students Celebrating"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00008B] via-[#00008B]/40 to-transparent opacity-90"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#00A6CE] text-white text-xs font-bold uppercase tracking-widest">
                      Impact
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2">Changing Lives</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      &quot;This scholarship didn&apos;t just fund my education; it gave me the confidence to pursue a career I never thought possible.&quot;
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
