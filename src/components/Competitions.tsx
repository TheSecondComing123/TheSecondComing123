'use client';

import { Trophy, Award, Medal, CircleStar } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants } from '@/constants/animations';
import { GRID_LAYOUTS } from '@/constants/layout';
import { ICON_SIZE } from '@/constants/ui';
import { cn, theme } from '@/lib/theme';
import { Container } from '@/components/ui/Container';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Card } from '@/components/ui/Card';
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
      <Container>
        <AnimatedHeading as="h2" scroll className="text-4xl font-bold mb-12">
          Competitive Programming
        </AnimatedHeading>
        <motion.div
          className={GRID_LAYOUTS.TWO_COLUMN}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {competitions.map((comp) => (
            <Card
              key={comp.id}
              icon={<comp.icon className="text-primary" size={ICON_SIZE.MD} />}
              iconSize="MD"
              title={comp.title}
              subtitle={comp.rank}
              description={comp.description}
              metadata={comp.period}
              href={comp.url}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
