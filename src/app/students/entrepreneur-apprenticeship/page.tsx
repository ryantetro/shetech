'use client';

import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui';

// More info form URL
const INFO_FORM_URL = 'https://docs.google.com/forms/d/1VvXunGCp2BqmgA5smG7uDL72glb_FTLkT7wtfKa8Tnw/viewform';

// Pre-calculate floating startup icons
const floatingIcons = [...Array(10)].map((_, i) => ({
  left: (i * 10) % 100,
  top: 10 + ((i * 13) % 75),
  size: 20 + (i % 4) * 8,
  duration: 6 + (i % 4),
  delay: i * 0.5,
  type: i % 5,
}));

// Skills data
const skills = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Start a Company',
    description: 'Learn the fundamentals of launching your own tech startup',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Team Collaboration',
    description: 'Work effectively with diverse teams to achieve goals',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Build Products',
    description: 'Create real tech products from concept to launch',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: 'Marketing Strategies',
    description: 'Design and implement effective marketing campaigns',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Test Business Models',
    description: 'Validate and iterate on your business approach',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Customer Validation',
    description: 'Learn to validate ideas with real customers',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Leadership Skills',
    description: 'Develop essential leadership and communication abilities',
  },
];

export default function EntrepreneurApprenticeshipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Entrepreneur/Startup Theme */}
        <section className="relative overflow-hidden pt-16 sm:pt-20 pb-12 sm:pb-16 min-h-[calc(100vh-80px)] flex items-center">
          {/* Dynamic gradient background - Green/Teal entrepreneurship theme */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950/80 to-slate-900"></div>
          </div>

          {/* Startup/Growth pattern - Upward trending lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
              {/* Growth chart lines */}
              <defs>
                <linearGradient id="growthGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              {/* Upward trending paths */}
              <path d="M0 700 Q200 650 400 500 T800 300 T1200 100" fill="none" stroke="url(#growthGradient)" strokeWidth="2" opacity="0.5"/>
              <path d="M0 750 Q300 700 500 550 T900 350 T1200 200" fill="none" stroke="url(#growthGradient)" strokeWidth="1.5" opacity="0.4"/>
              <path d="M0 800 Q250 750 450 600 T850 400 T1200 300" fill="none" stroke="url(#growthGradient)" strokeWidth="1" opacity="0.3"/>
              {/* Grid pattern */}
              <pattern id="gridPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#gridPattern)" />
            </svg>
          </div>

          {/* Floating startup icons */}
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
                {/* Lightbulb - Ideas */}
                {icon.type === 0 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" className="w-full h-full">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )}
                {/* Rocket - Launch */}
                {icon.type === 1 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.5" className="w-full h-full">
                    <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                )}
                {/* Chart - Growth */}
                {icon.type === 2 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" className="w-full h-full">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )}
                {/* Dollar - Business */}
                {icon.type === 3 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.5" className="w-full h-full">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {/* Target - Goals */}
                {icon.type === 4 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" className="w-full h-full">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Partner Logos Section - Prominent */}
              <AnimatedSection direction="fade" delay={0} initialLoad>
                <div className="flex flex-col items-center mb-10">
                  <span className="text-white/50 text-xs uppercase tracking-widest mb-4">A Partnership Between</span>
                  <div className="flex items-center justify-center gap-6 sm:gap-10">
                    {/* Women Tech Council Logo */}
                    <div className="relative w-36 sm:w-44 lg:w-52 h-14 sm:h-16 lg:h-20">
                      <Image
                        src="/logo.png"
                        alt="Women Tech Council"
                        fill
                        className="object-contain brightness-0 invert"
                        sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 208px"
                      />
                    </div>
                    
                    {/* X Connector */}
                    <div className="relative shrink-0 flex items-center gap-2 sm:gap-3">
                      <div className="w-4 sm:w-8 h-px bg-gradient-to-r from-transparent via-white/40 to-white/60"></div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div className="w-4 sm:w-8 h-px bg-gradient-to-r from-white/60 via-white/40 to-transparent"></div>
                    </div>
                    
                    {/* Peak Ventures Logo */}
                    <div className="relative w-24 sm:w-28 lg:w-32 h-20 sm:h-24 lg:h-28">
                      <Image
                        src="/peak.png"
                        alt="Peak Ventures"
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Column - Main Content */}
                <div className="text-center lg:text-left">
                  <AnimatedSection direction="left" delay={100} initialLoad>
                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                      <span className="block text-white mb-1">Tech Entrepreneur</span>
                      <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                        Apprenticeship
                      </span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-white/70 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
                      A free four-week program for high school juniors and seniors teaching technology and entrepreneurship skills from industry leaders.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                      <a
                        href={INFO_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-400 hover:to-emerald-500 shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        Get More Information
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                      <a
                        href="#learn-more"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                      >
                        Learn More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                    </div>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center">
                          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">4 Weeks</div>
                          <div className="text-xs text-white/60">Program Duration</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 flex items-center justify-center">
                          <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">Free</div>
                          <div className="text-xs text-white/60">No Cost</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center">
                          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">Juniors & Seniors</div>
                          <div className="text-xs text-white/60">High School</div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Right Column - Skills Preview Card */}
                <div className="relative">
                  <AnimatedSection direction="right" delay={200} initialLoad>
                    <div className="relative">
                      {/* Main Card */}
                      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl">
                        {/* Card Header */}
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">What You&apos;ll Learn</h3>
                            <p className="text-white/60 text-sm">Skills for the future</p>
                          </div>
                        </div>

                        {/* Skills List */}
                        <div className="space-y-3">
                          {skills.slice(0, 5).map((skill, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors"
                            >
                              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                                {skill.icon}
                              </div>
                              <span className="text-white/90 text-sm font-medium">{skill.title}</span>
                            </div>
                          ))}
                          <div className="text-center pt-2">
                            <span className="text-emerald-400 text-sm font-medium">+ More skills</span>
                          </div>
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

        {/* What You'll Learn Section */}
        <section id="learn-more" className="py-16 sm:py-20 bg-white relative overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="entrepreneurDots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#10b981"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#entrepreneurDots)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    What You&apos;ll Learn
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Gain hands-on experience in careers that align with your interests and begin your path to enter and lead the technology workforce.
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {skills.map((skill, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">{skill.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* About the Program Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-emerald-50/30 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        About the Program
                      </h2>
                      <p className="text-gray-600">Launched in 2018 by Women Tech Council & Peak Ventures</p>
                    </div>
                  </div>

                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Women Tech Council in partnership with Peak Ventures launched the Tech Entrepreneur Apprenticeship program in 2018. This four-week program for high school juniors and seniors teaches technology and entrepreneurship skills from industry entrepreneurs and leaders.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The program provides hands-on experiences in careers that align with student interests, ultimately beginning students on a path to enter and lead the technology workforce and pursue their passions.
                    </p>
                    
                    <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                      <h3 className="text-lg font-bold text-emerald-900 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        This is a free program!
                      </h3>
                      <p className="text-emerald-800 text-sm">
                        The Tech Entrepreneur Apprenticeship is completely free for participating students. All materials, mentorship, and experiences are provided at no cost.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <p className="text-gray-600 text-sm">
                      For more information, visit the Women Tech Council.
                    </p>
                    <a
                      href={INFO_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold px-6 py-3 rounded-xl hover:from-emerald-400 hover:to-teal-400 transition-all hover:scale-105 cursor-pointer"
                    >
                      Get More Information
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative py-8 sm:py-10 bg-gradient-to-r from-slate-900 via-emerald-950/80 to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                {/* Text */}
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Ready to Start Your Entrepreneurship Journey?
                  </h3>
                  <p className="text-sm text-white/60">
                    Apply for the Tech Entrepreneur Apprenticeship program today.
                  </p>
                </div>

                {/* Button */}
                <a
                  href={INFO_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-medium whitespace-nowrap px-6 py-2.5 rounded-lg text-sm transition-all cursor-pointer"
                >
                  Get More Info
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
