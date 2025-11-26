/**
 * Layout Constants
 * Centralized layout patterns for consistent grid and container styling
 */

/**
 * Grid layout patterns
 */
export const GRID_LAYOUTS = {
  /** Two-column grid (fixed) */
  TWO_COLUMN: 'grid grid-cols-2 gap-6',
  /** Two-column grid (responsive - stacks on mobile) */
  TWO_COLUMN_RESPONSIVE: 'grid md:grid-cols-2 gap-6',
  /** Three-column grid (responsive - 1 col mobile, 2 col tablet, 3 col desktop) */
  THREE_COLUMN_RESPONSIVE: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
} as const;

/**
 * Container padding pattern (responsive)
 * Standard horizontal padding that increases with breakpoint
 */
export const CONTAINER_PADDING = 'px-4 sm:px-6 lg:px-8' as const;

/**
 * Container max-width
 * Standard maximum width for content containers
 */
export const CONTAINER_MAX_WIDTH = 'max-w-7xl' as const;

/**
 * Type definitions for autocomplete support
 */
export type GridLayout = keyof typeof GRID_LAYOUTS;
