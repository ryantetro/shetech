import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

type Benefit = {
    text: string;
    color: string;
};

type Program = {
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    icon: React.ReactNode;
    benefits: Benefit[];
};

const PROGRAMS_DATA: Program[] = [
    {
        title: 'Explorer Day',
        description: 'A hands-on tech conference for high school girls designed to spark interest in STEM through interactive workshops, tech challenges, and connections with industry professionals.',
        ctaText: 'Register Now',
        ctaHref: '/students/explorer-day',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        benefits: [
            { text: 'Interactive workshops', color: 'bg-yellow-50 border-yellow-200 text-yellow-800' },
            { text: 'Tech Challenge competition', color: 'bg-green-50 border-green-200 text-green-800' },
            { text: 'Meet industry professionals', color: 'bg-blue-50 border-blue-200 text-blue-800' },
            { text: 'Free for all students', color: 'bg-purple-50 border-purple-200 text-purple-800' },
        ],
    },
    {
        title: 'Student Board',
        description: 'Join the SheTech Student Board and help shape programs for girls in STEM. Develop leadership skills, plan events, and make a real impact in your school community.',
        ctaText: 'Apply Now',
        ctaHref: '/students/leadership-board',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        benefits: [
            { text: 'Leadership development', color: 'bg-cyan-50 border-cyan-200 text-cyan-800' },
            { text: 'Event planning experience', color: 'bg-pink-50 border-pink-200 text-pink-800' },
            { text: 'Network with peers', color: 'bg-indigo-50 border-indigo-200 text-indigo-800' },
            { text: 'College application boost', color: 'bg-amber-50 border-amber-200 text-amber-800' },
        ],
    },
    {
        title: 'Media Internship',
        description: 'Get hands-on journalism experience promoting women in technology. Develop skills in writing, interviews, video production, and multimedia content creation with TechBuzz.',
        ctaText: 'Learn More',
        ctaHref: '/students/media-internship',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        benefits: [
            { text: 'Video production skills', color: 'bg-rose-50 border-rose-200 text-rose-800' },
            { text: 'Interview experience', color: 'bg-teal-50 border-teal-200 text-teal-800' },
            { text: 'Build your portfolio', color: 'bg-orange-50 border-orange-200 text-orange-800' },
            { text: 'Social media marketing', color: 'bg-violet-50 border-violet-200 text-violet-800' },
        ],
    },
    {
        title: 'Thanksgiving Point Internship',
        description: 'Hands-on experience in agriculture technology, entomology, exhibit design, STEM education, and more at Thanksgiving Point museums and gardens.',
        ctaText: 'Apply Now',
        ctaHref: '/students/thanksgiving-point-internship',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        benefits: [
            { text: 'Ag-tech exploration', color: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
            { text: 'Museum exhibit design', color: 'bg-sky-50 border-sky-200 text-sky-800' },
            { text: 'STEM education training', color: 'bg-lime-50 border-lime-200 text-lime-800' },
            { text: 'Hands-on research', color: 'bg-fuchsia-50 border-fuchsia-200 text-fuchsia-800' },
        ],
    },
    {
        title: 'Summer Exploration Internship',
        description: 'Get an inside look at real tech companies. Tour multiple companies, meet women in the field, and explore careers in programming, data science, engineering, and more.',
        ctaText: 'Apply Now',
        ctaHref: '/students/summer-internship',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
        ),
        benefits: [
            { text: 'Company tours', color: 'bg-blue-50 border-blue-200 text-blue-800' },
            { text: 'Career exploration', color: 'bg-green-50 border-green-200 text-green-800' },
            { text: 'Women mentor connections', color: 'bg-purple-50 border-purple-200 text-purple-800' },
            { text: 'Industry networking', color: 'bg-yellow-50 border-yellow-200 text-yellow-800' },
        ],
    },
];

