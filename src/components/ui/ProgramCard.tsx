import React from 'react';
import { cn } from '@/lib/utils/cn';
import { Button } from './Button';
import { Card } from './Card';

export interface ProgramCardProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  icon?: React.ReactNode;
  className?: string;
}

/**
 * Reusable Program Card component for displaying program information
 */
export const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  ctaText,
  ctaHref,
  icon,
  className,
}) => {
  return (
    <Card
      variant="elevated"
      padding="lg"
      className={cn(
        'group hover:shadow-xl transition-all duration-500 ease-out',
        'hover:-translate-y-2 hover:scale-[1.02]',
        className
      )}
    >
      {icon && (
        <div className="mb-4 text-primary-500 group-hover:text-primary-600 transition-colors">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-3">
        {description}
      </p>
      {ctaText && ctaHref ? (
        <a href={ctaHref} className="inline-block">
          <Button
            variant="primary"
            size="sm"
            className="w-full sm:w-auto"
          >
            {ctaText}
          </Button>
        </a>
      ) : ctaText ? (
        <Button
          variant="primary"
          size="sm"
          className="w-full sm:w-auto"
        >
          {ctaText}
        </Button>
      ) : null}
    </Card>
  );
};

