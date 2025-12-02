'use client';

import { Header, Footer } from '@/components/layout';
import { AnimatedSection, Button, Input } from '@/components/ui';
import { useState, useEffect, useRef } from 'react';

// Pre-calculate constellation positions for stable rendering
const constellationNodes = [...Array(20)].map((_, i) => ({
  x: (i * 17) % 100,
  y: (i * 23) % 100,
  size: 3 + (i % 3),
  delay: i * 0.2,
}));

// Pre-calculate floating elements
const floatingElements = [...Array(8)].map((_, i) => ({
  left: 10 + (i * 12),
  top: 15 + ((i * 13) % 70),
  size: 40 + (i % 3) * 20,
  duration: 6 + (i % 4),
  delay: i * 0.5,
}));

// Hook for counting animation with shared ref
function useCountUpOnView(endValues: number[], duration: number = 2000) {
  const [counts, setCounts] = useState<number[]>(endValues.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const endValuesRef = useRef(endValues);

  // Update ref when endValues change
  useEffect(() => {
    endValuesRef.current = endValues;
  }, [endValues]);

  useEffect(() => {
    if (hasStarted) return;

    const currentRef = containerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quart for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const newCounts = endValuesRef.current.map((end) => {
        return Math.floor(easeOutQuart * end);
      });

      setCounts(newCounts);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [hasStarted, duration]);

  return { counts, containerRef };
}

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

  const totalMembers = schoolBoardMembers.reduce((acc, s) => acc + s.members.length, 0);

  // Animated counters with shared ref
  const { counts, containerRef } = useCountUpOnView(
    [schoolBoardMembers.length, totalMembers, 365],
    2000
  );

  const filteredSchools = schoolBoardMembers.filter(
    (school) =>
      school.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.members.some((member) =>
        member.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Leadership Network Design */}
        <section className="relative overflow-hidden pt-16 sm:pt-20 pb-12 sm:pb-16 min-h-[calc(100vh-80px)] flex items-center">
          {/* Dark gradient background with purple/indigo tones for leadership theme */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900"></div>
          </div>
          
          {/* Constellation Network Pattern - Representing connected student leaders */}
          <div className="absolute inset-0 opacity-40">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="leaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00a6ce" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#bd1c81" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Connection lines between nodes */}
              {constellationNodes.map((node, i) => (
                i < constellationNodes.length - 1 && (
                  <line
                    key={`line-${i}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${constellationNodes[i + 1].x}%`}
                    y2={`${constellationNodes[i + 1].y}%`}
                    stroke="url(#leaderGradient)"
                    strokeWidth="1"
                    opacity="0.3"
                    className="animate-pulse"
                    style={{ animationDelay: `${node.delay}s` }}
                  />
                )
              ))}
              
              {/* Star/node points */}
              {constellationNodes.map((node, i) => (
                <g key={`node-${i}`}>
                  <circle
                    cx={`${node.x}%`}
                    cy={`${node.y}%`}
                    r={node.size}
                    fill="url(#leaderGradient)"
                    filter="url(#glow)"
                    className="animate-pulse"
                    style={{ animationDelay: `${node.delay}s` }}
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* Hexagonal Leadership Grid */}
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="leaderHex" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                  <path d="M50 0 L100 25 L100 62 L50 87 L0 62 L0 25 Z" fill="none" stroke="#8b5cf6" strokeWidth="0.5"/>
                  <circle cx="50" cy="43" r="2" fill="#00a6ce" opacity="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#leaderHex)" />
            </svg>
          </div>

          {/* Floating Leadership Icons */}
          <div className="absolute inset-0 pointer-events-none">
            {floatingElements.map((el, i) => (
              <div
                key={i}
                className="absolute opacity-20"
                style={{
                  left: `${el.left}%`,
                  top: `${el.top}%`,
                  width: `${el.size}px`,
                  height: `${el.size}px`,
                  animation: `float ${el.duration}s ease-in-out infinite`,
                  animationDelay: `${el.delay}s`,
                }}
              >
                {i % 4 === 0 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00a6ce" strokeWidth="1.5" className="w-full h-full">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                )}
                {i % 4 === 1 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" className="w-full h-full">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )}
                {i % 4 === 2 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#bd1c81" strokeWidth="1.5" className="w-full h-full">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                )}
                {i % 4 === 3 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00a6ce" strokeWidth="1.5" className="w-full h-full">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Column - Main Content */}
                <div className="text-center lg:text-left">
                  <AnimatedSection direction="left" delay={0} initialLoad>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                      2025–2026 School Year
                </div>

                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                      <span className="block text-white mb-1">SheTech</span>
                      <span className="block bg-gradient-to-r from-violet-400 via-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  Student Board
                      </span>
                </h1>
                
                    {/* Description */}
                    <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
                      Lead the movement. Shape the future. Join a network of ambitious student leaders driving STEM opportunities across Utah schools.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                      <Button 
                        className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl bg-gradient-to-r from-violet-500 to-violet-600 text-white hover:from-violet-400 hover:to-violet-500 shadow-xl shadow-violet-500/30 transition-all duration-300 hover:scale-105 cursor-pointer border-0"
                      >
                        Apply to Join Board
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Button>
                      <a
                        href="#board-members"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                      >
                        View All Leaders
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                    </div>

                    {/* Quick Stats Row */}
                    <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-violet-500/20 backdrop-blur-sm border border-violet-500/30 flex items-center justify-center">
                          <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">{schoolBoardMembers.length}+</div>
                          <div className="text-xs text-white/60">Schools</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">{totalMembers}+</div>
                          <div className="text-xs text-white/60">Leaders</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-secondary-500/20 backdrop-blur-sm border border-secondary-500/30 flex items-center justify-center">
                          <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </div>
                        <div>
                          <div className="text-lg font-bold text-white">Year-Round</div>
                          <div className="text-xs text-white/60">Active</div>
                      </div>
                  </div>
                </div>
              </AnimatedSection>
                </div>

                {/* Right Column - Stats Dashboard Card */}
                <div className="relative">
                  <AnimatedSection direction="right" delay={200} initialLoad>
                    <div className="relative">
                      {/* Main Dashboard Card */}
                      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl">
                        {/* Card Header */}
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-violet-500"></div>
                            <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                            <div className="w-3 h-3 rounded-full bg-secondary-500"></div>
                          </div>
                          <span className="text-white/60 text-sm font-medium">Leadership Dashboard</span>
                        </div>

                        {/* Stats Grid */}
                        <div ref={containerRef} className="grid grid-cols-1 gap-4 mb-6">
                          {/* Schools Stat */}
                          <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-violet-500/50 transition-colors">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-white/60 text-sm">Partner Schools</span>
                              <span className="text-violet-400 text-xs font-medium">+12% this year</span>
                            </div>
                            <div className="flex items-end gap-2">
                              <span className="text-4xl font-black text-violet-400">{counts[0]}</span>
                              <span className="text-white/40 text-sm mb-1">schools</span>
                            </div>
                            <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-violet-500 to-violet-400 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                          </div>

                          {/* Leaders Stat */}
                          <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-primary-500/50 transition-colors">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-white/60 text-sm">Active Leaders</span>
                              <span className="text-primary-400 text-xs font-medium">Growing network</span>
                            </div>
                            <div className="flex items-end gap-2">
                              <span className="text-4xl font-black text-primary-400">{counts[1]}</span>
                              <span className="text-white/40 text-sm mb-1">students</span>
                            </div>
                            <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full" style={{ width: '92%' }}></div>
                            </div>
                          </div>

                          {/* Days Active Stat */}
                          <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-secondary-500/50 transition-colors">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-white/60 text-sm">Days Active</span>
                              <span className="text-secondary-400 text-xs font-medium">Year-round program</span>
                            </div>
                            <div className="flex items-end gap-2">
                              <span className="text-4xl font-black text-secondary-400">{counts[2]}</span>
                              <span className="text-white/40 text-sm mb-1">days/year</span>
                            </div>
                            <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-secondary-500 to-secondary-400 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>

                        {/* About Section */}
                        <div className="bg-gradient-to-r from-violet-500/10 to-primary-500/10 rounded-xl p-4 border border-white/10">
                          <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                            <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            About the Board
                        </h3>
                          <p className="text-white/70 text-sm leading-relaxed">
                            Student Board members provide strategic input, act as school ambassadors, operate clubs, and help run Explorer Day throughout the school year.
                        </p>
                        </div>
                      </div>

                      {/* Decorative floating elements */}
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-violet-500/20 backdrop-blur-sm rounded-xl border border-violet-500/30 flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
                        <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-primary-500/20 backdrop-blur-sm rounded-lg border border-primary-500/30 flex items-center justify-center animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                        <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
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
                transform: translateY(-20px) rotate(5deg);
              }
            }
          `}</style>
        </section>

        {/* Board Members Section */}
        <section id="board-members" className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="fade" delay={0}>
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                  2025–2026 Student Board
                </h2>
                <p className="text-lg text-gray-600">
                  {totalMembers} student leaders representing {schoolBoardMembers.length} schools
                </p>
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search by school or student name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-4 text-base border rounded-lg transition-colors"
                    style={{ borderColor: '#D1D5DB' }}
                    onFocus={(e) => e.target.style.borderColor = '#7AB8B8'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
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
                  <p className="text-sm text-gray-500 mt-3 text-center">
                    Found {filteredSchools.length} school{filteredSchools.length !== 1 ? 's' : ''}
                  </p>
                )}
              </div>

              {/* Schools Grid - Simple & Clean */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                {filteredSchools.map((school, index) => (
                  <AnimatedSection key={index} direction="up" delay={index * 20}>
                    <div 
                      className="bg-white border rounded-lg p-5 transition-colors"
                      style={{ borderColor: '#E5E7EB' }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#7AB8B8'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
                    >
                      <h3 className="font-semibold text-gray-900 text-base mb-3 leading-tight">
                        {school.school}
                      </h3>
                      <div className="text-sm text-gray-600 leading-relaxed">
                        {school.members.map((member, idx) => (
                          <span key={idx}>
                            {member}
                            {idx < school.members.length - 1 && (
                              <span className="text-gray-400 mx-1">•</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {filteredSchools.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-gray-300 mb-4">
                    <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-xl font-medium">No schools or members found matching &quot;{searchTerm}&quot;</p>
                  <p className="text-gray-400 text-sm mt-2">Try a different search term</p>
                </div>
              )}
            </AnimatedSection>
          </div>
        </section>

        {/* Newsletter Section - Compact Banner */}
        <section className="relative py-8 sm:py-10 bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                {/* Text */}
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">
                      Stay Updated
                    </h3>
                  <p className="text-sm text-white/60">
                    Get notified about Student Board opportunities and events.
                    </p>
                  </div>

                {/* Form */}
                <form className="flex gap-2 w-full sm:w-auto">
                    <Input
                      type="email"
                    placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    className="w-full sm:w-64 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/50 focus:border-violet-500/50 transition-all"
                    />
                    <Button
                      type="submit"
                    className="bg-violet-500 hover:bg-violet-400 text-white border-0 font-medium whitespace-nowrap px-5 py-2 rounded-lg text-sm transition-all cursor-pointer"
                    >
                      Sign Up
                    </Button>
                  </form>
                </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
