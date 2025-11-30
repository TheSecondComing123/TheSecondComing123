/**
 * Import and re-export cn utility from shadcn/ui utils
 * This maintains backward compatibility with existing imports from '@/lib/theme'
 */
export { cn } from './utils';

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
    /** Main page background - neutral-50 in light mode, neutral-950 in dark mode */
    page: 'bg-neutral-50 dark:bg-neutral-950',

    /** Card/section background - green-100 in light mode, neutral-800 in dark mode */
    card: 'bg-green-100 dark:bg-neutral-800',

    /** Secondary background (buttons, inputs, etc.) */
    secondary: 'bg-neutral-100 dark:bg-neutral-800',

    /** Tertiary background for subtle UI elements */
    tertiary: 'bg-neutral-200 dark:bg-black/20',

    /** Very subtle background with slight green tint in dark mode */
    subtle: 'bg-neutral-100 dark:bg-green-950/5',

    /** Input/control backgrounds */
    control: 'bg-neutral-100 dark:bg-neutral-900',
  },

  /**
   * Text color variants
   */
  text: {
    /** Primary heading text - neutral-900 in light mode, white in dark mode */
    heading: 'text-neutral-900 dark:text-white',

    /** Body/paragraph text */
    body: 'text-neutral-700 dark:text-neutral-300',

    /** Secondary/muted text (labels, captions, etc.) */
    muted: 'text-neutral-600 dark:text-neutral-400',

    /** Even more subtle text */
    subtle: 'text-neutral-500 dark:text-neutral-500',

    /** Accent text - purple color for special highlights */
    accent: 'text-purple-600 dark:text-purple-500',
  },

  /**
   * Border color variants
   */
  border: {
    /** Standard border color */
    default: 'border-neutral-200 dark:border-neutral-800',

    /** Subtle border with reduced opacity in dark mode */
    subtle: 'border-neutral-200 dark:border-neutral-800/50',

    /** Input/control borders */
    control: 'border-neutral-300 dark:border-neutral-700',

    /** Accent border - purple color for special highlights */
    accent: 'border-purple-600 dark:border-purple-500',
  },

  /**
   * Interactive state variants (hover, focus, etc.)
   */
  hover: {
    /** Hover text color change */
    text: 'hover:text-neutral-900 dark:hover:text-white',

    /** Hover background color change */
    bg: 'hover:bg-neutral-300 dark:hover:bg-white/10',
  },

  /**
   * Accent color variants - purple/magenta for strategic highlights (10% usage)
   */
  accent: {
    /** Accent background - purple button/element backgrounds */
    DEFAULT: 'bg-purple-600 dark:bg-purple-500',

    /** Accent text color */
    text: 'text-purple-600 dark:text-purple-500',

    /** Accent border color */
    border: 'border-purple-600 dark:border-purple-500',

    /** Accent hover background */
    hover: 'hover:bg-purple-700 dark:hover:bg-purple-400',
  },

  /**
   * GitHub contribution graph colors - theme-aware levels
   */
  github: {
    /** No contributions - neutral-200 in light mode, subtle green-950 in dark mode */
    level0: 'bg-neutral-200 dark:bg-green-950',

    /** Few contributions - green-200 in light mode, green-900 in dark mode */
    level1: 'bg-green-200 dark:bg-green-900',

    /** Some contributions - green-400 in light mode, green-700 in dark mode */
    level2: 'bg-green-400 dark:bg-green-700',

    /** Many contributions - green-600 in light mode, green-500 in dark mode */
    level3: 'bg-green-600 dark:bg-green-500',

    /** Most contributions - green-700 in light mode, green-400 in dark mode (brightest) */
    level4: 'bg-green-700 dark:bg-green-400',

    /** Grid border color */
    border: 'border-neutral-300/50 dark:border-green-900/40',
  },

  /**
   * Font family variants - semantic font application
   */
  font: {
    /** Heading font - Space Grotesk 600 for H1-H2 */
    heading: 'font-heading',

    /** Body font - Outfit 400 for paragraphs, general text */
    body: 'font-body',

    /** Display font - Space Grotesk 300 for hero sections, elegant large text */
    display: 'font-heading font-light',

    /** Subheading font - Space Grotesk 500 for H3-H6, card titles */
    subheading: 'font-heading font-medium',

    /** Brand font - Space Grotesk 700 for logos, strong branding */
    brand: 'font-heading font-bold',

    /** Emphasis font - Space Grotesk 600 for highlighted text (alias of heading) */
    emphasis: 'font-heading font-semibold',

    /** Button font - Outfit 600 for buttons, CTAs */
    button: 'font-body font-semibold',

    /** Navigation font - Outfit 500 for navigation links */
    nav: 'font-body font-medium',

    /** Label font - Outfit 500 for form labels, UI labels */
    label: 'font-body font-medium',

    /** Caption font - Outfit 300 for metadata, timestamps, small text */
    caption: 'font-body font-light',

    /** Code font - Outfit 400 with tight tracking for code snippets */
    code: 'font-body tracking-tight',
  },
};

/**
 * Type definitions for autocomplete support
 */
export type Theme = typeof theme;
export type ThemeBg = keyof typeof theme.bg;
export type ThemeText = keyof typeof theme.text;
export type ThemeBorder = keyof typeof theme.border;
export type ThemeAccent = keyof typeof theme.accent;
export type ThemeGithub = keyof typeof theme.github;
export type ThemeFont = keyof typeof theme.font;
