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

// Programs data
const programs = [
  {
    title: 'SheTech Explorer Day',
    description: 'Annual day bringing together all participants for hands-on experiences',
    icon: '📅',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'SheTech Clubs',
    description: 'Student-led clubs in high schools across our regions',
    icon: '👥',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Internship Program',
    description: 'Real-world experience with tech companies and mentors',
    icon: '💼',
    color: 'from-rose-500 to-pink-500',
  },
  {
    title: 'Student Board',
    description: 'Leadership opportunities at every high school',
    icon: '🏆',
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Educator Board',
    description: 'Supporting teachers and educators in STEM education',
    icon: '📚',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Monthly Events',
    description: 'Tech company visits, role models, and networking',
    icon: '🎯',
    color: 'from-violet-500 to-purple-500',
  },
];

// WTC pillars
const wtcPillars = [
  { title: 'Mentoring', description: 'Connecting future leaders with industry experts', icon: '🤝' },
  { title: 'Visibility', description: 'Showcasing talent and achievements', icon: '✨' },
  { title: 'Networking', description: 'Building powerful professional connections', icon: '🔗' },
  { title: 'Growth', description: 'Driving economic impact in tech', icon: '📈' },
];

export default function AboutWomenTechCouncilPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 sm:pt-20 pb-16 sm:pb-24 bg-white">
          {/* Clean gradient background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white"></div>
          </div>

          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="heroDots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#06b6d4"/>
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
                  {/* Logo */}
                  <div className="flex justify-center mb-6">
                    <div className="relative w-64 sm:w-80 h-20 sm:h-24">
                      <Image
                        src="/logo.png"
                        alt="SheTech"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl text-gray-600 font-medium mb-6 max-w-2xl mx-auto">
                    The Largest Industry-Led <span className="font-bold text-gray-900">STEM Platform</span> for High School Girls
                  </h2>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-500 mb-8 leading-relaxed max-w-2xl mx-auto">
                    We are activating, engaging, and inspiring the next generation of female leaders. Through hands-on experiences and mentorship, we turn &quot;I can&apos;t&quot; into &quot;I will&quot;.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a
                      href="#programs"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      Explore Programs
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </a>
                    <Link
                      href="/about/contact-us"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gray-100 border border-gray-200 text-gray-700 font-semibold hover:bg-gray-200 transition-all duration-300"
                    >
                      Partner With Us
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Impact That <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">Matters</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    SheTech is transforming the STEM pipeline, one girl at a time
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => {
                    const StatCard = () => {
                      const { count, ref } = useCountUp(stat.value, 2000, true);
                      return (
                        <div
                          ref={ref}
                          className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
                        >
                          <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-2">
                            {count.toLocaleString()}{stat.suffix}
                          </div>
                          <div className="text-white font-semibold mb-1">{stat.label}</div>
                          <div className="text-white/50 text-sm">{stat.description}</div>
                        </div>
                      );
                    };
                    return <StatCard key={index} />;
                  })}
                </div>

                {/* Why It Matters Callout */}
                <div className="mt-10 bg-gradient-to-r from-cyan-50 to-pink-50 rounded-2xl p-6 sm:p-8 border border-cyan-100">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center text-white shrink-0">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Why It Matters</h3>
                      <p className="text-gray-600">
                        Today every company is a technology company. SheTech demonstrates to girls that no matter what they are passionate about, <strong className="text-cyan-600">technology is the power to achieve it</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="relative py-16 sm:py-20 bg-gray-50">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="programDots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#06b6d4"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#programDots)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                {/* Section Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
                    <span>🎯</span>
                    Our Ecosystem
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Comprehensive <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">Programs</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    SheTech operates with the school year, offering a continuous pathway of engagement to inspire and support girls in STEM.
                  </p>
                </div>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {programs.map((program, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
                    >
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {program.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {program.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Plus More Banner */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Plus More Opportunities</h3>
                  <p className="text-white/70">
                    Information about jobs, scholarships, and pathways to careers in STEM
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Women Tech Council Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="wtcPattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                  <circle cx="16" cy="16" r="1" fill="#ec4899"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wtcPattern)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                {/* Section Header - Centered */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    About <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">Women Tech Council</span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    A national organization focused on the economic impact of women in driving high growth for the technology sector
                  </p>
                </div>

                {/* Main Content Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-10">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* Left Content - 3 cols */}
                    <div className="lg:col-span-3 p-8 sm:p-10">
                      <div className="prose prose-gray max-w-none mb-8">
                        <p className="text-gray-600 text-lg leading-relaxed">
                          The <strong className="text-gray-900">Women Tech Council (WTC)</strong> develops programs that propel the economic pipeline from high school to the board room, offering mentoring, visibility, opportunities and networking to more than <span className="text-cyan-600 font-semibold">10,000+ women and men</span> working in technology.
                        </p>
                      </div>

                      {/* WTC Pillars - Horizontal Icons */}
                      <div className="grid grid-cols-4 gap-4">
                        {wtcPillars.map((pillar, index) => (
                          <div key={index} className="text-center group">
                            <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-cyan-50 to-pink-50 border border-gray-100 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                              {pillar.icon}
                            </div>
                            <h4 className="font-semibold text-gray-900 text-sm">{pillar.title}</h4>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right - Regional Map Card - 2 cols */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 sm:p-10 text-white relative">
                      {/* Decorative gradient orb */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl"></div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold">Regional Presence</h3>
                        </div>

                        {/* States Grid */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                          {[
                            { name: 'Utah', status: 'HQ' },
                            { name: 'Idaho', status: 'Chapter' },
                            { name: 'Colorado', status: 'Chapter' },
                          ].map((state, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center hover:bg-white/10 transition-all duration-300">
                              <div className="text-lg font-bold text-white">{state.name}</div>
                              <div className="text-xs text-cyan-400">{state.status}</div>
                            </div>
                          ))}
                        </div>

                        {/* Contact CTA */}
                        <a
                          href="mailto:kristin@womentechcouncil.com"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all duration-300"
                        >
                          Partner with us in your region
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: '🎓', value: 'High School', label: 'to Boardroom Pipeline' },
                    { icon: '👥', value: '10,000+', label: 'Network Members' },
                    { icon: '🚀', value: 'National', label: 'Organization' },
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 border border-gray-100 text-center hover:shadow-md hover:border-cyan-200 transition-all duration-300">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="font-bold text-gray-900">{item.value}</div>
                      <div className="text-gray-500 text-xs">{item.label}</div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Compact CTA Banner */}
        <section className="relative py-8 sm:py-10 bg-gradient-to-r from-slate-900 via-cyan-950/80 to-slate-900 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Explore The Possibilities
                  </h3>
                  <p className="text-sm text-white/60">
                    SheTech helps girls find pathways to careers in STEM
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link
                    href="/students/explorer-day"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-pink-500 hover:opacity-90 text-white font-medium whitespace-nowrap px-5 py-2.5 rounded-lg text-sm transition-all cursor-pointer"
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
