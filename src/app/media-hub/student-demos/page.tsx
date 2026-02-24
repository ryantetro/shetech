'use client';

import React from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, StickerHeader, GraphPaperBackground } from '@/components/ui';

const STUDENT_DEMO_TILES = [
  {
    title: 'Partner Workshop Collage',
    image: '/shetech-gallery/KinserStudios-Womentechcouncil-shetech-explorerday-1109.jpg',
  },
  {
    title: 'Hands-on Challenges',
    image: '/shetech-gallery/KinserStudios-SheTech25-1414.jpg',
  },
  {
    title: 'Creative Presentations',
    image: '/shetech-gallery/KinserStudios-SheTech25-2532.jpg',
  },
  {
    title: 'Innovation Showcases',
    image: '/shetech-gallery/KinserStudios-SheTech25-2830.jpg',
  },
];

export default function StudentDemosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-[#F5F5FA] overflow-hidden">
          <GraphPaperBackground />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text Content */}
              <div>
                <AnimatedSection direction="right" delay={0}>
                  <div className="mb-6 inline-block">
                    <StickerHeader label="Past Projects" title="Student Demos" angle={-2} variant="magenta" />
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#6E35B0] mb-6 leading-tight uppercase">
                    Turning Ideas <br /> Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E35B0] to-purple-400">Innovation.</span>
                  </h1>
                  <h2 className="text-xl font-bold text-slate-700 mb-6">
                    See how SheTech students transform creativity into real-world impact.
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                    Each year, girls showcase projects and prototypes they’ve designed through workshops, TechChallenges, and internships—tackling everything from sustainability and robotics to AI, health, and community problem-solving.
                  </p>


                  <div className="mt-8 space-y-4">
                    <p className="font-bold text-[#6E35B0] uppercase tracking-wide text-sm">Explore:</p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6E35B0]"></div>
                        Past SheTech Demo videos
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6E35B0]"></div>
                        Project highlights and student presentations
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6E35B0]"></div>
                        Stories from the next generation of inventors
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>

              {/* Hero Visual - Video Mockup */}
              <div className="relative">
                <AnimatedSection direction="left" delay={200}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {STUDENT_DEMO_TILES.map((tile) => (
                      <div
                        key={tile.title}
                        className="group relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-900 min-h-[220px] aspect-[4/3]"
                      >
                        <Image
                          src={tile.image}
                          alt={tile.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                        <div className="absolute inset-0 flex items-end">
                          <div className="p-6">
                            <p className="text-lg font-bold text-white drop-shadow-lg">{tile.title}</p>
                            <p className="text-xs uppercase tracking-[0.4em] text-white/60 mt-1">2021 Partner Workshops</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
