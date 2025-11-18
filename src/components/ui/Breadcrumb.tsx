import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb navigation component
 * Displays the navigation path with interactive links
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center space-x-2', className)}>
      <Link
        href="/"
        className="text-sm text-gray-500 hover:text-primary-600 transition-colors duration-200"
      >
        Home
      </Link>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <React.Fragment key={index}>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            
            {isLast || !item.href ? (
              <span className="text-sm font-medium text-gray-900">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-sm text-gray-500 hover:text-primary-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

