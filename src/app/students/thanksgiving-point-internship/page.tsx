'use client';

import React from 'react';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

// Pre-calculate floating tech element positions for stable rendering
const floatingTechElements = [...Array(12)].map(() => ({
  left: Math.random() * 100,
  top: 10 + Math.random() * 60,
  size: 20 + Math.random() * 30,
  delay: Math.random() * 5,
  duration: 8 + Math.random() * 6,
}));

// Fields of focus data with professional SVG icons
const fieldsOfFocus = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Agriculture Technology',
    description: 'Explore innovative farming technologies and sustainable agricultural practices',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Entomology',
    description: 'Study insects and their role in ecosystems and agriculture',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
      </svg>
    ),
    title: 'Exhibit Design',
    description: 'Create engaging educational exhibits and interactive displays',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'STEM Education',
    description: 'Develop curriculum and teach science, technology, engineering, and math',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Outdoor Education',
    description: 'Lead hands-on learning experiences in natural environments',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Wetland Restoration',
    description: 'Work on conservation projects and ecosystem restoration',
  },
];

// Benefits data
const benefits = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Real-World Projects',
    description: 'Work on meaningful projects that make a difference in science and the environment',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Female Mentors',
    description: 'Connect with inspiring women leaders in STEM fields',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Career Exploration',
    description: 'Discover diverse STEM career paths and build your professional network',
  },
];

const APPLICATION_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfRNOcwWDFwLLwe9pvEeItG4XVxcRGb9yCvLTlmIasck7Hw-w/viewform';

export default function ThanksgivingPointInternshipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Modern Tech Design */}
        <section className="relative overflow-hidden pt-20 sm:pt-24 pb-20 sm:pb-28 min-h-[700px] flex items-center">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
            {/* Animated gradient orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary-400/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
          </div>

          {/* Hexagonal Grid Pattern */}
          <div className="absolute inset-0 z-[1] opacity-10">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="hexGrid" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                  <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-400"/>
                  <circle cx="50" cy="50" r="2" fill="currentColor" className="text-primary-500"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexGrid)" />
            </svg>
          </div>

          {/* Animated Circuit Lines */}
          <div className="absolute inset-0 z-[2] opacity-20">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
              <defs>
                <linearGradient id="circuitGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00a6ce" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#bd1c81" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#00a6ce" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#bd1c81" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#00a6ce" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#bd1c81" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              
              {/* Main circuit path */}
              <path 
                d="M0 200 Q200 150 400 200 T800 200 T1200 200" 
                fill="none" 
                stroke="url(#circuitGradient1)" 
                strokeWidth="2"
                className="circuit-path-1"
              />
              <circle cx="200" cy="150" r="5" fill="#00a6ce" className="circuit-node" />
              <circle cx="600" cy="200" r="5" fill="#bd1c81" className="circuit-node" />
              <circle cx="1000" cy="200" r="5" fill="#00a6ce" className="circuit-node" />
              
              {/* Secondary circuit path */}
              <path 
                d="M0 400 Q300 350 600 400 T1200 400" 
                fill="none" 
                stroke="url(#circuitGradient2)" 
                strokeWidth="1.5"
                className="circuit-path-2"
              />
              <circle cx="300" cy="350" r="4" fill="#bd1c81" className="circuit-node" />
              <circle cx="600" cy="400" r="4" fill="#00a6ce" className="circuit-node" />
              <circle cx="900" cy="400" r="4" fill="#bd1c81" className="circuit-node" />
              
              {/* Vertical connections */}
              <path d="M200 150 L200 350" stroke="url(#circuitGradient1)" strokeWidth="1" opacity="0.4" className="circuit-connection" />
              <path d="M600 200 L600 400" stroke="url(#circuitGradient2)" strokeWidth="1" opacity="0.4" className="circuit-connection" />
              <path d="M1000 200 L900 400" stroke="url(#circuitGradient1)" strokeWidth="1" opacity="0.4" className="circuit-connection" />
            </svg>
          </div>

          {/* Floating Tech Elements */}
          <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
            {floatingTechElements.map((element, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${element.left}%`,
                  top: `${element.top}%`,
                  width: `${element.size}px`,
                  height: `${element.size}px`,
                  animation: `techFloat ${element.duration}s ease-in-out infinite`,
                  animationDelay: `${element.delay}s`,
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <circle cx="12" cy="12" r="4" fill="rgba(0, 166, 206, 0.3)" stroke="rgba(0, 166, 206, 0.6)" strokeWidth="1"/>
                  <path d="M12 0 L12 6 M12 18 L12 24 M0 12 L6 12 M18 12 L24 12" stroke="rgba(189, 28, 129, 0.5)" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="1.5" fill="rgba(189, 28, 129, 0.7)"/>
                </svg>
              </div>
            ))}
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column - Content */}
                <div>
                  <AnimatedSection initialLoad direction="left" delay={0}>
                    {/* Badge */}
                    <div className="mb-8">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md text-primary-300 text-sm font-semibold rounded-full border border-primary-500/30 shadow-lg">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Internship Program
                      </span>
                    </div>
                    
                    {/* Main Heading */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                      <span className="block text-white mb-2">SheTech</span>
                      <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent animate-gradient">
                        Internship Program
                      </span>
                      <span className="block text-white/90 text-4xl sm:text-5xl lg:text-6xl mt-3 font-medium">
                        at Thanksgiving Point
                      </span>
                    </h1>
                    
                    {/* Description */}
                    <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                      Transform your passion for STEM into real-world experience. Work alongside inspiring female mentors in agriculture technology, entomology, exhibit design, and more.
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={APPLICATION_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-400 hover:to-primary-500 shadow-xl shadow-primary-500/30 cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-900 hover:scale-105"
                      >
                        Apply Now
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                      <a
                        href="#program-overview"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-900"
                      >
                        Learn More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                    </div>

                    {/* Stats/Highlights */}
                    <div className="mt-12 flex flex-wrap gap-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 flex items-center justify-center">
                          <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">Female</div>
                          <div className="text-sm text-gray-400">Mentors</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-secondary-500/20 backdrop-blur-sm border border-secondary-500/30 flex items-center justify-center">
                          <svg className="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">Real-World</div>
                          <div className="text-sm text-gray-400">Projects</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 flex items-center justify-center">
                          <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">Hands-On</div>
                          <div className="text-sm text-gray-400">Experience</div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Right Column - Visual Elements */}
                <div className="relative">
                  <AnimatedSection initialLoad direction="right" delay={200}>
                    <div className="relative h-[500px] lg:h-[600px]">
                      {/* Glassmorphism Card Container */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full max-w-md">
                          {/* Main Glass Card */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-80 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8">
                            <div className="space-y-6">
                              {/* Card Header */}
                              <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                                <div className="w-3 h-3 rounded-full bg-secondary-500"></div>
                                <div className="w-3 h-3 rounded-full bg-primary-400"></div>
                                <div className="flex-1 h-px bg-gradient-to-r from-primary-500/50 to-transparent"></div>
                              </div>
                              
                              {/* Card Content */}
                              <div className="space-y-4">
                                <div className="h-2 bg-gradient-to-r from-primary-500/30 to-primary-500/10 rounded-full"></div>
                                <div className="h-2 bg-gradient-to-r from-secondary-500/30 to-secondary-500/10 rounded-full w-3/4"></div>
                                <div className="h-2 bg-gradient-to-r from-primary-500/20 to-primary-500/5 rounded-full w-5/6"></div>
                              </div>
                              
                              {/* Tech Icon Grid */}
                              <div className="grid grid-cols-4 gap-4 pt-4">
                                {[...Array(8)].map((_, i) => (
                                  <div key={i} className="aspect-square rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                    </svg>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          {/* Floating Tech Elements Around Card */}
                          <div className="absolute top-10 right-10 w-20 h-20 bg-primary-500/20 backdrop-blur-sm rounded-xl border border-primary-500/30 flex items-center justify-center animate-float">
                            <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          
                          <div className="absolute bottom-20 left-5 w-16 h-16 bg-secondary-500/20 backdrop-blur-sm rounded-xl border border-secondary-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                            <svg className="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          
                          <div className="absolute top-1/3 -left-10 w-14 h-14 bg-primary-400/20 backdrop-blur-sm rounded-lg border border-primary-400/30 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                            <svg className="w-7 h-7 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview Section */}
        <AnimatedSection>
          <section id="program-overview" className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left Column - Heading */}
                  <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent">
                      UNIQUE STEM OPPORTUNITIES
                    </h2>
                  </div>

                  {/* Right Column - Text */}
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-base sm:text-lg">
                      The SheTech Internship Program at Thanksgiving Point offers high school girls the unique opportunity to gain hands-on experience in a variety of exciting STEM fields, including agriculture technology, entomology, exhibit design, STEM education, outdoor education, wetland restoration, and more.
                    </p>
                    <p className="text-base sm:text-lg">
                      In partnership with SheTech, this program connects students with inspiring female mentors who are leaders in their fields. Interns will work on real-world projects, build valuable skills, and explore careers that are shaping the future of science, technology, and the environment.
                    </p>
                    <p className="text-base sm:text-lg">
                      This program is designed to inspire the next generation of female STEM leaders and provide the support, guidance, and opportunities necessary for their success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle tech pattern background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <defs>
                  <pattern id="hexPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hexPattern)" className="text-primary-600" />
              </svg>
            </div>
          </section>
        </AnimatedSection>

        {/* Fields of Focus Section */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                    Fields of Focus
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Explore diverse STEM disciplines and discover your passion
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {fieldsOfFocus.map((field, index) => (
                    <AnimatedSection key={index} delay={index * 100}>
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 text-white mb-4 mx-auto">
                          {field.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">
                          {field.title}
                        </h3>
                        <p className="text-gray-600 text-center text-sm">
                          {field.description}
                        </p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Benefits & Opportunities Section */}
        <AnimatedSection>
          <section className="relative py-16 sm:py-20 overflow-hidden">
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
            
            {/* Tech pattern overlay */}
            <div className="absolute inset-0 opacity-20">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <defs>
                  <pattern id="benefitsPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1.5" fill="rgba(0, 166, 206, 0.5)"/>
                    <path d="M20 0 L20 40 M0 20 L40 20" stroke="rgba(189, 28, 129, 0.3)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#benefitsPattern)" />
              </svg>
            </div>

            {/* Animated gradient orbs */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                    Benefits & Opportunities
                  </h2>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    What you&apos;ll gain from this unique internship experience
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {benefits.map((benefit, index) => (
                    <AnimatedSection key={index} delay={index * 150}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 text-white mb-6 mx-auto">
                          {benefit.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white text-center">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-300 text-center text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Application Information Section */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                    Application Information
                  </h2>
                  <p className="text-lg text-gray-600">
                    Important details before you apply
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Time estimate info box */}
                  <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-primary-900 mb-2">
                          Application Time
                        </h3>
                        <p className="text-primary-800">
                          Please note this application will take approximately <strong>10-15 minutes</strong> to complete.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email requirement warning box */}
                  <div className="bg-secondary-50 border-l-4 border-secondary-500 p-6 rounded-r-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                          Email Requirement
                        </h3>
                        <p className="text-secondary-800">
                          <strong>IMPORTANT</strong> - You will be required to provide your <strong>personal email address</strong> below. School assigned email addresses are not permitted (e.g., &quot;example.email@alpinesd.com&quot;).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Call-to-Action Section */}
        <AnimatedSection>
          <section className="relative py-20 sm:py-24 overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-600"></div>
            
            {/* Tech pattern overlay */}
            <div className="absolute inset-0 opacity-20">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <defs>
                  <pattern id="ctaPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5"/>
                    <circle cx="30" cy="30" r="2" fill="rgba(255, 255, 255, 0.2)"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ctaPattern)" />
              </svg>
            </div>

            {/* Animated gradient orbs */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                  Ready to Start Your STEM Journey?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join the SheTech Internship Program at Thanksgiving Point and gain hands-on experience in exciting STEM fields while working with inspiring female mentors.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={APPLICATION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-6 text-lg font-medium rounded-xl bg-white text-primary-600 hover:bg-gray-100 shadow-xl cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                  >
                    Apply for Internship
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Real-world projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Female mentors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Career exploration</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes techFloat {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-40px) translateX(-5px) rotate(-5deg);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-20px) translateX(5px) rotate(3deg);
            opacity: 0.7;
          }
        }

        @keyframes circuitFlow {
          0% {
            stroke-dashoffset: 0;
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 100;
            opacity: 0.6;
          }
        }

        @keyframes nodePulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes connectionPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .circuit-path-1,
        .circuit-path-2 {
          stroke-dasharray: 30 15;
          animation: circuitFlow 8s linear infinite;
        }

        .circuit-path-2 {
          animation-duration: 10s;
          animation-delay: -2s;
        }

        .circuit-node {
          animation: nodePulse 2s ease-in-out infinite;
        }

        .circuit-connection {
          animation: connectionPulse 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
