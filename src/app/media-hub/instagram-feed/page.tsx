'use client';

import React from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, StickerHeader, GraphPaperBackground, Button } from '@/components/ui';

export default function InstagramFeedPage() {
  React.useEffect(() => {
    // Function to reload/process Instagram embeds with retry
    const processEmbeds = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      } else {
        // Retry if window.instgrm is not available yet
        setTimeout(processEmbeds, 500);
      }
    };

    // Check if script is already present
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = "//www.instagram.com/embed.js";
      script.onload = () => {
        // Initial process
        processEmbeds();
        // Fallback re-process to ensure it catches the dynamic content
        setTimeout(processEmbeds, 1000);
      };
      document.body.appendChild(script);
    } else {
      // If script exists, trigger process immediately and after a delay
      processEmbeds();
      setTimeout(processEmbeds, 500);
      setTimeout(processEmbeds, 1500); // multiple retries for safety
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-[#F5F5FA] overflow-hidden">
          <GraphPaperBackground />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text Content */}
              <div>
                <AnimatedSection direction="right" delay={0}>
                  <div className="mb-6 inline-block">
                    <StickerHeader label="@she.tech" title="Instagram Feed" angle={-2} variant="magenta" />
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#6E35B0] mb-6 leading-tight uppercase">
                    The Energy <br /> of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E35B0] to-purple-400">SheTech, Live.</span>
                  </h1>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                    Scroll through the moments that make SheTech unforgettable—from TechChallenge teamwork and mentor shoutouts to student selfies and live event coverage.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a href="https://www.instagram.com/she.tech/" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white hover:opacity-90 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide flex items-center gap-2"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        Follow @she.tech
                      </Button>
                    </a>
                  </div>

                  <div className="mt-8 space-y-4">
                    <p className="font-bold text-[#6E35B0] uppercase tracking-wide text-sm">Follow to see:</p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6E35B0]"></div>
                        Live highlights from Explorer Day
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6E35B0]"></div>
                        Student takeovers and STEM stories
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6E35B0]"></div>
                        Behind-the-scenes from mentors, workshops, and internships
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>

              {/* Hero Visual */}
              <div className="relative">
                <AnimatedSection direction="left" delay={200}>

                  <div className="relative group flex justify-center">
                    {/* Decorative Gradient Blob */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-[2rem] opacity-20 group-hover:opacity-40 blur-2xl transition duration-500 w-full max-w-[550px] mx-auto"></div>

                    {/* Main Container */}
                    <div className="relative bg-white rounded-[2.5rem] shadow-2xl p-2 border border-slate-100/50 w-full max-w-[550px] h-fit">
                      <div className="overflow-hidden rounded-[2rem] bg-white ring-1 ring-slate-100">
                        <blockquote
                          className="instagram-media"
                          data-instgrm-permalink="https://www.instagram.com/she.tech/?utm_source=ig_embed&amp;utm_campaign=loading"
                          data-instgrm-version="14"
                          style={{
                            background: "#FFF",
                            border: 0,
                            borderRadius: "3px",
                            boxShadow: "none",
                            margin: 0,
                            marginBottom: "-20px", // Pull up bottom whitespace
                            maxWidth: "540px",
                            minWidth: "326px",
                            padding: 0,
                            width: "calc(100% - 2px)"
                          }}
                        >
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
}
