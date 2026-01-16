'use client';

import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, StickerHeader, GraphPaperBackground } from '@/components/ui';

// Application form URL
const APPLICATION_FORM_URL = 'https://docs.google.com/forms/d/1724js4I2HPhnwqWH70LeYYt5ENK93WA7dnPmIfIaP1A/preview';

// Pre-calculate floating media icons
const floatingIcons = [...Array(12)].map((_, i) => ({
  left: (i * 8.5) % 100,
  top: 10 + ((i * 11) % 80),
  size: 24 + (i % 4) * 8,
  duration: 5 + (i % 4),
  delay: i * 0.4,
  type: i % 6, // Different icon types
}));

export default function MediaInternshipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EBEBF5]">
      <Header />

      <main className="flex-1 relative">
        {/* Hero Section - KEEPS THE DARK THEME as requested */}
        <section className="relative overflow-hidden pt-24 sm:pt-32 pb-20 sm:pb-28 min-h-[calc(100vh-80px)] flex items-center">
          {/* Dynamic gradient background - Media/Creative theme with warm tones */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950/80 to-slate-900"></div>
          </div>

          {/* Film strip / media pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="filmStrip" x="0" y="0" width="120" height="80" patternUnits="userSpaceOnUse">
                  {/* Film strip holes */}
                  <rect x="5" y="5" width="10" height="10" rx="2" fill="#fff" />
                  <rect x="5" y="25" width="10" height="10" rx="2" fill="#fff" />
                  <rect x="5" y="45" width="10" height="10" rx="2" fill="#fff" />
                  <rect x="5" y="65" width="10" height="10" rx="2" fill="#fff" />
                  <rect x="105" y="5" width="10" height="10" rx="2" fill="#fff" />
                  <rect x="105" y="25" width="10" height="10" rx="2" fill="#fff" />
                  <rect x="105" y="45" width="10" height="10" rx="2" fill="#fff" />
                  <rect x="105" y="65" width="10" height="10" rx="2" fill="#fff" />
                  {/* Frame */}
                  <rect x="20" y="5" width="80" height="70" rx="4" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#filmStrip)" />
            </svg>
          </div>

          {/* Floating media icons */}
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
                {/* Camera */}
                {icon.type === 0 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00A6CE" strokeWidth="1.5" className="w-full h-full">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                )}
                {/* Microphone */}
                {icon.type === 1 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00A6CE" strokeWidth="1.5" className="w-full h-full">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                )}
                {/* Video */}
                {icon.type === 2 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#bd1c81" strokeWidth="1.5" className="w-full h-full">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                )}
                {/* Edit/Pen */}
                {icon.type === 3 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00A6CE" strokeWidth="1.5" className="w-full h-full">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                )}
                {/* Headphones */}
                {icon.type === 4 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00A6CE" strokeWidth="1.5" className="w-full h-full">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                )}
                {/* Globe/Web */}
                {icon.type === 5 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#bd1c81" strokeWidth="1.5" className="w-full h-full">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00A6CE]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00A6CE]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#bd1c81]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <AnimatedSection direction="fade" delay={0} initialLoad>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#00A6CE] animate-pulse"></span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2025–2026 Application
                </div>

                {/* Collaboration Logo Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-center gap-6 sm:gap-10 mb-4">
                    {/* SheTech Logo */}
                    <div className="relative w-32 sm:w-40 lg:w-48 h-16 sm:h-20 lg:h-24">
                      <Image
                        src="/logo.png"
                        alt="SheTech"
                        fill
                        className="object-contain brightness-0 invert"
                        sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                      />
                    </div>

                    {/* X Connector - Professional Design */}
                    <div className="relative shrink-0 flex items-center gap-3">
                      {/* Left line */}
                      <div className="w-6 sm:w-10 h-px bg-gradient-to-r from-transparent via-white/40 to-white/60"></div>

                      {/* X symbol */}
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>

                      {/* Right line */}
                      <div className="w-6 sm:w-10 h-px bg-gradient-to-r from-white/60 via-white/40 to-transparent"></div>
                    </div>

                    {/* TechBuzz Logo */}
                    <div className="relative w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24">
                      <Image
                        src="/techbuzz-bee-transparent.png"
                        alt="TechBuzz"
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                      />
                    </div>
                  </div>

                  {/* Collaboration tagline */}
                  <p className="text-white/60 text-sm font-medium uppercase tracking-wider">
                    Media Partnership
                  </p>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                  <span className="block bg-gradient-to-r from-white via-[#00A6CE]/30 to-white bg-clip-text text-transparent">
                    Media Internship
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-white/80 mt-2">
                    Program
                  </span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get hands-on journalism experience promoting women in technology. Develop skills in writing, interviews, video production, and multimedia content creation.
                </p>

                {/* Skills/Benefits Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
                  {[
                    { icon: '✍️', label: 'Writing' },
                    { icon: '🎤', label: 'Interviews' },
                    { icon: '🎬', label: 'Video' },
                    { icon: '📱', label: 'Social Media' },
                  ].map((skill, i) => (
                    <div
                      key={i}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:border-[#00A6CE]/30 transition-colors"
                    >
                      <div className="text-2xl mb-1">{skill.icon}</div>
                      <div className="text-white/80 text-sm font-medium">{skill.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href={APPLICATION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-[#00A6CE] to-[#008ba3] text-white hover:from-[#00A6CE] hover:to-[#00A6CE] shadow-xl shadow-[#00A6CE]/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    Apply Now
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Note about form status */}
                <p className="text-white/50 text-sm mt-4">
                  Applications for 2025-2026 may be closed. Contact us if you have questions.
                </p>
              </AnimatedSection>
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

        {/* Global Graph Paper Background for Body */}
        <div className="relative">
          <GraphPaperBackground color="rgba(0,0,0,0.03)" />

          {/* About the Program Section - REDESIGNED with Split Layout and Standard Photos */}
          <section className="py-20 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <AnimatedSection direction="up" delay={0}>
                  <div className="flex flex-col items-center mb-12">
                    <StickerHeader
                      variant="teal"
                      label="Overview"
                      title="About the Program"
                    />
                    <p className="mt-8 text-xl text-gray-600 font-medium text-center max-w-2xl">
                      Real-world experience in tech journalism
                    </p>
                  </div>

                  {/* Split Layout: Text Content + Photo */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">

                    {/* Left: Introduction */}
                    <div className="prose prose-lg text-gray-600">
                      <p className="text-xl font-medium text-gray-900 leading-relaxed mb-6">
                        The <span className="text-[#00A6CE] font-bold">SheTech & TechBuzz Media Internship</span> is a unique opportunity to gain real-world experience in tech journalism and media production.
                      </p>
                      <p className="mb-6">
                        You'll work directly with industry mentors to highlight women in technology, cover major tech events, and produce professional-grade content for social media and news platforms.
                      </p>
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#00A6CE]/10 flex items-center justify-center text-[#00A6CE] shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Mentorship Included</h4>
                          <p className="text-sm text-gray-500">Work alongside professional journalists and media producers from TechBuzz and Silicon Slopes.</p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Featured Photo */}
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                      <Image
                        src="/shetech-gallery/KinserStudios-SheTech25-3315.jpg"
                        alt="Student interviewing a mentor"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-sm font-bold uppercase tracking-wider bg-[#00A6CE] px-2 py-1 inline-block rounded mb-2">On Location</div>
                        <div className="font-medium">Real interviews with tech leaders</div>
                      </div>
                    </div>
                  </div>

                  {/* Feature Grid - Restyled as clean white cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: 'Create Content',
                        description: 'Produce videos, articles, and social posts.',
                        icon: (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        ),
                      },
                      {
                        title: 'Build Portfolio',
                        description: 'Get your work published and credited.',
                        icon: (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        ),
                      },
                      {
                        title: 'Network & Learn',
                        description: 'Connect with mentors and pros.',
                        icon: (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        ),
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#00A6CE]/30 hover:shadow-lg transition-all duration-300 group text-center"
                      >
                        <div className="w-12 h-12 rounded-xl bg-[#00A6CE]/10 flex items-center justify-center text-[#00A6CE] mb-4 mx-auto group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* CTA Banner - Unified Style */}
          <section className="relative py-12 sm:py-16 bg-white border-t border-gray-100 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-10 md:p-14 shadow-2xl relative overflow-hidden text-center">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A6CE]/10 rounded-full blur-3xl"></div>

                <h3 className="text-3xl font-bold text-white mb-6 relative z-10">
                  Ready to Start Your Media Career?
                </h3>
                <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto relative z-10">
                  Apply now to join the SheTech & TechBuzz Media Internship program.
                </p>

                <a
                  href={APPLICATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#00A6CE] hover:bg-[#008ba3] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#00A6CE]/30 transition-all hover:scale-105"
                >
                  Apply Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
