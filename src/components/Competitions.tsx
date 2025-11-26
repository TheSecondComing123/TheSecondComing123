'use client';

import { Trophy, Award, Medal, CircleStar } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, cardVariants, ANIMATION_DURATION, EASE_CURVE } from '@/constants/animations';

import { cn, theme } from '@/lib/theme';
const competitions = [
  {
    id: 'acsl-2024',
    title: 'ACSL',
    rank: 'National Silver',
    icon: Award,
    period: '2024',
    description: 'Achieved National Silver recognition in the American Computer Science League, competing against top high school students across the country in algorithmic problem-solving.',
    url: 'https://www.acsl.org/'
  },
  {
    id: 'usaco-2024',
    title: 'USACO',
    rank: 'Silver Division',
    icon: Trophy,
    period: '2024',
    description: 'Advanced to Silver Division in the USA Computing Olympiad, demonstrating proficiency in algorithms, data structures, and competitive programming techniques.',
    url: 'https://usaco.org/'
  },
  {
    id: 'tjioi-2024',
    title: "TJIOI Beginner Division",
    rank: '1st place solo',
    icon: Medal,
    period: '2024',
    description: 'Secured 1st place in the Beginner Division of the Thomas Jefferson Invitational Olympiad in Informatics, showcasing strong problem-solving skills and coding ability.',
    url: 'https://activities.tjhsst.edu/tjioi/'
  },
  {
    id: 'calico-2025',
    title: 'CalICO',
    rank: '135th place',
    icon: CircleStar,
    period: '2025',
    description: 'Ranked 135th in the California Informatics Olympiad, competing among hundreds of participants in challenging algorithmic contests.',
    url: 'https://calico.cs.berkeley.edu/'
  }
]

export default function Competitions() {
  return (
    <section id="competitions" className={cn("py-20 ", theme.bg.page)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className={cn("text-4xl font-bold mb-12 ", theme.text.heading)}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: ANIMATION_DURATION,
            ease: EASE_CURVE
          }}
        >
          Competitive Programming
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {competitions.map((comp) => (
            <motion.a
              key={comp.id}
              href={comp.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${comp.title} website`}
              variants={cardVariants}
              className={cn("rounded-xl p-6 border hover:border-primary/30 transition-all duration-300 group cursor-pointer block", theme.border.subtle, theme.bg.card)}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-600/20 to-green-600/5 rounded-lg flex items-center justify-center border border-green-600/20">
                  <comp.icon className="text-green-500" size={32} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={cn("text-xl font-bold  group-hover:text-primary transition-colors mb-1", theme.text.heading)}>
                    {comp.title}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {comp.rank}
                  </p>
                  <p className={cn("text-sm  mb-3 uppercase tracking-wide", theme.text.subtle)}>
                    {comp.period}
                  </p>
                  <p className={cn(" leading-relaxed", theme.text.body)}>
                    {comp.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
