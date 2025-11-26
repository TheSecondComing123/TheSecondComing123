/**
 * Centralized Type Definitions
 *
 * This file re-exports types from various modules for easier importing.
 * Import types from here when you need them in multiple places.
 */

// Re-export project types
export type { ProjectData } from '@/constants/projects';

// Re-export GitHub types
export type { ContributionDay } from '@/lib/github';

// Re-export UI constant types
export type { IconContainerSize } from '@/constants/ui';

// Animation types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: number[];
}

export interface ViewportConfig {
  once: boolean;
  amount: number;
}

// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface IconProps {
  className?: string;
  size?: number;
}
