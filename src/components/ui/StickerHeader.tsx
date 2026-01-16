import React from 'react';

type StickerHeaderProps = {
    label: string;
    title: string;
    className?: string;
    angle?: number;
    variant?: 'navy' | 'magenta' | 'teal' | 'blue';
};

export const StickerHeader = ({
    label,
    title,
    className = '',
    angle = -2,
    variant = 'navy'
}: StickerHeaderProps) => {
    const colors = {
        navy: {
            bg: 'bg-[#00008B]',
            shadow: 'bg-[#000080]',
            text: 'text-white',
            label: 'text-white/90'
        },
        magenta: {
            bg: 'bg-[#BD1C81]',
            shadow: 'bg-[#991769]',
            text: 'text-white',
            label: 'text-white/90'
        },
        teal: {
            bg: 'bg-[#00A6CE]',
            shadow: 'bg-[#0086a6]',
            text: 'text-white',
            label: 'text-white/90'
        },
        blue: {
            bg: 'bg-[#0064BA]',
            shadow: 'bg-[#004e93]',
            text: 'text-white',
            label: 'text-white/90'
        }
    };

    const theme = colors[variant];

    return (
        <div className={`relative inline-block transform ${className}`} style={{ rotate: `${angle}deg` }}>
            {/* Shadow Layer */}
            <div
                className={`absolute inset-0 ${theme.shadow} transform translate-y-1 translate-x-1`}
                style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)' }}
            ></div>

            {/* Content Layer */}
            <div
                className={`relative ${theme.bg} ${theme.text} px-8 py-4 pb-8 transition-colors duration-300`}
                style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)' }}
            >
                <span className={`text-xl sm:text-2xl font-black uppercase tracking-wider block text-center ${theme.label}`}>
                    {label}
                </span>
                <div className="text-3xl sm:text-4xl font-black uppercase leading-none mt-1 text-center">
                    {title}
                </div>
            </div>
        </div>
    );
};
