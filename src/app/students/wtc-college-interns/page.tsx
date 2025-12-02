'use client';

import React from 'react';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export default function WTCCollegeInternsPage() {
  const responsibilities = [
    {
      title: 'Student Board Coordination',
      description: 'Coordinating and communicating with Student Board Members for the school year',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Program Ambassador',
      description: 'Expand outreach through connections with SheTech students and educators to grow the program',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      title: 'Operations & Social Media',
      description: 'Assist with social media planning, email newsletters, swag distribution, and more',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
    },
    {
      title: 'Event Planning',
      description: 'Assist with monthly event planning and execution throughout the year',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Explorer Day Support',
      description: 'Help with SheTech Explorer Day setup and event execution',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: 'Partner Relations',
      description: 'Assist with industry volunteers, mentors, and sponsorship partners',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const requirements = [
    'Recent high school graduate (Class of 2021, 2022, or 2023)',
    'Active SheTech alumna and program participant',
    'Experience with Group.Me, social media, Zoom, or virtual meeting tools',
    'Strong communication and organizational skills',
    'Available 10-15 hours per week with flexible schedule',
    'Must provide own computer/laptop and transportation',
    'Available August 2023 - July 2024',
  ];

  const benefits = [
    { label: 'Paid Position', description: '1099 contract with hourly pay', icon: '💰' },
    { label: 'Flexible Schedule', description: 'Accommodates college courses', icon: '📅' },
    { label: 'Hybrid Work', description: 'Remote + in-person assignments', icon: '🏠' },
    { label: 'College Credit', description: 'May be available based on your school', icon: '🎓' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-[60vh] flex items-center">
          {/* Gradient Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900"></div>
          </div>

          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="internPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="1" fill="white" />
                  <rect x="10" y="10" width="8" height="8" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#internPattern)" />
            </svg>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection direction="down" delay={0} initialLoad>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Paid Internship Opportunity
                </div>

                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-white tracking-tight">
                  Join Our Team
                </h1>
                <p className="text-xl sm:text-2xl text-violet-200 font-medium mb-6">
                  SheTech College Intern
                </p>
                
                <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Congrats, SheTech Alumna—you graduated! The fun doesn&apos;t have to end. 
                  Join our team as a part-time intern and continue making an impact.
                </p>

                {/* Quick Info */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
                  <div className="flex items-center gap-2 text-white/90">
                    <svg className="w-5 h-5 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">10-15 hrs/week</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <svg className="w-5 h-5 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">Hybrid (Remote + In-Person)</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <svg className="w-5 h-5 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Paid Position</span>
                  </div>
                </div>

                {/* CTA */}
                <a 
                  href="#apply"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-900 font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                >
                  Apply Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
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

        {/* About the Role Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Did you love being a member of SheTech? Do you miss being part of all the excitement? 
                    SheTech is looking for a part-time intern who is a recently graduated senior and program 
                    alumna from the graduating class of 2021, 2022, or 2023.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We operate a small team as a non-profit organization and depend on thoughtful community 
                    management of our students, educators, and industry partners to continue to expand our 
                    network and provide opportunities for girls to explore careers in STEM.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Serving as an intern for a non-profit organization can provide valuable experience and 
                    SheTech provides opportunities to interact regularly with industry professionals.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Responsibilities Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-violet-600 bg-violet-50 rounded-full">
                  What You&apos;ll Do
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Key Responsibilities
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Help us with communications and program activities for the upcoming school year
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {responsibilities.map((item, index) => (
                <AnimatedSection key={index} direction="up" delay={index * 80}>
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-violet-300 hover:shadow-lg transition-all h-full">
                    <div className="w-10 h-10 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-full">
                  Perks
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  What We Offer
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} direction="up" delay={index * 80}>
                  <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl border border-indigo-100">
                    <div className="text-3xl mb-3">{benefit.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.label}</h3>
                    <p className="text-xs text-gray-600">{benefit.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="text-center mb-10">
                  <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-violet-600 bg-violet-50 rounded-full">
                    Qualifications
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Ideal Candidate
                  </h2>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={100}>
                <div className="bg-white rounded-2xl p-8 border border-gray-200">
                  <ul className="space-y-4">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-8 border border-violet-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Important Details</h3>
                  <div className="space-y-4 text-sm text-gray-600">
                    <p>
                      The selected intern will enjoy a flexible hourly schedule that accommodates college courses 
                      and should be available 10-15 hours per week. Work activities will be a hybrid of remote 
                      tasks (work from home) along with in-person assignments. Events may be scheduled during 
                      the day with occasional evening and weekend hours.
                    </p>
                    <p>
                      This role will be considered on a <strong>1099 contract basis</strong> with hourly pay 
                      calculated through timesheets submitted to our program director. Interns must provide their 
                      own computer or laptop to complete assigned work and must provide their own transportation.
                    </p>
                    <p>
                      Interns must be available from <strong>August 2023 - July 2024</strong> and may be 
                      re-evaluated for an extension at that time. This is a paid internship position. 
                      College credit may be available depending on the requirements of your college or university.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Apply CTA Banner */}
        <section id="apply" className="py-12 sm:py-16 bg-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      Ready to Join the SheTech Team?
                    </h3>
                    <p className="text-gray-600">
                      Apply now and make an impact with Utah&apos;s leading STEM program for girls.
                    </p>
                  </div>
                  <a 
                    href="mailto:info@shetech.org?subject=SheTech Intern Application"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors whitespace-nowrap"
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
