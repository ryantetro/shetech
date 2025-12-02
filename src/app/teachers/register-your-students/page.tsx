'use client';

import { useState } from 'react';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, Button, Input } from '@/components/ui';

// Pre-calculate floating education icons
const floatingIcons = [...Array(10)].map((_, i) => ({
  left: (i * 10) % 100,
  top: 10 + ((i * 13) % 75),
  size: 20 + (i % 4) * 8,
  duration: 6 + (i % 4),
  delay: i * 0.5,
  type: i % 5,
}));

// Impact stats data
const impactStats = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'SheTech Explorer Days happen across the country including in Utah, Arizona, Colorado, and Idaho.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    highlight: '15,000',
    text: 'students will have participated in the program',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    highlight: '94%',
    text: 'better understanding of STEM careers and 91% greater interest in STEM degrees and careers.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    highlight: '150+',
    text: 'companies sponsored, taught workshops, TechZone booths, and/or mentored TechChallenge',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    highlight: '1000+',
    text: 'industry mentors participate in SheTech',
  },
];

// Benefits for students
const studentBenefits = [
  'Inspire girls to learn about STEM in a fun and engaging environment',
  'Demonstrate what STEM careers look like',
  'Engage girls in teams to solve a STEM challenge and win prizes',
  'Introduce girls to industry mentors in hands-on workshops and TechZone booths',
  'Pathway young women to STEM education, certifications, and internships',
];

