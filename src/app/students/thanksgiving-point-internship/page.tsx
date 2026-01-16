'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

// Fields of focus data
const fieldsOfFocus = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Agriculture Technology',
    description: 'Explore innovative farming technologies and sustainable agricultural practices',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Entomology',
    description: 'Study insects and their role in ecosystems and agriculture',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
      </svg>
    ),
    title: 'Exhibit Design',
    description: 'Create engaging educational exhibits and interactive displays',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'STEM Education',
    description: 'Develop curriculum and teach science, technology, engineering, and math',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Outdoor Education',
    description: 'Lead hands-on learning experiences in natural environments',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Wetland Restoration',
    description: 'Work on conservation projects and ecosystem restoration',
  },
];

const APPLICATION_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfRNOcwWDFwLLwe9pvEeItG4XVxcRGb9yCvLTlmIasck7Hw-w/viewform';

export default function ThanksgivingPointInternshipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Full-Width Hero Section - Matching Home Page Style */}
        <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-white">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/shetech-gallery/KinserStudios-SheTech25-3786.jpg"
              alt="Thanksgiving Point Internship"
              fill
              className="object-cover"
              priority
              quality={100}
            />
            {/* Gradient Overlay for text readability - White fade from left */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent sm:via-white/60"></div>
          </div>

          <div className="relative container mx-auto px-6 sm:px-6 lg:px-8 z-10 h-full">
            <div className="max-w-2xl text-left mx-auto sm:mx-0 sm:ml-4 lg:ml-10 mt-12 sm:mt-0">
              <AnimatedSection direction="up" delay={200} initialLoad={true}>
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#00A6CE]/10 text-[#00A6CE] font-bold text-sm uppercase tracking-wider backdrop-blur-sm">
                  Internship Program
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={300} initialLoad={true}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-[#00A6CE]">
                  Thanksgiving <br />
                  Point <br />
                  Internship
                </h1>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={500} initialLoad={true}>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 font-sans">
                  Explore STEM in Surprising Places
                </h2>
                <p className="text-lg sm:text-lg text-slate-600 mb-8 max-w-lg font-medium leading-relaxed">
                  In partnership with Thanksgiving Point, this internship lets you gain hands‑on experience in areas like agriculture technology, entomology, exhibit design, STEM education, outdoor education, and wetland restoration.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={700} initialLoad={true}>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a
                    href={APPLICATION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-[#BD1C81] text-white font-bold text-lg hover:bg-[#a0156b] transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide w-full sm:w-auto"
                  >
                    Apply Now
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection direction="up" delay={100}>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-8 tracking-tight">
                  REAL-WORLD EXPERIENCE
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  Interns work on real‑world projects with inspiring female mentors, building skills and exploring careers that blend science, technology, and the environment.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Fields of Focus - Split Layout with Image */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left Column: Content */}
              <div>
                <div className="mb-12">
                  <AnimatedSection direction="up">
                    <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">FIELDS OF FOCUS</h2>
                    <p className="text-lg text-slate-500 max-w-xl">Discover where your passion for nature meets technology.</p>
                  </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                  {fieldsOfFocus.map((field, index) => (
                    <AnimatedSection key={index} delay={index * 100} direction="up">
                      <div className="group cursor-default">
                        {/* Icon with hover float */}
                        <div className="w-12 h-12 text-[#00A6CE] mb-4 transition-transform duration-300 group-hover:-translate-y-1">
                          {field.icon}
                        </div>

                        {/* Content with sleek typography */}
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#00A6CE] transition-colors">{field.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-200 pl-4 group-hover:border-[#00A6CE] transition-colors">
                          {field.description}
                        </p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              {/* Right Column: Sticky Image */}
              <div className="hidden lg:block relative h-[700px] rounded-2xl overflow-hidden shadow-2xl sticky top-24">
                <Image
                  src="/shetech-gallery/KinserStudios-SheTech25-3332.jpg"
                  alt="Students exploring STEM at Thanksgiving Point"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
