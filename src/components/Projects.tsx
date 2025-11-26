'use client';

import { cn, theme } from '@/lib/theme';

import Link from 'next/link'
import { motion } from 'framer-motion'
import { containerVariants, cardVariants, ANIMATION_DURATION, EASE_CURVE, INITIAL_DELAY } from '@/constants/animations'
import { projectsData } from '@/constants/projects'

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h1
        className={cn("text-5xl font-bold  mb-6", theme.text.heading)}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: ANIMATION_DURATION,
          delay: INITIAL_DELAY,
          ease: EASE_CURVE
        }}
      >
        Projects
      </motion.h1>
      <motion.p
        className={cn(" text-lg mb-12 max-w-3xl leading-relaxed", theme.text.body)}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: ANIMATION_DURATION,
          delay: 0.35,
          ease: EASE_CURVE
        }}
      >
        Over the years I&apos;ve made a lot of projects! I&apos;ve shared a few for you below.
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsData.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <motion.div
              variants={cardVariants}
              className={cn("rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group cursor-pointer h-full flex flex-col border", theme.bg.card, theme.border.subtle)}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-14 h-14 bg-linear-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20">
                  <project.icon className="text-primary" size={28} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={cn("text-xl font-bold  group-hover:text-primary transition-colors mb-2", theme.text.heading)}>
                    {project.title}
                  </h3>
                  <p className={cn(" text-sm leading-relaxed", theme.text.muted)}>
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  )
}
