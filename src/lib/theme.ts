import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes intelligently.
 * Combines clsx for conditional classes and tailwind-merge to handle conflicts.
 *
 * @example
 * cn('px-4 py-2', condition && 'bg-blue-500', 'px-6') // => 'py-2 bg-blue-500 px-6'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Centralized theme utility containing semantic color patterns.
 * Each property contains the full Tailwind class string including dark mode variants.
 *
 * Benefits:
 * - Single source of truth for theme colors
 * - Easy to update (change once, applies everywhere)
 * - Reduces className verbosity by 50%
 * - TypeScript autocomplete support
 *
 * @example
 * // Before:
 * <div className="bg-white dark:bg-[#16181d] text-gray-900 dark:text-white">
 *
 * // After:
 * <div className={cn(theme.bg.page, theme.text.heading)}>
 */
export const theme = {
  /**
   * Background color variants
   */
  bg: {
    /** Main page background - white in light mode, dark gray in dark mode */
    page: 'bg-white dark:bg-[#16181d]',

    /** Card/section background - light gray in light mode, slightly lighter dark gray in dark mode */
    card: 'bg-gray-50 dark:bg-[#24262e]',

    /** Secondary background (buttons, inputs, etc.) */
    secondary: 'bg-gray-100 dark:bg-[#24262e]',

    /** Tertiary background for subtle UI elements */
    tertiary: 'bg-gray-200 dark:bg-black/20',

    /** Very subtle background with slight green tint in dark mode */
    subtle: 'bg-gray-100 dark:bg-green-950/5',

    /** Input/control backgrounds */
    control: 'bg-white dark:bg-[#1e2028]',
  },

  /**
   * Text color variants
   */
  text: {
    /** Primary heading text - dark in light mode, white in dark mode */
    heading: 'text-gray-900 dark:text-white',

    /** Body/paragraph text */
    body: 'text-gray-700 dark:text-gray-300',

    /** Secondary/muted text (labels, captions, etc.) */
    muted: 'text-gray-600 dark:text-gray-400',

    /** Even more subtle text */
    subtle: 'text-gray-500 dark:text-gray-500',
  },

  /**
   * Border color variants
   */
  border: {
    /** Standard border color */
    default: 'border-gray-200 dark:border-gray-800',

    /** Subtle border with reduced opacity in dark mode */
    subtle: 'border-gray-200 dark:border-gray-800/50',

    /** Input/control borders */
    control: 'border-gray-300 dark:border-gray-700',
  },

  /**
   * Interactive state variants (hover, focus, etc.)
   */
  hover: {
    /** Hover text color change */
    text: 'hover:text-gray-900 dark:hover:text-white',

    /** Hover background color change */
    bg: 'hover:bg-gray-300 dark:hover:bg-white/10',
  },

  /**
   * GitHub contribution graph colors - theme-aware levels
   */
  github: {
    /** No contributions - light gray in light mode, very dark green in dark mode */
    level0: 'bg-gray-200 dark:bg-transparent',

    /** Few contributions - light green in light mode, dark green in dark mode */
    level1: 'bg-green-200 dark:bg-green-800',

    /** Some contributions - medium-light green in light mode, medium-dark green in dark mode */
    level2: 'bg-green-400 dark:bg-green-700',

    /** Many contributions - medium green (same in both modes) */
    level3: 'bg-green-600 dark:bg-green-600',

    /** Most contributions - darker green in light mode, bright green in dark mode */
    level4: 'bg-green-700 dark:bg-green-500',

    /** Grid border color */
    border: 'border-gray-300 dark:border-green-900/30',
  },

  /**
   * Font family variants - semantic font application
   */
  font: {
    /** Heading font - Space Grotesk for H1-H6, display text, logos */
    heading: 'font-heading',

    /** Body font - Outfit for paragraphs, UI elements, buttons */
    body: 'font-body',
  },
};

/**
 * Type definitions for autocomplete support
 */
export type Theme = typeof theme;
export type ThemeBg = keyof typeof theme.bg;
export type ThemeText = keyof typeof theme.text;
export type ThemeBorder = keyof typeof theme.border;
export type ThemeGithub = keyof typeof theme.github;
export type ThemeFont = keyof typeof theme.font;