export default function RegisterYourStudentsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for signing up! We will be in touch soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Education Theme with Purple/Blue */}
        <section className="relative overflow-hidden pt-16 sm:pt-20 pb-12 sm:pb-16 min-h-[calc(100vh-80px)] flex items-center">
          {/* Dynamic gradient background - Education/Academic theme */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950/80 to-slate-900"></div>
          </div>

          {/* Academic pattern - Book/learning themed */}
          <div className="absolute inset-0 opacity-15">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="educationGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  {/* Notebook lines */}
                  <line x1="0" y1="20" x2="80" y2="20" stroke="#a855f7" strokeWidth="0.5" opacity="0.3"/>
                  <line x1="0" y1="40" x2="80" y2="40" stroke="#a855f7" strokeWidth="0.5" opacity="0.3"/>
                  <line x1="0" y1="60" x2="80" y2="60" stroke="#a855f7" strokeWidth="0.5" opacity="0.3"/>
                  {/* Margin line */}
                  <line x1="15" y1="0" x2="15" y2="80" stroke="#ec4899" strokeWidth="0.5" opacity="0.4"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#educationGrid)" />
            </svg>
          </div>

          {/* Floating education icons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {floatingIcons.map((icon, i) => (
              <div
                key={i}
                className="absolute opacity-15"
                style={{
                  left: `${icon.left}%`,
                  top: `${icon.top}%`,
                  width: `${icon.size}px`,
                  height: `${icon.size}px`,
                  animation: `float ${icon.duration}s ease-in-out infinite`,
                  animationDelay: `${icon.delay}s`,
                }}
              >
                {/* Book */}
                {icon.type === 0 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.5" className="w-full h-full">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )}
                {/* Graduation cap */}
                {icon.type === 1 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.5" className="w-full h-full">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                  </svg>
                )}
                {/* Lightbulb */}
                {icon.type === 2 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.5" className="w-full h-full">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )}
                {/* Users/Students */}
                {icon.type === 3 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.5" className="w-full h-full">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
                {/* Star */}
                {icon.type === 4 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.5" className="w-full h-full">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Column - Main Content */}
                <div className="text-center lg:text-left">
                  <AnimatedSection direction="left" delay={0} initialLoad>
                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                      <span className="block text-white mb-1">Register Your</span>
                      <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                        Students
                      </span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-white/70 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
                      Students and Teachers tell us that bringing their students to SheTech is the thing that helped students map what they are studying in STEM classes to possible careers.
                    </p>

                    {/* Key Points */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 mb-6">
                      <div className="flex items-center gap-3 text-white/90">
                        <svg className="w-5 h-5 text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">Registration is <strong className="text-purple-300">easy</strong></span>
                      </div>
                      <div className="flex items-center gap-3 text-white/90 mt-2">
                        <svg className="w-5 h-5 text-pink-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">The event is <strong className="text-pink-300">free</strong></span>
                      </div>
                      <div className="flex items-center gap-3 text-white/90 mt-2">
                        <svg className="w-5 h-5 text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">Students are <strong className="text-purple-300">inspired</strong></span>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                      <a
                        href="#signup-form"
                        className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-400 hover:to-purple-500 shadow-xl shadow-purple-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        Register Now
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                      <a
                        href="#benefits"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                      >
                        Learn More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Right Column - Stats Preview Card */}
                <div className="relative">
                  <AnimatedSection direction="right" delay={200} initialLoad>
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl">
                      {/* Card Header */}
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">SheTech Impact</h3>
                          <p className="text-white/60 text-sm">By the numbers</p>
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                          <div className="text-3xl font-black text-purple-400 mb-1">15K+</div>
                          <div className="text-white/60 text-xs">Students</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                          <div className="text-3xl font-black text-pink-400 mb-1">94%</div>
                          <div className="text-white/60 text-xs">Better Understanding</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                          <div className="text-3xl font-black text-purple-400 mb-1">150+</div>
                          <div className="text-white/60 text-xs">Companies</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                          <div className="text-3xl font-black text-pink-400 mb-1">1000+</div>
                          <div className="text-white/60 text-xs">Mentors</div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>

          {/* CSS for animations */}
          <style jsx>{`
            @keyframes float {
              0%, 100% {
                transform: translateY(0) rotate(0deg);
              }
              50% {
                transform: translateY(-15px) rotate(3deg);
              }
            }
          `}</style>
        </section>

        {/* Why SheTech Section */}
        <section id="benefits" className="py-16 sm:py-20 bg-white relative overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="eduDots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#a855f7"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#eduDots)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left - Content */}
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      High School Girls Love SheTech
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      SheTech helps girls discover the opportunities in STEM, and importantly, how they already have the skills to be successful! Girls who participate will get access to internship opportunities, receive a SheTech certificate they can use in future job applications, and get access to pathway information and scholarships.
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-3">
                      {studentBenefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right - Image placeholder / Visual */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 border border-purple-200">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
                          <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center text-white mb-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900 text-sm">Certificate</h4>
                          <p className="text-gray-500 text-xs mt-1">For job applications</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
                          <div className="w-10 h-10 rounded-lg bg-pink-500 flex items-center justify-center text-white mb-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900 text-sm">Internships</h4>
                          <p className="text-gray-500 text-xs mt-1">Access opportunities</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
                          <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center text-white mb-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900 text-sm">Scholarships</h4>
                          <p className="text-gray-500 text-xs mt-1">Pathway information</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
                          <div className="w-10 h-10 rounded-lg bg-pink-500 flex items-center justify-center text-white mb-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900 text-sm">Industry Mentors</h4>
                          <p className="text-gray-500 text-xs mt-1">Meet professionals</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-purple-950/80 to-slate-900 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="impactGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#a855f7" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#impactGrid)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    SheTech Impact by the Numbers
                  </h2>
                  <p className="text-white/70 max-w-2xl mx-auto">
                    See the difference SheTech is making for students across the country
                  </p>
                </div>

                {/* Impact Stats */}
                <div className="space-y-4">
                  {impactStats.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 flex items-start gap-4 hover:border-purple-500/30 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shrink-0">
                        {stat.icon}
                      </div>
                      <div>
                        {stat.highlight && (
                          <span className="text-2xl font-black text-purple-400">{stat.highlight} </span>
                        )}
                        <span className="text-white/80">{stat.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Signup Form Section */}
        <section id="signup-form" className="py-16 sm:py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="text-center mb-10">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Sign Up for Our Educator Email List
                  </h2>
                  <p className="text-gray-600">
                    Stay informed about SheTech programs, events, and opportunities for your students.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your school or any questions you have..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-purple-500/30 transition-all hover:scale-[1.02] cursor-pointer border-0"
                  >
                    Sign Up
                  </Button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative py-8 sm:py-10 bg-gradient-to-r from-slate-900 via-purple-950/80 to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                {/* Text */}
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Ready to Inspire Your Students?
                  </h3>
                  <p className="text-sm text-white/60">
                    Register today and give your students access to amazing STEM opportunities.
                  </p>
                </div>

                {/* Button */}
                <a
                  href="#signup-form"
                  className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-400 text-white font-medium whitespace-nowrap px-6 py-2.5 rounded-lg text-sm transition-all cursor-pointer"
                >
                  Register Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
