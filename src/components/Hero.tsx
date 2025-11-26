'use client';

import { motion } from 'framer-motion';
import { containerVariantsWithDelay, itemVariants } from '@/constants/animations';
import { cn, theme } from '@/lib/theme';

export default function Hero() {
  return (
    <section className={cn('pt-32 pb-0 flex items-center justify-center', theme.bg.page)}>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariantsWithDelay}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className={cn('text-5xl md:text-7xl font-bold mb-6', theme.text.heading)}
          variants={itemVariants}
        >
          Hi, I&apos;m <span className="text-green-600">Alan Bagel</span>
        </motion.h1>
        <motion.p
          className={cn('text-xl md:text-2xl mb-8', theme.text.body)}
          variants={itemVariants}
        >
          Competitive Programmer • Developer
        </motion.p>
        <motion.p
          className={cn('text-lg leading-relaxed max-w-3xl mx-auto mb-6', theme.text.body)}
          variants={itemVariants}
        >
          I enjoy doing competitive programming and building websites and apps in my free time,
          like this one!
        </motion.p>
      </motion.div>
    </section>
  )
}
