'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Palette, Trophy, Gamepad2, Bot, Rocket, Sparkles, Terminal, Globe, Cpu } from 'lucide-react';
import { containerVariants, itemVariants } from '@/constants/animations';
import { cn, theme } from '@/lib/theme';

const skills = [
  {
    id: 'python',
    name: 'Python',
    description: 'Competitive programming, robotics, automation',
    icon: Code,
  },
  {
    id: 'code-golfing',
    name: 'Code Golfing',
    description: 'Code Golf Stack Exchange, assisting in development of Vyxal golfing language',
    icon: Terminal,
  },
  {
    id: 'cpp',
    name: 'C++',
    description: 'Competitive programming, algorithms, data structures',
    icon: Cpu,
  },
  {
    id: 'web',
    name: 'Web Development',
    description: 'Next.js, React, Tailwind CSS, modern frameworks',
    icon: Globe,
  },
  {
    id: 'game-dev',
    name: 'Game Development',
    description: 'GDScript, Godot Engine, hosted on Wechat Mini Games',
    icon: Gamepad2,
  },
  {
    id: 'robotics',
    name: 'Robotics',
    description: 'Pybricks, FLL, object-oriented design',
    icon: Bot,
  },
];

const interests = [
  {
    id: 'competitive-programming',
    title: 'Competitive Programming',
    description: 'I love solving algorithmic challenges and competing in contests like USACO and Codeforces. There\'s something satisfying about finding elegant solutions to complex problems.',
    icon: Trophy,
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Building interactive websites and applications is my passion. I enjoy creating smooth user experiences with modern frameworks and animations.',
    icon: Rocket,
  },
  {
    id: 'game-creation',
    title: 'Game Creation',
    description: 'I\'ve been making games since I was young, including my 2121 game that won 2nd place in a national game jam. I love bringing ideas to life through code.',
    icon: Gamepad2,
  },
  {
    id: 'creative-coding',
    title: 'Creative Coding',
    description: 'From interactive GitHub contribution visualizations to experimental projects, I enjoy blending creativity with programming.',
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20">
        <motion.h1
          className={cn('text-5xl md:text-7xl font-bold mb-6', theme.text.heading)}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          About Me
        </motion.h1>
        <motion.div
          className={cn('text-lg space-y-4 max-w-3xl', theme.text.body)}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p>
            Hi! I&apos;m <span className="text-primary font-semibold">Alan Bagel</span>, a competitive programmer and full-stack developer who loves building things with code.
          </p>
          <p>
            I enjoy tackling algorithmic challenges in competitive programming contests and creating interactive web experiences. Whether it&apos;s optimizing a graph traversal algorithm or designing a smooth user interface, I&apos;m passionate about writing clean, efficient code.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, working on robotics projects, or creating games. I believe in learning by building, and I&apos;m always working on something new.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <motion.h2
          className={cn('text-4xl font-bold mb-12', theme.text.heading)}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                className={cn('rounded-xl p-6 hover:border-primary/30 transition-colors group', theme.bg.card, theme.border.subtle)}
              >
                <div className="w-16 h-16 bg-linear-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mb-4 border border-primary/20 group-hover:border-primary/40 transition-colors">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className={cn('text-xl font-semibold mb-2 group-hover:text-primary transition-colors', theme.text.heading)}>
                  {skill.name}
                </h3>
                <p className={cn('text-sm', theme.text.muted)}>
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Competitive Programming Journey */}
      <section className="py-20">
        <motion.h2
          className={cn('text-4xl font-bold mb-6', theme.text.heading)}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          Competitive Programming Journey
        </motion.h2>
        <motion.p
          className={cn('text-lg mb-12 max-w-3xl', theme.text.body)}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          Competitive programming has been a huge part of my development journey. I&apos;ve competed in various contests and earned recognition at the national level:
        </motion.p>
        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-primary/20 via-primary/40 to-primary/20 -translate-x-1/2 shadow-[0_0_15px_rgba(74,222,128,0.3)]" />

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {/* Item 1 - ACSL (Left) */}
            <motion.div
              variants={itemVariants}
              className="relative grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center"
            >
              {/* Left content */}
              <div className="md:text-right">
                <div className={cn("rounded-xl p-6 inline-block w-full", theme.bg.card, theme.border.subtle)}>
                  <div className="flex items-start gap-4 md:flex-row-reverse md:text-left">
                    <div className="w-12 h-12 bg-linear-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                      <Trophy className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className={cn("text-xl font-semibold  mb-1", theme.text.heading)}>ACSL National Silver</h3>
                      <p className="text-primary text-sm font-medium mb-2">2024</p>
                      <p className={cn(" text-sm", theme.text.muted)}>
                        Earned National Silver ranking in the American Computer Science League, competing against top high school students across the country.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Timeline dot */}
              <div className="hidden md:flex justify-center">
                <div className="w-6 h-6 rounded-full bg-linear-to-br from-primary via-primary to-primary/80 border-[6px] border-[#16181d] relative z-10 shadow-[0_0_20px_rgba(74,222,128,0.5)] animate-pulse" />
              </div>
              {/* Right spacer */}
              <div className="hidden md:block" />
            </motion.div>

            {/* Item 2 - USACO (Right) */}
            <motion.div
              variants={itemVariants}
              className="relative grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center"
            >
              {/* Left spacer */}
              <div className="hidden md:block" />
              {/* Timeline dot */}
              <div className="hidden md:flex justify-center">
                <div className="w-6 h-6 rounded-full bg-linear-to-br from-primary via-primary to-primary/80 border-[6px] border-[#16181d] relative z-10 shadow-[0_0_20px_rgba(74,222,128,0.5)] animate-pulse" />
              </div>
              {/* Right content */}
              <div>
                <div className={cn("rounded-xl p-6", theme.bg.card, theme.border.subtle)}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                      <Code className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className={cn("text-xl font-semibold  mb-1", theme.text.heading)}>USACO Silver Division</h3>
                      <p className="text-primary text-sm font-medium mb-2">2024</p>
                      <p className={cn(" text-sm", theme.text.muted)}>
                        Achieved Silver Division status in the USA Computing Olympiad through strong algorithmic problem-solving and efficient code implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Item 3 - TJIOI (Left) */}
            <motion.div
              variants={itemVariants}
              className="relative grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center"
            >
              {/* Left content */}
              <div className="md:text-right">
                <div className={cn("rounded-xl p-6 inline-block w-full", theme.bg.card, theme.border.subtle)}>
                  <div className="flex items-start gap-4 md:flex-row-reverse md:text-left">
                    <div className="w-12 h-12 bg-linear-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                      <Sparkles className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className={cn("text-xl font-semibold  mb-1", theme.text.heading)}>TJIOI 1st Place Solo</h3>
                      <p className="text-primary text-sm font-medium mb-2">2024 - Beginner Division</p>
                      <p className={cn(" text-sm", theme.text.muted)}>
                        Won first place competing solo in the Thomas Jefferson Invitational Olympiad in Informatics, demonstrating strong individual problem-solving skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Timeline dot */}
              <div className="hidden md:flex justify-center">
                <div className="w-6 h-6 rounded-full bg-linear-to-br from-primary via-primary to-primary/80 border-[6px] border-[#16181d] relative z-10 shadow-[0_0_20px_rgba(74,222,128,0.5)] animate-pulse" />
              </div>
              {/* Right spacer */}
              <div className="hidden md:block" />
            </motion.div>

            {/* Item 4 - CalICO (Right) */}
            <motion.div
              variants={itemVariants}
              className="relative grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center"
            >
              {/* Left spacer */}
              <div className="hidden md:block" />
              {/* Timeline dot */}
              <div className="hidden md:flex justify-center">
                <div className="w-6 h-6 rounded-full bg-linear-to-br from-primary via-primary to-primary/80 border-[6px] border-[#16181d] relative z-10 shadow-[0_0_20px_rgba(74,222,128,0.5)] animate-pulse" />
              </div>
              {/* Right content */}
              <div>
                <div className={cn("rounded-xl p-6", theme.bg.card, theme.border.subtle)}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                      <Cpu className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className={cn("text-xl font-semibold  mb-1", theme.text.heading)}>CalICO 135th Place</h3>
                      <p className="text-primary text-sm font-medium mb-2">2025</p>
                      <p className={cn(" text-sm", theme.text.muted)}>
                        Competed in the California Informatics Olympiad among hundreds of talented participants from across the state.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Interests Section */}
      <section className="py-20">
        <motion.h2
          className={cn("text-4xl font-bold mb-12 ", theme.text.heading)}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          What I Love Doing
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {interests.map((interest) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={interest.id}
                variants={itemVariants}
                className={cn("rounded-xl p-8", theme.bg.card, theme.border.subtle)}
              >
                <div className="w-16 h-16 bg-linear-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-4 border border-primary/20">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className={cn("text-2xl font-semibold  mb-3", theme.text.heading)}>
                  {interest.title}
                </h3>
                <p className={cn(" leading-relaxed", theme.text.body)}>
                  {interest.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <motion.div
          className="bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h2 className={cn("text-3xl md:text-4xl font-bold  mb-4", theme.text.heading)}>
            Want to see what I&apos;ve built?
          </h2>
          <p className={cn("text-lg mb-8 max-w-2xl mx-auto", theme.text.body)}>
            Check out my projects to see some of the things I&apos;ve created, or visit my GitHub to explore my code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              aria-label="View my projects"
            >
              View Projects
            </Link>
            <a
              href="https://github.com/TheSecondComing123"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              aria-label="Visit my GitHub profile"
            >
              Visit GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
