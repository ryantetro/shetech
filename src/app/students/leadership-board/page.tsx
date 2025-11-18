'use client';

import { Header, Footer } from '@/components/layout';
import { AnimatedSection, Button, Input } from '@/components/ui';
import { useState } from 'react';

// School board data
const schoolBoardMembers = [
  { school: 'Alta High School', members: ['Gretel', 'Vanessa'] },
  { school: 'Altamont High School', members: ['Whitlee'] },
  { school: 'American Academy of Innovation', members: ['Abigail'] },
  { school: 'American Fork High School', members: ['Brielle', 'Nora', 'Sophia'] },
  { school: 'American Preparatory Academy', members: ['Alessandra', 'Lexi', 'Mia'] },
  { school: 'AMES', members: ['Isabella'] },
  { school: 'Beehive Science & Technology Academy', members: ['Aroma', 'Nur'] },
  { school: 'Ben Lomond High School', members: ['Jasmine', 'Maddox'] },
  { school: 'Bountiful High School', members: ['Jovianne'] },
  { school: 'Cedar Valley High School', members: ['Alice', 'Siya'] },
  { school: 'Copper Hills High School', members: ['Amaya', 'Kashann', 'Lana'] },
  { school: 'Corner Canyon High School', members: ['Maren', 'Nada'] },
  { school: 'Cottonwood High School', members: ['Meili', 'Nasri'] },
  { school: 'DaVinci Academy of Science & The Arts', members: ['Micah'] },
  { school: 'Freedom Preparatory Academy', members: ['Dylan'] },
  { school: 'Grand County High School', members: ['Ingeborg'] },
  { school: 'Granger High School', members: ['Hamda', 'Sooniyeh'] },
  { school: 'Grantsville High School', members: ['Caroline', 'Jane'] },
  { school: 'Green Canyon High School', members: ['Madelyn', 'Paige'] },
  { school: 'Gunnison Valley High School', members: ['Renesmee'] },
  { school: 'Herriman High School', members: ['Chanelle', 'Reese', 'Rylin'] },
  { school: 'Highland High School', members: ['Arianna', 'Caroline'] },
  { school: 'Hillcrest High School', members: ['Tanya', 'Vaishnavi'] },
  { school: 'Hunter High School', members: ['Fatuma', 'Milo'] },
  { school: 'Iqra Academy of Utah', members: ['Sara'] },
  { school: 'Itineris Early College High School', members: ['Lyan', 'Navina'] },
  { school: 'Jordan High School', members: ['Farida', 'Yanelly'] },
  { school: 'Juan Diego Catholic High School', members: ['Hannah', 'Ria'] },
  { school: 'Karl Maeser Preparatory Academy', members: ['Eleanor', 'Julia', 'Lexey'] },
  { school: 'Lone Peak High School', members: ['Charity', 'Libby', 'Lily', 'Macey'] },
  { school: 'Merit Academy', members: ['Jamie'] },
  { school: 'Mountain Ridge High School', members: ['Laura'] },
  { school: 'Mountain View High School', members: ['Abigail'] },
  { school: 'Murray High School', members: ['Aysia'] },
  { school: 'NUAMES – Davis High School', members: ['Emma', 'Laila'] },
  { school: 'NUAMES – Ogden High School', members: ['Sunny'] },
  { school: 'Olympus High School', members: ['Annika', 'Tressa'] },
  { school: 'Park City High School', members: ['Brooklyn', 'Izzy', 'Poppy'] },
  { school: 'Pleasant Grove High School', members: ['Eliana', 'Kale'] },
  { school: 'Provo High School', members: ['KayDee'] },
  { school: 'Riverton High School', members: ['Lauren', 'Lilly'] },
  { school: 'Riverview Junior High School', members: ['Dorothy'] },
  { school: 'Rowland Hall', members: ['Fiona', 'June'] },
  { school: 'Salt Lake Center for Science Education', members: ['Emily'] },
  { school: 'Skyline High School', members: ['Amber', 'Margaux'] },
  { school: 'Skyridge High School', members: ['Lainie'] },
  { school: 'Stansbury High School', members: ['Ailsa', 'Baylee'] },
  { school: 'Taylorsville High School', members: ['Lynny', 'Ma\'Asi'] },
  { school: 'Timberline Middle School', members: ['Harriet'] },
  { school: 'Timpanogos High School', members: ['Eleanor', 'Paisley'] },
  { school: 'Timpview High School', members: ['Anna', 'Jill'] },
  { school: 'Utah Connections Academy', members: ['Aroosh', 'Raiha'] },
  { school: 'Utah County Academy of Science', members: ['Kennedy', 'Lucciana'] },
  { school: 'Utah International Charter School', members: ['Benazir', 'Nadia'] },
  { school: 'Viewmont High School', members: ['Alexandra', 'Nyantok'] },
  { school: 'Wasatch High School', members: ['Madison'] },
  { school: 'West High School', members: ['Agatha', 'Ingrid', 'Shruthi'] },
  { school: 'West Jordan High School', members: ['Emily', 'Josephine'] },
  { school: 'Westlake High School', members: ['Ashley'] },
];

