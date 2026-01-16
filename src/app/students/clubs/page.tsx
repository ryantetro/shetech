'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, Button, StickerHeader, GraphPaperBackground } from '@/components/ui';

// Pre-calculate floating icon positions
const floatingIcons = [...Array(12)].map((_, i) => ({
  left: 5 + (i * 8),
  top: 10 + ((i * 17) % 80),
  size: 24 + (i % 3) * 8,
  duration: 8 + (i % 5) * 2,
  delay: i * 0.5,
}));

// Hook for counting animation
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
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
  }, [hasStarted]);

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

export default function ClubsPage() {
  const stats = [
    { end: 200, label: 'Hands-on Tech', sublabel: 'Experiences', icon: '🔬' },
    { end: 150, label: 'Tech', sublabel: 'Companies', icon: '💻' },
    { end: 500, label: 'Industry', sublabel: 'Mentors', icon: '👩‍💼' },
    { end: 3500, label: 'High School', sublabel: 'Girls', icon: '🎓' },
  ];

  const stat1 = useCountUp(stats[0].end);
  const stat2 = useCountUp(stats[1].end);
  const stat3 = useCountUp(stats[2].end);
  const stat4 = useCountUp(stats[3].end);
  const statRefs = [stat1, stat2, stat3, stat4];

  const clubBenefits = [
    {
      icon: '🎯',
      title: 'Understand STEM Opportunities',
      description: 'Encourage high school girls to understand the opportunities in STEM fields',
    },
    {
      icon: '💡',
      title: 'Share Ideas',
      description: 'Create a community for sharing ideas on STEM topics',
    },
    {
      icon: '🚀',
      title: 'Promote Explorer Day',
      description: 'Promote SheTech Explorer Day to girls at every Utah school',
    },
    {
      icon: '⚡',
      title: 'Inspiring Activities',
      description: 'Participate in STEM activities that will inspire interest and education in STEM',
    },
    {
      icon: '🏢',
      title: 'Tech Company Tours',
      description: 'Provide opportunities to tour tech companies',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Navy Program Theme */}
        <section className="relative overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-[70vh] flex items-center bg-[#EBEBF5]">
          {/* Graph Paper Background */}
          <GraphPaperBackground />

          {/* Floating STEM Icons - Adjusted colors for light background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            {floatingIcons.map((icon, i) => (
              <div
                key={i}
                className="absolute opacity-30 text-[#00008B]"
                style={{
                  left: `${icon.left}%`,
                  top: `${icon.top}%`,
                  fontSize: `${icon.size}px`,
                  animation: `floatDoodle ${icon.duration}s ease-in-out infinite`,
                  animationDelay: `${icon.delay}s`,
                }}
              >
                {['💻', '🔬', '🎨', '📐', '⚙️', '🧪', '📊', '🎯', '💡', '🚀', '✨', '🌟'][i % 12]}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection direction="down" delay={0} initialLoad>
                {/* Sticker Header */}
                <div className="mb-8">
                  <StickerHeader label="Join the Community" title="SheTech Clubs" variant="teal" />
                </div>

                <p className="text-lg sm:text-xl text-[#00008B] mb-8 leading-relaxed max-w-2xl mx-auto font-medium">
                  Join or create a SheTech Club at your school to share your excitement for STEM.
                  Women Tech Council sponsors SheTech Clubs to empower the next generation of tech leaders.
                </p>

                {/* CTA Buttons - Navy/Pink Theme */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:kristin@womentechcouncil.com">
                    <Button
                      size="lg"
                      className="bg-[#00A6CE] text-white hover:bg-[#0086a6] font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide"
                    >
                      Start a Club
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Button>
                  </a>
                  <Link href="/students/leadership-board">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-[#00008B] text-[#00008B] hover:bg-[#00008B] hover:text-white font-bold px-8 py-4 rounded-xl transition-all cursor-pointer uppercase tracking-wide"
                    >
                      Find Your School
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Club Benefits Section */}
        <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#00008B] bg-indigo-50 rounded-full uppercase tracking-wider">
                  Why Join?
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00008B] mb-4 uppercase">
                  What SheTech Clubs Offer
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                  Women Tech Council sponsors SheTech Clubs to help you grow, connect, and explore STEM
                </p>
              </div>
            </AnimatedSection>

            {/* Benefits Grid - Sleek Minimalist */}
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 max-w-6xl mx-auto">
              {clubBenefits.map((benefit, index) => (
                <AnimatedSection
                  key={index}
                  direction="up"
                  delay={index * 100}
                  className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)]"
                >
                  <div className="group cursor-default h-full">
                    {/* Floating Icon */}
                    <div className="text-5xl mb-6 transform transition-transform duration-300 group-hover:-translate-y-2 inline-block">
                      {benefit.icon}
                    </div>

                    <h3 className="text-2xl font-black text-[#00008B] mb-3 group-hover:text-[#BD1C81] transition-colors">
                      {benefit.title}
                    </h3>

                    <p className="text-slate-600 text-lg leading-relaxed font-medium border-l-4 border-transparent pl-0 group-hover:border-[#00A6CE] group-hover:pl-4 transition-all duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Student Board Connection */}
        <section className="py-16 sm:py-20 bg-[#EBEBF5] relative">
          <GraphPaperBackground />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <AnimatedSection direction="left" delay={0}>
                  <div>
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#BD1C81] bg-pink-50 rounded-full uppercase tracking-wider">
                      Student Leadership
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#00008B] mb-4 uppercase">
                      Run by Student Leaders
                    </h2>
                    <p className="text-lg text-[#00008B] mb-6 leading-relaxed font-medium">
                      SheTech Clubs are often started and run by SheTech Student Board members.
                      See the student board member for your school and find our list of Student Board members for this year.
                    </p>

                    <Link href="/students/leadership-board">
                      <Button
                        className="bg-[#00008B] hover:bg-[#000080] text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer border-0 uppercase tracking-wide"
                      >
                        View Student Board
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </AnimatedSection>

                {/* Visual Card */}
                <AnimatedSection direction="right" delay={200}>
                  <div className="relative">
                    <div className="bg-white rounded-xl p-8 shadow-xl border-2 border-white">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-[#BD1C81]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#00008B]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#00A6CE]"></div>
                        </div>
                        <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">Student Board Network</span>
                      </div>

                      {/* Stats Preview */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                          <div className="w-12 h-12 rounded-lg bg-[#00008B] flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-2xl font-black text-[#00008B]">56+</div>
                            <div className="text-sm text-slate-500 font-bold">Partner Schools</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                          <div className="w-12 h-12 rounded-lg bg-[#BD1C81] flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-2xl font-black text-[#00008B]">100+</div>
                            <div className="text-sm text-slate-500 font-bold">Student Leaders</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                          <div className="w-12 h-12 rounded-lg bg-[#00A6CE] flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-2xl font-black text-[#00008B]">Year-Round</div>
                            <div className="text-sm text-slate-500 font-bold">Active Program</div>
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

        {/* Explorer Day Stats Section */}
        <section className="relative py-20 sm:py-24 overflow-hidden">
          {/* Background - Magenta Theme (Matching Explorer Day Page) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#BD1C81] via-[#a3156d] to-[#801055]"></div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="gridPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPattern)" />
            </svg>
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                  Bring your club to Explorer Day
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
                  Experience hands-on tech workshops, meet industry mentors, and connect with companies
                </p>
              </div>
            </AnimatedSection>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} direction="up" delay={index * 100}>
                  <div
                    ref={statRefs[index].ref}
                    className="text-center group"
                  >
                    {/* Icon Circle */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                      <span className="text-3xl sm:text-4xl">{stat.icon}</span>
                    </div>

                    {/* Number */}
                    <div className="text-4xl sm:text-5xl font-black text-white mb-1">
                      {statRefs[index].count}
                    </div>

                    {/* Label */}
                    <div className="text-white/90 font-bold">{stat.label}</div>
                    <div className="text-white/70 text-sm font-medium">{stat.sublabel}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* CTA */}
            <AnimatedSection direction="up" delay={400}>
              <div className="text-center mt-12">
                <Link href="/students/explorer-day">
                  <Button
                    size="lg"
                    className="bg-white text-[#00A6CE] hover:bg-white/90 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide"
                  >
                    Learn About Explorer Day
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section - Compact & Professional */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-xl p-5 sm:p-6 border border-gray-200 shadow-sm">
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Questions about starting a club?
                    </h3>
                    <p className="text-sm text-gray-500">
                      Contact us to learn more or get help starting a SheTech Club at your school.
                    </p>
                  </div>
                  <a
                    href="mailto:kristin@womentechcouncil.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Us
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes floatDoodle {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
