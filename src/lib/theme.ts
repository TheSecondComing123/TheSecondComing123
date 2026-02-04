/**
 * Import and re-export cn utility from shadcn/ui utils
 * This maintains backward compatibility with existing imports from '@/lib/theme'
 */
export { cn } from './utils';

/**
 * Centralized theme utility containing semantic color patterns.
 * Dark-only palette for a consistent look across the site.
 *
 * Benefits:
 * - Single source of truth for theme colors
 * - Easy to update (change once, applies everywhere)
 * - Reduces className verbosity by 50%
 * - TypeScript autocomplete support
 *
 * // Usage:
 * <div className={cn(theme.bg.page, theme.text.heading)}>
 * <div className={cn(theme.bg.page, theme.text.heading)}>
 */
export const theme = {
  /**
   * Background color variants
   */
    bg: {
      /** Main page background */
      page: 'bg-neutral-950',

      /** Card/section background */
      card: 'bg-neutral-900',

      /** Secondary background (buttons, inputs, etc.) */
      secondary: 'bg-neutral-800',

      /** Tertiary background for subtle UI elements */
      tertiary: 'bg-black/20',

      /** Very subtle background with slight green tint */
      subtle: 'bg-green-950/5',

      /** Input/control backgrounds */
      control: 'bg-neutral-900',
  },

  /**
   * Text color variants
   */
  text: {
    /** Primary heading text */
    heading: 'text-white',

    /** Body/paragraph text */
    body: 'text-neutral-300',

    /** Secondary/muted text (labels, captions, etc.) */
    muted: 'text-neutral-400',

    /** Even more subtle text */
    subtle: 'text-neutral-500',

    /** Accent text - green color for special highlights */
    accent: 'text-green-500',
  },

  /**
   * Border color variants
   */
  border: {
    /** Standard border color */
    default: 'border-neutral-800',

    /** Subtle border with reduced opacity */
    subtle: 'border-neutral-800/50',

    /** Input/control borders */
    control: 'border-neutral-700',

    /** Accent border - green color for special highlights */
    accent: 'border-green-500',
  },

  /**
   * Interactive state variants (hover, focus, etc.)
   */
  hover: {
    /** Hover text color change */
    text: 'hover:text-white',

    /** Hover background color change */
    bg: 'hover:bg-white/10',
  },

  /**
   * Accent color variants - green for strategic highlights (10% usage)
   */
  accent: {
    /** Accent background - green button/element backgrounds */
    DEFAULT: 'bg-green-600',

    /** Accent text color */
    text: 'text-green-500',

    /** Accent border color */
    border: 'border-green-500',

    /** Accent hover background */
    hover: 'hover:bg-green-500',
  },

  /**
   * GitHub contribution graph colors - theme-aware levels
   */
  github: {
    /** No contributions */
    level0: 'bg-green-950',

    /** Few contributions */
    level1: 'bg-green-900',

    /** Some contributions */
    level2: 'bg-green-700',

    /** Many contributions */
    level3: 'bg-green-500',

    /** Most contributions (brightest) */
    level4: 'bg-green-400',

    /** Grid border color */
    border: 'border-green-900/40',
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
