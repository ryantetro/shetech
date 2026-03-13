import React from 'react';
import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const ExplorerDaySection = () => {
    return (
        <section id="explorer-day" className="relative py-20 sm:py-24 bg-[#BD1C81] overflow-hidden text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Header with Logo */}
                    <AnimatedSection direction="down" delay={0}>
                        <div className="flex flex-col items-center justify-center mb-8">
                            <div className="text-white/80 font-bold tracking-widest uppercase mb-4 text-sm sm:text-base">
                                Explorer Day
                            </div>
                            <div className="relative w-64 sm:w-80 h-20 mb-6">
                                <Image
                                    src="/shetech-assets/Shetech logo White.svg"
                                    alt="SheTech Explorer Day"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wide">
                                Feb 2027 <span className="mx-2 text-white/60">/</span> 9-1<sup className="text-xl sm:text-2xl">PM</sup> <span className="mx-2 text-white/60">/</span> Sandy
                            </h2>
                        </div>
                    </AnimatedSection>

                    {/* Description */}
                    <AnimatedSection direction="up" delay={100}>
                        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-16 font-medium">
                            SheTech Explorer Day is a hands-on tech conference for high school girls designed to spark interest in STEM
                            through interactive workshops and real-world challenges. Girls explore fields like robotics, coding, digital
                            media, and health sciences while engaging with industry mentors and inspiring female role models.
                        </p>
                    </AnimatedSection>

                    {/* Icons Row */}
                    <AnimatedSection direction="up" delay={200}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 border-t border-white/20 pt-12">
                            {[
                                {
                                    icon: "/shetech-assets/int workshop icon.svg",
                                    title: "Interactive Workshops",
                                    desc: "Hands-on learning experiences in cutting-edge technologies"
                                },
                                {
                                    icon: "/shetech-assets/mentors icon.svg",
                                    title: "Industry Mentors",
                                    desc: "Connect with professionals leading innovation in tech"
                                },
                                {
                                    icon: "/shetech-assets/role models icon.svg",
                                    title: "Female Role Models",
                                    desc: "Learn from inspiring women who are shaping the future"
                                },
                                {
                                    icon: "/shetech-assets/challenges icon.svg",
                                    title: "Real-World Challenges",
                                    desc: "Solve actual problems faced by tech companies"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors duration-300">
                                        <div className="relative w-10 h-10">
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                fill
                                                className="object-contain brightness-0 invert"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">{item.title}</h3>
                                    <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Benefits List */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-12 text-sm sm:text-base font-bold mb-10 text-white">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Multiple workshop sessions
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Networking opportunities
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Swag & Giveaway
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
