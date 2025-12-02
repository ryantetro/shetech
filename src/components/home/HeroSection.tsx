import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const HeroSection = () => {
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/landingpage/hero.png"
                    alt="SheTech community"
                    fill
                    priority
                    className="object-cover"
                    quality={90}
                />
                {/* Dark gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50"></div>
            </div>

            {/* Subtle animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Heading */}
                    <AnimatedSection direction="up" delay={300} initialLoad={true}>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight text-white">
                            Empowering Girls
                            <br />
                            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                                in STEM
                            </span>
                        </h1>
                    </AnimatedSection>

                    {/* Description */}
                    <AnimatedSection direction="up" delay={500} initialLoad={true}>
                        <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                            SheTech helps girls recognize the opportunities they can pursue in{' '}
                            <span className="text-cyan-400 font-semibold">STEM education</span> and careers.
                        </p>
                    </AnimatedSection>

                    {/* CTA Buttons */}
                    <AnimatedSection direction="up" delay={700} initialLoad={true}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                            <Link
                                href="/students/explorer-day"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
                            >
                                Register for Explorer Day
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            <Link
                                href="/students/leadership-board"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300 text-lg"
                            >
                                Apply to Student Board
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </AnimatedSection>

                    {/* Trust Indicators */}
                    <AnimatedSection direction="fade" delay={900} initialLoad={true}>
                        <div className="flex flex-wrap justify-center items-center gap-4">
                            {[
                                { text: 'Free Registration', icon: '✨' },
                                { text: 'Grades 9-12', icon: '📚' },
                                { text: 'Hands-On Learning', icon: '💡' }
                            ].map((item, idx) => (
                                <div 
                                    key={idx} 
                                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-white/90"
                                >
                                    <span>{item.icon}</span>
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};
