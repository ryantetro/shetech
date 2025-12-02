'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui';

// Who can attend data
const attendees = [
  {
    title: 'High School Girls',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'CTE Directors',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'School Counselors',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Mentors & Volunteers',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

// SheTech Platform opportunities
const platformOpportunities = [
  {
    title: 'Scholarships',
    description: 'Access exclusive scholarship opportunities',
    icon: '🎓',
  },
  {
    title: 'High School Curriculum',
    description: 'STEM-focused educational resources',
    icon: '📚',
  },
  {
    title: 'Certifications',
    description: 'Industry-recognized certifications',
    icon: '🏆',
  },
];

// Sponsor logos - using the images from the arizona folder
const sponsors = [
  { name: 'Cox', image: '/arizona/image.png' },
  { name: 'City of Tucson', image: '/arizona/image copy.png' },
  { name: 'Comcast', image: '/arizona/image copy 2.png' },
  { name: 'Pima County Superintendent', image: '/arizona/image copy 3.png' },
  { name: 'Pima County', image: '/arizona/image copy 4.png' },
  { name: 'Center for the Future Arizona', image: '/arizona/image copy 5.png' },
  { name: 'Pima Community College', image: '/arizona/image copy 6.png' },
  { name: 'AAUW', image: '/arizona/image copy 7.png' },
];

export default function ArizonaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Arizona Desert Theme */}
        <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
          {/* Arizona sunset gradient background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-rose-900 to-purple-950"></div>
            {/* Desert sunset overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-purple-900/30"></div>
          </div>

          {/* Arizona-inspired pattern - saguaro silhouettes */}
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute bottom-0 left-0 right-0 h-48" preserveAspectRatio="none" viewBox="0 0 1200 200">
              {/* Desert landscape silhouette */}
              <path d="M0,200 L0,150 Q50,140 100,145 Q150,150 200,140 Q300,120 400,130 Q500,140 600,125 Q700,110 800,120 Q900,130 1000,115 Q1100,100 1200,110 L1200,200 Z" fill="#000" opacity="0.3"/>
              {/* Saguaro cactus silhouettes */}
              <path d="M150,150 L150,80 Q150,70 155,70 L155,90 Q160,90 160,85 L160,70 Q165,70 165,75 L165,90 Q170,90 170,95 L170,150" fill="#000" opacity="0.4"/>
              <path d="M350,140 L350,60 Q350,50 355,50 L355,75 Q360,75 360,70 L360,55 Q365,55 365,60 L365,75 Q370,75 370,80 L370,140" fill="#000" opacity="0.4"/>
              <path d="M950,130 L950,70 Q950,60 955,60 L955,85 Q960,85 960,80 L960,65 Q965,65 965,70 L965,85 Q970,85 970,90 L970,130" fill="#000" opacity="0.4"/>
            </svg>
          </div>

          {/* Gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>

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
                      <span className="block bg-gradient-to-r from-orange-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                        Explorer Day
                      </span>
                      <span className="block text-white/90 text-3xl sm:text-4xl mt-2">Arizona</span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-white/70 mb-6 leading-relaxed max-w-xl">
                      A day-long, industry-led STEM exploration event providing hands-on, interactive activities for rising 9th through 12th grade girls in the Grand Canyon State.
                    </p>

                    {/* Event Details */}
                    <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                        <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-white text-sm font-medium">March 1, 2023</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                        <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-white text-sm font-medium">9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-white text-sm font-medium">Tucson Convention Center</span>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                      <Link
                        href="/teachers/register-your-students"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
                      >
                        Register Your Students
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                      <a
                        href="#about"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Right: Arizona Logo Card */}
                <div className="relative">
                  <AnimatedSection direction="right" delay={0.2} initialLoad>
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 overflow-hidden">
                      {/* Arizona SheTech Logo */}
                      <div className="flex justify-center mb-6">
                        <div className="relative w-64 h-40">
                          <Image
                            src="/arizona/arizonalogo.png"
                            alt="SheTech Arizona"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      
                      {/* Event Highlight */}
                      <div className="text-center">
                        <p className="text-white/80 text-sm mb-4">
                          Hosted by City of Tucson Office of Economic Initiatives
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-400/30">
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                          <span className="text-white text-sm font-medium">FREE Event</span>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl"></div>
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

        {/* About Section */}
        <section id="about" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-orange-50/30">
          {/* Subtle desert pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="desertDots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#ea580c"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#desertDots)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                {/* Section Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
                    <span>🌵</span>
                    About the Event
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    SheTech Explorer Day is Coming to <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">Arizona!</span>
                  </h2>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    City of Tucson Office of Economic Initiatives is pleased to announce Arizona&apos;s SheTech Explorer Day 2023! This day-long, industry-led STEM exploration event provides hands-on, interactive activities in science, technology, engineering and math (STEM) for rising 9th through 12th grade girls.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We are thrilled to be working with Women Tech Council to activate, engage and inspire local high school girls into STEM degrees and career pathways! SheTech Arizona will be hosted on March 1, 2023 at the Tucson Convention Center from 9 am to 2 pm.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    SheTech is a one-day no-cost event for high school girls that features hands-on activities in science, technology, engineering, and math (STEM) alongside women professionals from a variety of backgrounds and industries.
                  </p>

                  {/* Contact Info */}
                  <div className="bg-gradient-to-r from-orange-50 to-rose-50 rounded-xl p-6 border border-orange-100">
                    <h3 className="font-semibold text-gray-900 mb-3">For More Information</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Contact Barbra Coffee at City of Tucson Economic Initiatives
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a href="tel:520-837-4069" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        520-837-4069
                      </a>
                      <a href="mailto:barbra.coffee@tucsonaz.gov" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        barbra.coffee@tucsonaz.gov
                      </a>
                    </div>
                  </div>

                  {/* Registration Note */}
                  <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <p className="text-amber-800 text-sm">
                      <strong>Note:</strong> Teachers can register a team of up to 9 students. Any high school in Pima County is eligible to participate. Space is limited. Registration is first come, first served.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Who Can Attend Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-orange-900 via-rose-900 to-purple-950 overflow-hidden">
          {/* Desert pattern overlay */}
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
                    Who Can <span className="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">Attend?</span>
                  </h2>
                  <p className="text-white/70 max-w-2xl mx-auto">
                    SheTech Arizona welcomes participants from across the community
                  </p>
                </div>

                {/* Attendee Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {attendees.map((attendee, index) => (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {attendee.icon}
                      </div>
                      <h3 className="text-white font-semibold text-sm sm:text-base">
                        {attendee.title}
                      </h3>
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
                    <span>🤝</span>
                    Our Partners
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Thank You to Our <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">Sponsors</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    SheTech Arizona is made possible by the generous support of our community partners
                  </p>
                </div>

                {/* Sponsor Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                  {sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="group bg-gray-50 rounded-xl p-6 flex items-center justify-center hover:bg-orange-50 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200"
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

        {/* SheTech Platform Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    SheTech <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">Platform</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Take advantage of SheTech opportunities
                  </p>
                </div>

                {/* Platform Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {platformOpportunities.map((item, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl hover:border-orange-200 transition-all duration-300"
                    >
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Compact CTA Banner */}
        <section className="relative py-8 sm:py-10 bg-gradient-to-r from-orange-900 via-rose-900 to-purple-950 overflow-hidden">
          {/* Arizona accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                {/* Text */}
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Ready to Explore STEM in Arizona? 🌵
                  </h3>
                  <p className="text-sm text-white/60">
                    Join us at SheTech Explorer Day and discover your future in tech.
                  </p>
                </div>

                {/* Button */}
                <div className="flex gap-3">
                  <Link
                    href="/teachers/register-your-students"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 hover:opacity-90 text-white font-medium whitespace-nowrap px-5 py-2.5 rounded-lg text-sm transition-all cursor-pointer"
                  >
                    Register Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
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
