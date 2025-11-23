'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Trophy, Gamepad2, Bot, Rocket, Sparkles, Terminal, Globe, Cpu } from 'lucide-react';
import { containerVariants, itemVariants } from '@/constants/animations';

const skills = [
  {
    id: 'skill-1',
    name: 'Skill Name',
    description: 'Description of your experience with this skill',
    icon: Code,
  },
  {
    id: 'skill-2',
    name: 'Technology',
    description: 'What you use this technology for',
    icon: Terminal,
  },
  {
    id: 'skill-3',
    name: 'Programming Language',
    description: 'Your proficiency and use cases',
    icon: Cpu,
  },
  {
    id: 'skill-4',
    name: 'Framework',
    description: 'Projects built with this framework',
    icon: Globe,
  },
  {
    id: 'skill-5',
    name: 'Tool or Platform',
    description: 'How you leverage this tool',
    icon: Gamepad2,
  },
  {
    id: 'skill-6',
    name: 'Specialty Area',
    description: 'Your expertise in this domain',
    icon: Bot,
  },
];

const interests = [
  {
    id: 'interest-1',
    title: 'Interest or Hobby',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Describe what you enjoy about this activity and how it relates to your work or personal growth.',
    icon: Trophy,
  },
  {
    id: 'interest-2',
    title: 'Another Interest',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Share your passion for this interest and what it brings to your life.',
    icon: Rocket,
  },
  {
    id: 'interest-3',
    title: 'Hobby or Activity',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Explain why this hobby is meaningful to you.',
    icon: Gamepad2,
  },
  {
    id: 'interest-4',
    title: 'Personal Passion',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Detail how this passion influences your approach to challenges.',
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          About Me
        </motion.h1>
        <motion.div
          className="text-lg text-gray-300 space-y-4 max-w-3xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p>
            Hi! I'm <span className="text-primary font-semibold">[Your Name]</span>, a [your role/title] who loves [what you're passionate about].
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Write a few sentences about your background, what drives you, and what makes you unique in your field. This is your chance to tell your story.
          </p>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Share what you do when you're not working, your learning philosophy, or what excites you about the future.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <motion.h2
          className="text-4xl font-bold mb-12 text-white"
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
                className="bg-[#24262e] rounded-xl p-6 border border-gray-800/50 hover:border-primary/30 transition-colors group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-4 border border-primary/20 group-hover:border-primary/40 transition-colors">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-gray-400 text-sm">
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
          className="text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          Achievements & Milestones
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          Here are some placeholder achievements. Replace these with your own accomplishments, awards, certifications, or significant milestones:
        </motion.p>
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            variants={itemVariants}
            className="bg-[#24262e] rounded-xl p-6 border border-gray-800/50"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20 flex-shrink-0">
                <Trophy className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Achievement Title</h3>
                <p className="text-primary text-sm font-medium mb-2">Year</p>
                <p className="text-gray-400 text-sm">
                  Description of this achievement and what it demonstrates about your skills or dedication.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#24262e] rounded-xl p-6 border border-gray-800/50"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20 flex-shrink-0">
                <Code className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Certification or Award</h3>
                <p className="text-primary text-sm font-medium mb-2">Year</p>
                <p className="text-gray-400 text-sm">
                  Details about this certification, award, or recognition and its significance.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#24262e] rounded-xl p-6 border border-gray-800/50"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20 flex-shrink-0">
                <Sparkles className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Competition Result</h3>
                <p className="text-primary text-sm font-medium mb-2">Year - Category</p>
                <p className="text-gray-400 text-sm">
                  Information about a competition you participated in and what you achieved or learned.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#24262e] rounded-xl p-6 border border-gray-800/50"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20 flex-shrink-0">
                <Cpu className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Notable Milestone</h3>
                <p className="text-primary text-sm font-medium mb-2">Year</p>
                <p className="text-gray-400 text-sm">
                  A significant milestone in your journey, such as a project launch or learning achievement.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Interests Section */}
      <section className="py-20">
        <motion.h2
          className="text-4xl font-bold mb-12 text-white"
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
                className="bg-[#24262e] rounded-xl p-8 border border-gray-800/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-4 border border-primary/20">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {interest.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
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
          className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to see more?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore my work, check out my portfolio, or connect with me on your preferred platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              aria-label="View projects"
            >
              View Projects
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              aria-label="Visit profile"
            >
              Visit Profile
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
