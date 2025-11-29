/**
 * Typography Constants
 *
 * Comprehensive guidelines for font usage across the application.
 * These constants document the font weight system and typography hierarchy.
 */

/**
 * Font Weights
 *
 * Defines all loaded weights for Space Grotesk and Outfit fonts.
 * Use these constants when referencing specific font weights in components.
 */
export const FONT_WEIGHTS = {
  SPACE_GROTESK: {
    LIGHT: 300,      // Display text, hero sections - elegant, airy feel
    REGULAR: 400,    // Reserved for future use
    MEDIUM: 500,     // H3-H6, card titles - refined hierarchy
    SEMIBOLD: 600,   // H1-H2, emphasized headings - current default
    BOLD: 700,       // Logo, brand name - strongest visual weight
  },
  OUTFIT: {
    LIGHT: 300,      // Captions, metadata, timestamps - subtle
    REGULAR: 400,    // Body text, paragraphs - current default
    MEDIUM: 500,     // Navigation, labels, form fields - UI emphasis
    SEMIBOLD: 600,   // Buttons, CTAs - action affordance
    BOLD: 700,       // Reserved for future use
  },
} as const;

/**
 * Typography Hierarchy
 *
 * 7-level typographic scale defining visual hierarchy across the application.
 * Use this guide when deciding which font utility to apply to new components.
 *
 * Hierarchy flows from strongest (LEVEL_1) to most subtle (LEVEL_7).
 */
export const TYPOGRAPHY_HIERARCHY = {
  /** Level 1 - Strongest */
  LEVEL_1: 'Space Grotesk 700 - Brand name, hero H1',

  /** Level 2 - Strong */
  LEVEL_2: 'Space Grotesk 600 - Page H1, section H2',

  /** Level 3 - Moderate */
  LEVEL_3: 'Space Grotesk 500 - H3-H6, card titles',

  /** Level 4 - Emphasis */
  LEVEL_4: 'Outfit 600 - Buttons, CTAs, strong UI elements',

  /** Level 5 - UI Standard */
  LEVEL_5: 'Outfit 500 - Navigation links, labels, form fields',

  /** Level 6 - Standard */
  LEVEL_6: 'Outfit 400 - Body text, paragraphs, descriptions',

  /** Level 7 - Subtle */
  LEVEL_7: 'Outfit 300 - Captions, metadata, timestamps',
} as const;

/**
 * Font Usage Guidelines
 *
 * Practical examples of when to use each theme.font utility.
 */
export const FONT_USAGE_GUIDE = {
  /** theme.font.display - Space Grotesk 300 */
  DISPLAY: 'Hero sections, landing page titles, elegant large text',

  /** theme.font.heading - Space Grotesk 600 */
  HEADING: 'Main page headings (H1-H2), section titles',

  /** theme.font.subheading - Space Grotesk 500 */
  SUBHEADING: 'Subsection titles (H3-H6), card titles, panel headers',

  /** theme.font.brand - Space Grotesk 700 */
  BRAND: 'Logo, site name in navbar, strong brand elements',

  /** theme.font.emphasis - Space Grotesk 600 */
  EMPHASIS: 'Highlighted text, important callouts (alias of heading)',

  /** theme.font.button - Outfit 600 */
  BUTTON: 'All buttons, CTAs, action-triggering elements',

  /** theme.font.nav - Outfit 500 */
  NAV: 'Navigation links, menu items, tabs',

  /** theme.font.label - Outfit 500 */
  LABEL: 'Form labels, input labels, UI control labels',

  /** theme.font.caption - Outfit 300 */
  CAPTION: 'Metadata, timestamps, helper text, footnotes',

  /** theme.font.code - Outfit 400 + tracking-tight */
  CODE: 'Code snippets, monospace-style text, technical content',

  /** theme.font.body - Outfit 400 */
  BODY: 'All paragraph text, descriptions, general content',
} as const;

/**
 * Accessibility Guidelines
 *
 * Important considerations when applying font weights.
 */
export const ACCESSIBILITY_NOTES = {
  LIGHT_WEIGHT_MIN_SIZE: '14px - Light weights (300) should only be used on text 14px or larger',
  CONTRAST_RATIO_AA: '4.5:1 - Minimum contrast ratio for WCAG AA compliance',
  CONTRAST_RATIO_AAA: '7:1 - Enhanced contrast ratio for WCAG AAA compliance',
  BUTTON_WEIGHT: 'Buttons should use semibold (600) or higher for clear affordance',
  HEADING_HIERARCHY: 'Maintain clear visual hierarchy: H1 > H2 > H3 > H4 > H5 > H6',
} as const;

/**
 * TypeScript type exports for autocomplete support
 */
export type FontWeight = typeof FONT_WEIGHTS;
export type TypographyLevel = keyof typeof TYPOGRAPHY_HIERARCHY;
export type FontUsageGuide = keyof typeof FONT_USAGE_GUIDE;
