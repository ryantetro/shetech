'use client';

import React from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export default function ScholarshipsPage() {
  const scholarships = [
    {
      id: 'energy',
      title: 'Utah Energy Workforce Scholarship Program',
      amount: '$5,000',
      icon: '⚡',
      color: 'from-amber-500 to-orange-500',
      bgLight: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-200',
      hoverBorder: 'hover:border-amber-400',
      description: 'Four scholarships will be awarded, one to a student in each of Utah\'s four Congressional districts. The $5,000 scholarships will be awarded to students who intend to pursue a Science, Technology, Engineering or Math (STEM) related course of study at a Utah institute of higher education.',
      requirement: 'To participate in the Scholarship Program, students will be required to submit short documentary films exploring some aspect of Utah\'s energy sector.',
      videoId: 'hA29QmAbicA',
      link: '#',
      linkText: 'Learn More',
    },
    {
      id: 'entrepreneur',
      title: 'High School Utah Entrepreneur Challenge',
      amount: '$20,000+',
      icon: '🚀',
      color: 'from-violet-500 to-purple-600',
      bgLight: 'from-violet-50 to-purple-50',
      borderColor: 'border-violet-200',
      hoverBorder: 'hover:border-violet-400',
      description: 'Do you want to explore innovative and creative entrepreneurship? Are you filled with problem-solving ideas? Do you want to win cash and scholarship prizes?',
      requirement: 'The High School Utah Entrepreneur Challenge (HSUEC) encourages high school students to explore innovation and entrepreneurship, and teams can win over $20,000 in cash and scholarship prizes! All high school students (or those ages 14-18) throughout Utah are encouraged to compete.',
      videoId: 'p1sUvzgFFpA',
      link: '#',
      linkText: 'Find Out More',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Golden/Success Theme */}
        <section className="relative overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-[60vh] flex items-center">
          {/* Gradient Background - Deep blue to teal for trust/education */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900 to-teal-900"></div>
          </div>

          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="scholarshipPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <circle cx="40" cy="40" r="1" fill="white" />
                  <path d="M20 20 L30 30 M50 50 L60 60" stroke="white" strokeWidth="0.5" opacity="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#scholarshipPattern)" />
            </svg>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection direction="down" delay={0} initialLoad>
                {/* Main Title */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-white tracking-tight" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Scholarships
                </h1>
                
                <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Invest in your future with scholarship opportunities designed to support Utah students pursuing STEM education and innovation.
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-black text-yellow-400">$25K+</div>
                    <div className="text-sm text-white/60">Available</div>
                  </div>
                  <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-black text-primary-400">2</div>
                    <div className="text-sm text-white/60">Programs</div>
                  </div>
                  <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-black text-teal-400">Utah</div>
                    <div className="text-sm text-white/60">Students</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" className="w-full">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Scholarship Programs Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full">
                  Opportunities
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Scholarship Programs
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Explore our scholarship opportunities and find the right fit for your goals
                </p>
              </div>
            </AnimatedSection>

            {/* Scholarship Cards */}
            <div className="space-y-16 max-w-6xl mx-auto">
              {scholarships.map((scholarship, index) => (
                <AnimatedSection key={scholarship.id} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 150}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Video Side */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative group">
                        {/* Video Container with rounded corners and shadow */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <div className="aspect-video">
                            <iframe
                              src={`https://www.youtube.com/embed/${scholarship.videoId}`}
                              title={scholarship.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            ></iframe>
                          </div>
                        </div>
                        {/* Decorative gradient blur behind video */}
                        <div className={`absolute -inset-4 bg-gradient-to-br ${scholarship.color} opacity-20 blur-2xl -z-10 group-hover:opacity-30 transition-opacity`}></div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      {/* Amount Badge */}
                      <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${scholarship.color} text-white text-sm font-bold mb-4`}>
                        {scholarship.amount}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {scholarship.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {scholarship.description}
                      </p>

                      {/* Requirement */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {scholarship.requirement}
                      </p>

                      {/* CTA */}
                      <a 
                        href={scholarship.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${scholarship.color} text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all`}
                      >
                        {scholarship.linkText}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Make a Difference Section - Compact */}
        <section className="py-10 sm:py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Sponsor Card */}
                <AnimatedSection direction="left" delay={0}>
                  <div className="flex items-center gap-4 bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
                        Interested in sponsoring?
                      </h3>
                      <p className="text-xs text-gray-500">
                        Help shape the future of STEM education
                      </p>
                    </div>
                    <Link href="/companies/sponsor" className="text-amber-600 hover:text-amber-700 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </AnimatedSection>

                {/* Stay Updated Card */}
                <AnimatedSection direction="right" delay={100}>
                  <div className="flex items-center gap-4 bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
                        Stay updated
                      </h3>
                      <p className="text-xs text-gray-500">
                        Get notified about new opportunities
                      </p>
                    </div>
                    <Link href="/sign-up-for-information" className="text-primary-600 hover:text-primary-700 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Apply Section - Compact Banner */}
        <section className="py-12 sm:py-16 bg-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      Ready to Apply for a Scholarship?
                    </h3>
                    <p className="text-gray-600">
                      Don&apos;t miss your chance to receive financial support for your STEM education.
                    </p>
                  </div>
                  <a 
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors whitespace-nowrap"
                  >
                    Apply Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
