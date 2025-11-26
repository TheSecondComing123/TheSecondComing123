'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn, theme } from '@/lib/theme';
import { ANIMATION_DURATION, ANIMATION_OFFSET, VIEWPORT_CONFIG } from '@/constants/animation-values';
import { EASE_CURVE } from '@/constants/animations';

interface AnimatedHeadingProps {
  /** Heading level (h1, h2, or h3) */
  as: 'h1' | 'h2' | 'h3';
  /** Heading text content */
  children: ReactNode;
  /** Additional className for customization */
  className?: string;
  /** Animation delay in seconds */
  delay?: number;
  /** Use scroll-triggered animation (whileInView) instead of immediate (animate) */
  scroll?: boolean;
}

/**
 * AnimatedHeading Component
 *
 * Provides consistent animated headings across the site.
 * Consolidates the pattern used 8+ times in About, Projects, and Competitions.
 *
 * @example
 * // Immediate animation (for page titles)
 * <AnimatedHeading as="h1" className="text-4xl font-bold mb-8">
 *   Projects
 * </AnimatedHeading>
 *
 * @example
 * // Scroll-triggered animation (for section titles)
 * <AnimatedHeading as="h2" scroll className="text-3xl font-bold mb-6">
 *   Competitive Programming
 * </AnimatedHeading>
 *
 * @example
 * // With custom delay
 * <AnimatedHeading as="h2" scroll delay={0.2} className="text-2xl">
 *   Skills
 * </AnimatedHeading>
 */
export function AnimatedHeading({
  as: Component,
  children,
  className = '',
  delay = 0,
  scroll = false
}: AnimatedHeadingProps) {
  const animationProps = {
    initial: { opacity: 0, y: ANIMATION_OFFSET.Y_LARGE },
    ...(scroll
      ? {
          whileInView: { opacity: 1, y: 0 },
          viewport: VIEWPORT_CONFIG.DEFAULT
        }
      : {
          animate: { opacity: 1, y: 0 }
        }),
    transition: {
      duration: ANIMATION_DURATION.SLOW,
      ease: EASE_CURVE,
      delay
    }
  };

  return (
    <motion.div {...animationProps}>
      <Component className={cn(theme.text.heading, className)}>
        {children}
      </Component>
    </motion.div>
  );
}
