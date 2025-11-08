import React from 'react';
import { cn } from '@/lib/utils/cn';
import { Card } from './Card';

export interface VideoCardProps {
  title: string;
  videoId: string;
  description?: string;
  className?: string;
}

/**
 * Reusable Video Card component for embedding YouTube videos
 */
export const VideoCard: React.FC<VideoCardProps> = ({
  title,
  videoId,
  description,
  className,
}) => {
  return (
    <Card
      variant="elevated"
      padding="none"
      className={cn(
        'overflow-hidden group hover:shadow-2xl transition-all duration-500 ease-out',
        'hover:-translate-y-3 hover:scale-[1.02] border-2 border-transparent hover:border-primary-200',
        'bg-white rounded-2xl',
        className
      )}
    >
      <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full relative z-10"
        />
        
        {/* Play button overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-all duration-500 z-20 pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      {(title || description) && (
        <div className="p-6 sm:p-7 bg-white">
          {title && (
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight group-hover:text-primary-600 transition-colors duration-300">
                {title}
              </h3>
            </div>
          )}
          {description && (
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-[52px]">
              {description}
            </p>
          )}
        </div>
      )}
    </Card>
  );
};

