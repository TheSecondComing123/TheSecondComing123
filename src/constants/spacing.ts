/**
 * Spacing Constants System
 *
 * Centralized spacing values for consistent design across the application.
 * All spacing should reference these constants instead of hardcoded values.
 */

/**
 * Section Spacing
 * Used for vertical padding on major page sections
 */
export const SECTION_SPACING = {
  /** Mobile: 64px, Tablet: 80px, Desktop: 96px */
  responsive: 'py-16 md:py-20 lg:py-24',
  mobile: 'py-16',
  tablet: 'md:py-20',
  desktop: 'lg:py-24',
} as const;

/**
 * Section Dividers (Separators)
 * Used for spacing between major sections
 */
export const SECTION_DIVIDER = {
  /** Mobile: 24px, Tablet: 32px, Desktop: 48px */
  responsive: 'my-6 md:my-8 lg:my-12',
  mobile: 'my-6',
  tablet: 'md:my-8',
  desktop: 'lg:my-12',
} as const;

/**
 * Form Field Spacing
 * Used in forms and input groups
 */
export const FORM_SPACING = {
  /** Gap between form fields (16px) */
  fieldGap: 'space-y-4',
  /** Gap between label and input (8px) */
  labelInput: 'space-y-2',
} as const;

/**
 * Card Internal Spacing
 * Used within card components
 */
export const CARD_SPACING = {
  /** Gap between icon and text in cards (16px) */
  iconText: 'gap-4',
  /** Space between card elements vertically (4px) */
  elementGap: 'space-y-1',
  /** Top margin for metadata/footer elements (16px) */
  metadataTop: 'mt-4',
} as const;

/**
 * Timeline Spacing
 * Used in timeline/journey components
 */
export const TIMELINE_SPACING = {
  /** Container spacing: Mobile: 24px, Desktop: 48px */
  container: 'space-y-6 md:space-y-12',
  /** Item grid gap: Mobile: 16px, Desktop: 32px */
  itemGap: 'gap-4 md:gap-8',
} as const;

/**
 * Navbar Offset
 * Top padding to account for fixed navbar (96px)
 */
export const NAVBAR_OFFSET = 'pt-24' as const;

/**
 * Heading Bottom Margins
 * Consistent spacing below different heading levels
 */
export const HEADING_MARGIN = {
  /** H1 sections: 32px */
  h1: 'mb-8',
  /** H2 before card grids: 48px */
  h2Grid: 'mb-12',
  /** H2 before text content: 24px */
  h2Text: 'mb-6',
  /** H2 after heading (Contact form): 24px */
  h2Section: 'mb-6',
} as const;

/**
 * Button Sizing
 * Consistent button heights and padding
 */
export const BUTTON_SIZE = {
  default: {
    height: 'h-10',
    padding: 'px-4 py-2.5',
    full: 'h-10 px-4 py-2.5',
  },
  sm: {
    height: 'h-9',
    padding: 'px-3 py-2',
    full: 'h-9 px-3 py-2',
  },
  lg: {
    height: 'h-12',
    padding: 'px-6 py-3',
    full: 'h-12 px-6 py-3',
  },
} as const;

/**
 * Hero Section Spacing
 * Specific spacing for hero/landing sections
 */
export const HERO_SPACING = {
  /** Gap between hero elements (24px) */
  elementGap: 'gap-6',
  /** Top padding: 96px */
  topPadding: 'pt-24',
  /** No bottom padding */
  bottomPadding: 'pb-0',
} as const;

/**
 * Type exports for TypeScript autocomplete
 */
export type SectionSpacing = typeof SECTION_SPACING;
export type SectionDivider = typeof SECTION_DIVIDER;
export type FormSpacing = typeof FORM_SPACING;
export type CardSpacing = typeof CARD_SPACING;
export type TimelineSpacing = typeof TIMELINE_SPACING;
export type HeadingMargin = typeof HEADING_MARGIN;
export type ButtonSize = typeof BUTTON_SIZE;
export type HeroSpacing = typeof HERO_SPACING;
