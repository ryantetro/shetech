'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button, Input, VideoCard } from '@/components/ui';
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
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
      {/* Left Column - Compact Cards */}
      <div className="space-y-3">
        {programs.map((program, index) => (
          <button
            key={program.title}
            onClick={() => setSelectedIndex(index)}
            className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
              selectedIndex === index
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg scale-[1.02]'
                : 'bg-gray-50 hover:bg-gray-100 hover:shadow-md'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                selectedIndex === index
                  ? 'bg-white/20 text-white'
                  : 'bg-primary-100 text-primary-600 group-hover:bg-primary-200'
              }`}>
                <div className="w-6 h-6 flex items-center justify-center">
                  {program.icon}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`font-semibold mb-1 transition-colors duration-300 ${
                  selectedIndex === index ? 'text-white' : 'text-gray-900'
                }`}>
                  {program.title}
                </h3>
                <p className={`text-sm line-clamp-2 transition-colors duration-300 ${
                  selectedIndex === index ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {program.description}
                </p>
              </div>
              {selectedIndex === index && (
                <div className="shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Right Column - Detailed View */}
      <AnimatedSection direction="fade" delay={0} key={selectedIndex}>
        <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden h-full group">
          {/* Header with gradient */}
          <div className={`relative h-56 overflow-hidden ${
            selectedIndex % 2 === 0
              ? 'bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700'
              : 'bg-gradient-to-bl from-secondary-500 via-secondary-600 to-secondary-700'
          }`}>
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            {/* Icon Container */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="w-28 h-28 bg-white/25 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                <div className="text-white w-14 h-14 flex items-center justify-center">
                  {selectedProgram.icon}
                </div>
              </div>
            </div>

            {/* Number badge */}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white font-bold text-sm shadow-xl border border-white/30">
              {String(selectedIndex + 1).padStart(2, '0')}
            </div>

            {/* Decorative corner accent */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-tl-full"></div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 ${
              selectedIndex % 2 === 0
                ? 'bg-primary-50 text-primary-700 border border-primary-200'
                : 'bg-secondary-50 text-secondary-700 border border-secondary-200'
            }`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${
                selectedIndex % 2 === 0 ? 'bg-primary-500' : 'bg-secondary-500'
              }`}></span>
              <span>Program {selectedIndex + 1} of {programs.length}</span>
            </div>
            
            {/* Title */}
            <h3 className={`text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent ${
              selectedIndex % 2 === 0
                ? 'from-primary-600 to-primary-700'
                : 'from-secondary-600 to-secondary-700'
            }`}>
              {selectedProgram.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {selectedProgram.description}
            </p>

            {/* Key Features */}
            <div className="mb-8 p-5 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <svg className={`w-5 h-5 ${
                  selectedIndex % 2 === 0 ? 'text-primary-600' : 'text-secondary-600'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-semibold text-gray-900">What You&apos;ll Gain</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Hands-on experience in real-world projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Mentorship from industry professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Networking opportunities with peers</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <a href={selectedProgram.ctaHref} className="block">
              <Button
                variant="primary"
                size="lg"
                className={`group/btn relative overflow-hidden w-full text-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 px-6 py-4 text-base font-semibold ${
                  selectedIndex % 2 === 0
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700'
                    : 'bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {selectedProgram.ctaText}
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className={`absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 ${
                  selectedIndex % 2 === 0
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700'
                    : 'bg-gradient-to-r from-secondary-600 to-secondary-700'
                }`}></div>
              </Button>
            </a>
          </div>
        </div>
      </AnimatedSection>
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

        {/* Explorer Day Feature Section */}
        <section id="explorer-day" className="relative py-12 sm:py-16 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                {/* Main Event Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 ease-out">
                  {/* Header with gradient accent */}
                  <div className="relative bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 p-6 sm:p-8">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30">
                              FREE EVENT
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30">
                              GRADES 9-12
                            </span>
                          </div>
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                            2026 SheTech Explorer Day
                          </h2>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-white/90">
                            <div className="flex items-center gap-1.5">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="font-medium">February 24, 2026</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="font-medium">9:00 AM - 1:00 PM</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="font-medium">Sandy, Utah</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0">
                        <Button 
                          variant="secondary" 
                          size="lg" 
                          className="bg-white text-primary-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-6 py-3 text-base font-semibold whitespace-nowrap"
                        >
                          Register Now
                          <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 sm:p-8">
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                      {/* Left Column - Description */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>
                            About the Event
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            SheTech Explorer Day is a hands-on tech conference for high school girls designed to spark interest in STEM 
                            through interactive workshops and real-world challenges.
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Girls explore fields like <span className="font-semibold text-gray-900">robotics</span>, <span className="font-semibold text-gray-900">coding</span>, 
                            {' '}<span className="font-semibold text-gray-900">digital media</span>, and <span className="font-semibold text-gray-900">health sciences</span> while 
                            engaging with industry mentors and female role models.
                          </p>
                        </div>

                        {/* Location Highlight */}
                        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-4 border border-primary-100">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center shrink-0">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1 text-sm">Event Location</h4>
                              <p className="text-gray-700 text-sm">
                                <span className="font-bold text-primary-600">Mountain America Expo Center</span>
                                <br />
                                <span className="text-gray-600">Sandy, Utah</span>
          </p>
        </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Features */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-secondary-500 to-primary-500 rounded-full"></div>
                            What to Expect
                          </h3>
                          <div className="space-y-3">
                            {[
                              { 
                                icon: (
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                  </svg>
                                ), 
                                title: 'Interactive Workshops', 
                                desc: 'Hands-on learning experiences' 
                              },
                              { 
                                icon: (
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                  </svg>
                                ), 
                                title: 'Industry Mentors', 
                                desc: 'Connect with tech professionals' 
                              },
                              { 
                                icon: (
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                ), 
                                title: 'Female Role Models', 
                                desc: 'Learn from inspiring leaders' 
                              },
                              { 
                                icon: (
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                  </svg>
                                ), 
                                title: 'Real-World Challenges', 
                                desc: 'Solve actual tech problems' 
                              },
                            ].map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0 text-primary-600 group-hover:bg-primary-200 group-hover:scale-110 transition-all duration-200">
                                  {feature.icon}
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-0.5 text-sm">{feature.title}</h4>
                                  <p className="text-xs text-gray-600">{feature.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Card */}
                        <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl p-5 text-white shadow-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h4 className="text-lg font-bold">Registration is Free!</h4>
                          </div>
                          <p className="text-white/90 mb-3 text-sm">
                            Open to all girls in grades 9th-12th. Don&apos;t miss this opportunity to explore your future in STEM.
                          </p>
                          <Button 
                            variant="secondary" 
                            size="lg" 
                            className="w-full bg-white text-secondary-600 hover:bg-gray-100 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold text-sm py-2.5"
                          >
                            Secure Your Spot
                            <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection direction="fade" delay={0}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Explore SheTech, All Year Long
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  SheTech provides monthly events and opportunities for young women to learn and discover how their dreams can be realized in tech.
                </p>
              </div>
            </AnimatedSection>

            <ProgramsInteractiveView programs={programs} />
          </div>
        </section>

        {/* Video Section */}
        <section className="relative py-12 sm:py-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-0 w-72 h-72 bg-primary-200 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary-200 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection direction="fade" delay={0}>
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                  See SheTech in Action
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Watch how SheTech is making a difference in the lives of young women in STEM
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              <AnimatedSection direction="right" delay={0}>
                <div className="group">
                  <VideoCard
                    title="SheTech student on Good Things Utah"
                    videoId="YOUR_VIDEO_ID_1"
                    description="Hear from SheTech students about their experiences"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={150}>
                <div className="group">
                  <VideoCard
                    title="SheTech Club Video"
                    videoId="YOUR_VIDEO_ID_2"
                    description="See what happens at SheTech club meetings"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Mailing List Section */}
        <section id="mailing-list" className="relative py-8 sm:py-10 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white">
          {/* Subtle background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                    Stay Connected
                  </h2>
                  <p className="text-sm sm:text-base text-white/90">
                    Join our mailing list to stay updated with all things SheTech
                  </p>
                </div>
                
                <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 min-w-[250px] bg-white/15 border-white/30 text-white placeholder:text-white/70 focus:bg-white/25 focus:border-white/50"
                    fullWidth={false}
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    className="bg-white text-primary-600 hover:bg-gray-50 shadow-md whitespace-nowrap px-6"
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
