'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button, Input } from '@/components/ui';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

type Program = {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  icon: React.ReactNode;
};

export default function Home() {
  const programs: Program[] = [
    {
      title: 'Explorer Day',
      description: 'A hands-on tech conference for high school girls designed to spark interest in STEM through interactive workshops and real-world challenges.',
      ctaText: 'Register Now',
      ctaHref: '#explorer-day',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Student Board',
      description: 'Join the SheTech Student Board and help shape programs for girls in STEM. Open to students in grades 9-12.',
      ctaText: 'Apply Now',
      ctaHref: '#student-board',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Media Internship',
      description: 'Get hands-on journalism experience promoting women in technology. Develop skills in writing, interviews, and multimedia content creation.',
      ctaText: 'Learn More',
      ctaHref: '#media-internship',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Thanksgiving Point Internship',
      description: 'Hands-on experience in agriculture technology, entomology, exhibit design, STEM education, and more at Thanksgiving Point.',
      ctaText: 'Apply Now',
      ctaHref: '#thanksgiving-point',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'Summer Exploration Internship',
      description: 'Get an inside look at real tech companies. Tour multiple companies, meet women in the field, and explore careers in programming, data science, engineering, and more.',
      ctaText: 'Apply Now',
      ctaHref: '#summer-internship',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
  ];

  return (
    <ProgramsPageContent programs={programs} />
  );
}

function ProgramsInteractiveView({ programs }: { programs: Program[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProgram = programs[selectedIndex];

  return (
    <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto">
      {/* Left Column - Program Navigation (2 columns) */}
      <div className="lg:col-span-2 space-y-2">
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {programs.length} Programs Available
          </p>
        </div>
        {programs.map((program, index) => (
          <button
            key={program.title}
            onClick={() => setSelectedIndex(index)}
            className={`w-full text-left rounded-xl transition-all duration-300 group relative overflow-hidden ${
              selectedIndex === index
                ? 'bg-white shadow-lg border-2 border-primary-200'
                : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md'
            }`}
          >
            {/* Active indicator */}
            {selectedIndex === index && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
            )}
            
            <div className="flex items-center gap-3 p-4 pl-5">
              {/* Icon */}
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                selectedIndex === index
                  ? 'bg-primary-100 text-primary-600'
                  : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
              }`}>
                <div className="w-5 h-5 flex items-center justify-center">
                  {program.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`font-bold text-sm transition-colors duration-300 ${
                    selectedIndex === index ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {program.title}
                  </h3>
                  {selectedIndex === index && (
                    <span className="px-2 py-0.5 bg-primary-100 text-primary-700 text-xs font-bold rounded">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  )}
                </div>
                <p className={`text-xs line-clamp-1 transition-colors duration-300 ${
                  selectedIndex === index ? 'text-gray-600' : 'text-gray-500'
                }`}>
                  {program.description}
                </p>
              </div>
              
              {/* Arrow */}
              <div className={`shrink-0 transition-all duration-300 ${
                selectedIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              }`}>
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Right Column - Program Details (3 columns) */}
      <div className="lg:col-span-3">
        <AnimatedSection direction="fade" delay={0} key={selectedIndex}>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden h-full">
            {/* Header Section */}
            <div className="relative bg-gradient-to-br from-gray-50 to-white border-b border-gray-200 p-8">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <div className={`absolute inset-0 ${
                  selectedIndex % 2 === 0 ? 'bg-primary-500' : 'bg-secondary-500'
                } rounded-full blur-3xl`}></div>
              </div>
              
              <div className="relative">
                {/* Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                    selectedIndex % 2 === 0
                      ? 'bg-primary-50 text-primary-700 border-primary-200'
                      : 'bg-secondary-50 text-secondary-700 border-secondary-200'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      selectedIndex % 2 === 0 ? 'bg-primary-500' : 'bg-secondary-500'
                    } animate-pulse`}></span>
                    PROGRAM {String(selectedIndex + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Title & Icon */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                    {selectedProgram.title}
                  </h3>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${
                    selectedIndex % 2 === 0
                      ? 'bg-primary-100 text-primary-600'
                      : 'bg-secondary-100 text-secondary-600'
                  }`}>
                    <div className="w-8 h-8 flex items-center justify-center">
                      {selectedProgram.icon}
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {selectedProgram.description}
                </p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="p-8">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                What You&apos;ll Experience
              </h4>
              <div className="grid gap-3 mb-6">
                {[
                  { text: 'Hands-on experience in real-world projects', icon: '🚀' },
                  { text: 'Mentorship from industry professionals', icon: '👥' },
                  { text: 'Networking opportunities with peers', icon: '🤝' },
                  { text: 'Certificate of completion', icon: '🏆' },
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="text-lg">{benefit.icon}</span>
                    <span className="text-sm text-gray-700 leading-relaxed">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a href={selectedProgram.ctaHref}>
                <Button
                  variant="primary"
                  size="lg"
                  className={`group/btn w-full text-white border-0 shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 font-bold ${
                    selectedIndex % 2 === 0
                      ? 'bg-primary-600 hover:bg-primary-700'
                      : 'bg-secondary-600 hover:bg-secondary-700'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {selectedProgram.ctaText}
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

function ProgramsPageContent({ programs }: { programs: Program[] }) {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden text-white h-screen flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
        <Image
              src="/landingpage/hero.png"
              alt="SheTech community"
              fill
          priority
              className="object-cover scale-105"
              quality={90}
            />
            {/* Enhanced gradient overlay with brand colors */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-secondary-800/70 to-tertiary-900/80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/50"></div>
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tertiary-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="max-w-5xl mx-auto">
              {/* Announcement Banner */}
              <AnimatedSection direction="fade" delay={100} initialLoad={true}>
                <div className="flex justify-center mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs sm:text-sm text-white/90 hover:bg-white/15 transition-all duration-200 cursor-pointer group">
                    <span>🎉 Explorer Day 2026 Registration Now Open</span>
                    <svg 
                      className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </AnimatedSection>

              {/* Main Heading */}
              <AnimatedSection direction="up" delay={300} initialLoad={true}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 text-center leading-tight">
                  <span className="block bg-gradient-to-r from-white via-primary-100 to-secondary-200 bg-clip-text text-transparent drop-shadow-2xl">
                    Empowering Girls
                  </span>
                  <span className="block mt-1 sm:mt-2 text-white drop-shadow-2xl">
                    in STEM
                  </span>
          </h1>
              </AnimatedSection>

              {/* Description */}
              <AnimatedSection direction="up" delay={500} initialLoad={true}>
                <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-2 max-w-3xl mx-auto text-center leading-snug font-light drop-shadow-lg">
                  SheTech helps girls recognize the opportunities they can pursue in STEM education and careers.
                </p>
                <p className="text-sm sm:text-base text-white/80 mb-6 max-w-2xl mx-auto text-center leading-snug drop-shadow-md">
                  Join us for hands-on experiences, mentorship, and real-world opportunities that shape the future.
                </p>
              </AnimatedSection>

              {/* CTA Buttons */}
              <AnimatedSection direction="up" delay={700} initialLoad={true}>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-secondary-500 to-secondary-600 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-secondary-500/50 px-6 py-3 text-base font-semibold"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Register for Explorer Day
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-secondary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300 px-6 py-3 text-base font-semibold shadow-xl"
                  >
                    <span className="flex items-center gap-2">
                      Apply to Student Board
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Button>
                </div>
              </AnimatedSection>

              {/* Trust Indicators */}
              <AnimatedSection direction="fade" delay={900} initialLoad={true}>
                <div className="mt-4 sm:mt-6 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-white/70 text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Free Registration</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Grades 9-12</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Hands-On Learning</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Explorer Day Feature Section - Completely Redesigned */}
        <section id="explorer-day" className="relative py-16 sm:py-24 bg-white overflow-hidden">
          {/* Minimal decorative elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,166,206,0.03),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(189,28,129,0.03),transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <AnimatedSection direction="fade" delay={0}>
                <div className="text-center mb-12 sm:mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full mb-4">
                    <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-semibold text-primary-700 uppercase tracking-wide">Featured Event</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    SheTech Explorer Day <span className="text-primary-600">2026</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    An immersive tech conference designed to inspire the next generation of women in STEM
                  </p>
                </div>
              </AnimatedSection>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Left Column - Event Details (Spans 2 columns) */}
                <div className="lg:col-span-2 space-y-6">
                  <AnimatedSection direction="right" delay={100}>
                    {/* Event Info Card */}
                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 bg-success-100 text-success-700 text-xs font-bold rounded-full border border-success-300">
                              FREE EVENT
                            </span>
                            <span className="px-3 py-1 bg-tertiary-100 text-tertiary-700 text-xs font-bold rounded-full border border-tertiary-300">
                              GRADES 9-12
                            </span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            Discover Your Future in Technology
                          </h3>
                          <p className="text-gray-700 leading-relaxed max-w-2xl">
                            SheTech Explorer Day is a hands-on tech conference for high school girls designed to spark interest in STEM 
                            through interactive workshops and real-world challenges. Girls explore fields like <span className="font-semibold text-primary-600">robotics</span>, <span className="font-semibold text-primary-600">coding</span>, <span className="font-semibold text-primary-600">digital media</span>, and <span className="font-semibold text-primary-600">health sciences</span> while 
                            engaging with industry mentors and inspiring female role models.
                          </p>
                        </div>
                      </div>

                      {/* Event Meta Information */}
                      <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Date</p>
                            <p className="text-sm font-semibold text-gray-900">February 24, 2026</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Time</p>
                            <p className="text-sm font-semibold text-gray-900">9:00 AM - 1:00 PM</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-tertiary-100 rounded-lg flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5 text-tertiary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Location</p>
                            <p className="text-sm font-semibold text-gray-900">Sandy, Utah</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Features Grid */}
                  <AnimatedSection direction="right" delay={200}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        {
                          icon: (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                          ),
                          title: 'Interactive Workshops',
                          description: 'Hands-on learning experiences in cutting-edge technologies',
                          color: 'primary'
                        },
                        {
                          icon: (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          ),
                          title: 'Industry Mentors',
                          description: 'Connect with professionals leading innovation in tech',
                          color: 'secondary'
                        },
                        {
                          icon: (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          ),
                          title: 'Female Role Models',
                          description: 'Learn from inspiring women who are shaping the future',
                          color: 'tertiary'
                        },
                        {
                          icon: (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          ),
                          title: 'Real-World Challenges',
                          description: 'Solve actual problems faced by tech companies today',
                          color: 'primary'
                        },
                      ].map((feature, idx) => (
                        <div
                          key={idx}
                          className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition-all duration-300 group"
                        >
                          <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-${feature.color}-600`}>
                            {feature.icon}
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </AnimatedSection>
                </div>

                {/* Right Column - CTA & Venue */}
                <div className="lg:col-span-1 space-y-6">
                  <AnimatedSection direction="left" delay={100}>
                    {/* Registration CTA */}
                    <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 rounded-2xl p-8 text-white shadow-xl sticky top-24">
                      <div className="mb-6">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Register Now</h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                          Free registration for all high school girls in grades 9-12. Spaces are limited!
                        </p>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm text-white/90">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Free admission & lunch included</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/90">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Multiple workshop sessions</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/90">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Networking opportunities</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/90">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Swag & giveaways</span>
                        </div>
                      </div>

                      <Button
                        variant="secondary"
                        size="lg"
                        className="w-full bg-white text-primary-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold py-4 border-0"
                      >
                        Secure Your Spot
                        <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Button>

                      <p className="text-xs text-white/70 text-center mt-4">
                        Registration closes February 17, 2026
                      </p>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection direction="left" delay={200}>
                    {/* Venue Information */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Venue
                      </h4>
                      <p className="font-bold text-gray-900 mb-1">Mountain America Expo Center</p>
                      <p className="text-sm text-gray-600 mb-4">
                        9575 S State St<br />
                        Sandy, UT 84070
                      </p>
                      <a
                        href="#"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1 group"
                      >
                        Get Directions
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section - Redesigned */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
          {/* Minimal decorative elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,166,206,0.04),transparent_50%),radial-gradient(circle_at_30%_70%,rgba(189,28,129,0.04),transparent_50%)]"></div>
          <div className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection direction="fade" delay={0}>
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full mb-4 shadow-sm">
                  <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Year-Round Programs</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Explore SheTech, <span className="text-primary-600">All Year Long</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  SheTech provides monthly events and opportunities for young women to learn and discover how their dreams can be realized in tech.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={100}>
              <ProgramsInteractiveView programs={programs} />
            </AnimatedSection>
          </div>
        </section>

        {/* Video Section - Redesigned */}
        <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
          {/* Minimal decorative elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,166,206,0.03),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(189,28,129,0.03),transparent_50%)]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <AnimatedSection direction="fade" delay={0}>
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full mb-4 shadow-sm">
                  <svg className="w-4 h-4 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Success Stories</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  See SheTech <span className="text-secondary-600">in Action</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Watch how SheTech is making a difference in the lives of young women in STEM
                </p>
              </div>
            </AnimatedSection>

            {/* Video Grid */}
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                <AnimatedSection direction="up" delay={100}>
                  <div className="relative group">
                    {/* Video Card */}
                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                      {/* Video Container */}
                      <div className="relative aspect-video bg-gray-900 overflow-hidden">
                        <iframe
                          src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
                          title="SheTech student on Good Things Utah"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                        {/* Decorative corner accent */}
                        <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full">
                          <span className="text-xs font-semibold text-white">3:45</span>
                        </div>
                      </div>
                      
                      {/* Video Info */}
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                              SheTech student on Good Things Utah
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-3">
                              Hear from SheTech students about their experiences
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <span>1.2K views</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>2 weeks ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={200}>
                  <div className="relative group">
                    {/* Video Card */}
                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                      {/* Video Container */}
                      <div className="relative aspect-video bg-gray-900 overflow-hidden">
                        <iframe
                          src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
                          title="SheTech Club Video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                        {/* Decorative corner accent */}
                        <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full">
                          <span className="text-xs font-semibold text-white">5:12</span>
                        </div>
                      </div>
                      
                      {/* Video Info */}
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-secondary-100 flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-secondary-600 transition-colors">
                              SheTech Club Video
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-3">
                              See what happens at SheTech club meetings
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <span>854 views</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>1 month ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* CTA Bar */}
              <AnimatedSection direction="up" delay={300}>
                <div className="mt-12 text-center">
                  <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl shadow-sm">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Want to see more? 
                      <a href="#" className="ml-1 font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                        Visit our YouTube channel →
                      </a>
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Stay Connected Banner - Compact & Modern */}
        <section id="mailing-list" className="relative py-6 sm:py-8 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 overflow-hidden">
          {/* Subtle animated background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.08),transparent_50%)]"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      Stay Connected
                    </h2>
                  </div>
                  <p className="text-sm text-white/90">
                    Join our mailing list for the latest updates and opportunities
                  </p>
                </div>
                
                {/* Form */}
                <form className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 min-w-[250px] h-11 px-4 bg-white/95 backdrop-blur-sm border-white/50 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-white rounded-lg shadow-sm"
                    fullWidth={false}
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    className="h-11 px-6 bg-white text-primary-600 hover:bg-gray-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 border-0 rounded-lg whitespace-nowrap"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
