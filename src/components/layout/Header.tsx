'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { NAVIGATION } from '@/lib/constants/navigation';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverHero, setIsOverHero] = useState(false); // Default to false for safety
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpenMenus, setMobileOpenMenus] = useState<Set<string>>(new Set());
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check if we're over a colorful hero section
      // If the hero has bg-white, bg-gray, or light gradient backgrounds, show solid header
      const heroElement = document.querySelector('main > section');
      const heroClasses = heroElement?.className || '';

      // Check for light backgrounds - these need dark text
      const hasLightBg = heroClasses.includes('bg-white') ||
        heroClasses.includes('bg-gray') ||
        heroClasses.includes('bg-slate-50') ||
        heroClasses.includes('from-slate-50') ||
        heroClasses.includes('from-white') ||
        heroClasses.includes('border-b');

      // If hero has light background, don't use transparent header (use solid with dark text)
      // Otherwise, use transparent header with white text for first 600px
      setIsOverHero(!hasLightBg && window.scrollY < 600);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clear timeout on unmount
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const toggleMobileMenu = (label: string) => {
    setMobileOpenMenus((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(label)) {
        newSet.delete(label);
      } else {
        newSet.add(label);
      }
      return newSet;
    });
  };

  const handleMouseEnter = (label: string) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    // Delay closing the dropdown to allow mouse movement to dropdown
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay
  };

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
          <Link href="/" className="flex items-center group">
            <div
              style={{
                width: isScrolled ? '140px' : '180px',
                height: isScrolled ? 'auto' : 'auto',
                transition: 'width 0.3s ease',
              }}
              className="relative"
            >
              <Image
                src={isOverHero ? "/shetech-assets/Shetech logo White.svg" : "/shetech-assets/SheTech 2026 Logo.svg"}
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAVIGATION.map((item, index) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.items && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={cn(
                      'px-4 py-2 text-sm font-medium',
                      'transition-all duration-200',
                      'relative group flex items-center gap-1',
                      'rounded-lg'
                    )}
                    style={{
                      color: textColor,
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
                  </Link>
                ) : (
                  <button
                    className={cn(
                      'px-4 py-2 text-sm font-medium',
                      'transition-all duration-200',
                      'relative group flex items-center gap-1',
                      'rounded-lg'
                    )}
                    style={{
                      color: textColor,
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
                    {item.items && (
                      <svg
                        className={cn(
                          'w-3.5 h-3.5 transition-transform duration-200',
                          activeDropdown === item.label && 'rotate-180'
                        )}
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
                )}

                {/* Dropdown Menu */}
                {item.items && activeDropdown === item.label && (
                  <div
                    className={cn(
                      'absolute mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-2xl py-2 z-50',
                      index >= NAVIGATION.length - 2 ? 'right-0' : 'left-0'
                    )}
                    style={{
                      animation: 'fadeInDown 0.2s ease-out',
                    }}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="font-medium text-gray-900 text-sm group-hover:text-primary-600 transition-colors">
                          {subItem.label}
                        </div>
                        {subItem.description && (
                          <div className="text-xs text-gray-500 mt-0.5">
                            {subItem.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-all duration-200"
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
            'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div
            className={cn(
              'py-4 mt-2 bg-white rounded-xl shadow-lg mx-2 mb-2 transform transition-all duration-300 ease-out',
              isMobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'
            )}
          >
            <nav className="flex flex-col space-y-1 px-2">
              {NAVIGATION.map((item, index) => (
                <div
                  key={item.label}
                  className="transform transition-all duration-300 ease-out"
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-10px)',
                  }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="px-4 py-3 text-left text-sm font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 active:bg-cyan-100 active:scale-[0.98] transition-all duration-200 rounded-lg flex items-center justify-between"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className={cn(
                          'w-full px-4 py-3 text-left text-sm font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 active:bg-cyan-100 active:scale-[0.98] transition-all duration-200 rounded-lg flex items-center justify-between',
                          mobileOpenMenus.has(item.label) && 'text-cyan-600 bg-cyan-50'
                        )}
                        onClick={() => toggleMobileMenu(item.label)}
                      >
                        {item.label}
                        {item.items && (
                          <svg
                            className={cn(
                              'w-4 h-4 transition-transform duration-300 ease-out text-gray-400',
                              mobileOpenMenus.has(item.label) && 'rotate-180 text-cyan-500'
                            )}
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
                      <div
                        className={cn(
                          'overflow-hidden transition-all duration-300 ease-out',
                          mobileOpenMenus.has(item.label) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        )}
                      >
                        <div className="pl-4 mt-1 space-y-1 bg-gray-50 rounded-lg py-2 mx-2">
                          {item.items?.map((subItem, subIndex) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:text-cyan-600 hover:bg-white active:bg-cyan-50 active:scale-[0.98] transition-all duration-200 rounded-lg"
                              style={{
                                transitionDelay: mobileOpenMenus.has(item.label) ? `${subIndex * 30}ms` : '0ms',
                              }}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setMobileOpenMenus(new Set());
                              }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
