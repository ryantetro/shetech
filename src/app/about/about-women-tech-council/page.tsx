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
        {/* Hero Section - Modern Editorial */}
        <section className="relative min-h-screen bg-slate-900 text-white overflow-hidden flex items-center">
          {/* Abstract Geometric Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-800 transform skew-x-12 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary-900 to-transparent opacity-50"></div>
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-900/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8">
                <AnimatedSection initialLoad direction="right" delay={0}>
                  <div className="border-l-4 border-primary-500 pl-6 mb-8">
                    <span className="block text-primary-400 font-bold tracking-widest uppercase text-sm mb-2">
                      Women Tech Council
                    </span>
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter text-white mb-6">
                      SHE<span className="text-primary-500">TECH</span>
                    </h1>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-300 mb-8 leading-tight">
                    The Largest Industry-Led <br />
                    <span className="font-bold text-white">STEM Platform for High School Girls</span>
                  </h2>

                  <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
                    We are activating, engaging, and inspiring the next generation of female leaders. Through hands-on experiences and mentorship, we turn "I can't" into "I will".
                  </p>

                  <div className="flex flex-wrap gap-6">
                    <a
                      href="#programs"
                      className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-primary-500 hover:text-primary-400 transition-colors pb-1"
                    >
                      Explore Programs
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-slate-400 font-medium hover:text-white transition-colors pb-1"
                    >
                      Partner With Us
                    </a>
                  </div>
                </AnimatedSection>
              </div>

              {/* Decorative Statistic/Element */}
              <div className="lg:col-span-4 hidden lg:block">
                <AnimatedSection initialLoad direction="left" delay={200}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 blur-2xl opacity-20 transform rotate-6"></div>
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
                      <div className="text-5xl font-black text-white mb-2">12K+</div>
                      <div className="text-sm text-slate-400 uppercase tracking-wider font-bold">Active Participants</div>
                      <div className="mt-6 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-primary-500"></div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Combined Stats & Challenge Section */}
        <section className="py-20 sm:py-24 bg-white relative">
          {/* Decorative Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-slate-50 to-transparent"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection>
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">
                    Impact That Matters
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4"></div>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    SheTech is transforming the STEM pipeline, one girl at a time, creating a future where technology is inclusive and diverse.
                  </p>
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                  <div className="relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
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

                          return (
                            <div ref={ref} className="relative group">
                              {index < 3 && (
                                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                              )}

                              <div className="flex flex-col items-center text-center">
                                <div className="mb-4 p-3 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300 text-primary-400">
                                  {stat.icon}
                                </div>

                                <div className="text-sm font-bold text-primary-300 uppercase tracking-wider mb-2">
                                  {stat.label}
                                </div>

                                {stat.type === 'percentage' ? (
                                  <div className="text-5xl sm:text-6xl font-black text-white mb-2 tracking-tight">
                                    {animatedValue}%
                                  </div>
                                ) : (
                                  <div className="text-5xl sm:text-6xl font-black text-white mb-2 tracking-tight">
                                    {formatNumber(count)}
                                  </div>
                                )}

                                <div className="text-sm text-slate-400 leading-relaxed max-w-[180px]">
                                  {stat.description}
                                </div>
                              </div>
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
                <div className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100 shadow-lg">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0 p-4 bg-white rounded-full shadow-md text-primary-600">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Why It Matters</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">
                        Today every company is a technology company. SheTech demonstrates to girls that no matter what they are passionate about, <strong className="text-primary-600">technology is the power to achieve it</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-primary-100/40 to-transparent rounded-full blur-3xl -mr-40 -mt-40"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-secondary-100/40 to-transparent rounded-full blur-3xl -ml-20 -mb-20"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection>
                {/* Header */}
                <div className="text-center mb-20">
                  <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3 block">Our Ecosystem</span>
                  <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                    Comprehensive Programs
                  </h2>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    SheTech operates with the school year, starting in September, offering a continuous pathway of engagement to inspire and support girls in STEM.
                  </p>
                </div>

                {/* Program Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {programs.map((program, index) => {
                    // Color palette for each card
                    const colorSchemes = [
                      { border: 'hover:border-primary-400', iconBg: 'bg-primary-50', iconColor: 'text-primary-600' },
                      { border: 'hover:border-secondary-400', iconBg: 'bg-secondary-50', iconColor: 'text-secondary-600' },
                      { border: 'hover:border-tertiary-400', iconBg: 'bg-tertiary-50', iconColor: 'text-tertiary-600' },
                      { border: 'hover:border-amber-400', iconBg: 'bg-amber-50', iconColor: 'text-amber-600' },
                      { border: 'hover:border-emerald-400', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
                      { border: 'hover:border-indigo-400', iconBg: 'bg-indigo-50', iconColor: 'text-indigo-600' },
                    ];
                    const colors = colorSchemes[index % colorSchemes.length];

                    return (
                      <AnimatedSection key={index} delay={index * 100}>
                        <div className={`group h-full bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${colors.border}`}>
                          <div className={`w-16 h-16 rounded-2xl ${colors.iconBg} ${colors.iconColor} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                            {program.icon}
                          </div>

                          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                            {program.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {program.description}
                          </p>
                        </div>
                      </AnimatedSection>
                    );
                  })}
                </div>

                {/* Plus More Opportunities - Integrated Design */}
                <div className="relative">
                  <div className="bg-slate-900 rounded-3xl p-10 sm:p-12 text-white relative overflow-hidden shadow-2xl text-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-secondary-900 opacity-50"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-4">Plus More Opportunities</h3>
                      <p className="text-lg text-slate-300 mb-0">
                        Information about jobs, scholarships, and opportunities to help girls find pathways to careers in STEM.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Impact Section - Unique Design */}
        <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Left Side - Large Statistic Display */}
                  <div className="relative order-2 lg:order-1">
                    <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 relative">
                      <div className="text-center">
                        <div className="text-[10rem] sm:text-[12rem] font-black leading-none bg-gradient-to-br from-primary-400 to-secondary-500 bg-clip-text text-transparent tracking-tighter">
                          95%
                        </div>
                        <div className="text-2xl font-bold text-slate-900 mt-[-1rem] relative z-10">
                          More Likely to Pursue STEM
                        </div>
                        <div className="text-slate-500 mt-2 font-medium">
                          After participating in SheTech programs
                        </div>
                      </div>

                      {/* Visual Progress Bar */}
                      <div className="mt-12">
                        <div className="flex justify-between text-sm font-semibold text-slate-500 mb-2">
                          <span>Before SheTech</span>
                          <span className="text-primary-600">After SheTech</span>
                        </div>
                        <div className="h-4 bg-slate-200 rounded-full overflow-hidden relative">
                          <div className="absolute inset-0 w-full h-full bg-slate-200"></div>
                          <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary-500 to-secondary-500 w-[95%] rounded-full shadow-[0_0_15px_rgba(0,166,206,0.5)]"></div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 rotate-6 hidden sm:block">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="font-bold text-slate-800 text-sm">Proven Results</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="order-1 lg:order-2">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                      Measurable <span className="text-primary-600">Impact</span>
                    </h2>

                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                      <p>
                        SheTech is impacting the talent pipeline and <strong className="text-slate-900">increasing the number of girls pursuing STEM degrees</strong> as they graduate from high school.
                      </p>

                      <div className="pl-6 border-l-4 border-primary-500 py-2">
                        <p className="italic text-slate-700">
                          "Each time they engage in a SheTech activity, the likelihood of helping them see opportunities increases."
                        </p>
                      </div>

                      <p>
                        SheTech helps girls recognize the opportunities they can pursue in STEM and inspires them to pursue their dreams in tech.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Women Tech Council Section */}
        <section className="py-24 sm:py-32 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                  <div className="lg:col-span-7">
                    <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3 block">Who We Are</span>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900 leading-tight">
                      About Women Tech Council
                    </h2>
                    <div className="prose prose-lg text-slate-600 mb-10">
                      <p className="mb-6">
                        The <strong className="text-slate-900">Women Tech Council (WTC)</strong> is a national organization focused on the economic impact of women in driving high growth for the technology sector through developing programs that propel the economic pipeline from high school to the board room.
                      </p>
                      <p>
                        WTC offers mentoring, visibility, opportunities and networking to more than <strong>10,000 women and men</strong> working in technology to create business environments focused on high performance, where men and women can succeed.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        { title: 'Mentoring', desc: 'Connecting future leaders with industry experts', icon: 'M' },
                        { title: 'Visibility', desc: 'Showcasing talent and achievements', icon: 'V' },
                        { title: 'Networking', desc: 'Building powerful professional connections', icon: 'N' },
                        { title: 'Growth', desc: 'Driving economic impact in tech', icon: 'G' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                          <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center font-bold text-lg shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                            <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="bg-slate-900 rounded-[2rem] p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl h-full flex flex-col justify-between">
                      {/* Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900"></div>

                      {/* Map Decoration */}
                      <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path d="M0 100 L100 0" stroke="white" strokeWidth="0.5" />
                          <path d="M20 100 L100 20" stroke="white" strokeWidth="0.5" />
                          <path d="M0 80 L80 0" stroke="white" strokeWidth="0.5" />
                        </svg>
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-6">Regional Presence</h3>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                          The WTC SheTech program operates across key technology hubs in the mountain west:
                        </p>

                        <div className="space-y-4 mb-10">
                          {['Utah', 'Idaho', 'Colorado'].map((state, index) => (
                            <div key={index} className="flex items-center gap-4 group">
                              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-primary-300 group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all duration-300">
                                {index + 1}
                              </div>
                              <span className="text-xl font-semibold text-white group-hover:translate-x-2 transition-transform duration-300">{state}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="relative z-10 mt-auto">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
                          <p className="text-sm text-slate-300 mb-3">Interested in partnering with WTC on SheTech in your region?</p>
                          <a
                            href="mailto:kristin@womentechcouncil.com"
                            className="inline-flex items-center gap-2 text-primary-300 font-semibold hover:text-white transition-colors"
                          >
                            Contact us
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 sm:py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-primary-600 to-secondary-600 shadow-2xl">
                  {/* Abstract Shapes */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                  </div>

                  <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
                      Explore The Possibilities
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                      SheTech helps girls find pathways to careers in STEM through classes, events, role models, mentors and internships in STEM.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                      <a
                        href="/students/explorer-day"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full bg-white text-primary-600 hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        Get Involved
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                      <a
                        href="mailto:kristin@womentechcouncil.com"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300"
                      >
                        Contact Us
                      </a>
                    </div>
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
