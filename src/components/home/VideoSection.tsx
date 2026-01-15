import React from 'react';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const VideoSection = () => {
    const videos = [
        {
            id: 'PTgh-OpZpTs',
            title: 'SheTech Success Stories',
            description: 'Discover how SheTech is empowering young women in STEM',
        },
        {
            id: 'i4G_FJjQLGA',
            title: 'SheTech Impact & Community',
            description: 'Explore the incredible impact we\'re making in STEM education',
        },
    ];

    return (
        <section className="relative py-20 sm:py-24 bg-[#00A6CE] overflow-hidden text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <AnimatedSection direction="down" delay={0}>
                    <div className="text-center mb-16 sm:mb-20">
                        <h2 className="text-4xl sm:text-6xl font-black text-white mb-4 tracking-tight uppercase">
                            SheTech <span className="text-white/80">IN ACTION</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-bold">
                            Watch how we're transforming lives through technology education
                        </p>
                    </div>
                </AnimatedSection>

                {/* Video Grid */}
                <div className="max-w-6xl mx-auto mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {videos.map((video, index) => (
                            <AnimatedSection key={video.id} direction="up" delay={100 + (index * 100)}>
                                <div className="group">
                                    {/* Video Container */}
                                    <div className="relative aspect-video bg-black/20 rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 hover:border-white transition-all duration-300">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.id}`}
                                            title={video.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full"
                                        />
                                    </div>

                                    {/* Video Title Link */}
                                    <div className="mt-5 text-center">
                                        <Link
                                            href="#"
                                            className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold uppercase tracking-wide text-white hover:text-white/80 transition-colors"
                                        >
                                            {video.title.toUpperCase()}
                                        </Link>
                                        <p className="text-sm text-white/70 mt-1">{video.description}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
