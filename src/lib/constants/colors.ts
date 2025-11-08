/**
 * Design System - Color Palette
 * Centralized color definitions for consistent theming
 * 
 * Brand Colors:
 * - Primary: #00a6ce (Cyan/Blue)
 * - Secondary: #bd1c81 (Magenta/Pink)
 * - Tertiary: #010193 (Dark Blue)
 */

export const colors = {
  // Primary brand color - Cyan/Blue (#00a6ce)
  primary: {
    50: '#e6f7fc',
    100: '#b3e8f6',
    200: '#80d9f0',
    300: '#4dcaea',
    400: '#1abbe4',
    500: '#00a6ce', // Base color
    600: '#0085a6',
    700: '#00647e',
    800: '#004356',
    900: '#00222e',
    950: '#001118',
  },
  
  // Secondary brand color - Magenta/Pink (#bd1c81)
  secondary: {
    50: '#fce7f3',
    100: '#f7b8db',
    200: '#f289c3',
    300: '#ed5aab',
    400: '#e82b93',
    500: '#bd1c81', // Base color
    600: '#971768',
    700: '#71124f',
    800: '#4b0d36',
    900: '#25081d',
    950: '#12040e',
  },
  
  // Tertiary brand color - Dark Blue (#010193)
  tertiary: {
    50: '#e6e6f9',
    100: '#b3b3ed',
    200: '#8080e1',
    300: '#4d4dd5',
    400: '#1a1ac9',
    500: '#010193', // Base color
    600: '#010176',
    700: '#010159',
    800: '#01013c',
    900: '#00011f',
    950: '#000110',
  },
  
  // Neutral grays
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
  
  // Semantic colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  
  // Background colors
  background: {
    light: '#ffffff',
    dark: '#0a0a0a',
  },
  
  // Text colors
  text: {
    light: '#171717',
    dark: '#ededed',
  },
} as const;
