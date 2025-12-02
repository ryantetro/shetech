'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button, Input } from '@/components/ui';

// Pre-calculate particle positions for stable rendering
const particlePositions = [...Array(15)].map(() => ({
  left: Math.random() * 100,
  duration: 5 + Math.random() * 5,
  delay: Math.random() * 3,
  colorIndex: Math.floor(Math.random() * 3),
}));

// Company logos data structure - all using logo images
const companyLogos = [
  { 
    name: 'Ivanti', 
    logo: '/summer-internship/logos/ivanti.png',
    url: 'https://www.ivanti.com' 
  },
  { 
    name: 'Dell', 
    logo: '/summer-internship/logos/dell.png',
    url: 'https://www.dell.com' 
  },
  { 
    name: 'Instructure', 
    logo: '/summer-internship/logos/instructure.png',
    url: 'https://www.instructure.com' 
  },
  { 
    name: 'NICE', 
    logo: '/summer-internship/logos/nice.png',
    url: 'https://www.nice.com' 
  },
  { 
    name: 'Adobe', 
    logo: '/summer-internship/logos/adobe.png',
    url: 'https://www.adobe.com' 
  },
  { 
    name: 'Swire Coca Cola', 
    logo: '/summer-internship/logos/swire.png',
    url: 'https://www.swirecocacola.com' 
  },
  { 
    name: 'Entrata', 
    logo: '/summer-internship/logos/entrata.png',
    url: 'https://www.entrata.com' 
  },
  { 
    name: 'Ancestry', 
    logo: '/summer-internship/logos/ancestry.png',
    url: 'https://www.ancestry.com' 
  },
  { 
    name: 'MX', 
    logo: '/summer-internship/logos/mx.png',
    url: 'https://www.mx.com' 
  },
  { 
    name: 'Tesla', 
    logo: '/summer-internship/logos/tesla.png',
    url: 'https://www.tesla.com' 
  },
  { 
    name: 'Thumbtack', 
    logo: '/summer-internship/logos/thumbtack.png',
    url: 'https://www.thumbtack.com' 
  },
];

// Benefits data with professional SVG icons
const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Visit Companies',
    description: 'Picture yourself in their environments',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Engage with Professionals',
    description: 'Hear what "a day in their life" looks like',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Learn to Ideate',
    description: 'Brainstorm and ideate solutions to tech problems',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Understand Impact',
    description: 'See the impact you can have with a STEM degree',
  },
];

