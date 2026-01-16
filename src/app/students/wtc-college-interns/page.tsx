'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

// Responsibilities inferred from the copy
const responsibilities = [
  {
    title: 'Student Board Coordination',
    description: 'Coordinate with Student Board members for the school year.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Outreach Ambassador',
    description: 'Serve as an ambassador to expand our outreach and impact.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: 'Program Communications',
    description: 'Assist with social media, newsletters, and event communications.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    title: 'Explorer Day Support',
    description: 'Help run Explorer Day and serve the community.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function WTCCollegeInternsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Creative Split Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-slate-900">
          {/* Abstract Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left Column: Content */}
              <div className="max-w-2xl">
                <AnimatedSection direction="right" delay={100} initialLoad={true}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-slate-800 border border-slate-700 shadow-lg shadow-black/20 backdrop-blur-md">
                    <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
                    <span className="text-slate-300 font-bold text-xs uppercase tracking-widest">Now Hiring &middot; Paid Opportunity</span>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={200} initialLoad={true}>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-white">
                    Become a <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400">
                      SheTech Intern
                    </span>
                  </h1>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={300} initialLoad={true}>
                  <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
                    Calling all SheTech Alumnae! Keep the momentum going. Join our team as a part-time intern to mentor the next generation, expand our reach, and build your professional network.
                  </p>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={400} initialLoad={true}>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#apply"
                      className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-teal-500 text-white font-bold text-lg hover:bg-teal-400 transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-1"
                    >
                      Apply Now
                    </a>
                    <a
                      href="#details"
                      className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-slate-800 text-white font-bold text-lg hover:bg-slate-700 border border-slate-700 transition-all duration-300 hover:-translate-y-1"
                    >
                      Learn More
                    </a>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Column: Creative Visual */}
              <div className="relative hidden lg:block">
                <AnimatedSection direction="left" delay={500} initialLoad={true}>
                  <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                    {/* Main Image Layer */}
                    <div className="absolute inset-0 bg-slate-800 rounded-3xl overflow-hidden shadow-2xl rotate-3 border border-slate-700">
                      <Image
                        src="/shetech-gallery/KinserStudios-SheTech25-3315.jpg"
                        alt="SheTech Interns"
                        fill
                        className="object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>

        {/* The Role Section - Clean Grid Layout */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left: Main Copy */}
              <AnimatedSection direction="right">
                <div>
                  <h2 className="text-4xl font-black text-slate-900 mb-6">Stay Connected</h2>
                  <div className="w-20 h-1.5 bg-teal-500 rounded-full mb-8"></div>

                  <div className="prose prose-lg text-slate-600">
                    <p className="mb-6">
                      Interns coordinate with Student Board members, serve as ambassadors to expand outreach, assist with program communications (social media, newsletters, events) and help run Explorer Day.
                    </p>
                    <p className="font-medium text-slate-800 text-xl border-l-4 border-teal-500 pl-6 not-italic">
                      You’ll gain professional experience, flexible hours, and continued mentorship while staying involved with SheTech.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right: Responsibilities Grid */}
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                {responsibilities.map((item, i) => (
                  <AnimatedSection key={i} delay={i * 100} direction="left">
                    <div className="group cursor-default">
                      {/* Icon with hover float */}
                      <div className="w-12 h-12 text-teal-500 mb-4 transition-transform duration-300 group-hover:-translate-y-1">
                        {item.icon}
                      </div>

                      {/* Content with sleek typography */}
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-200 pl-4 group-hover:border-teal-500 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Explore - CTA Section */}
        <section id="apply" className="py-24 bg-slate-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">Ready to Explore?</h2>

              <div className="max-w-3xl mx-auto mb-12">
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  SheTech programs are free and designed to help you discover your strengths, build confidence, and see yourself in STEM.
                  Whether you join the Student Board, dive into an internship, start a club, or come to Explorer Day, you’ll be part of a supportive community that believes in your potential.
                </p>
                <p className="text-lg text-white font-medium">
                  Sign up for updates, apply for programs, and imagine the possibilities!
                </p>
              </div>

              <a
                href="mailto:info@shetech.org?subject=SheTech Intern Application"
                className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-slate-900 font-black text-lg hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:scale-105 transform"
              >
                APPLY FOR PROGRAMS
              </a>
            </AnimatedSection>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
