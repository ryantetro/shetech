'use client';

import React from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, StickerHeader, GraphPaperBackground, Button } from '@/components/ui';

export default function TechWorkshopsPage() {
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
                    <StickerHeader label="Skills for Future" title="Tech Workshops" angle={-2} variant="magenta" />
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#6E35B0] mb-6 leading-tight uppercase">
                    Where Curiosity <br /> Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E35B0] to-purple-400">Career.</span>
                  </h1>
                  <h2 className="text-xl font-bold text-slate-700 mb-6">
                    The SheTech Tech Workshops connect students with industry experts from Utah’s most innovative companies.
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                    From hands-on coding and cybersecurity to aerospace design, data analytics, and entrepreneurship, each workshop gives girls a chance to experience real technology and see where their skills can take them.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href="#workshops">
                      <Button
                        size="lg"
                        className="bg-[#6E35B0] text-white hover:bg-[#5a2a91] font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide flex items-center gap-2"
                      >
                        Explore Workshops
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </Button>
                    </a>
                  </div>

                  <div className="mt-8 space-y-4">
                    <p className="font-bold text-[#6E35B0] uppercase tracking-wide text-sm">What you'll find:</p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6E35B0]"></div>
                        Workshops led by companies like Adobe, Qualtrics, and Lucid
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6E35B0]"></div>
                        Step-by-step projects that introduce real tech tools
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6E35B0]"></div>
                        Opportunities to connect directly with engineers, scientists, and creators
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>

              {/* Hero Visual - Tech Interface Card */}
              <div className="relative">
                <AnimatedSection direction="left" delay={200}>
                  <div className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition duration-500"></div>

                    {/* Code Editor Window */}
                    <div className="relative bg-[#1E1E1E] rounded-xl shadow-2xl overflow-hidden border border-slate-700 transform group-hover:scale-[1.01] transition-transform duration-500">
                      {/* Window Header */}
                      <div className="bg-[#2D2D2D] px-4 py-3 flex items-center justify-between border-b border-black/20">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                        </div>
                        <div className="text-xs text-slate-400 font-mono">workshop-lab.js</div>
                        <div className="w-4"></div>
                      </div>

                      {/* Editor Content Layout */}
                      <div className="flex h-[350px]">
                        {/* Sidebar Lines */}
                        <div className="w-12 bg-[#252526] border-r border-[#333] flex flex-col items-center pt-4 gap-4 text-slate-500">
                          <div className="text-xs font-mono">1</div>
                          <div className="text-xs font-mono">2</div>
                          <div className="text-xs font-mono">3</div>
                          <div className="text-xs font-mono">4</div>
                        </div>

                        {/* Main Visual Area */}
                        <div className="flex-1 relative">
                          <Image
                            src="/shetech-gallery/KinserStudios-SheTech25-1414.jpg"
                            alt="Students coding"
                            fill
                            className="object-cover opacity-80"
                          />
                          {/* Overlay Code Snippet */}
                          <div className="absolute inset-0 bg-[#1E1E1E]/40 backdrop-blur-[1px] p-6 font-mono text-sm leading-6">
                            <div className="text-[#569CD6]">function <span className="text-[#DCDCAA]">innovate</span>() &#123;</div>
                            <div className="pl-4 text-[#9CDCFE]">const <span className="text-[#4FC1FF]">future</span> = <span className="text-[#CE9178]">'bright'</span>;</div>
                            <div className="pl-4 text-[#C586C0]">return</div>
                            <div className="pl-8 text-[#DCDCAA]">buildNewWorld(<span className="text-[#9CDCFE]">future</span>);</div>
                            <div className="text-[#569CD6]">&#125;</div>

                            {/* Success Dialog Overlay */}
                            <div className="absolute bottom-6 right-6 bg-[#252526] border border-[#333] rounded-lg p-4 shadow-xl max-w-[200px] animate-pulse">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-[#27C93F]"></div>
                                <span className="text-xs text-white font-bold">Build Succeeded</span>
                              </div>
                              <div className="text-[10px] text-slate-400">
                                Project deployed successfully. Ready for demo.
                              </div>
                            </div>
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
