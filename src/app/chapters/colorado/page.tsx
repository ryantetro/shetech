'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui';

// Who can attend data
const attendees = [
  {
    title: 'High School Girls',
    description: '9th-10th grade students',
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
    description: 'Guidance professionals',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Mentors & Volunteers',
    description: 'Industry professionals',
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

// Sponsor categories with logos
const sponsorCategories = [
  {
    title: 'Brought to You By',
    sponsors: [
      { name: 'Sponsor 1', image: '/colorado/image.png' },
      { name: 'Sponsor 2', image: '/colorado/image copy.png' },
    ],
  },
  {
    title: 'With Additional Support From',
    sponsors: [
      { name: 'Sponsor 3', image: '/colorado/image copy 2.png' },
      { name: 'Sponsor 4', image: '/colorado/image copy 3.png' },
      { name: 'Sponsor 5', image: '/colorado/image copy 4.png' },
    ],
  },
  {
    title: 'Lunch Sponsor',
    sponsors: [
      { name: 'Sponsor 6', image: '/colorado/image copy 5.png' },
    ],
  },
  {
    title: 'Venue Partner',
    sponsors: [
      { name: 'Sponsor 7', image: '/colorado/image copy 6.png' },
    ],
  },
  {
    title: 'Workshop Partners',
    sponsors: [
      { name: 'Sponsor 8', image: '/colorado/image copy 7.png' },
      { name: 'Sponsor 9', image: '/colorado/image copy 8.png' },
      { name: 'Sponsor 10', image: '/colorado/image copy 9.png' },
      { name: 'Sponsor 11', image: '/colorado/image copy 10.png' },
    ],
  },
  {
    title: 'TechZone Partners',
    sponsors: [
      { name: 'Sponsor 12', image: '/colorado/image copy 11.png' },
      { name: 'Sponsor 13', image: '/colorado/image copy 12.png' },
      { name: 'Sponsor 14', image: '/colorado/image copy 13.png' },
      { name: 'Sponsor 15', image: '/colorado/image copy 14.png' },
      { name: 'Sponsor 16', image: '/colorado/image copy 15.png' },
      { name: 'Sponsor 17', image: '/colorado/image copy 16.png' },
      { name: 'Sponsor 18', image: '/colorado/image copy 17.png' },
      { name: 'Sponsor 19', image: '/colorado/image copy 18.png' },
      { name: 'Sponsor 20', image: '/colorado/image copy 19.png' },
    ],
  },
];

// Event stats
const eventStats = [
  { value: '150+', label: 'Students' },
  { value: '10+', label: 'Industry Partners' },
  { value: '40+', label: 'Mentors' },
];

export default function ColoradoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Colorado Mountain Theme */}
        <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
          {/* Colorado sky gradient background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-sky-800 to-indigo-900"></div>
            {/* Mountain sunset overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-sky-600/20"></div>
          </div>

          {/* Colorado mountain silhouette - full width */}
          <div className="absolute inset-0">
            <svg className="absolute bottom-0 left-0 right-0 w-full h-80 sm:h-96" preserveAspectRatio="none" viewBox="0 0 1200 300">
              {/* Back mountain range - lighter */}
              <path d="M0,300 L0,200 L80,150 L150,180 L250,100 L350,150 L450,70 L550,120 L650,60 L750,110 L850,50 L950,100 L1050,70 L1150,130 L1200,100 L1200,300 Z" fill="#1e3a5f" opacity="0.5"/>
              
              {/* Front mountain range - darker */}
              <path d="M0,300 L0,240 L120,180 L200,220 L320,140 L420,190 L520,120 L620,170 L740,100 L840,160 L960,110 L1060,170 L1160,130 L1200,180 L1200,300 Z" fill="#0f172a" opacity="0.85"/>
              
              {/* Snow caps - prominent and visible */}
              <path d="M235,110 L250,100 L265,110 L257,104 L243,104 Z" fill="#ffffff" opacity="0.95"/>
              <path d="M435,80 L450,70 L465,80 L457,74 L443,74 Z" fill="#ffffff" opacity="0.95"/>
              <path d="M635,70 L650,60 L665,70 L657,64 L643,64 Z" fill="#ffffff" opacity="0.95"/>
              <path d="M835,60 L850,50 L865,60 L857,54 L843,54 Z" fill="#ffffff" opacity="0.95"/>
              <path d="M1035,80 L1050,70 L1065,80 L1057,74 L1043,74 Z" fill="#ffffff" opacity="0.95"/>
              
              {/* Snow cap accent lines */}
              <path d="M245,105 L250,100 L255,105" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.8"/>
              <path d="M445,75 L450,70 L455,75" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.8"/>
              <path d="M645,65 L650,60 L655,65" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.8"/>
              <path d="M845,55 L850,50 L855,55" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.8"/>
              <path d="M1045,75 L1050,70 L1055,75" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.8"/>
            </svg>
          </div>

          {/* Gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl"></div>
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
                      <span className="block bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        Explorer Day
                      </span>
                      <span className="block text-white/90 text-3xl sm:text-4xl mt-2">Colorado</span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-white/70 mb-6 leading-relaxed max-w-xl">
                      Colorado Technology Association is proud to host SheTech Explorer Day Colorado, bringing together students from across the Centennial State for hands-on STEM experiences.
                    </p>

                    {/* Event Details */}
                    <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                        <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-white text-sm font-medium">February 8, 2019</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-white text-sm font-medium">University of Denver</span>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
                      {eventStats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                            {stat.value}
                          </div>
                          <div className="text-white/60 text-sm">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                      <Link
                        href="/teachers/register-your-students"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
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

                {/* Right: Colorado Logo Card */}
                <div className="relative">
                  <AnimatedSection direction="right" delay={0.2} initialLoad>
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 overflow-hidden">
                      {/* Colorado SheTech Logo */}
                      <div className="flex justify-center mb-6">
                        <div className="relative w-64 h-40">
                          <Image
                            src="/colorado/coloradologo.png"
                            alt="SheTech Colorado"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      
                      {/* Event Highlight */}
                      <div className="text-center">
                        <p className="text-white/80 text-sm mb-4">
                          Hosted by Colorado Technology Association
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/20 to-indigo-500/20 border border-sky-400/30">
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                          <span className="text-white text-sm font-medium">FREE Event</span>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-sky-500/20 to-transparent rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-2xl"></div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-sky-50/30">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="mountainDots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#0284c7"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mountainDots)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                {/* Section Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-4">
                    <span>🏔️</span>
                    About the Event
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    SheTech Explorer Day <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Colorado</span>
                  </h2>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Colorado Technology Association is proud to host SheTech Explorer Day Colorado 2019, bringing together 150+ students from across Colorado to meet with 10+ industry partners and 40+ mentors and to participate in TechZone activities, Tech workshops, and a TechChallenge.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    SheTech is a one-day no-cost event for high school girls that features hands-on activities in science, technology, engineering, and math (STEM) alongside women professionals from a variety of backgrounds and industries.
                  </p>

                  {/* Eligibility Note */}
                  <div className="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-xl p-6 border border-sky-100">
                    <h3 className="font-semibold text-gray-900 mb-2">Who Can Attend?</h3>
                    <p className="text-gray-600 text-sm">
                      This event is open to 9th and 10th-grade female students for the 2018-2019 school year.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Who Can Attend Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-sky-800 to-indigo-900 overflow-hidden">
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
                    Who Can <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Attend?</span>
                  </h2>
                  <p className="text-white/70 max-w-2xl mx-auto">
                    SheTech Colorado welcomes participants from across the Centennial State
                  </p>
                </div>

                {/* Attendee Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {attendees.map((attendee, index) => (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-4">
                    <span>🤝</span>
                    Our Partners
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Thank You to Our <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Sponsors</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    SheTech Colorado is made possible by the generous support of our community partners
                  </p>
                </div>

                {/* Sponsor Categories */}
                <div className="space-y-12">
                  {sponsorCategories.map((category, catIndex) => (
                    <div key={catIndex}>
                      <h3 className="text-lg font-semibold text-gray-700 text-center mb-6 pb-2 border-b border-gray-200">
                        {category.title}
                      </h3>
                      <div className={`grid gap-6 ${
                        category.sponsors.length === 1 
                          ? 'grid-cols-1 max-w-xs mx-auto' 
                          : category.sponsors.length === 2 
                            ? 'grid-cols-2 max-w-md mx-auto'
                            : category.sponsors.length <= 4
                              ? 'grid-cols-2 sm:grid-cols-4 max-w-3xl mx-auto'
                              : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
                      }`}>
                        {category.sponsors.map((sponsor, index) => (
                          <div
                            key={index}
                            className="group bg-gray-50 rounded-xl p-4 sm:p-6 flex items-center justify-center hover:bg-sky-50 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-sky-200"
                          >
                            <div className="relative w-full h-12 sm:h-16">
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
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Past Event Highlight */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
                      <span>📰</span>
                      Featured Story
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Colorado SheTech 2017
                    </h2>
                  </div>
                  
                  <blockquote className="text-gray-600 leading-relaxed italic border-l-4 border-sky-500 pl-6 mb-6">
                    &ldquo;As the technology sector continues to evolve, many companies are having difficulty finding qualified workers to fill in-demand, high-tech jobs. To help grow the talent pipeline and expand this traditionally male-dominated industry, the Colorado Technology Association&apos;s Women in Tech Council hosted the SheTech Explorer Day Colorado, a day-long immersive event where 9th – 11th grade female high school students from across the state learned what it&apos;s like to work in science, technology, engineering and math (STEM).&rdquo;
                  </blockquote>

                  <p className="text-gray-600 mb-6">
                    Colorado Technology Association Foundation hosted SheTech Colorado Day at The Commons on Champa on June 8, 2017, bringing together nearly 60 9th-11th grade girls to meet with 14 industry partners and participate in activities, workshops and a TechChallenge.
                  </p>

                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium"
                  >
                    See full article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SheTech Platform Section */}
        <section className="relative py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    SheTech <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Platform</span>
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
                      className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl hover:border-sky-200 transition-all duration-300"
                    >
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
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
        <section className="relative py-8 sm:py-10 bg-gradient-to-r from-blue-900 via-sky-800 to-indigo-900 overflow-hidden">
          {/* Colorado accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                {/* Text */}
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Ready to Explore STEM in Colorado? 🏔️
                  </h3>
                  <p className="text-sm text-white/60">
                    Join us at SheTech Explorer Day and discover your future in tech.
                  </p>
                </div>

                {/* Button */}
                <div className="flex gap-3">
                  <Link
                    href="/teachers/register-your-students"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 hover:opacity-90 text-white font-medium whitespace-nowrap px-5 py-2.5 rounded-lg text-sm transition-all cursor-pointer"
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
