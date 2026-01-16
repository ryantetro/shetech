'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

// Custom hook for counting animation
function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [hasStarted, end, duration]);

  return { count, ref };
}

// Stats data
const stats = [
  { value: 12000, suffix: '+', label: 'Participants', description: 'Girls engaged in STEM' },
  { value: 95, suffix: '%', label: 'More Likely', description: 'To pursue STEM careers' },
  { value: 10000, suffix: '+', label: 'Network', description: 'Women & men in tech' },
  { value: 3, suffix: '', label: 'States', description: 'Utah, Idaho, Colorado' },
];

// WTC Programs data
const programs = [
  {
    title: 'Women Tech Awards',
    description: 'Honoring women who drive innovation and create impact.',
    icon: '🏆',
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Career Acceleration Programs',
    description: 'Supporting professional women to advance and lead in tech.',
    icon: '🚀',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Boardroom & Leadership Programs',
    description: 'Preparing women to lead organizations and shape the future of technology.',
    icon: '💼',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'SheTech',
    description: 'Inspiring and preparing the next generation of women in STEM.',
    icon: '⚡',
    color: 'from-[#BD1C81] to-purple-600',
  },
];

// WTC pillars - Activate, Build, Lead
const wtcPillars = [
  { title: 'Activate', description: 'Inspiring the next generation', icon: '✨' },
  { title: 'Build', description: 'Creating professional pathways', icon: '🏗️' },
  { title: 'Lead', description: 'Elevating women in leadership', icon: '🚀' },
];

export default function AboutWomenTechCouncilPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-24 bg-[#FDF2F8]">
          {/* Clean gradient background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FDF2F8] to-white"></div>
          </div>

          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="heroDots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#BD1C81" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#heroDots)" />
            </svg>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-4xl mx-auto">
                <AnimatedSection direction="up" delay={0} initialLoad>
                  {/* Header Text */}
                  <div className="flex justify-center mb-10 sm:mb-12">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1] mb-2">
                        Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BD1C81] to-pink-500">Women.</span>
                      </h1>
                      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1]">
                        Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BD1C81] to-pink-500">Talent Pipeline.</span>
                      </h1>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="prose prose-lg mx-auto text-gray-600 mb-10">
                    <p className="lead text-xl sm:text-2xl font-light text-gray-500 mb-6">
                      The Women Tech Council (WTC) is a national organization headquartered in Utah that amplifies the economic impact of women in technology.
                    </p>
                    <p className="text-base sm:text-lg">
                      Through programs that <strong>Activate</strong>, <strong>Build</strong>, and <strong>Lead</strong>, WTC creates a community of women and allies driving innovation, growth, and inclusion across every sector.
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a
                      href="#programs"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#BD1C81] text-white font-semibold shadow-lg hover:bg-[#a02f99] hover:scale-105 transition-all duration-300"
                    >
                      Our Programs
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </a>
                    <a
                      href="https://womentechcouncil.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white border border-pink-100 text-[#BD1C81] font-semibold hover:bg-pink-50 transition-all duration-300"
                    >
                      Learn More About Women Tech Council
                    </a>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section with WTC Image */}
        <section className="relative py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 sm:p-12 flex flex-col justify-center relative z-10">
                      <h3 className="text-3xl font-bold text-white mb-6">
                        Activate. <span className="text-[#BD1C81]">Build.</span> Lead.
                      </h3>
                      <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        SheTech is part of WTC’s <strong>Activate</strong> pillar—designed to inspire and prepare the next generation of women in STEM. We are building the pipeline from high school to the boardroom.
                      </p>

                      {/* Mini Stats */}
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <div className="text-3xl font-black text-[#BD1C81]">10K+</div>
                          <div className="text-white/60 text-sm">Network Members</div>
                        </div>
                        <div>
                          <div className="text-3xl font-black text-pink-400">3</div>
                          <div className="text-white/60 text-sm">Key Pillars</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-64 lg:h-auto min-h-[300px]">
                      {/* Using a gallery image representing community/leadership */}
                      <Image
                        src="/shetech-gallery/KinserStudios-SheTech25-3332.jpg"
                        alt="Women Tech Council Community"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent lg:bg-gradient-to-l opacity-80 lg:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="relative py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                {/* Section Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-[#BD1C81] text-sm font-medium mb-4">
                    <span>🚀</span>
                    Our Impact
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Driving <span className="bg-gradient-to-r from-[#BD1C81] to-pink-500 bg-clip-text text-transparent">Innovation</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    From high school classrooms to corporate boardrooms, our programs create impact at every stage of a career.
                  </p>
                </div>

                {/* Programs Grid - Clean Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-16">
                  {programs.map((program, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-6 items-start">
                      <div className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-3xl shadow-md rotate-3`}>
                        {program.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {program.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Learn More Banner */}
                <div className="bg-white border border-pink-100 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDF2F8] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Join the Council</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                      Become part of the community that is shaping the future of technology.
                    </p>
                    <a
                      href="https://womentechcouncil.com"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#BD1C81] text-white font-bold hover:bg-[#a02f99] transition-colors shadow-md"
                    >
                      Learn More About Women Tech Council
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Compact CTA Banner */}
        <section className="relative py-8 sm:py-10 bg-[#BD1C81] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Explore The Possibilities
                  </h3>
                  <p className="text-sm text-white/80">
                    SheTech helps girls find pathways to careers in STEM
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link
                    href="/students/explorer-day"
                    className="inline-flex items-center gap-2 bg-white text-[#BD1C81] hover:bg-pink-50 font-bold whitespace-nowrap px-5 py-2.5 rounded-lg text-sm transition-all cursor-pointer shadow-lg"
                  >
                    Get Involved
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
