'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn, theme } from '@/lib/theme';
import { IconBox } from './IconBox';
import { cardVariants } from '@/constants/animations';
import { type IconContainerSize } from '@/constants/ui';

interface CardProps {
  /** Icon element to display (optional) */
  icon?: ReactNode;
  /** Size of icon container (sm, md, lg) */
  iconSize?: IconContainerSize;
  /** Card title */
  title: string;
  /** Subtitle (optional - shown in primary color) */
  subtitle?: string;
  /** Card description */
  description: string;
  /** Additional metadata (optional - shown in muted text) */
  metadata?: string;
  /** Link href (optional - makes card clickable) */
  href?: string;
  /** onClick handler (optional) */
  onClick?: () => void;
  /** Additional className for customization */
  className?: string;
  /** Whether to show hover effects */
  enableHover?: boolean;
}

/**
 * Card Component
 *
 * Flexible card component that consolidates patterns used in:
 * - Competitions (with icon, title, rank, description)
 * - Projects (with icon, title, description, period)
 * - About (skills and interests cards)
 *
 * @example
 * // Competition card
 * <Card
 *   icon={<Trophy className="text-primary" size={32} />}
 *   iconSize="MD"
 *   title="ACSL"
 *   subtitle="National Silver"
 *   description="American Computer Science League"
 *   metadata="2024"
 *   href="/competitions/acsl"
 * />
 *
 * @example
 * // Project card
 * <Card
 *   icon={<Gamepad2 className="text-primary" size={28} />}
 *   iconSize="SM"
 *   title="2121"
 *   description="A game I made when I was 7"
 *   metadata="Early"
 * />
 */
export function Card({
  icon,
  iconSize = 'MD',
  title,
  subtitle,
  description,
  metadata,
  href,
  onClick,
  className = '',
  enableHover = true
}: CardProps) {
  const cardContent = (
    <motion.div
      variants={cardVariants}
      className={cn(
        'h-full flex flex-col',
        'rounded-xl p-6 border',
        'transition-all duration-300 group',
        enableHover && 'hover:border-primary/30',
        onClick && 'cursor-pointer',
        theme.bg.card,
        theme.border.subtle,
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-start gap-4 flex-1">
        {icon && <IconBox icon={icon} size={iconSize} />}

        <div className="flex-1 flex flex-col">
          <h3
            className={cn(
              'text-xl font-bold transition-colors',
              enableHover && 'group-hover:text-primary',
              theme.text.heading
            )}
          >
            {title}
          </h3>

          {subtitle && (
            <p className="text-primary font-medium mt-1">
              {subtitle}
            </p>
          )}

          {metadata && (
            <p className={cn('text-xs uppercase tracking-wide mt-1', theme.text.muted)}>
              {metadata}
            </p>
          )}

          <p className={cn('mt-2', theme.text.muted)}>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
