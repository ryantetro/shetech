'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui';

// Board members data with photos where available
const boardMembers = [
  { name: 'Cydni Tetro', title: 'President', company: 'WTC', photo: '/board-members/cydnitetro.png', featured: true },
  { name: 'Kristin Wright', title: 'Board Member', company: 'WTC', photo: '/board-members/kristenwrigt.png' },
  { name: 'Jill Wiggins', title: 'Board Member', company: 'WTC', photo: '/board-members/jillwiggins.png' },
  { name: 'Dr. Tamara Goetz', title: 'Board Member', company: 'STEM Action Center' },
  { name: 'Jared King', title: 'Board Member', company: 'Adobe', photo: '/board-members/jaredking.png' },
  { name: 'Suzy Jessen', title: 'Board Member', company: 'Ancestry', photo: '/board-members/suzyjensen.png' },
  { name: 'Amanda Fang', title: 'Board Member', company: 'Dealertrack' },
  { name: 'John Farnsworth', title: 'Board Member', company: 'Dell EMC' },
  { name: 'Steve Daly', title: 'Board Member', company: 'Ivanti' },
  { name: 'Kimberly Wittman', title: 'Board Member', company: 'Vivint Smart Home' },
  { name: 'Kelly Underell', title: 'Board Member', company: 'Colorado Tech Association' },
  { name: 'Alecia Hoobing', title: 'Board Member', company: 'Idaho Women Innovators' },
  { name: 'Barbra Coffee', title: 'Board Member', company: 'City of Tucson' },
  { name: 'Shauna Caun', title: 'Board Member', company: 'Office of Energy' },
  { name: 'Ben Hart', title: 'Board Member', company: 'GOED' },
];

// Color schemes for cards without photos
const colorSchemes = [
  { bg: 'from-cyan-500 to-blue-500', text: 'text-white' },
  { bg: 'from-purple-500 to-indigo-500', text: 'text-white' },
  { bg: 'from-rose-500 to-pink-500', text: 'text-white' },
  { bg: 'from-emerald-500 to-teal-500', text: 'text-white' },
  { bg: 'from-amber-500 to-orange-500', text: 'text-white' },
];

export default function BoardMembersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 sm:pt-20 pb-12 sm:pb-16">
          {/* Gradient background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950/80 to-slate-900"></div>
          </div>

          {/* Network pattern - representing connections */}
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="networkGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <circle cx="40" cy="40" r="3" fill="#a855f7"/>
                  <circle cx="0" cy="0" r="2" fill="#a855f7" opacity="0.5"/>
                  <circle cx="80" cy="0" r="2" fill="#a855f7" opacity="0.5"/>
                  <circle cx="0" cy="80" r="2" fill="#a855f7" opacity="0.5"/>
                  <circle cx="80" cy="80" r="2" fill="#a855f7" opacity="0.5"/>
                  <line x1="40" y1="40" x2="0" y2="0" stroke="#a855f7" strokeWidth="0.5" opacity="0.3"/>
                  <line x1="40" y1="40" x2="80" y2="0" stroke="#a855f7" strokeWidth="0.5" opacity="0.3"/>
                  <line x1="40" y1="40" x2="0" y2="80" stroke="#a855f7" strokeWidth="0.5" opacity="0.3"/>
                  <line x1="40" y1="40" x2="80" y2="80" stroke="#a855f7" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#networkGrid)" />
            </svg>
          </div>

          {/* Gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection direction="fade" delay={0} initialLoad>
                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
                  <span className="block text-white mb-2">Meet Our</span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Board Members
                  </span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
                  The SheTech Board includes professionals in leading science, engineering and technology companies who are passionate about introducing young women to STEM careers and engaging them in the technology needs of the future.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 justify-center mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {boardMembers.length}
                    </div>
                    <div className="text-white/60 text-sm">Board Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                      10+
                    </div>
                    <div className="text-white/60 text-sm">Companies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      4
                    </div>
                    <div className="text-white/60 text-sm">States</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Board Members Grid */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="memberDots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#7c3aed"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#memberDots)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Leadership</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Industry leaders dedicated to empowering the next generation of women in technology
                  </p>
                </div>

                {/* Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {boardMembers.map((member, index) => {
                    const colorScheme = colorSchemes[index % colorSchemes.length];
                    
                    return (
                      <div
                        key={member.name}
                        className={`group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:border-purple-200 transition-all duration-300 ${member.featured ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                      >
                        {/* Photo or Gradient Placeholder */}
                        <div className="relative aspect-square overflow-hidden">
                          {member.photo ? (
                            <>
                              <Image
                                src={member.photo}
                                alt={member.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              {/* Gradient overlay on hover */}
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </>
                          ) : (
                            <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.bg} flex items-center justify-center`}>
                              <span className="text-5xl font-black text-white/30">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          )}
                          
                          {/* Featured badge */}
                          {member.featured && (
                            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold">
                              President
                            </div>
                          )}
                        </div>

                        {/* Member Info */}
                        <div className="p-5">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-purple-600 font-medium text-sm mb-1">
                            {member.title}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {member.company}
                          </p>
                        </div>

                        {/* Bottom accent line */}
                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorScheme.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                      </div>
                    );
                  })}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Compact CTA Banner */}
        <section className="relative py-8 sm:py-10 bg-white">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Explore the Possibilities
                  </h3>
                  <p className="text-sm text-gray-600">
                    Sign up for SheTech updates and stay connected!
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link
                    href="/sign-up-for-information"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-90 text-white font-medium whitespace-nowrap px-5 py-2.5 rounded-lg text-sm transition-all cursor-pointer"
                  >
                    Sign Up Now
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
