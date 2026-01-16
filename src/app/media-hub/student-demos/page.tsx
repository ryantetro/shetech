'use client';

import React from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, StickerHeader, GraphPaperBackground, Button } from '@/components/ui';

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

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href="https://www.youtube.com/user/WomenTechCouncil" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="bg-[#6E35B0] text-white hover:bg-[#5a2a91] font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide flex items-center gap-2"
                      >
                        Watch Student Demos
                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                      </Button>
                    </a>
                  </div>

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
                  <div className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-30 group-hover:opacity-50 blur-xl transition duration-500"></div>

                    {/* Video Player Container */}
                    <div className="relative bg-black rounded-2xl shadow-2xl overflow-hidden aspect-video border-[6px] border-white transform group-hover:scale-[1.01] transition-transform duration-500">
                      {/* Thumbnail */}
                      <div className="absolute inset-0">
                        <Image
                          src="/shetech-gallery/KinserStudios-Womentechcouncil-shetech-explorerday-2032.jpg"
                          alt="Student Demo Presentation"
                          fill
                          className="object-cover opacity-90"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      </div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white/50 shadow-lg cursor-pointer">
                          <div className="w-14 h-14 bg-[#6E35B0] rounded-full flex items-center justify-center pl-1 shadow-xl">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                          </div>
                        </div>
                      </div>

                      {/* Player Controls Mockup */}
                      <div className="absolute bottom-0 inset-x-0 p-4">
                        <div className="h-1 bg-white/30 rounded-full mb-3 overflow-hidden">
                          <div className="h-full w-1/3 bg-[#6E35B0] rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between text-white/90 text-sm font-medium">
                          <div className="flex items-center gap-3">
                            <span>0:42 / 3:15</span>
                            <span className="text-white/70"> • </span>
                            <span>SheTech Demo Day</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="uppercase text-[10px] tracking-widest bg-white/20 px-2 py-0.5 rounded">HD</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
