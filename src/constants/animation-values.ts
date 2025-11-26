/**
 * Animation Values
 * Centralized animation constants for consistent timing and behavior
 */

/**
 * Animation durations in seconds
 */
export const ANIMATION_DURATION = {
  /** Fast animations (0.2s) - for quick transitions */
  FAST: 0.2,
  /** Normal animations (0.5s) - for standard transitions */
  NORMAL: 0.5,
  /** Slow animations (0.7s) - for scroll-triggered animations */
  SLOW: 0.7
} as const;

/**
 * Animation delays in seconds
 */
export const ANIMATION_DELAY = {
  /** No delay */
  NONE: 0,
  /** Short delay (0.1s) */
  SHORT: 0.1,
  /** Medium delay (0.2s) */
  MEDIUM: 0.2,
  /** Long delay (0.35s) */
  LONG: 0.35
} as const;

/**
 * Animation offset values in pixels
 */
export const ANIMATION_OFFSET = {
  /** Small vertical offset (5px) */
  Y_SMALL: 5,
  /** Medium vertical offset (20px) */
  Y_MEDIUM: 20,
  /** Large vertical offset (60px) - for scroll animations */
  Y_LARGE: 60
} as const;

/**
 * Viewport configuration for scroll-triggered animations
 */
export const VIEWPORT_CONFIG = {
  /** Default viewport trigger - triggers at 30% visibility, runs once */
  DEFAULT: { once: true, amount: 0.3 } as const,
  /** Small amount trigger - triggers at 10% visibility, runs once */
  SMALL_AMOUNT: { once: true, amount: 0.1 } as const
} as const;

/**
 * Type definitions for autocomplete support
 */
export type AnimationDuration = keyof typeof ANIMATION_DURATION;
export type AnimationDelay = keyof typeof ANIMATION_DELAY;
export type AnimationOffset = keyof typeof ANIMATION_OFFSET;
export type ViewportConfig = keyof typeof VIEWPORT_CONFIG;
