// Animation constants

export const ANIMATION_DURATION = 0.2;
export const EASE_CURVE = [0.21, 0.47, 0.32, 0.98] as const;
export const STAGGER_DELAY = 0.03;
export const INITIAL_DELAY = 0;

// Common animation types
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAY
    }
  }
};

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

export const itemVariants = {
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

export const cardVariants = {
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
