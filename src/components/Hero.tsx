'use client';

import { motion } from 'framer-motion';
import { containerVariantsWithDelay, itemVariants } from '@/constants/animations';
import { cn, theme } from '@/lib/theme';
import { Container } from '@/components/ui/Container';

export default function Hero() {
  return (
    <section className={cn('pt-32 pb-0 flex items-center justify-center', theme.bg.page)}>
      <Container>
        <motion.div
          className="text-center"
          variants={containerVariantsWithDelay}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className={cn('text-5xl md:text-7xl font-bold mb-6', theme.font.heading, theme.text.heading)}
            variants={itemVariants}
          >
            Hi, I&apos;m <span className="text-primary">Alan Bagel</span>
        </motion.h1>
        <motion.p
          className={cn('text-xl md:text-2xl mb-8', theme.font.body, theme.text.body)}
          variants={itemVariants}
        >
          Competitive Programmer • Developer
        </motion.p>
        <motion.p
          className={cn('text-lg leading-relaxed max-w-3xl mx-auto mb-6', theme.font.body, theme.text.body)}
          variants={itemVariants}
        >
          I enjoy doing competitive programming and building websites and apps in my free time,
          like this one!
        </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}
