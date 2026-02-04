"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Trophy,
  Gamepad2,
  Bot,
  Rocket,
  Sparkles,
  Terminal,
  Globe,
  Cpu,
} from "lucide-react";
import { containerVariants, itemVariants } from "@/constants/animations";
import {
  ANIMATION_DURATION,
  ANIMATION_DELAY,
  ANIMATION_OFFSET,
  VIEWPORT_CONFIG,
} from "@/constants/animation-values";
import { EASE_CURVE } from "@/constants/animations";
import { GRID_LAYOUTS } from "@/constants/layout";
import { ICON_SIZE } from "@/constants/ui";
import { cn, theme } from "@/lib/theme";
import { Container } from "@/components/ui/Container";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/button";

const skills = [
  {
    id: "python",
    name: "Python",
    description: "Competitive programming, robotics, automation",
    icon: Code,
  },
  {
    id: "code-golfing",
    name: "Code Golfing",
    description:
      "Code Golf Stack Exchange, assisting in development of Vyxal golfing language",
    icon: Terminal,
  },
  {
    id: "cpp",
    name: "C++",
    description: "Competitive programming, algorithms, data structures",
    icon: Cpu,
  },
  {
    id: "web",
    name: "Web Development",
    description: "Next.js, React, Tailwind CSS, modern frameworks",
    icon: Globe,
  },
  {
    id: "game-dev",
    name: "Game Development",
    description: "GDScript, Godot Engine, hosted on Wechat Mini Games",
    icon: Gamepad2,
  },
  {
    id: "robotics",
    name: "Robotics",
    description: "Pybricks, FLL, object-oriented design",
    icon: Bot,
  },
];

