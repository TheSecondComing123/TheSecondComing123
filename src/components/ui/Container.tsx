import { ReactNode } from 'react';
import { cn } from '@/lib/theme';
import { CONTAINER_MAX_WIDTH, CONTAINER_PADDING } from '@/constants/layout';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '7xl';
}

/**
 * Container Component
 *
 * Provides consistent responsive padding and max-width across the site.
 * Consolidates the pattern: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
 *
 * @example
 * <Container>
 *   <h1>Page Content</h1>
 * </Container>
 *
 * @example
 * <Container maxWidth="lg" className="py-8">
 *   <p>Narrower content</p>
 * </Container>
 */
export function Container({
  children,
  className = '',
  maxWidth = '7xl'
}: ContainerProps) {
  const maxWidths = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '7xl': CONTAINER_MAX_WIDTH
  };

  return (
    <div className={cn(maxWidths[maxWidth], 'mx-auto', CONTAINER_PADDING, className)}>
      {children}
    </div>
  );
}
