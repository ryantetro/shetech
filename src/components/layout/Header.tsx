'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsOverHero(window.scrollY < 600);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Programs', hasDropdown: true },
    { label: 'Newsroom', hasDropdown: true },
    { label: 'Scholarships', hasDropdown: false },
    { label: 'Partners', hasDropdown: true },
    { label: 'About', hasDropdown: true },
  ];

  // Dynamic styles based on scroll position
  const headerStyles = {
    backgroundColor: isOverHero 
      ? 'transparent' 
      : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: isOverHero ? 'none' : 'blur(20px)',
    WebkitBackdropFilter: isOverHero ? 'none' : 'blur(20px)',
    borderBottom: isOverHero 
      ? 'none' 
      : '1px solid rgba(229, 231, 235, 0.5)',
    boxShadow: isOverHero
      ? 'none'
      : isScrolled
      ? '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.03)'
      : '0 2px 10px rgba(0, 0, 0, 0.05)',
    paddingTop: isScrolled ? '0.5rem' : '0.75rem',
    paddingBottom: isScrolled ? '0.5rem' : '0.75rem',
    transition: 'box-shadow 0.3s ease, padding 0.3s ease, background-color 0.3s ease, border-bottom 0.3s ease',
  };

  // Text color based on position
  const textColor = isOverHero ? '#ffffff' : '#374151';
  const hoverBgColor = isOverHero 
    ? 'rgba(255, 255, 255, 0.15)' 
    : 'rgba(0, 166, 206, 0.1)';
  const hoverTextColor = isOverHero ? '#ffffff' : '#00a6ce';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={headerStyles}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled ? '3.5rem' : '4rem',
            transition: 'height 0.3s ease',
          }}
        >
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <div
              style={{
                width: isScrolled ? '140px' : '180px',
                height: isScrolled ? 'auto' : 'auto',
                transition: 'width 0.3s ease',
              }}
              className="relative"
            >
              <Image
                src="/logo.png"
                alt="SheTech Women Tech Council"
                width={180}
                height={60}
                priority
                className="object-contain group-hover:opacity-80 transition-opacity duration-200"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={cn(
                  'px-4 py-2 text-sm font-medium',
                  'transition-all duration-200',
                  'relative group flex items-center gap-1',
                  'rounded-lg'
                )}
                style={{
                  color: textColor,
                  transition: 'color 0.3s ease, background-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = hoverTextColor;
                  e.currentTarget.style.backgroundColor = hoverBgColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = textColor;
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span className="relative z-10">{item.label}</span>
                {item.hasDropdown && (
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>
            ))}
            <div 
              className="ml-6 h-6 w-px"
              style={{
                backgroundColor: isOverHero ? 'rgba(255, 255, 255, 0.3)' : '#d1d5db',
                transition: 'background-color 0.3s ease',
              }}
            ></div>
            <button
              className="ml-4 p-2 rounded-lg transition-all duration-200"
              style={{
                color: textColor,
                transition: 'color 0.3s ease, background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = hoverTextColor;
                e.currentTarget.style.backgroundColor = hoverBgColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = textColor;
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-all duration-200"
            style={{
              color: textColor,
              transition: 'color 0.3s ease, background-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = hoverTextColor;
              e.currentTarget.style.backgroundColor = hoverBgColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = textColor;
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div 
            className="py-4 mt-2"
            style={{
              borderTop: isOverHero 
                ? '1px solid rgba(255, 255, 255, 0.2)' 
                : '1px solid #e5e7eb',
              transition: 'border-color 0.3s ease',
            }}
          >
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className={cn(
                    'px-4 py-3 text-left text-sm font-medium',
                    'transition-all duration-200',
                    'rounded-lg flex items-center justify-between',
                  )}
                  style={{
                    color: textColor,
                    transition: 'color 0.3s ease, background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = hoverTextColor;
                    e.currentTarget.style.backgroundColor = hoverBgColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = textColor;
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
