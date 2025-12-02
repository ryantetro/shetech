import React from 'react';
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
        <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,166,206,0.04),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(189,28,129,0.04),transparent_50%)]"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <AnimatedSection direction="fade" delay={0}>
                    <div className="text-center mb-16 sm:mb-20">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                            See SheTech <span className="text-secondary-600">in Action</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Watch how we're transforming lives through technology education
                        </p>
                    </div>
                </AnimatedSection>

                {/* Video Grid - Clean & Modern */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        {videos.map((video, index) => (
                            <AnimatedSection key={video.id} direction="up" delay={100 + (index * 100)}>
                                <div className="group relative">
                                    {/* Video Container - Clean & Minimal */}
                                    <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.id}`}
                                            title={video.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full"
                                        />
                                        
                                        {/* Subtle gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                    </div>

                                    {/* Title - Minimal & Clean */}
                                    <div className="mt-6 text-center">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                                            {video.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                            {video.description}
                                        </p>
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
