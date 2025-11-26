import { ReactNode } from 'react';
import { cn } from '@/lib/theme';
import { ICON_CONTAINER_SIZE, type IconContainerSize } from '@/constants/ui';

interface IconBoxProps {
  /** Icon element to display */
  icon: ReactNode;
  /** Size variant (sm: w-12 h-12, md: w-16 h-16, lg: w-20 h-20) */
  size?: IconContainerSize;
  /** Additional className for customization */
  className?: string;
}

/**
 * IconBox Component
 *
 * Displays an icon in a container with gradient background and border.
 * Consolidates the pattern used across Competitions, Projects, and About sections.
 *
 * @example
 * <IconBox icon={<Trophy className="text-primary" size={32} />} size="md" />
 *
 * @example
 * <IconBox
 *   icon={<Star className="text-primary" size={28} />}
 *   size="sm"
 *   className="mt-4"
 * />
 */
export function IconBox({
  icon,
  size = 'MD',
  className = ''
}: IconBoxProps) {
  return (
    <div
      className={cn(
        'bg-gradient-to-br from-primary/20 to-primary/5',
        'rounded-lg flex items-center justify-center',
        'border border-primary/20',
        ICON_CONTAINER_SIZE[size],
        className
      )}
    >
      {icon}
    </div>
  );
}