export default function SummerInternshipPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement email submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      alert('Thank you for signing up! We\'ll notify you when registration opens.');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Custom Tech Background */}
        <section className="relative overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-12 min-h-[calc(100vh-80px)] flex items-center">
          {/* Base gradient background - Subtle professional gradient */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" 
                 style={{ 
                   background: 'linear-gradient(to bottom, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 25%, rgb(51, 65, 85) 50%, rgb(71, 85, 105) 70%, rgb(148, 163, 184) 85%, rgb(241, 245, 249) 95%, rgb(255, 255, 255) 100%)'
                 }}></div>
          </div>

          {/* Custom Tech Grid Pattern - Unique variation */}
          <div className="absolute inset-0 opacity-30">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="internshipGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(0, 166, 206, 0.3)" strokeWidth="0.5"/>
                  <circle cx="40" cy="40" r="2" fill="rgba(189, 28, 129, 0.2)"/>
                </pattern>
                <linearGradient id="internshipNodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00a6ce" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#bd1c81" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#00a6ce" stopOpacity="0.4" />
                </linearGradient>
                <filter id="internshipNodeGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <rect width="100%" height="100%" fill="url(#internshipGrid)" />
              
              {/* Animated connection nodes */}
              {[...Array(20)].map((_, i) => {
                const x = ((i * 19) % 100);
                const y = ((i * 23) % 100);
                const delay = i * 0.2;
                return (
                  <g key={i}>
                    <circle
                      cx={`${x}%`}
                      cy={`${y}%`}
                      r="4"
                      fill="url(#internshipNodeGradient)"
                      opacity="0.7"
                      filter="url(#internshipNodeGlow)"
                      className="animate-pulse"
                      style={{ animationDelay: `${delay}s` }}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Science/Tech Line Art Illustrations - Inspired by reference */}
          <div className="absolute inset-0 opacity-15">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              {/* H₂O Chemical Formula */}
              <text x="5%" y="15%" fontSize="24" fill="rgba(255, 255, 255, 0.4)" fontFamily="serif" fontWeight="bold">
                H₂O
              </text>
              
              {/* Molecular Structure (Benzene Ring) */}
              <g transform="translate(15%, 20%)">
                <circle cx="0" cy="0" r="20" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1"/>
                <circle cx="0" cy="0" r="20" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" transform="rotate(60)"/>
                <circle cx="0" cy="0" r="20" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" transform="rotate(120)"/>
                <circle cx="20" cy="0" r="3" fill="rgba(255, 255, 255, 0.4)"/>
                <circle cx="-20" cy="0" r="3" fill="rgba(255, 255, 255, 0.4)"/>
                <circle cx="10" cy="17.32" r="3" fill="rgba(255, 255, 255, 0.4)"/>
                <circle cx="-10" cy="17.32" r="3" fill="rgba(255, 255, 255, 0.4)"/>
                <circle cx="10" cy="-17.32" r="3" fill="rgba(255, 255, 255, 0.4)"/>
                <circle cx="-10" cy="-17.32" r="3" fill="rgba(255, 255, 255, 0.4)"/>
              </g>
              
              {/* Beaker */}
              <g transform="translate(85%, 25%)">
                <path d="M-15 20 L-15 0 L-10 0 L-10 20 L-15 20" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5"/>
                <path d="M-10 0 L10 0" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5"/>
                <path d="M-12 5 L12 5" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                <path d="M-12 10 L12 10" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                <path d="M-12 15 L12 15" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
              </g>
              
              {/* DNA Double Helix */}
              <g transform="translate(25%, 60%)">
                <path d="M0 0 Q10 -15 20 0 Q10 15 0 0" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5"/>
                <path d="M0 20 Q10 5 20 20 Q10 35 0 20" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5"/>
                <path d="M0 0 L0 20" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                <path d="M20 0 L20 20" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                <circle cx="0" cy="10" r="2" fill="rgba(255, 255, 255, 0.4)"/>
                <circle cx="20" cy="10" r="2" fill="rgba(255, 255, 255, 0.4)"/>
              </g>
              
              {/* Gears */}
              <g transform="translate(70%, 65%)">
                <circle cx="0" cy="0" r="15" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5"/>
                <circle cx="0" cy="0" r="8" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1"/>
                {[0, 60, 120, 180, 240, 300].map((angle) => (
                  <rect
                    key={angle}
                    x="-2"
                    y="-15"
                    width="4"
                    height="6"
                    fill="rgba(255, 255, 255, 0.3)"
                    transform={`rotate(${angle})`}
                  />
                ))}
              </g>
              
              {/* Microscope */}
              <g transform="translate(10%, 75%)">
                <rect x="-5" y="0" width="10" height="25" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5"/>
                <circle cx="0" cy="5" r="3" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5"/>
                <path d="M-8 25 L8 25" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2"/>
                <path d="M-5 30 L5 30" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5"/>
              </g>
              
              {/* Flask */}
              <g transform="translate(50%, 10%)">
                <path d="M0 0 Q-5 5 -5 15 L-5 25 Q-5 30 0 30 Q5 30 5 25 L5 15 Q5 5 0 0" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5"/>
                <path d="M-5 10 L5 10" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                <path d="M-5 20 L5 20" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
              </g>
              
              {/* Circuit Pattern */}
              <g transform="translate(90%, 50%)">
                <rect x="-10" y="-5" width="20" height="10" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1"/>
                <circle cx="-10" cy="0" r="2" fill="rgba(255, 255, 255, 0.4)"/>
                <circle cx="10" cy="0" r="2" fill="rgba(255, 255, 255, 0.4)"/>
                <path d="M-15 0 L-10 0" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1"/>
                <path d="M10 0 L15 0" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1"/>
                <path d="M0 -5 L0 -10" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1"/>
                <path d="M0 5 L0 10" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1"/>
              </g>
              
              {/* Test Tube */}
              <g transform="translate(35%, 85%)">
                <rect x="-3" y="0" width="6" height="20" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5"/>
                <path d="M-3 0 Q-3 -3 0 -3 Q3 -3 3 0" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5"/>
                <path d="M-3 8 L3 8" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                <path d="M-3 15 L3 15" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
              </g>
            </svg>
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

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* SheTech Branding */}
              {/* <div className="text-center mb-2">
                <span className="text-white/90 text-sm sm:text-base font-light tracking-wide">SheTech</span>
              </div> */}

              {/* Main Title - Enhanced with Gradient */}
              <div className="text-center mb-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 text-center leading-tight tracking-tight">
                  <span className="block mb-1 bg-gradient-to-r from-white via-primary-200 to-secondary-200 bg-clip-text text-transparent drop-shadow-2xl">
                    Summer Internship
                  </span>
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent drop-shadow-2xl">Exploration</span>
                    <svg className="absolute -bottom-1 left-0 w-full h-3 text-secondary-300/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                    </svg>
                  </span>
                </h1>
                
                {/* Registration Badge - Enhanced */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 backdrop-blur-md text-white border border-white/30 text-xs font-semibold mb-4 shadow-xl shadow-primary-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></span>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Registration TBA
                </div>
              </div>

              {/* Description - More Prominent */}
              <div className="mb-5 p-4 sm:p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl max-w-4xl mx-auto">
                <p className="text-white/95 text-center text-sm sm:text-base leading-relaxed">
                  Discover opportunities with <span className="font-bold text-white">Silicon Slopes tech companies</span> alongside other high school girls. The SheTech Internship Exploration offers two weeks of in-person and virtual sessions.
                </p>
              </div>

              {/* Event Info Cards - Similar to Explorer Day */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5 max-w-4xl mx-auto">
                {/* Duration Card */}
                <div className="group relative p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                  <div className="flex items-start gap-2.5">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/30">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-[10px] font-semibold text-white/90 uppercase tracking-wide mb-0.5 drop-shadow-sm">Duration</h3>
                      <p className="text-base font-bold text-white drop-shadow-md">2 Weeks</p>
                      <p className="text-[10px] text-white/80 mt-0.5 drop-shadow-sm">In-person & virtual</p>
                    </div>
                  </div>
                </div>

                {/* Format Card */}
                <div className="group relative p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                  <div className="flex items-start gap-2.5">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-secondary-500 to-secondary-600 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-secondary-500/30">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-[10px] font-semibold text-white/90 uppercase tracking-wide mb-0.5 drop-shadow-sm">Format</h3>
                      <p className="text-base font-bold text-white drop-shadow-md">Hybrid</p>
                      <p className="text-[10px] text-white/80 mt-0.5 drop-shadow-sm">In-person & virtual</p>
                    </div>
                  </div>
                </div>

                {/* Participants Card */}
                <div className="group relative p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                  <div className="flex items-start gap-2.5">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary-400 to-secondary-400 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary-400/30">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-[10px] font-semibold text-white/90 uppercase tracking-wide mb-0.5 drop-shadow-sm">For</h3>
                      <p className="text-base font-bold text-white drop-shadow-md">High School</p>
                      <p className="text-[10px] text-white/80 mt-0.5 drop-shadow-sm">Girls grades 9-12</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefit Cards - Enhanced */}
              <div className="mb-5">
                <p className="text-white/90 text-center text-xs font-semibold mb-3 uppercase tracking-wide">
                  During the summer program, you will:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-5xl mx-auto">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="group relative p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-primary-300/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="text-center">
                        <div className="flex justify-center mb-2 text-white/90 group-hover:text-primary-200 transition-colors">
                          <div className="w-6 h-6">{benefit.icon}</div>
                        </div>
                        <h3 className="text-white font-bold text-xs mb-1 group-hover:text-primary-100 transition-colors">{benefit.title}</h3>
                        <p className="text-white/80 text-[10px] leading-snug">{benefit.description}</p>
                      </div>
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/10 group-hover:to-secondary-500/10 transition-all duration-300 -z-10"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button - Enhanced */}
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 hover:from-primary-700 hover:via-primary-600 hover:to-secondary-700 text-white border-0 font-bold shadow-2xl shadow-primary-500/40 px-8 py-3.5 text-base sm:text-lg transform hover:scale-105 transition-all cursor-pointer rounded-xl"
                >
                  Apply for Internship Today!
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* "DESIGNED TO ACTIVATE, ENGAGE, AND INSPIRE STEM" Section */}
        <AnimatedSection direction="up" className="py-12 sm:py-16 bg-white relative overflow-hidden">
          {/* Subtle Tech Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="stemPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  {/* Hexagonal pattern */}
                  <polygon points="60,5 110,30 110,80 60,105 10,80 10,30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-500"/>
                  <circle cx="60" cy="55" r="3" fill="currentColor" className="text-primary-400" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#stemPattern)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Column - Heading */}
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent">
                    DESIGNED TO ACTIVATE, ENGAGE, AND INSPIRE STEM
                  </h2>
                </div>

                {/* Right Column - Text */}
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-base sm:text-lg">
                    The Women Tech Council (WTC) launched a technology internship exploration program to provide high school girls the opportunity to tour and explore technology companies, meet and interact with women in tech, and understand the impact they can have by pursuing STEM careers.
                  </p>
                  <p className="text-base sm:text-lg">
                    The internship exploration is an extension of WTC&apos;s SheTech, a program designed to activate, engage, and inspire high school girls to pursue STEM fields and careers through hands-on experience and mentoring with industry experts. As the newest addition to SheTech, the internship exploration program continues SheTech beyond the school year by providing another touch point to keep girls engaged with tech companies before they finish high school, increasing the likelihood they will choose to pursue a STEM degree. In the last year, more than 3,000 high school girls have participated in SheTech. Research shows 90% of these girls are more likely to pursue STEM fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* "ANNUAL INTERNSHIP" Section */}
        <AnimatedSection direction="up" className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-primary-50/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - Content */}
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 mb-6">
                    ANNUAL INTERNSHIP
                  </h2>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                    Since 2017, the SheTech Internship Exploration program has provided hundreds of high school girls with the opportunity to meet role models and tour tech companies across Silicon Slopes, including: Ivanti, Dell, Instructure, NICE, Adobe, Swire Coca Cola, Entrata, Ancestry, MX, Tesla, and Thumbtack. Also during the 2-week internship, the girls were on KSL TV, talked to teachers at the annual state CTE conference, and learned to solder computer chips on badges while attending the OpenWest conference.
                  </p>
                </div>

                {/* Right Column - Image */}
                <div className="relative">
                  <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all">
                    <Image
                      src="/summer-internship/shetechgroup.png"
                      alt="SheTech Internship Exploration participants"
                      fill
                      className="object-cover"
                      style={{ objectPosition: '70% center' }}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </div>

              {/* Full-Width Professional Logo Carousel */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-8 text-center">
                  Partner Companies
                </h3>
                <div 
                  className="relative w-full overflow-hidden py-6"
                  onMouseEnter={() => setIsCarouselPaused(true)}
                  onMouseLeave={() => setIsCarouselPaused(false)}
                >
                  {/* Fade Edges */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 via-gray-50/60 to-transparent z-10" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 via-gray-50/60 to-transparent z-10" />

                  {/* Carousel Container */}
                  <div 
                    className="flex gap-8 sm:gap-12 animate-scroll"
                    style={{ animationPlayState: isCarouselPaused ? 'paused' : 'running' }}
                  >
                    {/* Duplicate logos for seamless loop */}
                    {[...companyLogos, ...companyLogos].map((company, index) => {
                      return (
                        <a
                          key={`${company.name}-${index}`}
                          href={company.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex-shrink-0 relative flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                          title={company.name}
                        >
                          {/* Logo Container */}
                          <div className="relative w-[140px] h-16 sm:w-[160px] sm:h-20 lg:w-[180px] lg:h-24">
                            <Image
                              src={company.logo}
                              alt={company.name}
                              fill
                              className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                              sizes="(max-width: 640px) 140px, (max-width: 1024px) 160px, 180px"
                            />
                          </div>
                          
                          {/* Company Name Tooltip */}
                          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                            <div className="px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap shadow-lg">
                              {company.name}
                            </div>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full">
                              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonial Quote Section - Compact with Unique Tech Background */}
        <AnimatedSection direction="up" className="py-6 sm:py-8 bg-gradient-to-br from-slate-900 via-primary-700 to-secondary-700 relative overflow-hidden">
          {/* Unique Tech Background - Circuit Board with Data Streams */}
          <div className="absolute inset-0">
            {/* Animated Data Streams */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 w-px"
                  style={{
                    left: `${(i + 1) * 12}%`,
                    height: '100%',
                    background: `linear-gradient(to bottom, transparent, ${
                      i % 3 === 0 ? '#00a6ce' : i % 3 === 1 ? '#bd1c81' : '#ffffff'
                    }60, transparent)`,
                    animation: `dataStream ${3 + (i % 2)}s linear infinite`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}
            </div>

            {/* Circuit Board Pattern */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="circuitBoard" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  {/* Horizontal circuit lines */}
                  <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(0, 166, 206, 0.4)" strokeWidth="1"/>
                  <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(189, 28, 129, 0.4)" strokeWidth="1"/>
                  <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(0, 166, 206, 0.4)" strokeWidth="1"/>
                  
                  {/* Vertical circuit lines */}
                  <line x1="20" y1="0" x2="20" y2="100" stroke="rgba(0, 166, 206, 0.3)" strokeWidth="1"/>
                  <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(189, 28, 129, 0.3)" strokeWidth="1"/>
                  <line x1="80" y1="0" x2="80" y2="100" stroke="rgba(0, 166, 206, 0.3)" strokeWidth="1"/>
                  
                  {/* Connection nodes with glow */}
                  <circle cx="20" cy="25" r="3" fill="#00a6ce" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="50" cy="50" r="3" fill="#bd1c81" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="80" cy="75" r="3" fill="#00a6ce" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Diagonal connections */}
                  <line x1="20" y1="25" x2="50" y2="50" stroke="rgba(0, 166, 206, 0.3)" strokeWidth="0.5" strokeDasharray="2,2">
                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
                  </line>
                  <line x1="50" y1="50" x2="80" y2="75" stroke="rgba(189, 28, 129, 0.3)" strokeWidth="0.5" strokeDasharray="2,2">
                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3.5s" repeatCount="indefinite" />
                  </line>
                </pattern>
                
                {/* Hexagonal tech pattern overlay */}
                <pattern id="hexTech" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <polygon points="30,5 55,17.5 55,42.5 30,55 5,42.5 5,17.5" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              
              <rect width="100%" height="100%" fill="url(#circuitBoard)" opacity="0.6"/>
              <rect width="100%" height="100%" fill="url(#hexTech)" opacity="0.3"/>
            </svg>

            {/* Floating Tech Particles */}
            <div className="absolute inset-0 opacity-15">
              {[...Array(12)].map((_, i) => {
                const left = (i * 8.33) % 100;
                const top = (i * 7) % 100;
                const delay = i * 0.3;
                return (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      backgroundColor: i % 3 === 0 ? '#00a6ce' : i % 3 === 1 ? '#bd1c81' : '#ffffff',
                      boxShadow: `0 0 6px ${i % 3 === 0 ? '#00a6ce' : i % 3 === 1 ? '#bd1c81' : '#ffffff'}80`,
                      animation: `pulse 2s ease-in-out infinite`,
                      animationDelay: `${delay}s`,
                    }}
                  />
                );
              })}
            </div>

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-slate-900/40"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="p-6 sm:p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                {/* Compact Quotation Mark */}
                <div className="text-4xl sm:text-5xl text-white/30 font-serif mb-3 leading-none">
                  &ldquo;
                </div>
                
                {/* Quote Text - Smaller */}
                <blockquote className="text-lg sm:text-xl lg:text-2xl text-white font-serif leading-relaxed mb-4">
                  Through partnering with industry to bring them real experiences in tech, we are creating actionable pathways for girls to be a successful part of the technology economy.
                </blockquote>
                
                {/* Attribution with Photo */}
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
                      <Image
                        src="/explorerday/cydni.png"
                        alt="Cydni Tetro"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 64px, 80px"
                      />
                    </div>
                  </div>
                  <div className="text-white/90 text-sm sm:text-base font-semibold">
                    <div>Cydni Tetro</div>
                    <div className="text-white/70 text-xs sm:text-sm font-normal">WTC president and founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* "Start your summer with SheTech" CTA Section */}
        <AnimatedSection direction="up" className="py-12 sm:py-16 bg-gradient-to-br from-primary-50 via-secondary-50/50 to-primary-50 relative overflow-hidden">
          {/* Enhanced Tech/Science Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="ctaPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <circle cx="40" cy="40" r="2" fill="currentColor" className="text-primary-500"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaPattern)" />
              
              {/* Science Elements */}
              <g opacity="0.4" className="text-primary-400">
                {/* H₂O Formula */}
                <text x="5%" y="15%" fontSize="20" fill="currentColor" fontFamily="serif" fontWeight="bold">
                  H₂O
                </text>
                
                {/* Flask */}
                <g transform="translate(90%, 20%)">
                  <path d="M0 0 Q-4 4 -4 12 L-4 20 Q-4 24 0 24 Q4 24 4 20 L4 12 Q4 4 0 0" fill="none" stroke="currentColor" strokeWidth="1"/>
                </g>
                
                {/* Circuit */}
                <g transform="translate(15%, 80%)">
                  <rect x="-8" y="-4" width="16" height="8" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="-8" cy="0" r="1.5" fill="currentColor"/>
                  <circle cx="8" cy="0" r="1.5" fill="currentColor"/>
                </g>
                
                {/* Microscope */}
                <g transform="translate(85%, 85%)">
                  <rect x="-4" y="0" width="8" height="20" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="0" cy="4" r="2.5" fill="none" stroke="currentColor" strokeWidth="1"/>
                </g>
              </g>
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - Video */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">WTC Internship Testimonials</h3>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/7hjNlVQd82g?start=2"
                      title="WTC Internship Testimonials"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    Watch the video to learn more about what these girls learned and did during the internship!
                  </p>
                </div>

                {/* Right Column - Email Signup */}
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary-600 mb-4">
                    Start your summer with SheTech
                  </h2>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                    Join our email list and get notified when registration opens for our June internship exploration. Participants get to tech companies across Silicon Slopes and join virtual sessions hosted by real women who work in the industry to learn about working in tech, the types of jobs that exist in the technology industry, and career readiness needed to kick off a successful career in STEM.
                  </p>

                  {/* Email Signup Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1"
                      />
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 border-0 font-semibold px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
                      >
                        {isSubmitting ? 'Joining...' : 'Join Email List'}
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />

      <style jsx>{`
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
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </div>
  );
}
