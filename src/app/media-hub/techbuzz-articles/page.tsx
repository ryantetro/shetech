'use client';

import React from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, StickerHeader, GraphPaperBackground, Button } from '@/components/ui';

export default function TechBuzzArticlesPage() {
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
                    <StickerHeader label="@she.tech_media" title="TechBuzz Articles" angle={-2} variant="magenta" />
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-[#6E35B0] mb-6 leading-tight uppercase">
                    TechBuzz Articles <br /> <span className="text-3xl sm:text-4xl block mt-2 text-slate-700">Powered by SheTech Media Interns</span>
                  </h1>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E35B0] to-purple-400 mb-6">
                    Real Stories. Real Students. Real Impact.
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                    Our SheTech Media Interns collaborate with TechBuzz to tell authentic stories about women in technology, highlight SheTech programs, and share what innovation looks like through the eyes of the next generation.
                  </p>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                    Every article is researched, written, and edited by students in the SheTech Media Internship, giving them real-world newsroom experience and a platform to amplify women’s voices in STEM.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href="https://www.techbuzz.news/" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="bg-[#6E35B0] text-white hover:bg-[#5a2a91] font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide flex items-center gap-2"
                      >
                        Read Articles
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </Button>
                    </a>
                  </div>

                  <div className="mt-8 space-y-4">
                    <p className="font-bold text-[#6E35B0] uppercase tracking-wide text-sm">Expect to read about:</p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6E35B0]"></div>
                        Rising student innovators and their projects
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6E35B0]"></div>
                        Women leading Utah’s tech transformation
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6E35B0]"></div>
                        The behind-the-scenes impact of SheTech Explorer Day
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>

              {/* Hero Visual - Article Card */}
              <div className="relative">
                <AnimatedSection direction="left" delay={200}>
                  <div className="relative group flex justify-center">
                    {/* Decorative Gradient Blob */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#6E35B0] via-purple-500 to-indigo-500 rounded-[2rem] opacity-20 group-hover:opacity-40 blur-2xl transition duration-500 w-full max-w-[500px] mx-auto"></div>

                    {/* Main Card */}
                    <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100/50 w-full max-w-[500px] transform hover:-translate-y-2 transition-transform duration-500">
                      {/* Card Image */}
                      <div className="relative h-64 w-full">
                        <Image
                          src="/shetech-gallery/KinserStudios-SheTech25-3799.jpg"
                          alt="SheTech Media Interns"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-[#6E35B0] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          Featured Story
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-8">
                        <div className="flex items-center gap-2 mb-4 text-sm text-slate-500 font-medium">
                          <span className="uppercase tracking-wide text-[#6E35B0] font-bold">TechBuzz News</span>
                          <span>•</span>
                          <span>5 min read</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
                          Next Gen Innovators: How SheTech Students Are Shaping the Future
                        </h3>
                        <p className="text-slate-600 mb-6 line-clamp-3">
                          From coding workshops to mentorship sessions, see how these high school students are turning their passion for STEM into real-world solutions that impact their communities.
                        </p>
                        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#6E35B0] font-bold">
                              SI
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-900">SheTech Interns</p>
                              <p className="text-xs text-slate-500">Media Team</p>
                            </div>
                          </div>
                          <span className="text-[#6E35B0] font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Read More
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          </span>
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
