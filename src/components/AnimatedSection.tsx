'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { ANIMATION_DURATION, ANIMATION_OFFSET, VIEWPORT_CONFIG } from '@/constants/animation-values';
import { EASE_CURVE } from '@/constants/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * AnimatedSection Component
 *
 * Wrapper component for scroll-triggered fade-up animations.
 * Uses centralized animation constants for consistent timing.
 */
export default function AnimatedSection({
  children,
  delay = 0,
  className = ''
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: ANIMATION_OFFSET.Y_LARGE }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_CONFIG.DEFAULT}
      transition={{
        duration: ANIMATION_DURATION.SLOW,
        delay,
        ease: EASE_CURVE
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
