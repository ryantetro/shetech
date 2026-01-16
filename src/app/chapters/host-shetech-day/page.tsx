'use client';

import React from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, StickerHeader, GraphPaperBackground, Button } from '@/components/ui';

export default function HostSheTechDayPage() {
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
                    <StickerHeader label="National Network" title="About Chapters" angle={-2} variant="magenta" />
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#BA38B2] mb-6 leading-tight uppercase">
                    What Is <br /> A <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BA38B2] to-pink-500">SheTech Chapter?</span>
                  </h1>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                    A SheTech Chapter is a licensed local program that runs SheTech Explorer Day and related activities—connecting schools, companies, and mentors to help girls see themselves in STEM.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-12">
                    <a href="mailto:kristin@womentechcouncil.com">
                      <Button
                        size="lg"
                        className="bg-[#BA38B2] text-white hover:bg-[#a02f99] font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide flex items-center gap-2"
                      >
                        Apply to Start a Chapter
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </Button>
                    </a>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-[#BA38B2] uppercase tracking-wide">Why Start a Chapter?</h3>
                    <ul className="grid grid-cols-1 gap-4">
                      <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-[#BA38B2]/10 flex items-center justify-center shrink-0 text-[#BA38B2]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">Bring SheTech’s proven model</p>
                          <p className="text-sm text-slate-500">To your state or region</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-[#BA38B2]/10 flex items-center justify-center shrink-0 text-[#BA38B2]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">Inspire hundreds (or thousands)</p>
                          <p className="text-sm text-slate-500">Of students annually</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-[#BA38B2]/10 flex items-center justify-center shrink-0 text-[#BA38B2]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">Engage local community</p>
                          <p className="text-sm text-slate-500">Companies, educators, and mentors</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>

              {/* Hero Visual - Network Map Card */}
              {/* Hero Visual - Community Collage */}
              {/* Hero Visual - Static Bubble Cluster */}
              {/* Hero Visual - Static Bubble Cluster */}
              <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end">
                <AnimatedSection direction="left" delay={200}>
                  <div className="relative w-[320px] h-[320px] md:w-[550px] md:h-[550px]">
                    {/* Decorative Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#BA38B2]/5 rounded-full blur-[60px] md:blur-[80px]"></div>

                    {/* Main Circle - Large (Explorer Day) */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 md:w-72 md:h-72 z-20 hover:z-30 transition-all duration-500">
                      <div className="relative w-full h-full rounded-full border-[4px] md:border-[6px] border-white shadow-2xl overflow-hidden group">
                        <Image
                          src="/shetech-gallery/KinserStudios-Womentechcouncil-shetech-explorerday-1109.jpg"
                          alt="SheTech Chapter Event"
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    {/* Top Right Bubble - Medium (Mentorship) */}
                    <div className="absolute top-4 right-4 md:top-20 md:right-10 w-24 h-24 md:w-40 md:h-40 z-10 hover:z-30 transition-all duration-500 hover:-translate-y-2">
                      <div className="relative w-full h-full rounded-full border-[3px] md:border-[5px] border-white shadow-xl overflow-hidden group">
                        <Image
                          src="/shetech-gallery/KinserStudios-SheTech25-2510.jpg"
                          alt="Mentorship"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    {/* Bottom Left Bubble - Medium (Workshops) */}
                    <div className="absolute bottom-4 left-2 md:bottom-24 md:left-4 w-28 h-28 md:w-44 md:h-44 z-10 hover:z-30 transition-all duration-500 hover:-translate-y-2">
                      <div className="relative w-full h-full rounded-full border-[3px] md:border-[5px] border-white shadow-xl overflow-hidden group">
                        <Image
                          src="/shetech-gallery/KinserStudios-SheTech25-1414.jpg"
                          alt="Workshops"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    {/* Small Bubble - Top Left (Detail) */}
                    <div className="absolute top-10 left-8 md:top-32 md:left-16 w-16 h-16 md:w-24 md:h-24 z-0 hover:z-30 transition-all duration-500 hover:-translate-y-2">
                      <div className="relative w-full h-full rounded-full border-[2px] md:border-[4px] border-white shadow-lg overflow-hidden group">
                        <Image
                          src="/shetech-gallery/KinserStudios-SheTech25-2532.jpg"
                          alt="Students"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    {/* Badge Bubble - Bottom Right */}
                    <div className="absolute bottom-4 right-8 md:bottom-12 md:right-16 w-20 h-20 md:w-28 md:h-28 z-20 hover:scale-110 transition-transform duration-500">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#BA38B2] to-pink-500 border-[3px] md:border-[4px] border-white shadow-xl flex items-center justify-center">
                        <div className="text-white text-center leading-tight">
                          <span className="block text-[8px] md:text-[10px] uppercase opacity-90 font-medium tracking-wider">Join The</span>
                          <span className="block font-black text-xs md:text-sm tracking-wide">NETWORK</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Host Your Own Section */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-[#F5F5FA] rounded-[3rem] p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#BA38B2]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <AnimatedSection direction="up" delay={200}>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-[#BA38B2] rounded-2xl rotate-3 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  </div>
                  <h2 className="text-3xl font-black text-[#BA38B2] mb-4 uppercase">Host Your Own <br />SheTech Explorer Day</h2>
                  <p className="text-lg text-slate-600 mb-8 font-medium max-w-2xl mx-auto">
                    SheTech Explorer Day is the centerpiece of every chapter—an immersive, one-day experience where high school girls explore STEM careers through hands-on workshops, mentor interactions, and team challenges.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">Turnkey Event Model</h4>
                      <p className="text-sm text-slate-500">Comprehensive guides and templates for seamless execution</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">Engagement Tools</h4>
                      <p className="text-sm text-slate-500">Resources for authentic sponsor and company partnerships</p>
                    </div>
                  </div>

                  <a href="mailto:kristin@womentechcouncil.com">
                    <Button
                      size="lg"
                      className="bg-[#BA38B2] text-white hover:bg-[#a02f99] font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide"
                    >
                      Convert Your Community
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Join the Movement CTA */}
        <section className="py-24 relative overflow-hidden">
          {/* Background - Dark Magenta Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D0A2E] via-[#5C1455] to-[#BD1C81]"></div>

          {/* Abstract Shapes */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#BD1C81] opacity-20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600 opacity-20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection direction="up" delay={0}>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight">
                  Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white">Movement</span>
                </h2>

                <p className="text-xl text-pink-100/90 leading-relaxed mb-8 font-medium">
                  Across the U.S., SheTech is growing a network of chapters dedicated to empowering girls in STEM—and your community could be next.
                </p>

                <p className="text-lg text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto">
                  Whether you’re an educator, company, nonprofit, or tech leader, you can bring SheTech Explorer Day to life where you live. Start your chapter. Inspire your state. Build the future.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="mailto:kristin@womentechcouncil.com"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-[#BD1C81] rounded-full font-bold text-lg shadow-2xl hover:bg-pink-50 transition-all duration-300 hover:scale-105 hover:shadow-[#BD1C81]/50"
                  >
                    Apply to Become a SheTech Chapter
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
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
