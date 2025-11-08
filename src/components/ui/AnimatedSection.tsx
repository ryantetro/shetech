'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils/cn';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  initialLoad?: boolean;
}

/**
 * Animated section component that animates on scroll and page load
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  initialLoad = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If initialLoad is true, animate immediately on mount
    if (initialLoad) {
      // Use requestAnimationFrame for smoother animation start
      let timer: NodeJS.Timeout;
      const rafId = requestAnimationFrame(() => {
        // Small delay to allow page to render first
        timer = setTimeout(() => {
          setIsVisible(true);
          setHasAnimated(true);
        }, 150 + delay);
      });
      return () => {
        cancelAnimationFrame(rafId);
        if (timer) clearTimeout(timer);
      };
    }

    // Check if element is already in viewport on mount (for scroll-triggered)
    const checkInitialVisibility = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isInViewport = 
          rect.top < window.innerHeight * 0.9 &&
          rect.bottom > 0 &&
          rect.left < window.innerWidth &&
          rect.right > 0;
        
        if (isInViewport && !hasAnimated) {
          // Small delay for smoother initial animation
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, 100 + delay);
        }
      }
    };

    // Initial check after a brief delay to allow page to render
    const initialTimeout = setTimeout(checkInitialVisibility, 50);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      clearTimeout(initialTimeout);
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, hasAnimated, initialLoad]);

  const directionClasses = {
    up: 'translate-y-12',
    down: '-translate-y-12',
    left: 'translate-x-12',
    right: '-translate-x-12',
    fade: '',
  };

  return (
    <div
      ref={ref}
      className={cn(
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0'
          : `opacity-0 ${directionClasses[direction]}`,
        className
      )}
      style={{ 
        transition: 'opacity 1200ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

