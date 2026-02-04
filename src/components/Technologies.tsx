'use client';

import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPython, 
  SiPostgresql, 
  SiGit,
  SiDocker,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRust,
  SiCplusplus
} from 'react-icons/si';
import { cn, theme } from '@/lib/theme';
import { Container } from '@/components/ui/Container';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Card } from '@/components/ui/card';

const technologies = [
  { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
  { name: 'Python', icon: SiPython, color: 'text-[#3776AB]' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]' },
  { name: 'Git', icon: SiGit, color: 'text-[#F05032]' },
  { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
  { name: 'C++', icon: SiCplusplus, color: 'text-[#00599C]' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Technologies() {
  return (
    <section id="technologies" className={cn('py-16 md:py-20 lg:py-24', theme.bg.page)}>
      <Container>
        <AnimatedHeading as="h2" scroll className="text-4xl font-bold text-center mb-12">
          Technologies
        </AnimatedHeading>
        
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech) => (
            <motion.div key={tech.name} variants={itemVariants}>
              <Card className={cn(
                "flex flex-col items-center justify-center p-6 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                theme.bg.card,
                theme.border.subtle
              )}>
                <tech.icon className={cn("w-12 h-12 mb-4 transition-colors", tech.color)} />
                <span className={cn("font-medium text-sm md:text-base", theme.text.body)}>
                  {tech.name}
                </span>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