const interests = [
  {
    id: "competitive-programming",
    title: "Competitive Programming",
    description:
      "Solving algorithmic challenges and competing in contests like USACO and Codeforces.",
    icon: Trophy,
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Building interactive websites and applications with modern frameworks.",
    icon: Rocket,
  },
  {
    id: "game-creation",
    title: "Game Creation",
    description:
      "Making games since I was young. My 2121 game won 2nd place in a national game jam.",
    icon: Gamepad2,
  },
  {
    id: "creative-coding",
    title: "Creative Coding",
    description:
      "Interactive GitHub contribution visualizations and experimental projects.",
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <Container>
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <AnimatedHeading
          as="h1"
          className="text-5xl md:text-7xl font-bold mb-8"
          delay={ANIMATION_DELAY.SHORT}
        >
          About Me
        </AnimatedHeading>
        <motion.div
          className={cn(
            "text-lg space-y-4 max-w-3xl",
            theme.font.body,
            theme.text.body,
          )}
          initial={{ opacity: 0, y: ANIMATION_OFFSET.Y_LARGE }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION_DURATION.SLOW,
            delay: ANIMATION_DELAY.MEDIUM,
            ease: EASE_CURVE,
          }}
        >
          <p>
            Hi! I&apos;m{" "}
            <span className="text-primary font-semibold">Alan Bagel</span>, a
            competitive programmer and full-stack developer.
          </p>
          <p>
            I do competitive programming contests and build web applications. I
            write algorithms and design interfaces.
          </p>
          <p>
            When I&apos;m not coding, I work on robotics projects and create
            games.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <AnimatedHeading as="h2" scroll className="text-4xl font-bold mb-12">
          Skills & Technologies
        </AnimatedHeading>
        <motion.div
          className={GRID_LAYOUTS.THREE_COLUMN_RESPONSIVE}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG.SMALL_AMOUNT}
        >
          {skills.map((skill) => (
            <ProjectCard
              key={skill.id}
              icon={<skill.icon className="text-primary" size={ICON_SIZE.MD} />}
              iconSize="MD"
              title={skill.name}
              description={skill.description}
              enableHover={false}
            />
          ))}
        </motion.div>
      </section>

      {/* Competitive Programming Journey */}
      <section className="py-16 md:py-20 lg:py-24">
        <AnimatedHeading as="h2" scroll className="text-4xl font-bold mb-6">
          Competitive Programming Journey
        </AnimatedHeading>
        <motion.p
          className={cn("text-lg mb-12 max-w-3xl", theme.text.body)}
          initial={{ opacity: 0, y: ANIMATION_OFFSET.Y_LARGE }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG.DEFAULT}
          transition={{
            duration: ANIMATION_DURATION.SLOW,
            delay: ANIMATION_DELAY.SHORT,
            ease: EASE_CURVE,
          }}
        >
          Contest results and achievements:
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
          <div className="space-y-6 md:space-y-12">
            {/* Item 1 - ACSL (Left) */}
            <motion.div
              variants={itemVariants}
              className="relative grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center"
            >
              {/* Left content */}
              <div className="md:text-right">
                <div
                  className={cn(
                    "rounded-xl p-6 inline-block w-full",
                    theme.bg.card,
                    theme.border.subtle,
                  )}
                >
                  <div className="flex items-start gap-4 md:flex-row-reverse md:text-left">
                    <div className="w-12 h-12 bg-linear-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                      <Trophy className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={cn(
                          "text-xl font-semibold  mb-1",
                          theme.font.heading,
                          theme.text.heading,
                        )}
                      >
                        ACSL National Silver
                      </h3>
                      <p
                        className={cn(
                          "text-primary text-sm font-medium mb-2",
                          theme.font.body,
                        )}
                      >
                        2024
                      </p>
                      <p
                        className={cn(
                          " text-sm",
                          theme.font.body,
                          theme.text.muted,
                        )}
                      >
                        National Silver ranking in the American Computer Science
                        League.
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
              className="relative grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center"
            >
              {/* Left spacer */}
              <div className="hidden md:block" />
              {/* Timeline dot */}
              <div className="hidden md:flex justify-center">
                <div className="w-6 h-6 rounded-full bg-linear-to-br from-primary via-primary to-primary/80 border-[6px] border-[#16181d] relative z-10 shadow-[0_0_20px_rgba(74,222,128,0.5)] animate-pulse" />
              </div>
              {/* Right content */}
              <div>
                <div
                  className={cn(
                    "rounded-xl p-6",
                    theme.bg.card,
                    theme.border.subtle,
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                      <Code className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3
                        className={cn(
                          "text-xl font-semibold  mb-1",
                          theme.font.heading,
                          theme.text.heading,
                        )}
                      >
                        USACO Silver Division
                      </h3>
                      <p
                        className={cn(
                          "text-primary text-sm font-medium mb-2",
                          theme.font.body,
                        )}
                      >
                        2024
                      </p>
                      <p
                        className={cn(
                          " text-sm",
                          theme.font.body,
                          theme.text.muted,
                        )}
                      >
                        Silver Division in the USA Computing Olympiad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Item 3 - TJIOI (Left) */}
            <motion.div
              variants={itemVariants}
              className="relative grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center"
            >
              {/* Left content */}
              <div className="md:text-right">
                <div
                  className={cn(
                    "rounded-xl p-6 inline-block w-full",
                    theme.bg.card,
                    theme.border.subtle,
                  )}
                >
                  <div className="flex items-start gap-4 md:flex-row-reverse md:text-left">
                    <div className="w-12 h-12 bg-linear-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                      <Sparkles className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={cn(
                          "text-xl font-semibold  mb-1",
                          theme.font.heading,
                          theme.text.heading,
                        )}
                      >
                        TJIOI 1st Place Solo
                      </h3>
                      <p
                        className={cn(
                          "text-primary text-sm font-medium mb-2",
                          theme.font.body,
                        )}
                      >
                        2024 - Beginner Division
                      </p>
                      <p
                        className={cn(
                          " text-sm",
                          theme.font.body,
                          theme.text.muted,
                        )}
                      >
                        First place solo in the Thomas Jefferson Invitational
                        Olympiad in Informatics.
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
              className="relative grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center"
            >
              {/* Left spacer */}
              <div className="hidden md:block" />
              {/* Timeline dot */}
              <div className="hidden md:flex justify-center">
                <div className="w-6 h-6 rounded-full bg-linear-to-br from-primary via-primary to-primary/80 border-[6px] border-[#16181d] relative z-10 shadow-[0_0_20px_rgba(74,222,128,0.5)] animate-pulse" />
              </div>
              {/* Right content */}
              <div>
                <div
                  className={cn(
                    "rounded-xl p-6",
                    theme.bg.card,
                    theme.border.subtle,
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                      <Cpu className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3
                        className={cn(
                          "text-xl font-semibold  mb-1",
                          theme.font.heading,
                          theme.text.heading,
                        )}
                      >
                        CalICO 135th Place
                      </h3>
                      <p
                        className={cn(
                          "text-primary text-sm font-medium mb-2",
                          theme.font.body,
                        )}
                      >
                        2025
                      </p>
                      <p
                        className={cn(
                          " text-sm",
                          theme.font.body,
                          theme.text.muted,
                        )}
                      >
                        135th place in the California Informatics Olympiad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </Container>
  );
}
