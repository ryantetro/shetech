'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, Button, StickerHeader, GraphPaperBackground } from '@/components/ui';

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

export default function LeadershipBoardPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const stat1 = useCountUp(125);
  const stat2 = useCountUp(63);
  const stat3 = useCountUp(3500); // Updated to 3500+

  // 2026–2027 Student Board Data
  const boardData = [
    { school: "AMES", students: "Esmeralda" },
    { school: "Alta High School", students: "Brighton & Kaitlin" },
    { school: "American Academy of Innovation", students: "Abigail, Arianna & Elle" },
    { school: "American Fork High School", students: "Dawsey & Maren" },
    { school: "American Heritage", students: "Tallie" },
    { school: "American Preparatory Academy – Draper", students: "Aila" },
    { school: "American Preparatory Academy – West Valley", students: "Kimberly, Lisa & Lois" },
    { school: "Beehive Science & Technology Academy", students: "Aroma, Nur & Rayyan" },
    { school: "Bingham High School", students: "Manya" },
    { school: "Bountiful High School", students: "Jovianna" },
    { school: "Cedar Valley High School", students: "Alice & Makena" },
    { school: "Clearfield High School", students: "Victoria" },
    { school: "Copper Hills High School", students: "Akon & Alice" },
    { school: "Copper Mountain Middle School", students: "Adhieu" },
    { school: "Corner Canyon High School", students: "Anna & Ariana" },
    { school: "Cottonwood High School", students: "Adriana & Krystal" },
    { school: "Cyprus High School", students: "Aspasia & Sbeidy" },
    { school: "Deer Creek High School", students: "Lily" },
    { school: "Frontier Middle School", students: "Abigail & Adelyn" },
    { school: "Granger High School", students: "Hamda, Sarinna & Sooniyeh" },
    { school: "Grantsville High School", students: "Caroline" },
    { school: "Green Canyon High School", students: "Alyssa" },
    { school: "Gunnison Valley High School", students: "Renesmee" },
    { school: "Herriman High School", students: "Anyier, Chanelle, Eluney & Rylin" },
    { school: "Hillcrest High School", students: "Capella, Jaswitha, Joshitha, Shanvitha & Tallulah" },
    { school: "Hunter High School", students: "Milo" },
    { school: "Iqra Academy of Utah", students: "Ansharah & Sara" },
    { school: "Itineris Early College High School", students: "Chandy, Daisy & Francesca" },
    { school: "Jordan High School", students: "Yanelly" },
    { school: "Juan Diego Catholic High School", students: "Ria, Shawna & Violette-Reine" },
    { school: "Karl Maeser Preparatory Academy", students: "Jeannie, Lexey & Lucciana" },
    { school: "Lone Peak High School", students: "Abby, Emma, Harriet & Livvy" },
    { school: "Merit Academy", students: "Jamie" },
    { school: "Mountain Ridge High School", students: "Sydney" },
    { school: "Mountain View High School", students: "Amy & Kaylee" },
    { school: "Murray High School", students: "Dorothy, Jennifer & Josephine" },
    { school: "NUAMES – Davis High School", students: "Gloria, Huda & Makena" },
    { school: "Ogden High School", students: "Kiera" },
    { school: "Olympus High School", students: "Daphne, Leah & Vivienne" },
    { school: "Orem High School", students: "Charlotte & June" },
    { school: "Park City High School", students: "Brooklyn" },
    { school: "Pleasant Grove High School", students: "Eliana & Kale" },
    { school: "Riverton High School", students: "Alexandria, Ella & Lily" },
    { school: "Rowland Hall", students: "Josey & June" },
    { school: "Salt Lake Center for Science Education", students: "Artiola" },
    { school: "Skyline High School", students: "Aditi & Emilie" },
    { school: "Skyridge High School", students: "Mary & Reynalda" },
    { school: "Stansbury High School", students: "Audree & Layla" },
    { school: "Syracuse High School", students: "Emery" },
    { school: "Syracuse Junior High School", students: "Malynn" },
    { school: "Taylorsville High School", students: "Alyzabeth, Kennedi & Lynny" },
    { school: "Timpanogos High School", students: "Eleanor & Paisley" },
    { school: "Timpview High School", students: "Hailey & Jill" },
    { school: "Tooele High School", students: "Lily" },
    { school: "Utah Connections Academy", students: "Raiha" },
    { school: "Utah County Academy of Science", students: "Jamie, Kennedy & Lucciana" },
    { school: "Utah International Charter School", students: "Bibi, Born, Rahma, Zainab & Zakia" },
    { school: "Wasatch High School", students: "Lily & Maile" },
    { school: "Waterford High School", students: "Lila" },
    { school: "West High School", students: "Agatha, Shruthi, Vaishnavi & Yoon" },
    { school: "West Jordan High School", students: "Brinlee" },
    { school: "Westlake High School", students: "Disney & Sierra" },
    { school: "Woods Cross High School", students: "Natalia" }
  ];

  const filteredData = boardData.filter(item =>
    item.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.students.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                  <a href="https://forms.gle/weqAMnLBKTeLwg32A" target="_blank" rel="noopener noreferrer">
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

        {/* Board Members Directory - PILL DESIGN */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-black text-[#00008B] uppercase mb-4">2026–2027 Student Board</h2>
                <div className="w-full max-w-md mx-auto relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="pl-10 w-full bg-slate-50 border border-slate-200 rounded-full px-6 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#00008B] focus:ring-2 focus:ring-[#00008B]/20 transition-all outline-none"
                    placeholder="Find your school..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Members Pill Cloud */}
              <div className="flex flex-wrap gap-3 justify-center max-w-6xl mx-auto">
                {filteredData.map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center px-5 py-2.5 bg-white rounded-full border border-slate-200 shadow-sm hover:border-[#00A6CE] hover:shadow-md transition-all duration-300 group cursor-default select-none"
                  >
                    <span className="font-bold text-[#00008B] mr-2 group-hover:text-[#00A6CE] transition-colors">
                      {item.school}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-slate-300 mr-2"></div>
                    <span className="text-slate-600 font-medium text-sm">
                      {item.students}
                    </span>
                  </div>
                ))}

                {filteredData.length === 0 && (
                  <div className="text-slate-400 py-10">No matches found.</div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Newsletter Signup */}
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
                className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-[#BD1C81] bg-white text-gray-900 placeholder:text-gray-500 outline-none"
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
