'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui';

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
    { end: 2000, label: 'High School', sublabel: 'Girls', icon: '🎓' },
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
        {/* Hero Section - Creative Doodle/Sketch Theme */}
        <section className="relative overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-[70vh] flex items-center">
          {/* Gradient Background - Purple to Pink like the reference */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-secondary-500 to-pink-500"></div>
            {/* Overlay pattern for texture */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <pattern id="doodlePattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="1.5" fill="white" />
                    <path d="M10 10 L20 20 M40 40 L50 50" stroke="white" strokeWidth="0.5" opacity="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#doodlePattern)" />
              </svg>
            </div>
          </div>

          {/* Floating STEM Icons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {floatingIcons.map((icon, i) => (
              <div
                key={i}
                className="absolute opacity-20 text-white"
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

          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-32 h-32 border-4 border-white/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 border-4 border-white/20 rotate-45 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-lg rotate-12 animate-bounce" style={{ animationDuration: '3s' }}></div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection direction="down" delay={0} initialLoad>
                {/* Main Title - Chalk/Handwritten Style */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-white tracking-tight" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  SheTech Clubs
                </h1>
                
                <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Join or create a SheTech Club at your school to share your excitement for STEM. 
                  Women Tech Council sponsors SheTech Clubs to empower the next generation of tech leaders.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:kristin@womentechcouncil.com">
                    <Button 
                      size="lg"
                      className="bg-white text-secondary-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0"
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
                      className="border-2 border-white text-white hover:bg-white/20 font-bold px-8 py-4 rounded-xl backdrop-blur-sm transition-all cursor-pointer"
                    >
                      Find Your School
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" className="w-full">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Club Benefits Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-secondary-600 bg-secondary-50 rounded-full">
                  Why Join?
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  What SheTech Clubs Offer
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Women Tech Council sponsors SheTech Clubs to help you grow, connect, and explore STEM
                </p>
              </div>
            </AnimatedSection>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {clubBenefits.map((benefit, index) => (
                <AnimatedSection key={index} direction="up" delay={index * 100}>
                  <div className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-secondary-200 transition-all duration-300 h-full">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary-100 to-primary-100 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary-500/5 to-primary-500/5 -translate-y-12 translate-x-12 rotate-45"></div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Student Board Connection */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <AnimatedSection direction="left" delay={0}>
                  <div>
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full">
                      Student Leadership
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      Run by Student Leaders
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      SheTech Clubs are often started and run by SheTech Student Board members. 
                      See the student board member for your school and find our list of Student Board members for this year.
                    </p>
                    
                    <Link href="/students/leadership-board">
                      <Button 
                        className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-xl transition-all cursor-pointer border-0"
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
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-secondary-500"></div>
                          <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                          <div className="w-3 h-3 rounded-full bg-tertiary-500"></div>
                        </div>
                        <span className="text-gray-500 text-sm font-medium">Student Board Network</span>
                      </div>

                      {/* Stats Preview */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900">56+</div>
                            <div className="text-sm text-gray-500">Partner Schools</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900">100+</div>
                            <div className="text-sm text-gray-500">Student Leaders</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-tertiary-500 to-tertiary-600 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900">Year-Round</div>
                            <div className="text-sm text-gray-500">Active Program</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary-500/10 rounded-xl rotate-12 -z-10"></div>
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-500/10 rounded-full -z-10"></div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Explorer Day Stats Section */}
        <section className="relative py-20 sm:py-24 overflow-hidden">
          {/* Background - Matching reference pink/magenta */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 via-secondary-600 to-pink-600"></div>
          
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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Bring your club to SheTech Explorer Day
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
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
                    <div className="text-white/90 font-medium">{stat.label}</div>
                    <div className="text-white/70 text-sm">{stat.sublabel}</div>
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
                    className="bg-white text-secondary-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0"
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
