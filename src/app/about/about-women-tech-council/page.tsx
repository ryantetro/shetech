'use client';

import React, { useEffect, useRef, useState } from 'react';
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
      
      // Easing function for smooth animation
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

export default function AboutWomenTechCouncilPage() {
  const stats = [
    {
      number: '12,000+',
      label: 'Participants',
      description: 'Girls engaged in STEM',
      type: 'count',
      numericValue: 12000,
      suffix: '+',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      number: '95%',
      label: 'More Likely',
      description: 'To pursue STEM after participating',
      type: 'percentage',
      value: 95,
      numericValue: 95,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      number: '95%',
      label: 'Don\'t Know',
      description: 'A woman in tech before SheTech',
      type: 'percentage',
      value: 95,
      numericValue: 95,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      number: '3',
      label: 'States',
      description: 'Utah, Idaho, Colorado',
      type: 'count',
      numericValue: 3,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const programs = [
    {
      title: 'SheTech Explorer Day',
      description: 'Annual day bringing together all participants for hands-on experiences',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'SheTech Clubs',
      description: 'Student-led clubs in high schools across our regions',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Internship Program',
      description: 'Real-world experience with tech companies and mentors',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Student Board',
      description: 'Leadership opportunities at every high school',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Educator Board',
      description: 'Supporting teachers and educators in STEM education',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Monthly Events',
      description: 'Tech company visits, role models, and networking opportunities',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-[600px] flex items-center">
          {/* Background Image with Blur */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/about/shetech.png)',
                filter: 'blur(4px)',
                transform: 'scale(1.05)',
              }}
            ></div>
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
            {/* Additional gradient overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-transparent to-secondary-900/40"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <AnimatedSection initialLoad direction="up" delay={0}>
                <div className="mb-6">
                  <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-bold rounded-full border-2 border-white/30 shadow-lg">
                    #ImagineThePossibilities
                  </span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="block text-white mb-2 drop-shadow-2xl">SheTech</span>
                  <span className="block bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300 bg-clip-text text-transparent drop-shadow-lg">
                    The Largest Industry-Led
                  </span>
                  <span className="block text-white text-4xl sm:text-5xl lg:text-6xl mt-3 drop-shadow-2xl">
                    STEM Platform for High School Girls
                  </span>
                </h1>
                
                <p className="text-xl sm:text-2xl text-white/95 mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
                  Women Tech Council&apos;s SheTech program is the largest industry-led STEM program to activate, engage and inspire high school girls into STEM degrees and successful careers.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="#programs"
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-400 hover:to-primary-500 shadow-xl shadow-primary-500/30 transition-all duration-300 hover:scale-105"
                  >
                    Explore Programs
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 transition-all duration-300 shadow-lg"
                  >
                    Partner With Us
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Combined Stats & Challenge Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection>
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">
                    Impact That Matters
                  </h2>
                  <p className="text-sm text-gray-600">
                    SheTech is transforming the STEM pipeline, one girl at a time
                  </p>
                </div>

                <div className="bg-slate-900 rounded-xl p-6 sm:p-8 text-white relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-violet-500/10 rounded-full -ml-12 -mb-12"></div>
                  
                  <div className="relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {stats.map((stat, index) => {
                        const StatItem = () => {
                          const { count, ref } = useCountUp(stat.numericValue || 0, 2000, true);
                          
                          const formatNumber = (num: number) => {
                            if (stat.type === 'percentage') {
                              return `${num}%`;
                            }
                            if (stat.numericValue && stat.numericValue >= 1000) {
                              return `${num.toLocaleString()}${stat.suffix || ''}`;
                            }
                            return `${num}${stat.suffix || ''}`;
                          };

                          const animatedValue = count;
                          const isChallengeCard = index === 2;

                          return (
                            <div ref={ref} className={index < 3 ? "border-r border-white/10 pr-6" : ""}>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="text-emerald-400">
                                  {stat.icon}
                                </div>
                                <div className="text-xs font-medium text-emerald-400 uppercase tracking-wide">
                                  {stat.label}
                                </div>
                              </div>

                              {stat.type === 'percentage' ? (
                                <div className="space-y-2">
                                  <div className="text-4xl font-bold text-emerald-400 mb-1">{animatedValue}%</div>
                                  <div className="text-xs text-slate-400 leading-snug">
                                    {stat.description}
                                  </div>
                                  {isChallengeCard && (
                                    <div className="pt-3 border-t border-white/10 mt-3">
                                      <p className="text-xs text-slate-300 leading-relaxed mb-2">
                                        <strong className="text-emerald-400">SheTech changes that</strong> with thousands of role models, tech companies and mentors.
                                      </p>
                                      <div className="inline-flex items-center px-2.5 py-1 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                                        <span className="text-emerald-400 font-semibold text-xs">#YourDreamsInTech</span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <div>
                                  <div className="text-4xl font-bold text-emerald-400 mb-1 leading-none">
                                    {formatNumber(count)}
                                  </div>
                                  <div className="text-xs text-slate-400">{stat.description}</div>
                                </div>
                              )}
                            </div>
                          );
                        };

                        return (
                          <AnimatedSection key={index} delay={index * 100}>
                            <StatItem />
                          </AnimatedSection>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Challenge Narrative - Below Stats */}
                <div className="mt-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-5 border-l-4 border-emerald-500">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    Today every company is a technology company and SheTech demonstrates to girls that no matter what they are passionate about, <strong className="text-emerald-600">technology is part of it</strong>.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-teal-50/40 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-3xl"></div>
          </div>

          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="programsPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="2" fill="currentColor" className="text-indigo-600"/>
                  <path d="M30 0 L30 60 M0 30 L60 30" stroke="currentColor" strokeWidth="0.5" className="text-indigo-600"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#programsPattern)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection>
                {/* Header */}
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center gap-3 mb-6">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-500"></div>
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                      Our Programs
                    </h2>
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-500"></div>
                  </div>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    SheTech operates with the school year, starting in September, and includes a comprehensive range of programs designed to inspire and engage
                  </p>
                </div>

                {/* Program Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {programs.map((program, index) => {
                    // Color palette for each card
                    const colorSchemes = [
                      { bg: 'from-teal-500 to-cyan-500', hoverText: 'group-hover:text-teal-600' },
                      { bg: 'from-orange-500 to-amber-500', hoverText: 'group-hover:text-orange-600' },
                      { bg: 'from-purple-500 to-pink-500', hoverText: 'group-hover:text-purple-600' },
                      { bg: 'from-amber-500 to-yellow-500', hoverText: 'group-hover:text-amber-600' },
                      { bg: 'from-indigo-500 to-blue-500', hoverText: 'group-hover:text-indigo-600' },
                      { bg: 'from-emerald-500 to-teal-500', hoverText: 'group-hover:text-emerald-600' },
                    ];
                    const colors = colorSchemes[index % colorSchemes.length];

                    return (
                      <AnimatedSection key={index} delay={index * 100}>
                        <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                          {/* Gradient Background on Hover */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                          
                          {/* Glow Effect */}
                          <div className={`absolute -inset-1 bg-gradient-to-r ${colors.bg} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>

                          {/* Icon Container */}
                          <div className={`relative mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${colors.bg} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                            <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-500"></div>
                            <div className="relative z-10">
                              {program.icon}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="relative z-10">
                            <h3 className={`text-xl font-bold mb-3 text-gray-900 ${colors.hoverText} transition-colors duration-300`}>
                              {program.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                              {program.description}
                            </p>
                          </div>

                          {/* Decorative Corner Element */}
                          <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-500`}></div>
                        </div>
                      </AnimatedSection>
                    );
                  })}
                </div>

                {/* Plus More Opportunities - Integrated Design */}
                <div className="relative">
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <defs>
                          <pattern id="opportunitiesPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1.5" fill="currentColor"/>
                            <path d="M20 0 L20 40 M0 20 L40 20" stroke="currentColor" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#opportunitiesPattern)" />
                      </svg>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>

                    <div className="relative z-10 text-center">
                      <div className="inline-flex items-center justify-center gap-2 mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h3 className="text-2xl sm:text-3xl font-bold">Plus More Opportunities</h3>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <p className="text-lg sm:text-xl opacity-95 max-w-3xl mx-auto leading-relaxed">
                        Information about jobs, scholarships, and opportunities to help girls find pathways to careers in STEM
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Impact Section - Unique Design */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Side - Large Statistic Display */}
                  <div className="lg:col-span-5">
                    <div className="relative">
                      {/* Large 95% Display */}
                      <div className="text-center lg:text-left">
                        <div className="inline-block relative">
                          <div className="text-8xl sm:text-9xl font-black bg-gradient-to-br from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent leading-none mb-2">
                            95%
                          </div>
                          <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-400/20 rounded-full blur-xl"></div>
                        </div>
                        <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                          More Likely to Pursue STEM
                        </div>
                        <div className="text-sm text-gray-600 max-w-xs mx-auto lg:mx-0">
                          After participating in SheTech programs
                        </div>
                      </div>

                      {/* Visual Progress Bar */}
                      <div className="mt-8 space-y-3">
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                          <span>Before SheTech</span>
                          <span>After SheTech</span>
                        </div>
                        <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-400"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500" style={{ width: '95%' }}></div>
                          <div className="absolute right-[5%] top-0 bottom-0 w-0.5 bg-white"></div>
                        </div>
                        <div className="text-xs text-gray-500 text-center">
                          Each engagement increases opportunity recognition
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="lg:col-span-7">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-200/50 shadow-lg">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                          Measurable Impact
                        </h2>
                      </div>

                      <div className="space-y-5">
                        <p className="text-base text-gray-700 leading-relaxed">
                          SheTech is impacting the talent pipeline and <strong className="text-emerald-600">increasing the number of girls pursuing STEM degrees</strong> as they graduate from high school.
                        </p>

                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-5 border-l-4 border-emerald-500">
                          <p className="text-base text-gray-800 leading-relaxed mb-3">
                            <strong className="text-emerald-600">Each time they engage</strong> in a SheTech activity, the likelihood of helping them see opportunities increases.
                          </p>
                        </div>

                        <p className="text-base text-gray-700 leading-relaxed font-medium">
                          SheTech helps girls recognize the opportunities they can pursue in STEM and inspires them to pursue their dreams in tech.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Women Tech Council Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                      About Women Tech Council
                    </h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        The <strong className="text-primary-700">Women Tech Council (WTC)</strong> is a national organization focused on the economic impact of women in driving high growth for the technology sector through developing programs that propel the economic pipeline from high school to the board room.
                      </p>
                      <p>
                        WTC offers mentoring, visibility, opportunities and networking to more than <strong>10,000 women and men</strong> working in technology to create business environments focused on high performance, where men and women can succeed.
                      </p>
                      <p>
                        This propels individual careers and the talent pipeline by ensuring a <strong>strong, diverse, and entrepreneurial technology workforce</strong>.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border-2 border-primary-200">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Regional Presence</h3>
                    <p className="text-gray-700 mb-6">
                      The WTC SheTech program operates in:
                    </p>
                    <div className="space-y-3 mb-8">
                      {['Utah', 'Idaho', 'Colorado'].map((state, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <span className="text-lg font-semibold text-gray-900">{state}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-primary-200">
                      <p className="text-sm text-gray-600 mb-2">Interested in partnering with WTC on SheTech in your region?</p>
                      <a
                        href="mailto:kristin@womentechcouncil.com"
                        className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                      >
                        Contact us at kristin@womentechcouncil.com
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 sm:py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
          {/* Tech Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="ctaPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaPattern)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Explore The Possibilities
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  SheTech helps girls find pathways to careers in STEM through classes, events, role models, mentors and internships in STEM.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/students/explorer-day"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-400 hover:to-primary-500 shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Get Involved
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a
                    href="mailto:kristin@womentechcouncil.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-white/10 backdrop-blur-md text-white border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    Contact Us
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
