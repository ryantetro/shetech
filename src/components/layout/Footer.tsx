import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

export const Footer = () => {
  const navLinks = [
    { label: 'Programs', href: '#' },
    { label: 'Newsroom', href: '#' },
    { label: 'Scholarships', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'About', href: '#' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="relative w-48 h-auto">
                <Image
                  src="/logo.png"
                  alt="SheTech Women Tech Council"
                  width={192}
                  height={64}
                  className="object-contain"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Empowering girls in STEM through hands-on experiences, mentorship, and real-world opportunities.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'text-sm text-gray-600 hover:text-primary-600 transition-colors'
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact/Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Get Involved
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Join our community and stay updated with the latest opportunities.
            </p>
            <a
              href="#mailing-list"
              className={cn(
                'text-sm font-medium text-primary-600 hover:text-primary-700',
                'transition-colors'
              )}
            >
              Join Mailing List →
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Women Tech Council. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

