'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, Button, StickerHeader, GraphPaperBackground } from '@/components/ui';

export default function LeadershipBoardPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSchool, setSelectedSchool] = useState('All Schools');

  // Helper function to animate numbers
  function useCountUp(end: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let startTime: number;
      let animationFrame: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        if (progress < 1) animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);
    return count;
  }

  const stat1 = useCountUp(100);
  const stat2 = useCountUp(56);
  const stat3 = useCountUp(2000);

  // Mock Data for Board Members
  const boardMembers = [
    { name: 'Sarah Jenkins', school: 'Alta High', role: 'President', grade: '12th' },
    { name: 'Maria Rodriguez', school: 'West High', role: 'Vice President', grade: '11th' },
    { name: 'Chloe Chen', school: 'Skyline High', role: 'Ambassador', grade: '12th' },
    { name: 'Emily Taylor', school: 'Davis High', role: 'Ambassador', grade: '11th' },
    { name: 'Aisha Patel', school: 'Hillcrest High', role: 'Secretary', grade: '12th' },
    { name: 'Jessica Wong', school: 'Bingham High', role: 'Ambassador', grade: '10th' },
    { name: 'Olivia Brown', school: 'Lone Peak', role: 'Tech Lead', grade: '12th' },
    { name: 'Sofia Garcia', school: 'Herriman High', role: 'Ambassador', grade: '11th' },
    { name: 'Ava Wilson', school: 'Brighton High', role: 'Event Coordinator', grade: '12th' },
    { name: 'Isabella Nguyen', school: 'Murray High', role: 'Ambassador', grade: '11th' },
    { name: 'Mia Johnson', school: 'Olympus High', role: 'Ambassador', grade: '10th' },
    { name: 'Charlotte Davis', school: 'East High', role: 'Social Media', grade: '12th' },
  ];

  const schools = ['All Schools', ...Array.from(new Set(boardMembers.map(m => m.school))).sort()];

  const filteredMembers = boardMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.school.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSchool = selectedSchool === 'All Schools' || member.school === selectedSchool;
    return matchesSearch && matchesSchool;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Navy Program Theme */}
        <section className="relative overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-[60vh] flex items-center bg-[#EBEBF5]">
          <GraphPaperBackground />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <AnimatedSection direction="right" delay={0} initialLoad>
                  <div className="mb-8 inline-block">
                    <StickerHeader label="High School" title="Student Board" angle={-1} variant="teal" />
                  </div>

                  <p className="text-lg sm:text-xl text-[#00008B] mb-8 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                    The SheTech Student Board is a group of high school leaders who help direct SheTech programs,
                    inspire peers, and gain exclusive mentorship from industry executives.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScXZ" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="bg-[#00A6CE] text-white hover:bg-[#0086a6] font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide"
                      >
                        Apply for Board
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Button>
                    </a>
                  </div>
                </AnimatedSection>
              </div>

              {/* Stats Card Cluster */}
              <div className="relative">
                <AnimatedSection direction="left" delay={200} initialLoad>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Stat 1 */}
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 transform translate-y-8">
                      <div className="text-4xl font-black text-[#00008B] mb-2">{stat1}+</div>
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Student Leaders</div>
                    </div>
                    {/* Stat 2 */}
                    <div className="bg-[#00008B] p-6 rounded-2xl shadow-xl transform -translate-y-4">
                      <div className="text-4xl font-black text-white mb-2">{stat2}</div>
                      <div className="text-sm font-bold text-white/80 uppercase tracking-wide">Partner Schools</div>
                    </div>
                    {/* Stat 3 */}
                    <div className="bg-[#BD1C81] p-6 rounded-2xl shadow-xl col-span-2 mx-8 text-center text-white">
                      <div className="text-4xl font-black mb-2">{stat3}+</div>
                      <div className="text-sm font-bold text-white/90 uppercase tracking-wide">Girls Impacted Annually</div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Board Members Directory */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 border-b border-slate-200 pb-6">
                <div>
                  <h2 className="text-3xl font-black text-[#00008B] uppercase mb-2">Current Board Members</h2>
                  <p className="text-slate-500 font-medium">Meet the students leading the way in STEM</p>
                </div>

                {/* Search & Filter */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="pl-10 w-full sm:w-64 bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                      placeholder="Search name or school..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <select
                    className="pl-4 pr-8 py-2 border-2 border-slate-200 rounded-lg focus:border-[#00008B] focus:ring-0 bg-white"
                    value={selectedSchool}
                    onChange={(e) => setSelectedSchool(e.target.value)}
                  >
                    {schools.map(school => (
                      <option key={school} value={school}>{school}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Members Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMembers.map((member, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-xl p-6 border-2 border-slate-100 hover:border-[#00008B] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#EBEBF5] flex items-center justify-center text-xl font-bold text-[#00008B]">
                        {member.name.charAt(0)}
                      </div>
                      <span className="px-3 py-1 bg-slate-100 text-[#00008B] text-xs font-bold uppercase tracking-wide rounded-full">
                        {member.role}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#00008B] mb-1 group-hover:text-[#BD1C81] transition-colors">{member.name}</h3>
                    <div className="flex items-center text-slate-500 text-sm mb-4 font-medium">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {member.school}
                    </div>
                    <div className="w-full h-1 bg-[#BD1C81] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                ))}
              </div>

              {filteredMembers.length === 0 && (
                <div className="text-center py-12 text-slate-400">
                  No board members found matching your search.
                </div>
              )}
            </AnimatedSection>
          </div>
        </section>

        {/* Newsletter Signup (Legacy Section, updated visually) */}
        <section className="py-16 bg-[#00008B]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-black text-white mb-4 uppercase">Stay Connected</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto font-medium">
              Join our newsletter to get updates on Student Board applications and other opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-[#BD1C81] bg-white text-gray-900 placeholder:text-gray-500"
              />
              <Button className="bg-[#00A6CE] hover:bg-[#0086a6] text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wide border-0 cursor-pointer">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
