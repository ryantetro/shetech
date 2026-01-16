'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

// More info form URL
const INFO_FORM_URL = 'https://docs.google.com/forms/d/1VvXunGCp2BqmgA5smG7uDL72glb_FTLkT7wtfKa8Tnw/viewform';

// Skills data - Updated to map new copy where applicable
const skills = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Start a Company',
    description: 'Learn how to validate your ideas and launch a real startup.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Collaborate with Teams',
    description: 'Build products and solve problems together with diverse groups.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: 'Design Marketing Strategies',
    description: 'Create campaigns and test business models in the real world.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Develop Leadership Skills',
    description: 'Connect with entrepreneurs and lead with confidence.',
  },
];

export default function EntrepreneurApprenticeshipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Full-Width Hero Section - Sleek Dark Tech Theme */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
          {/* Background Image/Gradient */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/shetech-gallery/KinserStudios-SheTech25-3408.jpg')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
          </div>

          <div className="relative container mx-auto px-6 sm:px-6 lg:px-8 z-10 h-full">
            <div className="max-w-3xl text-left">
              <AnimatedSection direction="down" delay={100} initialLoad={true}>
                <div className="mb-10">
                  <span className="block text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-4 font-medium">A Partnership Between</span>
                  <div className="flex items-center gap-6">
                    {/* SheTech Logo */}
                    <div className="relative w-32 h-10 opacity-90">
                      <Image
                        src="/logo.png"
                        alt="SheTech"
                        fill
                        className="object-contain brightness-0 invert"
                      />
                    </div>

                    {/* Divider */}
                    <div className="h-8 w-px bg-white/20"></div>

                    {/* Album VC Logo */}
                    <div className="relative w-32 h-10 opacity-90">
                      <Image
                        src="/image.png"
                        alt="Album VC"
                        fill
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={200} initialLoad={true}>
                <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm">
                  <span className="text-indigo-400 font-bold text-xs uppercase tracking-widest">High School Juniors & Seniors</span>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={300} initialLoad={true}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-white">
                  Tech Entrepreneur <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                    Apprenticeship
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={500} initialLoad={true}>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
                  A free, four‑week program designed for high school juniors and seniors. Developed with <strong className="text-white font-semibold">Album VC</strong>, this apprenticeship teaches you to validate ideas, build products, and connect with industry founders.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={700} initialLoad={true}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={INFO_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 uppercase tracking-wide"
                  >
                    Apply Now
                  </a>
                  <a
                    href="#learn-more"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 text-white font-bold text-lg hover:bg-white/10 border border-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    Learn More
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* What You'll Learn - Sleek Minimalist Grid (Matching System Style) */}
        <section id="learn-more" className="py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-20 text-center">
              <AnimatedSection direction="up">
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">what you&apos;ll learn</h2>
                <div className="w-24 h-1.5 bg-indigo-500 mx-auto rounded-full mb-8"></div>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
                  You&apos;ll learn directly from industry founders and leaders, setting yourself on a path to a career in tech.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
              {skills.map((skill, index) => (
                <AnimatedSection key={index} delay={index * 100} direction="up">
                  <div className="group flex items-start gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
                    {/* Icon Wrapper */}
                    <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      {skill.icon}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{skill.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership & Call to Action Footer */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <AnimatedSection direction="up">
              <span className="text-indigo-400 font-bold tracking-widest uppercase mb-4 block">A Partnership Between</span>
              <h2 className="text-3xl sm:text-4xl font-white text-white mb-10">
                Women Tech Council <span className="text-slate-600 mx-4">&times;</span> Album VC
              </h2>

              <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 sm:p-14">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Ready to launch your future?</h3>
                <p className="text-slate-300 text-lg mb-10">
                  Don&apos;t miss this opportunity to work with real startups and build your network.
                </p>
                <a
                  href={INFO_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-slate-900 font-black text-lg hover:bg-slate-100 transition-all duration-300 shadow-xl hover:scale-105 transform"
                >
                  APPLY FOR FREE
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
