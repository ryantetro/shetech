'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui';

// Pre-calculate particle positions for stable rendering
const particlePositions = [...Array(15)].map(() => ({
  left: Math.random() * 100,
  duration: 5 + Math.random() * 5,
  delay: Math.random() * 3,
  colorIndex: Math.floor(Math.random() * 3),
}));

export default function ExplorerDayPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState<'workshops' | 'schedule'>('workshops');
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-advance testimonial carousel
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Scroll carousel horizontally when active testimonial changes
  useEffect(() => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const card = container.children[activeTestimonial] as HTMLElement;
      if (card) {
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const containerWidth = container.offsetWidth;
        const scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });
      }
    }
  }, [activeTestimonial]);

  // Auto-advance gallery carousel
  useEffect(() => {
    if (isGalleryPaused) return;
    
    const interval = setInterval(() => {
      setActiveGalleryImage((prev) => (prev + 1) % 9);
    }, 4000);

    return () => clearInterval(interval);
  }, [isGalleryPaused]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Custom Tech Background */}
        <section className="relative overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-20">
          {/* Base gradient background - Subtle professional gradient */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" 
                 style={{ 
                   background: 'linear-gradient(to bottom, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 25%, rgb(51, 65, 85) 50%, rgb(71, 85, 105) 70%, rgb(148, 163, 184) 85%, rgb(241, 245, 249) 95%, rgb(255, 255, 255) 100%)'
                 }}></div>
          </div>

          {/* Custom Tech Grid Pattern */}
          <div className="absolute inset-0 opacity-30">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="techGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0, 166, 206, 0.3)" strokeWidth="0.5"/>
                </pattern>
                <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00a6ce" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#bd1c81" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#00a6ce" stopOpacity="0.4" />
                </linearGradient>
                <filter id="nodeGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <rect width="100%" height="100%" fill="url(#techGrid)" />
              
              {/* Animated connection nodes */}
              {[...Array(25)].map((_, i) => {
                const x = ((i * 13) % 100);
                const y = ((i * 17) % 100);
                const delay = i * 0.15;
                return (
                  <g key={i}>
                    <circle
                      cx={`${x}%`}
                      cy={`${y}%`}
                      r="4"
                      fill="url(#nodeGradient)"
                      opacity="0.7"
                      filter="url(#nodeGlow)"
                      className="animate-pulse"
                      style={{ animationDelay: `${delay}s` }}
                    />
                    {/* Connection lines */}
                    {i < 24 && (
                      <line
                        x1={`${x}%`}
                        y1={`${y}%`}
                        x2={`${((i + 1) * 13) % 100}%`}
                        y2={`${((i + 1) * 17) % 100}%`}
                        stroke="url(#nodeGradient)"
                        strokeWidth="1.5"
                        opacity="0.4"
                        className="animate-pulse"
                        style={{ animationDelay: `${delay}s` }}
                      />
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Hexagonal Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="hexPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <polygon
                    points="40,5 70,20 70,50 40,65 10,50 10,20"
                    fill="none"
                    stroke="rgba(189, 28, 129, 0.2)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexPattern)" />
            </svg>
          </div>

          {/* Animated Data Streams */}
          <div className="absolute inset-0 opacity-25">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 w-px"
                style={{
                  left: `${(i + 1) * 8}%`,
                  height: '100%',
                  background: `linear-gradient(to bottom, transparent, ${
                    i % 3 === 0 ? '#00a6ce' : i % 3 === 1 ? '#bd1c81' : '#010193'
                  }40, transparent)`,
                  animation: `dataStream ${4 + (i % 3)}s linear infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>

          {/* Floating particles with glow */}
          <div className="absolute inset-0 opacity-20">
            {particlePositions.map((particle, i) => (
              <div
                key={i}
                className="absolute bottom-0 w-2 h-2 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  backgroundColor: particle.colorIndex === 0 ? '#00a6ce' : particle.colorIndex === 1 ? '#bd1c81' : '#010193',
                  boxShadow: `0 0 8px ${particle.colorIndex === 0 ? '#00a6ce' : particle.colorIndex === 1 ? '#bd1c81' : '#010193'}80`,
                  animation: `floatUp ${particle.duration}s ease-in infinite`,
                  animationDelay: `${particle.delay}s`,
                }}
              />
            ))}
          </div>

          {/* Gradient overlay for depth and smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-slate-800/5 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60"></div>
          
          {/* Subtle animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* SheTech Text - Small branding */}
              {/* <div className="mb-2">
                <span className="text-white/90 text-lg sm:text-xl font-light tracking-wide">SheTech</span>
              </div> */}
              
              {/* Explorer Day Logo - Featured prominently */}
              <div className="mb-4 relative">
                {/* Glow effect behind logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-xl h-20 bg-white/20 blur-3xl"></div>
                </div>
                
                {/* Logo container with glassmorphism */}
                <div className="relative p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
                  <div className="relative w-full max-w-xl mx-auto">
                    <Image
                      src="/explorerday/explorerday.png"
                      alt="Explorer Day"
                      width={600}
                      height={150}
                      className="w-full h-auto drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Date Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/20 text-xs font-semibold mb-3 shadow-lg">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                February 24, 2026
              </div>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto mb-4 font-light">
                Join more than 3,000 girls from hundreds of schools around the state for this free, hands-on day of STEM, industry partners, mentors, and more. <span className="font-semibold text-white">Lunch is included!</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
                <Button
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-white/90 border-0 font-bold shadow-2xl shadow-white/20 px-6 py-3 text-base transform hover:scale-105 transition-all cursor-pointer"
                >
                  Register Free
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/80 bg-white/10 text-white hover:bg-white hover:text-primary-600 backdrop-blur-sm font-semibold px-6 py-3 text-base transform hover:scale-105 transition-all cursor-pointer"
                >
                  View Schedule
                </Button>
              </div>

              {/* Event Quick Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
                {/* Date Card */}
                <div className="group relative p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/30">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-xs font-semibold text-white/90 uppercase tracking-wide mb-0.5 drop-shadow-sm">Event Date</h3>
                      <p className="text-base font-bold text-white drop-shadow-md">Feb 24, 2026</p>
                      <p className="text-xs text-white/95 mt-0.5 drop-shadow-sm">Mark your calendar!</p>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="group relative p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-secondary-500/30">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-xs font-semibold text-white/90 uppercase tracking-wide mb-0.5 drop-shadow-sm">Location</h3>
                      <p className="text-base font-bold text-white drop-shadow-md">Utah Valley University</p>
                      <p className="text-xs text-white/95 mt-0.5 drop-shadow-sm">Orem, Utah</p>
                    </div>
                  </div>
                </div>

                {/* Participants Card */}
                <div className="group relative p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-400/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary-400/30">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-xs font-semibold text-white/90 uppercase tracking-wide mb-0.5 drop-shadow-sm">Participants</h3>
                      <p className="text-base font-bold text-white drop-shadow-md">3,000+</p>
                      <p className="text-xs text-white/95 mt-0.5 drop-shadow-sm">Students from 150+ schools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect & Schedule - Tabbed Interface */}
        <AnimatedSection direction="up" className="py-10 sm:py-12 pb-24 sm:pb-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Unified Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  What to Expect
                </h2>
                <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  SheTech Explorer Day is a hands-on tech conference for high school girls from grades 9th through 12th. Students attend a selection of 40+ different workshop sessions covering diverse topics in STEM!
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex justify-center mb-8">
                <div className="relative inline-flex rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 p-1 shadow-lg">
                  {/* Animated background indicator */}
                  <div
                    className={`absolute top-1 bottom-1 rounded-lg bg-gradient-to-r transition-all duration-300 ease-in-out ${
                      activeTab === 'workshops'
                        ? 'left-1 right-1/2 bg-gradient-to-r from-primary-500 to-primary-400'
                        : 'left-1/2 right-1 bg-gradient-to-r from-secondary-500 to-secondary-400'
                    }`}
                  ></div>
                  
                  {/* Tab Buttons */}
                  <button
                    onClick={() => setActiveTab('workshops')}
                    className={`relative z-10 px-8 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ease-in-out cursor-pointer ${
                      activeTab === 'workshops'
                        ? 'text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Workshops
                  </button>
                  <button
                    onClick={() => setActiveTab('schedule')}
                    className={`relative z-10 px-8 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ease-in-out cursor-pointer ${
                      activeTab === 'schedule'
                        ? 'text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Schedule
                  </button>
                </div>
              </div>

              {/* Tab Content Container */}
              <div className="relative pb-20 sm:pb-16">
                {/* Workshops Tab Content */}
                {activeTab === 'workshops' && (
                  <div className="transition-all duration-500 ease-in-out opacity-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                      {/* Image Column */}
                      <div key="workshops-image" className="relative order-2 lg:order-1 overflow-hidden animate-slide-in-left">
                        <div className="rounded-2xl bg-gradient-to-br from-primary-400 via-secondary-400 to-tertiary-400 p-1 shadow-2xl transform hover:scale-105 transition-transform">
                          <div className="w-full h-full rounded-2xl overflow-hidden">
                            <Image
                              src="/explorerday/cydni.png"
                              alt="SheTech Explorer Day Speaker"
                              width={800}
                              height={800}
                              className="w-full h-full object-cover"
                              priority
                            />
                          </div>
                        </div>
                      </div>

                      {/* Workshops Grid Column */}
                      <div className="order-1 lg:order-2">
                        <div className="grid grid-cols-2 gap-3">
                          {features.map((feature, index) => (
                            <div
                              key={`workshop-${activeTab}-${index}`}
                              className="flex items-start gap-2.5 group"
                              style={{
                                opacity: 0,
                                animationDelay: `${index * 50}ms`,
                                animation: activeTab === 'workshops' ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                              }}
                            >
                              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <span className="text-xl">{feature.icon}</span>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-0.5 text-sm">{feature.title}</h4>
                                <p className="text-xs text-gray-600">{feature.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Schedule Tab Content */}
                {activeTab === 'schedule' && (
                  <div className="transition-all duration-500 ease-in-out opacity-100">
                    <div className="max-w-3xl mx-auto">
                      <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-[70px] sm:left-[100px] top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500"></div>

                        {/* Timeline items */}
                        <div className="space-y-0">
                          {schedule.map((item, index) => (
                            <div
                              key={`schedule-${activeTab}-${index}`}
                              className="relative flex gap-3 sm:gap-6 pb-4 sm:pb-8 last:pb-0 group"
                              style={{
                                opacity: 0,
                                animationDelay: `${index * 100}ms`,
                                animation: activeTab === 'schedule' ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                              }}
                            >
                              {/* Time label on left */}
                              <div className="w-[70px] sm:w-[100px] flex-shrink-0 text-right pt-3 sm:pt-5">
                                <span className="inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-secondary-100 text-secondary-700 text-[10px] sm:text-xs font-bold">
                                  {item.time}
                                </span>
                              </div>

                              {/* Dot on the line */}
                              <div className="absolute left-[70px] sm:left-[100px] top-4 sm:top-6 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-secondary-500 border-2 sm:border-[3px] border-white shadow-md -translate-x-1/2 group-hover:scale-150 transition-transform z-10"></div>

                              {/* Content card on right */}
                              <div className="flex-1 pt-0 sm:pt-1">
                                <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all group-hover:-translate-y-1">
                                  <h4 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-1.5">{item.title}</h4>
                                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Visual Gallery - Image Carousel */}
        <AnimatedSection direction="up" className="pt-48 pb-6 sm:pt-36 sm:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-secondary-50/30 rounded-2xl sm:rounded-none py-8 sm:py-0 px-4 sm:px-0 -mx-4 sm:mx-0">
                <div className="text-center mb-6">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Experience Gallery
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    Moments from previous Explorer Day events
                  </p>
                </div>

              {/* Carousel Container */}
              <div 
                className="relative max-w-6xl mx-auto px-12 sm:px-16"
                onMouseEnter={() => setIsGalleryPaused(true)}
                onMouseLeave={() => setIsGalleryPaused(false)}
              >
                {/* Left Arrow */}
                <button
                  onClick={() => setActiveGalleryImage((prev) => (prev - 1 + 9) % 9)}
                  className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all cursor-pointer group"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Image Carousel */}
                <div className="relative h-[250px] sm:h-[300px] lg:h-[350px] overflow-hidden rounded-3xl">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {[...Array(9)].map((_, index) => {
                      let offset = index - activeGalleryImage;
                      // Handle circular wrapping
                      if (offset > 4) offset -= 9;
                      if (offset < -4) offset += 9;
                      
                      const isActive = offset === 0;
                      const isLeft = offset === -1;
                      const isRight = offset === 1;
                      const isVisible = Math.abs(offset) <= 1;

                      if (!isVisible) return null;

                      return (
                        <div
                          key={index}
                          className={`absolute transition-all duration-500 ease-in-out cursor-pointer ${
                            isActive
                              ? 'z-10 scale-100 opacity-100'
                              : isLeft
                              ? 'z-0 -translate-x-[45%] sm:-translate-x-[35%] scale-65 sm:scale-75 opacity-50 sm:opacity-60'
                              : isRight
                              ? 'z-0 translate-x-[45%] sm:translate-x-[35%] scale-65 sm:scale-75 opacity-50 sm:opacity-60'
                              : 'opacity-0'
                          }`}
                          onClick={() => !isActive && setActiveGalleryImage(index)}
                        >
                          <div className="relative w-[160px] h-[250px] sm:w-[280px] sm:h-[300px] lg:w-[400px] lg:h-[350px] rounded-xl overflow-hidden shadow-xl">
                            {/* Placeholder Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 via-secondary-200 to-tertiary-200 flex items-center justify-center">
                              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                              </svg>
                            </div>
                            
                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            
                            {/* Image Label */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                              <p className="text-sm sm:text-base font-bold mb-0.5">Photo {index + 1}</p>
                              <p className="text-xs text-white/80">Explorer Day Event</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => setActiveGalleryImage((prev) => (prev + 1) % 9)}
                  className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all cursor-pointer group"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(9)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveGalleryImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === activeGalleryImage
                        ? 'bg-primary-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* View All CTA */}
              <div className="text-center mt-4">
                <button className="text-primary-600 hover:text-primary-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer">
                  VIEW ALL PHOTOS
                </button>
              </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Highlights Section - Dark Mode */}
        <AnimatedSection direction="up" className="py-10 sm:py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left - Stats */}
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                    By the Numbers
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="group">
                        <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-1.5 group-hover:scale-110 transition-transform inline-block">
                          {stat.value}
                        </div>
                        <p className="text-slate-300 font-medium text-sm">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Testimonial Card */}
                <div className="relative">
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
                    <svg className="w-10 h-10 text-primary-400 mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-base text-slate-100 mb-4 leading-relaxed">
                      &quot;It feels really cool to know that there are other girls out there trying to pursue a career in technology and that women can do what men can do.&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white font-bold text-base">
                        D
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">Deisy Archibald</p>
                        <p className="text-xs text-slate-400">Student, Lone Peak High School</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why Explorer Day Matters */}
        <AnimatedSection direction="up" className="py-10 sm:py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  Why Explorer Day Matters
                </h2>
                <p className="text-base text-gray-600 max-w-3xl mx-auto">
                  More than just an event—it&apos;s a launching pad for future innovators
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {whyMatters.map((item, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-primary-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Success Stories Carousel */}
        {/*
        <AnimatedSection direction="up" className="py-10 sm:py-12 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  Success Stories
                </h2>
                <p className="text-base text-gray-600">
                  Hear from students, mentors, and teachers
                </p>
              </div>

              <div className="relative">
                <div
                  ref={carouselRef}
                  className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
                    >
                      <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                            {testimonial.initial}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                            <p className="text-xs text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed italic">
                          &quot;{testimonial.quote}&quot;
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      index === activeTestimonial
                        ? 'bg-primary-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
        */}

        {/* Industry Partners Section */}
        <AnimatedSection direction="up" className="py-8 sm:py-10 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Industry Partners
              </h2>
              <p className="text-xs text-gray-600 mb-4">
                Proud to collaborate with leading technology companies
              </p>
              
              <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-200 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-4">
                <Image
                  src="/explorerday/sponsors.png"
                  alt="Explorer Day Sponsors"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Footer Banner */}
        <section className="relative overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-12">
          {/* Multi-stop gradient for smooth transition */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" 
                 style={{ 
                   background: 'linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(249, 250, 251) 8%, rgb(241, 245, 249) 16%, rgb(226, 232, 240) 24%, rgb(203, 213, 225) 32%, rgb(148, 163, 184) 40%, rgb(100, 116, 139) 50%, rgb(71, 85, 105) 60%, rgb(51, 65, 85) 70%, rgb(30, 41, 59) 82%, rgb(15, 23, 42) 100%)'
                 }}></div>
          </div>

          {/* Subtle tech pattern with fade */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300a6ce' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-600/5 to-primary-600/10"></div>

          {/* Animated orbs */}
          <div className="absolute top-20 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight drop-shadow-lg">
                Ready to Empower the Next Generation?
              </h2>
              <p className="text-base sm:text-lg text-slate-200 mb-6 leading-relaxed">
                Join us in inspiring young women to pursue careers in STEM
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/teachers/register-your-students">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white border-0 font-semibold shadow-xl shadow-primary-500/30 px-8 transform hover:scale-105 transition-all cursor-pointer"
                  >
                    Register Your School
                  </Button>
                </Link>
                <Link href="/companies/volunteer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 transform hover:scale-105 transition-all cursor-pointer"
                  >
                    Volunteer as a Mentor
                  </Button>
                </Link>
                <Link href="/companies/sponsor">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 transform hover:scale-105 transition-all cursor-pointer"
                  >
                    Sponsor Explorer Day
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes dataStream {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

// Data
const features = [
  {
    icon: '💻',
    title: 'Programming',
    description: 'Learn coding, web development, and software engineering',
  },
  {
    icon: '⚙️',
    title: 'Engineering',
    description: 'Explore mechanical, electrical, and tech engineering',
  },
  {
    icon: '🚀',
    title: 'Aerospace',
    description: 'Discover aviation, space technology, and rocket science',
  },
  {
    icon: '🤖',
    title: 'Robotics',
    description: 'Build and program robots with cutting-edge technology',
  },
  {
    icon: '💡',
    title: 'Product Invention & Entrepreneurship',
    description: 'Create innovative solutions and launch your own ideas',
  },
  {
    icon: '🧬',
    title: 'Biomedicine',
    description: 'Explore biotechnology, health tech, and medical innovations',
  },
  {
    icon: '🌐',
    title: 'Web & Digital Marketing',
    description: 'Learn UX design, ecommerce, and digital marketing strategies',
  },
  {
    icon: '🎮',
    title: 'Gaming, Esports & VR',
    description: 'Experience game development, esports, and virtual reality',
  },
  {
    icon: '🔬',
    title: 'Science in Tech',
    description: 'Explore chemistry, formulation, materials, and more',
  },
];

const schedule = [
  {
    time: '8:00 – 9:00',
    title: 'Bus Arrival & Check-In',
    description: 'Bus arrival, check-in & activities in the main hall',
  },
  {
    time: '9:00 – 11:30',
    title: 'Kickoff, Workshops & TechZone',
    description: 'Opening kickoff, workshop sessions, and TechZone rotations',
  },
  {
    time: '11:30 – 12:00',
    title: 'Lunch',
    description: 'Complimentary lunch included for all attendees',
  },
  {
    time: '12:00 – 1:15',
    title: 'TechChallenge & Prizes',
    description: 'TechChallenge competition finals and awards ceremony',
  },
];

const stats = [
  { value: '3,000+', label: 'Students' },
  { value: '40+', label: 'Workshops' },
  { value: '30+', label: 'Tech Companies' },
  { value: '150+', label: 'Schools' },
];

const whyMatters = [
  {
    icon: '👥',
    title: 'Connect With STEM Role Models',
    description: 'Meet women leaders in technology who can inspire and guide your career journey in STEM fields.',
  },
  {
    icon: '💼',
    title: 'Discover Real Tech Careers',
    description: 'Learn about diverse career paths in technology and what it takes to succeed in the industry.',
  },
  {
    icon: '🔬',
    title: 'Experience Hands-On Innovation',
    description: 'Get practical experience with cutting-edge technology through interactive workshops and challenges.',
  },
];

const testimonials = [
  {
    initial: 'D',
    name: 'Deisy Archibald',
    role: 'Student, Lone Peak High School',
    quote: 'It feels really cool to know that there are other girls out there trying to pursue a career in technology and that women can do what men can do.',
  },
  {
    initial: 'A',
    name: 'Abbie Rogers',
    role: 'Senior, American Fork High School',
    quote: 'Explorer Day opened my eyes to so many opportunities in tech. I never knew there were so many exciting career paths available!',
  },
  {
    initial: 'C',
    name: 'Cydni Tetro',
    role: 'President, Women Tech Council',
    quote: 'SheTech Explorer Day is transforming how young women see their future in technology. It is inspiring to see thousands of girls discover their potential.',
  },
  {
    initial: 'J',
    name: 'Jayden',
    role: 'Student Attendee',
    quote: 'The opportunities really opened my mind. I am realizing–hey, I can get involved in technology!',
  },
  {
    initial: 'N',
    name: 'Nicole',
    role: 'Student Attendee',
    quote: 'The hands-on workshops were amazing! I got to experience real technology and meet women working in fields I did not even know existed.',
  },
  {
    initial: 'T',
    name: 'Teacher',
    role: 'Participating School',
    quote: 'As a teacher, I saw my students come alive with excitement. This event is transformative and essential for our girls in STEM.',
  },
];
