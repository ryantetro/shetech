'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { NAVIGATION } from '@/lib/constants/navigation';

interface HeaderProps {
  forceSolid?: boolean;
}

// Hero backgrounds that need the solid header with dark text
const LIGHT_HERO_CLASSES = [
  'bg-white',
  'bg-gray',
  'bg-slate-50',
  'from-white',
  'bg-[#EBEBF5]',
  'bg-[#F5F5FA]',
  'bg-[#FDF2F8]', // Light pink/magenta background
  'bg-pink-50',
  'bg-purple-50',
  'border-b',
];

const EASE_OUT = 'ease-[cubic-bezier(0.2,0,0,1)]';

const toId = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export const Header = ({ forceSolid = false }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasLightHero, setHasLightHero] = useState(true); // Default to solid for safety
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpenMenus, setMobileOpenMenus] = useState<Set<string>>(new Set());
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastPointerTypeRef = useRef<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Whether the page opens on a colorful hero (transparent header) or a light one, checked once
    let lightHero: boolean | null = null;

    const handleScroll = () => {
      if (lightHero === null) {
        const heroClasses = document.querySelector('main > section')?.className || '';
        lightHero = LIGHT_HERO_CLASSES.some((cls) => heroClasses.includes(cls));
        setHasLightHero(lightHero);
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Close menus when tapping/clicking anywhere outside the header
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  // Escape closes the mobile menu and returns focus to the toggle
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Transparent only while resting at the top of a colorful hero; solid as soon as the page scrolls
  const shouldUseTransparentHeader = !forceSolid && !hasLightHero && !isScrolled;

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

  const openDropdown = (label: string) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const scheduleClose = () => {
    // Delay closing the dropdown to allow mouse movement to dropdown
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay
  };

  const handleTriggerClick = (label: string) => {
    // Mouse users already opened it on hover; keyboard and touch toggle it
    const fromMouse = lastPointerTypeRef.current === 'mouse';
    lastPointerTypeRef.current = null;
    if (fromMouse) {
      openDropdown(label);
      return;
    }
    setActiveDropdown((current) => (current === label ? null : label));
  };

  // Dynamic styles based on scroll position; nav colors flow through CSS variables
  const headerStyles = {
    backgroundColor: shouldUseTransparentHeader
      ? 'rgba(255, 255, 255, 0)'
      : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: shouldUseTransparentHeader ? 'none' : 'blur(20px)',
    WebkitBackdropFilter: shouldUseTransparentHeader ? 'none' : 'blur(20px)',
    borderBottom: shouldUseTransparentHeader
      ? '1px solid rgba(229, 231, 235, 0)'
      : '1px solid rgba(229, 231, 235, 0.5)',
    boxShadow: shouldUseTransparentHeader
      ? 'none'
      : isScrolled
        ? '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.03)'
        : '0 2px 10px rgba(0, 0, 0, 0.05)',
    paddingTop: isScrolled ? '0.5rem' : '0.75rem',
    paddingBottom: isScrolled ? '0.5rem' : '0.75rem',
    transition: 'box-shadow 0.3s ease, padding 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
    '--nav-text': shouldUseTransparentHeader ? '#ffffff' : '#374151',
    '--nav-hover-bg': shouldUseTransparentHeader
      ? 'rgba(255, 255, 255, 0.15)'
      : 'rgba(0, 166, 206, 0.1)',
    '--nav-hover-text': shouldUseTransparentHeader ? '#ffffff' : '#00a6ce',
  } as React.CSSProperties;

  const navItemClasses = (isActive: boolean) =>
    cn(
      'px-4 py-2 text-sm font-medium rounded-lg',
      'relative flex items-center gap-1',
      'transition-colors duration-200',
      'hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-hover-text)]',
      isActive
        ? 'bg-[var(--nav-hover-bg)] text-[var(--nav-hover-text)]'
        : 'text-[var(--nav-text)]'
    );

  return (
    <header
      ref={headerRef}
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
          {/* Logo - both versions stay mounted and cross-fade */}
          <Link href="/" className="flex items-center group">
            <div
              className={cn('relative w-[180px] origin-left transition-transform duration-300', EASE_OUT)}
              style={{ transform: isScrolled ? 'scale(0.78)' : 'none' }}
            >
              <Image
                src="/logo.png"
                alt="SheTech Women Tech Council"
                width={180}
                height={60}
                priority
                className={cn(
                  'object-contain transition-opacity duration-300 group-hover:opacity-80',
                  shouldUseTransparentHeader && 'opacity-0 group-hover:opacity-0'
                )}
                style={{ width: '100%', height: 'auto' }}
              />
              <Image
                src="/shetech-assets/Shetech logo White.svg"
                alt=""
                aria-hidden="true"
                width={180}
                height={60}
                priority
                className={cn(
                  'absolute inset-0 object-contain transition-opacity duration-300 group-hover:opacity-80',
                  !shouldUseTransparentHeader && 'opacity-0 group-hover:opacity-0'
                )}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAVIGATION.map((item, index) => {
              const isOpen = activeDropdown === item.label;
              const menuId = `nav-menu-${toId(item.label)}`;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onPointerEnter={(e) => e.pointerType === 'mouse' && item.items && openDropdown(item.label)}
                  onPointerLeave={(e) => e.pointerType === 'mouse' && scheduleClose()}
                  onBlur={(e) => {
                    // Close when keyboard focus moves outside this menu
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setActiveDropdown((current) => (current === item.label ? null : current));
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape' && isOpen) {
                      setActiveDropdown(null);
                      e.currentTarget.querySelector('button')?.focus();
                    }
                  }}
                >
                  {item.href ? (
                    <Link href={item.href} className={navItemClasses(false)}>
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className={navItemClasses(isOpen)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-controls={menuId}
                      onPointerDown={(e) => {
                        lastPointerTypeRef.current = e.pointerType;
                      }}
                      onClick={() => handleTriggerClick(item.label)}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {item.items && (
                        <svg
                          className={cn(
                            'w-3.5 h-3.5 transition-transform duration-200',
                            isOpen && 'rotate-180'
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
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

                  {/* Dropdown Menu - stays mounted so it can animate out */}
                  {item.items && (
                    <div
                      id={menuId}
                      className={cn(
                        'absolute mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-2xl py-2 z-50',
                        // Invisible bridge over the gap so hover isn't lost between trigger and menu
                        'before:absolute before:-top-2 before:inset-x-0 before:h-2',
                        'transition-[opacity,translate,visibility] motion-reduce:transition-none',
                        EASE_OUT,
                        index >= NAVIGATION.length - 2 ? 'right-0' : 'left-0',
                        isOpen
                          ? 'visible opacity-100 translate-y-0 duration-200'
                          : 'invisible opacity-0 -translate-y-1 duration-150 pointer-events-none'
                      )}
                    >
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-3 hover:bg-gray-50 focus-visible:bg-gray-50 transition-colors group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="font-medium text-gray-900 text-sm group-hover:text-primary-600 group-focus-visible:text-primary-600 transition-colors">
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
              );
            })}
          </nav>

          {/* Mobile Menu Button - icons cross-fade */}
          <button
            ref={menuButtonRef}
            type="button"
            className={cn(
              'lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-200',
              'text-[var(--nav-text)] hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-hover-text)]'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className={cn(
                'absolute w-6 h-6 transition-[opacity,scale,filter] duration-300 motion-reduce:transition-none',
                EASE_OUT,
                isMobileMenuOpen ? 'opacity-0 scale-[0.25] blur-[4px]' : 'opacity-100 scale-100 blur-0'
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={cn(
                'absolute w-6 h-6 transition-[opacity,scale,filter] duration-300 motion-reduce:transition-none',
                EASE_OUT,
                isMobileMenuOpen ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-[0.25] blur-[4px]'
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu - scrolls within the viewport; inert while closed so hidden links can't be tabbed to */}
        <div
          id="mobile-menu"
          inert={!isMobileMenuOpen}
          className={cn(
            'lg:hidden transition-[max-height,opacity] duration-300 ease-in-out motion-reduce:transition-none',
            isMobileMenuOpen
              ? 'max-h-[calc(100dvh-6rem)] opacity-100 overflow-y-auto overscroll-contain'
              : 'max-h-0 opacity-0 overflow-hidden'
          )}
        >
          <div
            className={cn(
              'py-4 mt-2 bg-white rounded-xl shadow-lg mx-2 mb-2 transition-[translate,scale] duration-300 ease-out',
              isMobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'
            )}
          >
            <nav className="flex flex-col space-y-1 px-2">
              {NAVIGATION.map((item, index) => {
                const isSubmenuOpen = mobileOpenMenus.has(item.label);
                const submenuId = `mobile-menu-${toId(item.label)}`;

                return (
                  <div
                    key={item.label}
                    className="transition-[opacity,transform] duration-300 ease-out"
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                      opacity: isMobileMenuOpen ? 1 : 0,
                      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-10px)',
                    }}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="px-4 py-3 text-left text-sm font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 active:bg-cyan-100 active:scale-[0.98] transition-[color,background-color,scale] duration-200 rounded-lg flex items-center justify-between"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          type="button"
                          className={cn(
                            'w-full px-4 py-3 text-left text-sm font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 active:bg-cyan-100 active:scale-[0.98] transition-[color,background-color,scale] duration-200 rounded-lg flex items-center justify-between',
                            isSubmenuOpen && 'text-cyan-600 bg-cyan-50'
                          )}
                          aria-expanded={isSubmenuOpen}
                          aria-controls={submenuId}
                          onClick={() => toggleMobileMenu(item.label)}
                        >
                          {item.label}
                          {item.items && (
                            <svg
                              className={cn(
                                'w-4 h-4 transition-transform duration-300 ease-out text-gray-400',
                                isSubmenuOpen && 'rotate-180 text-cyan-500'
                              )}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
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
                        {/* Grid-rows expand fits any number of links without a fixed max-height */}
                        <div
                          id={submenuId}
                          inert={!isSubmenuOpen}
                          className={cn(
                            'grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none',
                            isSubmenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                          )}
                        >
                          <div className="overflow-hidden">
                            <div className="pl-4 mt-1 space-y-1 bg-gray-50 rounded-lg py-2 mx-2">
                              {item.items?.map((subItem, subIndex) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="block px-4 py-2.5 text-sm text-gray-600 hover:text-cyan-600 hover:bg-white active:bg-cyan-50 active:scale-[0.98] transition-[color,background-color,scale] duration-200 rounded-lg"
                                  style={{
                                    transitionDelay: isSubmenuOpen ? `${subIndex * 30}ms` : '0ms',
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
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
