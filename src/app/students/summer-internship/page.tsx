'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button, Input, StickerHeader, GraphPaperBackground } from '@/components/ui';

// Pre-calculate particle positions for stable rendering
const particlePositions = [...Array(15)].map(() => ({
  left: Math.random() * 100,
  duration: 5 + Math.random() * 5,
  delay: Math.random() * 3,
}));

// Company logos data structure
const companyLogos = [
  { name: 'Ivanti', logo: '/summer-internship/logos/ivanti.png', url: 'https://www.ivanti.com' },
  { name: 'Dell', logo: '/summer-internship/logos/dell.png', url: 'https://www.dell.com' },
  { name: 'Instructure', logo: '/summer-internship/logos/instructure.png', url: 'https://www.instructure.com' },
  { name: 'NICE', logo: '/summer-internship/logos/nice.png', url: 'https://www.nice.com' },
  { name: 'Adobe', logo: '/summer-internship/logos/adobe.png', url: 'https://www.adobe.com' },
  { name: 'Swire Coca Cola', logo: '/summer-internship/logos/swire.png', url: 'https://www.swirecocacola.com' },
  { name: 'Entrata', logo: '/summer-internship/logos/entrata.png', url: 'https://www.entrata.com' },
  { name: 'Ancestry', logo: '/summer-internship/logos/ancestry.png', url: 'https://www.ancestry.com' },
  { name: 'MX', logo: '/summer-internship/logos/mx.png', url: 'https://www.mx.com' },
  { name: 'Tesla', logo: '/summer-internship/logos/tesla.png', url: 'https://www.tesla.com' },
  { name: 'Thumbtack', logo: '/summer-internship/logos/thumbtack.png', url: 'https://www.thumbtack.com' },
];

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
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      alert('Thank you for signing up! We\'ll notify you when registration opens.');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EBEBF5]">
      <Header />

      <main className="flex-1 relative">
        {/* Hero Section - Vibrant Teal Gradient (Updated from Dark Mode) */}
        <section className="relative overflow-hidden pt-24 sm:pt-32 pb-20 sm:pb-28">
          {/* Base gradient background - Rich Teal Theme */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00A6CE] via-[#0089aa] to-[#005f7a]"></div>
          </div>

          {/* Tech Grid Pattern (White Overlay) */}
          <div className="absolute inset-0 opacity-20">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="techGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
                <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#techGrid)" />

              {/* Animated Connection Nodes */}
              {[...Array(20)].map((_, i) => {
                const x = ((i * 13) % 100);
                const y = ((i * 17) % 100);
                const delay = i * 0.15;
                return (
                  <circle
                    key={i}
                    cx={`${x}%`}
                    cy={`${y}%`}
                    r="3"
                    fill="white"
                    fillOpacity="0.5"
                    className="animate-pulse"
                    style={{ animationDelay: `${delay}s` }}
                  />
                )
              })}
            </svg>
          </div>

          {/* New Ambient Glows */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-[120px] opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00e1ff] rounded-full blur-[100px] opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

          {/* Floating particles - White */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            {particlePositions.map((particle, i) => (
              <div
                key={i}
                className="absolute bottom-0 w-1.5 h-1.5 bg-white rounded-full"
                style={{
                  left: `${particle.left}%`,
                  boxShadow: `0 0 6px white`,
                  animation: `floatUp ${particle.duration}s ease-in infinite`,
                  animationDelay: `${particle.delay}s`,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">

              {/* Registration Badge - White/Teal */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/30 text-xs font-semibold mb-6 shadow-xl animate-fade-in-up">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                Registration TBA
              </div>

              {/* Main Title - Pure White for maximum contrast */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <span className="block mb-2 text-white/90 drop-shadow-md">
                  Summer Internship
                </span>
                <span className="text-white drop-shadow-xl filter">
                  Exploration
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 font-medium animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Discover opportunities with <span className="bg-white/20 px-1 rounded font-bold text-white">Silicon Slopes tech companies</span> alongside other high school girls in this two-week immersive program.
              </p>

              {/* Quick Info Cards - White with Teal Accents */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                {/* Duration Card */}
                <div className="bg-white/95 backdrop-blur rounded-xl p-6 shadow-xl flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#00A6CE]/10 flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-[#00A6CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Duration</div>
                  <div className="text-2xl font-black text-gray-900">2 Weeks</div>
                </div>

                {/* Format Card */}
                <div className="bg-white/95 backdrop-blur rounded-xl p-6 shadow-xl flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#00A6CE]/10 flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-[#00A6CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Format</div>
                  <div className="text-2xl font-black text-gray-900">Hybrid</div>
                </div>

                {/* Eligibility Card */}
                <div className="bg-white/95 backdrop-blur rounded-xl p-6 shadow-xl flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#00A6CE]/10 flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-[#00A6CE]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Eligibility</div>
                  <div className="text-2xl font-black text-gray-900">9-12th Grade</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Global Graph Paper Background for Body Sections */}
        <div className="relative">
          <GraphPaperBackground color="rgba(0,0,0,0.03)" />

          {/* "Designed to Activate" Section */}
          <AnimatedSection direction="up" className="py-20 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-12">
                  <StickerHeader
                    variant="teal"
                    label="Our Goals"
                    title="Activate & Inspire"
                  />
                  <p className="mt-8 text-xl text-gray-600 font-medium text-center">
                    Designed to engage and empower
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">
                      Why Join the Internship?
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      The Women Tech Council (WTC) launched this program to provide high school girls the opportunity to tour technology companies, meet women in tech, and understand the impact of STEM careers.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      As an extension of SheTech, this program keeps girls engaged with tech companies beyond the school year. <span className="font-semibold text-[#00A6CE]">More than 90% of past participants</span> are more likely to pursue STEM fields after completing the program.
                    </p>
                  </div>

                  {/* Program Benefits Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-5 hover:bg-[#00A6CE]/5 transition-colors group">
                        <div className="text-[#00A6CE] w-8 h-8 mb-3 transform group-hover:scale-110 transition-transform">
                          {benefit.icon}
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-500">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* "Annual Internship" Section */}
          <AnimatedSection direction="up" className="py-20 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                  <StickerHeader
                    variant="teal"
                    label="Impact"
                    title="Annual Success"
                  />
                  <p className="mt-4 text-xl text-gray-600 font-medium">
                    A track record of impact
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Real Experiences, Real Growth
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Since 2017, the SheTech Internship Exploration program has connected hundreds of girls with Silicon Slopes giants.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        During the 2-week internship, participants have been featured on KSL TV, presented at state conferences, and gained hands-on skills like soldering—all while building a network of mentors and peers.
                      </p>
                    </div>
                    <div className="relative h-64 lg:h-auto min-h-[300px]">
                      <Image
                        src="/shetech-gallery/KinserStudios-SheTech25-2541.jpg"
                        alt="SheTech Internship Group"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Parter Logos - Clean White Strip */}
                <div className="mt-16 text-center">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Partner Companies</h4>
                  <div
                    className="relative w-full overflow-hidden"
                    onMouseEnter={() => setIsCarouselPaused(true)}
                    onMouseLeave={() => setIsCarouselPaused(false)}
                  >
                    <div className="flex gap-12 animate-scroll w-max" style={{ animationPlayState: isCarouselPaused ? 'paused' : 'running' }}>
                      {[...companyLogos, ...companyLogos].map((company, i) => (
                        <div key={i} className="relative w-32 h-16 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                          <Image
                            src={company.logo}
                            alt={company.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Testimonial Section - "Why It Matters" Style */}
          <AnimatedSection direction="up" className="py-20 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto rounded-3xl bg-white p-10 md:p-14 shadow-xl border border-[#00A6CE]/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#00A6CE]"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#00A6CE]/5 rounded-full blur-3xl"></div>

                <div className="relative z-10 text-center">
                  <svg className="w-12 h-12 text-[#00A6CE] mx-auto mb-6 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.00001 15 9.00001 15 9 14C9 10 12 10 12 10V7C12 7 6 7 6 14V21H14.017ZM20.017 21L20.017 18C20.017 16.8954 19.1216 16 18.017 16H15C15 15 15 15 15 14C15 10 18 10 18 10V7C18 7 12 7 12 14V21H20.017Z" />
                  </svg>

                  <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed mb-8">
                    "Through partnering with industry to bring them real experiences in tech, we are creating actionable pathways for girls to be a successful part of the technology economy."
                  </blockquote>

                  <div className="flex items-center justify-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#00A6CE]">
                      <Image
                        src="/explorerday/cydni.png"
                        alt="Cydni Tetro"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900">Cydni Tetro</div>
                      <div className="text-[#00A6CE] text-sm font-semibold">WTC President and Founder</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection direction="up" className="py-20 bg-white border-t border-gray-100 relative z-10">
            <div className="container mx-auto px-4 text-center max-w-2xl">
              <StickerHeader variant="teal" label="Get Started" title="Join The Waitlist" className="mb-8 justify-center" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Start your summer with SheTech</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Join our email list and get notified when registration opens for our June internship exploration.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="bg-[#00A6CE] hover:bg-[#008fb3] text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-[#00A6CE]/30 transition-all hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Joining...' : 'Join List'}
                </Button>
              </form>
            </div>
          </AnimatedSection>

        </div>

      </main>
      <Footer />
    </div>
  );
}
