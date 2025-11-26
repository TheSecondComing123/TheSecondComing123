/**
 * Animation Variants
 * Framer Motion animation variants for consistent animations across components
 *
 * Note: Basic timing constants (durations, delays, offsets) have been moved to
 * src/constants/animation-values.ts for better organization.
 */

// Legacy animation timing constants (kept for backward compatibility)
export const ANIMATION_DURATION = 0.2;
export const EASE_CURVE = [0.21, 0.47, 0.32, 0.98] as const;
export const STAGGER_DELAY = 0.03;
export const INITIAL_DELAY = 0;

/**
 * Container variants for staggered children animations
 */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAY
    }
  }
};

/**
 * Container variants with initial delay before staggering
 */
export const containerVariantsWithDelay = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAY,
      delayChildren: INITIAL_DELAY
    }
  }
};

/**
 * Base fade-in-up animation variant
 * Used for both individual items and cards
 */
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION,
      ease: EASE_CURVE
    }
  }
};

/**
 * Item variants (alias for fadeInUpVariants)
 * Used in Hero and other list items
 */
export const itemVariants = fadeInUpVariants;

/**
 * Card variants (alias for fadeInUpVariants)
 * Used in Competitions, Projects, and About cards
 */
export const cardVariants = fadeInUpVariants;
