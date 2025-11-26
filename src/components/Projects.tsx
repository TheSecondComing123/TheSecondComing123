'use client';

import { cn, theme } from '@/lib/theme';
import { motion } from 'framer-motion';
import { containerVariants } from '@/constants/animations';
import { ANIMATION_DURATION, ANIMATION_DELAY, ANIMATION_OFFSET } from '@/constants/animation-values';
import { EASE_CURVE } from '@/constants/animations';
import { GRID_LAYOUTS } from '@/constants/layout';
import { ICON_SIZE } from '@/constants/ui';
import { projectsData } from '@/constants/projects';
import { Container } from '@/components/ui/Container';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Card } from '@/components/ui/Card';

export default function Projects() {
  return (
    <Container>
      <AnimatedHeading as="h1" className="text-5xl font-bold mb-6">
        Projects
      </AnimatedHeading>
      <motion.p
        className={cn("text-lg mb-12 max-w-3xl leading-relaxed", theme.text.body)}
        initial={{ opacity: 0, y: ANIMATION_OFFSET.Y_LARGE }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: ANIMATION_DURATION.FAST,
          delay: ANIMATION_DELAY.LONG,
          ease: EASE_CURVE
        }}
      >
        Over the years I&apos;ve made a lot of projects! I&apos;ve shared a few for you below.
      </motion.p>

      <motion.div
        className={GRID_LAYOUTS.THREE_COLUMN_RESPONSIVE}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsData.map((project) => (
          <Card
            key={project.id}
            icon={<project.icon className="text-primary" size={ICON_SIZE.SM} />}
            iconSize="SM"
            title={project.title}
            description={project.description}
            metadata={project.period}
            href={`/projects/${project.id}`}
          />
        ))}
      </motion.div>
    </Container>
  )
}
