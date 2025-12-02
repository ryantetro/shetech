'use client';

import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui';

// Who can attend data
const attendees = [
  {
    title: 'High School Girls',
    description: '9th-12th Grade',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'CTE Directors',
    description: 'Career & Technical Education',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'School Counselors',
    description: 'Guidance Professionals',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Mentors & Volunteers',
    description: 'Industry Professionals',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

// What you'll do during the day
const dayActivities = [
  {
    title: 'Morning Sessions',
    description: 'Explore cybersecurity, computer programming, design, engineering, health, and more',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Keynote & Lunch',
    description: 'Listen to a woman business leader while enjoying a catered lunch',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: 'SheTech Challenge',
    description: 'Work in teams to design a solution to a real-world problem',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Awards & Giveaways',
    description: 'Prizes and recognition to round out your day',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

// SheTech Platform opportunities
const platformOpportunities = [
  {
    title: 'Scholarships',
    description: 'Access exclusive scholarship opportunities for STEM education',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: 'High School Curriculum',
    description: 'STEM-focused educational resources and pathways',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Certifications',
    description: 'Industry-recognized certifications to boost your career',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

// Sponsor logos - using the images from the idaho folder
const sponsors = [
  { name: 'W.IN Women Innovators', image: '/idaho/image.png' },
  { name: 'HP', image: '/idaho/image copy.png' },
  { name: 'Idaho STEM', image: '/idaho/image copy 2.png' },
  { name: 'In Time Tec', image: '/idaho/image copy 3.png' },
  { name: 'AT&T', image: '/idaho/image copy 4.png' },
  { name: 'Boise State University', image: '/idaho/image copy 5.png' },
];

export default function IdahoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Idaho Mountain/River Theme */}
        <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
          {/* Idaho nature gradient - deep blues and forest greens */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-cyan-900 to-emerald-950"></div>
            {/* Mountain sky overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-blue-900/30"></div>
          </div>

          {/* Idaho-inspired pattern - mountain silhouettes at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-64">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 300">
              {/* Back mountain range - lighter */}
              <path d="M0,300 L0,180 L80,140 L160,170 L240,100 L320,150 L400,80 L480,130 L560,60 L640,110 L720,50 L800,100 L880,70 L960,120 L1040,90 L1120,140 L1200,110 L1200,300 Z" fill="#0d9488" opacity="0.2"/>
              {/* Front mountain range - darker */}
              <path d="M0,300 L0,220 L100,180 L200,210 L300,160 L400,200 L500,150 L600,190 L700,140 L800,180 L900,155 L1000,195 L1100,170 L1200,200 L1200,300 Z" fill="#134e4a" opacity="0.4"/>
              {/* Single row of pine trees */}
              <g fill="#0f766e" opacity="0.35">
                <path d="M60,240 L75,195 L90,240 Z"/>
                <path d="M67,220 L75,185 L83,220 Z"/>
                <path d="M200,235 L215,190 L230,235 Z"/>
                <path d="M207,215 L215,180 L223,215 Z"/>
                <path d="M380,245 L395,200 L410,245 Z"/>
                <path d="M387,225 L395,190 L403,225 Z"/>
                <path d="M560,238 L575,193 L590,238 Z"/>
                <path d="M567,218 L575,183 L583,218 Z"/>
                <path d="M740,242 L755,197 L770,242 Z"/>
                <path d="M747,222 L755,187 L763,222 Z"/>
                <path d="M920,236 L935,191 L950,236 Z"/>
                <path d="M927,216 L935,181 L943,216 Z"/>
                <path d="M1100,240 L1115,195 L1130,240 Z"/>
                <path d="M1107,220 L1115,185 L1123,220 Z"/>
              </g>
            </svg>
          </div>

          {/* Gradient orbs - river/nature colors */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Left: Main Content */}
                <div className="text-center lg:text-left">
                  <AnimatedSection direction="left" delay={0} initialLoad>
                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
                      <span className="block text-white mb-2">SheTech</span>
                      <span className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                        Explorer Day
                      </span>
                      <span className="block text-white/90 text-3xl sm:text-4xl mt-2">Idaho</span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-white/70 mb-6 leading-relaxed max-w-xl">
                      A hands-on tech conference for high school girls 9th through 12th grade in the Gem State. 
                      Discover STEM through interactive workshops, meet role models, and explore career opportunities.
                    </p>

                    {/* Event Highlights */}
                    <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <span className="text-white text-sm font-medium">Hands-On Workshops</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-white text-sm font-medium">STEM Role Models</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <span className="text-white text-sm font-medium">SheTech Certificate</span>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                      <a
                        href="https://www.shetechexplorer.com/idaho"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
                      >
                        Sign Up Here
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a
                        href="#about"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Right: Idaho Logo Card */}
                <div className="relative">
                  <AnimatedSection direction="right" delay={200} initialLoad>
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 overflow-hidden">
                      {/* Idaho SheTech Logo */}
                      <div className="flex justify-center mb-6">
                        <div className="relative w-72 h-44">
                          <Image
                            src="/idaho/ChatGPT Image Dec 2, 2025, 02_33_20 PM.png"
                            alt="SheTech Idaho"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      
                      {/* Event Highlight */}
                      <div className="text-center">
                        <p className="text-white/80 text-sm mb-4">
                          Empowering Idaho girls to explore STEM careers
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span className="text-white text-sm font-medium">FREE Event</span>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-2xl"></div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video & About Section */}
        <section id="about" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-cyan-50/30">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="idahoDots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#0891b2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#idahoDots)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                {/* Section Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
                    <span>🏔️</span>
                    About the Event
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    What is <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">SheTech Explorer Day?</span>
                  </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  {/* Video */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/CAZtH1n8pLA"
                        title="SheTech Idaho Highlights"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-2xl"
                      ></iframe>
                    </div>
                    {/* Video glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl blur-xl opacity-20 -z-10"></div>
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      SheTech Explorer Day is a hands-on tech conference for high school girls 9th through 12th grade. 
                      This day-long event will include hands-on workshops in science, technology, engineering, and math (STEM).
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Our ultimate goal is to expose girls to technology in a fun atmosphere as well as meet STEM role models 
                      to learn more about opportunities in those fields.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Girls who attend will have access to internships, receive a SheTech certificate, receive pathway 
                      information and become part of a community to help girls have opportunities in STEM.
                    </p>

                    {/* Key Benefits */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="flex items-center gap-3 p-3 bg-cyan-50 rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700">Internship Access</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700">Certificate</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700">Pathway Info</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700">STEM Community</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* What You'll Do Section */}
        <section className="relative py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                {/* Section Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
                    <span>✨</span>
                    Your Day
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    What Will I Do <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">During the Day?</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Your day will be very interactive and allow you to touch and feel a lot of really cool things
                  </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  {/* Activities */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {dayActivities.map((activity, index) => (
                      <div
                        key={index}
                        className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:border-cyan-200 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                          {activity.icon}
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">{activity.title}</h3>
                        <p className="text-gray-600 text-sm">{activity.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Video */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/pZga4PNGB1M"
                        title="SheTech Explorer Day Experience"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-2xl"
                      ></iframe>
                    </div>
                    {/* Video glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur-xl opacity-20 -z-10"></div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Who Can Attend Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-blue-950 via-cyan-900 to-emerald-950 overflow-hidden">
          {/* Mountain pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="attendPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="2" fill="#fff"/>
                  <circle cx="0" cy="0" r="1" fill="#fff"/>
                  <circle cx="60" cy="60" r="1" fill="#fff"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#attendPattern)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Who Can <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Attend?</span>
                  </h2>
                  <p className="text-white/70 max-w-2xl mx-auto">
                    SheTech Idaho welcomes participants from across the Gem State
                  </p>
                </div>

                {/* Attendee Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {attendees.map((attendee, index) => (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {attendee.icon}
                      </div>
                      <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                        {attendee.title}
                      </h3>
                      <p className="text-white/60 text-xs">
                        {attendee.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="relative py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                {/* Section Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
                    <span>🤝</span>
                    Our Partners
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Thank You to Our <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">Sponsors</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    SheTech Idaho is made possible by the generous support of our community partners
                  </p>
                </div>

                {/* Sponsor Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
                  {sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="group bg-gray-50 rounded-xl p-6 flex items-center justify-center hover:bg-cyan-50 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-cyan-200"
                    >
                      <div className="relative w-full h-16 sm:h-20">
                        <Image
                          src={sponsor.image}
                          alt={sponsor.name}
                          fill
                          className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SheTech Platform Section - Compact */}
        <section className="relative py-8 sm:py-10 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <h3 className="text-lg font-bold text-gray-900">
                  SheTech <span className="text-cyan-600">Platform</span>
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                  {platformOpportunities.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />}
                          {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />}
                          {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />}
                        </svg>
                      </div>
                      <span className="text-sm font-medium">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compact CTA Banner */}
        <section className="relative py-8 sm:py-10 bg-gradient-to-r from-blue-950 via-cyan-900 to-emerald-950 overflow-hidden">
          {/* Idaho accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                {/* Text */}
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Ready to Explore STEM in Idaho? 🏔️
                  </h3>
                  <p className="text-sm text-white/60">
                    Join us at SheTech Explorer Day and discover your future in tech.
                  </p>
                </div>

                {/* Button */}
                <div className="flex gap-3">
                  <a
                    href="https://www.shetechexplorer.com/idaho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:opacity-90 text-white font-medium whitespace-nowrap px-5 py-2.5 rounded-lg text-sm transition-all cursor-pointer"
                  >
                    Sign Up Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
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
