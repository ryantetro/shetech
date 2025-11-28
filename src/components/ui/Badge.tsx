import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'outline' | 'default';
    size?: 'sm' | 'md' | 'lg';
    withDot?: boolean;
    pulsing?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    className,
    variant = 'default',
    size = 'md',
    withDot = false,
    pulsing = false,
    ...props
}) => {
    const variants = {
        default: 'bg-gray-100 text-gray-800 border-gray-200',
        primary: 'bg-primary-50 text-primary-700 border-primary-200',
        secondary: 'bg-secondary-50 text-secondary-700 border-secondary-200',
        tertiary: 'bg-tertiary-50 text-tertiary-700 border-tertiary-200',
        success: 'bg-success-50 text-success-700 border-success-200',
        warning: 'bg-warning-50 text-warning-700 border-warning-200',
        error: 'bg-error-50 text-error-700 border-error-200',
        outline: 'bg-transparent text-gray-700 border-gray-300',
    };

    const sizes = {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-xs px-2.5 py-0.5',
        lg: 'text-sm px-3 py-1',
    };

    const dotColors = {
        default: 'bg-gray-500',
        primary: 'bg-primary-500',
        secondary: 'bg-secondary-500',
        tertiary: 'bg-tertiary-500',
        success: 'bg-success-500',
        warning: 'bg-warning-500',
        error: 'bg-error-500',
        outline: 'bg-gray-500',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center gap-1.5 rounded-full font-medium border',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {withDot && (
                <span
                    className={cn(
                        'w-1.5 h-1.5 rounded-full',
                        dotColors[variant],
                        pulsing && 'animate-pulse'
                    )}
                />
            )}
            {children}
        </span>
    );
};
