'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { IconBox } from '@/components/ui/IconBox';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/theme';
import { cardVariants } from '@/constants/animations';
import type { IconContainerSize } from '@/constants/ui';

interface ProjectCardProps {
  icon?: React.ReactNode;
  iconSize?: IconContainerSize;
  title: string;
  subtitle?: string;
  description: string;
  metadata?: string;
  technologies?: string[];
  href?: string;
  onClick?: () => void;
  className?: string;
  enableHover?: boolean;
}

/**
 * ProjectCard - Wrapper around shadcn/ui Card with project-specific features
 *
 * Combines shadcn's Card primitives with:
 * - Full-height flex layout for equal card heights
 * - Optional icon with gradient background
 * - Hover effects (border and title color changes)
 * - Link support with Next.js Link
 * - Framer Motion animations
 */
export function ProjectCard({
  icon,
  iconSize = 'MD',
  title,
  subtitle,
  description,
  metadata,
  technologies,
  href,
  onClick,
  className,
  enableHover = true
}: ProjectCardProps) {
  const cardContent = (
    <Card
      className={cn(
        'h-full flex flex-col',
        'border-gray-800/50',
        'transition-colors duration-200',
        enableHover && 'hover:border-primary/30 group',
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="p-6 pb-0 space-y-0">
        <div className="flex items-start gap-4">
          {icon && <IconBox icon={icon} size={iconSize} />}
          <div className="flex-1 space-y-1">
            <CardTitle className={cn(
              'text-xl',
              enableHover && 'group-hover:text-primary transition-colors'
            )}>
              {title}
            </CardTitle>
            {subtitle && (
              <p className="text-sm text-primary font-medium">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6 pt-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <CardDescription className="text-base">
            {description}
          </CardDescription>
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
        {metadata && (
          <p className="text-xs text-muted-foreground uppercase mt-4">
            {metadata}
          </p>
        )}
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <motion.div variants={cardVariants}>
        <Link href={href} className="block h-full">
          {cardContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div variants={cardVariants}>
      {cardContent}
    </motion.div>
  );
}
