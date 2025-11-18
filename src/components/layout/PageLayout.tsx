import React from 'react';
import Link from 'next/link';
import { Header } from './Header';
import { Footer } from './Footer';
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils/cn';

export interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  heroClassName?: string;
  compact?: boolean;
}

/**
 * Reusable page layout wrapper for internal pages
 * Includes Header, Footer, Breadcrumbs, and Hero section
 */
export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  subtitle,
  breadcrumbs,
  heroClassName,
  compact = false,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className={cn(
            'relative overflow-hidden',
            compact 
              ? 'pt-28 pb-8 sm:pt-32 sm:pb-10 bg-white border-b border-gray-200'
              : 'pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30',
            heroClassName
          )}
        >
          {/* Decorative background - only show if not compact */}
          {!compact && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,166,206,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(189,28,129,0.08),transparent_50%)]"></div>
          )}
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className={cn('mx-auto', compact ? 'max-w-7xl' : 'max-w-4xl')}>
              {/* Breadcrumb */}
              {breadcrumbs && breadcrumbs.length > 0 && (
                <Breadcrumb items={breadcrumbs} className="mb-6" />
              )}
              
              {/* Title */}
              <h1 className={cn(
                'font-bold text-gray-900',
                compact 
                  ? 'text-2xl sm:text-3xl mb-2'
                  : 'text-4xl sm:text-5xl lg:text-6xl mb-4'
              )}>
                {title}
              </h1>
              
              {/* Subtitle */}
              {subtitle && (
                <p className={cn(
                  'text-gray-600 leading-relaxed',
                  compact 
                    ? 'text-sm max-w-3xl'
                    : 'text-lg sm:text-xl'
                )}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Page Content */}
        {children}
      </main>

      <Footer />
    </div>
  );
};

/**
 * Reusable content section component
 */
export interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  children,
  className,
  containerClassName,
}) => {
  return (
    <section className={cn('py-16 sm:py-20', className)}>
      <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8', containerClassName)}>
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

/**
 * Placeholder content component for pages
 */
export const PlaceholderContent: React.FC = () => {
  return (
    <>
      <ContentSection className="bg-white">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Coming Soon
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            This page is currently under development. We&apos;re working hard to bring you great content and experiences. Check back soon!
          </p>
          <div className="pt-4">
            <Button
              variant="primary"
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white"
            >
              <Link href="/" className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </ContentSection>

      <ContentSection className="bg-gray-50">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Get Notified
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Want to be the first to know when this page goes live? Join our mailing list to stay updated with all the latest SheTech news and opportunities.
          </p>
          <div className="pt-4">
            <Button
              variant="outline"
              size="lg"
              className="border-primary-600 text-primary-600 hover:bg-primary-50"
            >
              <Link href="/#mailing-list" className="flex items-center gap-2">
                Subscribe to Newsletter
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </ContentSection>

      <ContentSection className="bg-white">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Questions?
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            If you have any questions or need more information, please don&apos;t hesitate to reach out to us. We&apos;re here to help!
          </p>
          <div className="pt-4">
            <Button
              variant="secondary"
              size="lg"
              className="bg-secondary-600 hover:bg-secondary-700 text-white"
            >
              <Link href="/about/contact-us" className="flex items-center gap-2">
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </ContentSection>
    </>
  );
};