export default function LeadershipBoardPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');

  const filteredSchools = schoolBoardMembers.filter(
    (school) =>
      school.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.members.some((member) =>
        member.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const totalMembers = schoolBoardMembers.reduce(
    (acc, school) => acc + school.members.length,
    0
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Seamless Tech Hero - Circuit Board Design (Compact) */}
        <section className="relative overflow-hidden pt-24 sm:pt-28 pb-32 sm:pb-40">
          {/* Multi-stop background gradient for smoother transition */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600" 
                 style={{ 
                   background: 'linear-gradient(to bottom, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 30%, rgb(51, 65, 85) 50%, rgb(148, 163, 184) 70%, rgb(241, 245, 249) 85%, rgb(255, 255, 255) 100%)'
                 }}></div>
          </div>
          
          {/* Circuit Board Pattern SVG Background with smooth fade */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  {/* Horizontal lines */}
                  <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-primary-400" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-secondary-400" />
                  <line x1="0" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="0.5" className="text-primary-400" />
                  
                  {/* Vertical lines */}
                  <line x1="30" y1="0" x2="30" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-primary-400" />
                  <line x1="70" y1="0" x2="70" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-secondary-400" />
                  
                  {/* Connection nodes with glow */}
                  <circle cx="30" cy="20" r="2" className="text-primary-500" fill="currentColor">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="70" cy="50" r="2" className="text-secondary-500" fill="currentColor">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="30" cy="80" r="2" className="text-primary-500" fill="currentColor">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="70" cy="20" r="2" className="text-secondary-500" fill="currentColor">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                  </circle>
                </pattern>
                
                {/* Extended smooth gradient mask */}
                <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="white" stopOpacity="1" />
                  <stop offset="40%" stopColor="white" stopOpacity="1" />
                  <stop offset="60%" stopColor="white" stopOpacity="0.7" />
                  <stop offset="75%" stopColor="white" stopOpacity="0.4" />
                  <stop offset="85%" stopColor="white" stopOpacity="0.15" />
                  <stop offset="92%" stopColor="white" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                
                <mask id="fadeMask">
                  <rect width="100%" height="100%" fill="url(#fadeGradient)" />
                </mask>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" mask="url(#fadeMask)" />
            </svg>
          </div>

          {/* Gradient Overlay for depth with fade */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 via-primary-500/5 to-transparent"></div>
          </div>
          
          {/* Animated gradient orbs with fade */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-pulse opacity-30" style={{ animationDelay: '1s' }}></div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Main Hero Content - Compact */}
              <AnimatedSection direction="up" initialLoad delay={0}>
                <div className="text-center mb-6">
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    Student Board
                  </h1>
                  
                  <p className="text-base text-slate-300 max-w-2xl mx-auto mb-4">
                    Join the SheTech Student Board and help shape programs for girls in STEM.
                  </p>

                  {/* Year Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-primary-500/20 text-primary-300 border border-primary-500/30 backdrop-blur-sm">
                    <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>2025–2026 School Year</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* About Section Card - Compact */}
              <AnimatedSection direction="up" initialLoad delay={0.1}>
                <div className="max-w-5xl mx-auto">
                  <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-5 shadow-xl">
                    <div className="flex flex-col lg:flex-row gap-5 items-start">
                      {/* Left: About Info */}
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-white mb-2">
                          About the Student Board
                        </h2>
                        <p className="text-sm text-slate-300 leading-relaxed mb-4">
                          Student Board appointments run with the school year. Each high school and junior high/middle school has 1-2 board members who provide strategic input, act as school ambassadors, operate clubs, and help run Explorer Day.
                        </p>

                        {/* Tech Stats */}
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>
                            <span className="text-xs text-slate-400">59 Schools</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary-500 animate-pulse"></div>
                            <span className="text-xs text-slate-400">106 Leaders</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>
                            <span className="text-xs text-slate-400">Year-Round Program</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: CTA */}
                      <div className="shrink-0 flex items-center lg:items-start">
                        <Button 
                          className="whitespace-nowrap bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-lg shadow-primary-500/30 border-0 text-sm px-5 py-2"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Apply to Join Board
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

      {/* Board Members Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                2025–2026 Student Board
              </h2>
              <p className="text-sm text-gray-600">
                {totalMembers} student leaders representing {schoolBoardMembers.length} schools
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search by school or student name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 text-base"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              {searchTerm && (
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Found {filteredSchools.length} school{filteredSchools.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>

            {/* Schools Grid - Simple & Clean */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-6 max-w-7xl mx-auto">
              {filteredSchools.map((school, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <div className="mb-2">
                    <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-primary-600 transition-colors">
                      {school.school}
                    </h3>
                  </div>
                  <div className="text-sm text-gray-700 leading-relaxed">
                    {school.members.map((member, idx) => (
                      <span key={idx}>
                        {member}
                        {idx < school.members.length - 1 && (
                          <span className="text-gray-400"> &amp; </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {filteredSchools.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-3">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg">No schools or members found matching &quot;{searchTerm}&quot;</p>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter Banner - Modern Tech Design with Ultra-Smooth Transition */}
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
        {/* Multi-stop background gradient for ultra-smooth transition */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" 
               style={{ 
                 background: 'linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(249, 250, 251) 8%, rgb(241, 245, 249) 16%, rgb(226, 232, 240) 24%, rgb(203, 213, 225) 32%, rgb(148, 163, 184) 40%, rgb(100, 116, 139) 50%, rgb(71, 85, 105) 60%, rgb(51, 65, 85) 70%, rgb(30, 41, 59) 82%, rgb(15, 23, 42) 100%)'
               }}></div>
        </div>

        {/* Tech pattern background with SVG gradient mask for smooth fade-in */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="techPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <g fill="none" fillRule="evenodd">
                  <g fill="#00a6ce" fillOpacity="1">
                    <path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/>
                  </g>
                </g>
              </pattern>
              
              {/* Smooth gradient mask that fades in from top */}
              <linearGradient id="fadeInGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="8%" stopColor="white" stopOpacity="0.05" />
                <stop offset="15%" stopColor="white" stopOpacity="0.15" />
                <stop offset="25%" stopColor="white" stopOpacity="0.4" />
                <stop offset="40%" stopColor="white" stopOpacity="0.7" />
                <stop offset="60%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
              
              <mask id="fadeInMask">
                <rect width="100%" height="100%" fill="url(#fadeInGradient)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#techPattern)" mask="url(#fadeInMask)" />
          </svg>
        </div>

        {/* Gradient overlay - fades in smoothly */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-600/5 to-primary-600/15"></div>
        </div>

        {/* Animated gradient orbs with smooth fade-in */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left side - Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Stay Updated
                </h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                  Get notified about Student Board opportunities, SheTech events, and exclusive tech programs for high school students.
                </p>
              </div>

              {/* Right side - Form */}
              <div className="w-full lg:w-auto lg:min-w-[500px]">
                <form className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 sm:min-w-[320px] bg-white/95 backdrop-blur-sm text-gray-900 placeholder:text-gray-500 border-white/20 shadow-lg px-4 py-2.5"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white border-0 font-semibold shadow-xl shadow-primary-500/30 whitespace-nowrap px-8"
                  >
                    Sign Up
                  </Button>
                </form>
                <p className="text-xs text-slate-400 mt-3 text-center sm:text-left">
                  Join 2,000+ students. Unsubscribe anytime.
                </p>
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

