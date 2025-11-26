/**
 * UI Constants
 * Centralized UI sizing and spacing constants for consistent design
 */

/**
 * Icon sizes for Lucide icons
 */
export const ICON_SIZE = {
  XS: 16,
  SM: 28,
  MD: 32,
  LG: 40
} as const;

/**
 * Icon container sizes (with gradient backgrounds)
 */
export const ICON_CONTAINER_SIZE = {
  SM: 'w-12 h-12',
  MD: 'w-16 h-16',
  LG: 'w-20 h-20'
} as const;

/**
 * Spacing constants for consistent gaps and padding
 */
export const SPACING = {
  GAP: {
    XS: 'gap-1',
    SM: 'gap-2',
    MD: 'gap-3',
    LG: 'gap-4',
    XL: 'gap-6',
    XXL: 'gap-8'
  },
  PADDING: {
    SM: 'p-4',
    MD: 'p-6',
    LG: 'p-8'
  }
} as const;

/**
 * Type definitions for autocomplete support
 */
export type IconSize = keyof typeof ICON_SIZE;
export type IconContainerSize = keyof typeof ICON_CONTAINER_SIZE;