export const ProgramsSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedProgram = PROGRAMS_DATA[selectedIndex];

    return (
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
            {/* Graph Paper Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-100"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatedSection direction="fade" delay={0}>
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-100 border-2 border-yellow-200 rounded-full mb-4 shadow-sticker transform -rotate-2">
                            <span className="text-sm font-bold text-yellow-800 uppercase tracking-wide">Year-Round Programs</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
                            Explore SheTech, <span className="text-highlight text-highlight-primary">All Year Long</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                            SheTech provides monthly events and opportunities for young women to learn and discover how their dreams can be realized in tech.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={100}>
                    <div className="max-w-6xl mx-auto">
                        {/* Mobile: Horizontal scrolling tabs */}
                        <div className="lg:hidden mb-4">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-1">
                                Select a Program
                            </p>
                            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                {PROGRAMS_DATA.map((program, index) => (
                                    <button
                                        key={program.title}
                                        onClick={() => setSelectedIndex(index)}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full border-2 whitespace-nowrap transition-all duration-200 shrink-0 ${
                                            selectedIndex === index
                                                ? 'bg-primary-500 border-primary-600 text-white shadow-md'
                                                : 'bg-white border-slate-200 text-slate-600 hover:border-primary-300'
                                        }`}
                                    >
                                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                            selectedIndex === index
                                                ? 'bg-white/20 text-white'
                                                : 'bg-slate-100 text-slate-500'
                                        }`}>
                                            {index + 1}
                                        </span>
                                        <span className="font-semibold text-sm">{program.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-0">
                            {/* Left Column - File Folder Tabs (Desktop only) */}
                            <div className="hidden lg:flex lg:col-span-4 flex-col pr-0 lg:-mr-px z-10">
                                <div className="bg-slate-100 rounded-l-xl border-2 border-slate-300 border-r-0 p-4 h-full">
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-2">
                                        Select a Program
                                    </p>
                                    <div className="space-y-2">
                                        {PROGRAMS_DATA.map((program, index) => (
                                            <button
                                                key={program.title}
                                                onClick={() => setSelectedIndex(index)}
                                                className={`w-full text-left transition-all duration-200 relative group ${selectedIndex === index
                                                    ? 'z-20'
                                                    : 'z-0 hover:bg-slate-200/50'
                                                    }`}
                                            >
                                                <div className={`
                                                    flex items-center gap-3 p-4 rounded-l-lg border-2 
                                                    ${selectedIndex === index
                                                        ? 'bg-white border-slate-300 border-r-0 w-[calc(100%+2px)]'
                                                        : 'border-transparent opacity-70 hover:opacity-100'
                                                    }
                                                `}>
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 ${selectedIndex === index
                                                        ? 'bg-primary-100 border-primary-200 text-primary-600'
                                                        : 'bg-white border-slate-200 text-slate-400'
                                                        }`}>
                                                        <span className="text-xs font-bold">{index + 1}</span>
                                                    </div>
                                                    <span className={`font-bold text-sm ${selectedIndex === index ? 'text-slate-900' : 'text-slate-600'}`}>
                                                        {program.title}
                                                    </span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Notebook Content */}
                            <div className="lg:col-span-8">
                                <AnimatedSection direction="fade" delay={0} key={selectedIndex}>
                                    <div className="bg-white border-2 border-slate-300 rounded-xl lg:rounded-l-none lg:rounded-r-xl shadow-sticker h-full relative overflow-hidden">
                                        {/* Notebook Lines Background */}
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px)',
                                            backgroundSize: '100% 2rem',
                                            marginTop: '2rem'
                                        }}></div>

                                        {/* Red Margin Line */}
                                        <div className="absolute top-0 bottom-0 left-4 sm:left-8 w-px bg-red-200"></div>

                                        <div className="relative p-5 pl-8 sm:p-8 sm:pl-12">
                                            {/* Header */}
                                            <div className="flex items-start justify-between gap-4 mb-6">
                                                <div className="flex-1 min-w-0">
                                                    <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-bold rounded-full mb-2 border border-primary-200">
                                                        PROGRAM FILE #{String(selectedIndex + 1).padStart(2, '0')}
                                                    </div>
                                                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                                                        {selectedProgram.title}
                                                    </h3>
                                                </div>
                                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center text-primary-500 shadow-sm transform rotate-3 shrink-0">
                                                    <div className="w-6 h-6 sm:w-8 sm:h-8">
                                                        {selectedProgram.icon}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="prose prose-slate max-w-none mb-6">
                                                <p className="text-base sm:text-lg text-slate-700 leading-7 sm:leading-8 font-medium">
                                                    {selectedProgram.description}
                                                </p>
                                            </div>

                                            {/* Benefits - Sticky Notes (Now unique per program) */}
                                            <div className="grid grid-cols-2 gap-3 mb-6">
                                                {selectedProgram.benefits.map((benefit, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`p-2.5 sm:p-3 rounded-lg border-2 ${benefit.color} text-xs sm:text-sm font-bold shadow-sm`}
                                                    >
                                                        {benefit.text}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* CTA */}
                                            <Link 
                                                href={selectedProgram.ctaHref}
                                                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                                            >
                                                {selectedProgram.ctaText}
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};
