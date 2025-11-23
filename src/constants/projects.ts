import { Bot, Gamepad2, Globe, Calculator, LucideIcon } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  extendedDescription?: string;
  period?: string;
  icon: LucideIcon;
  githubUrl?: string;
  technologies?: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing competitive programming achievements, projects, and GitHub contributions with interactive animations.',
    extendedDescription: 'Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Features include an animated GitHub contribution calendar with Game of Life mode, responsive design, server-side rendering, and smooth Framer Motion animations throughout. The site showcases competitive programming achievements, personal projects, and interactive visualizations.',
    period: '2024',
    icon: Globe,
    githubUrl: 'https://github.com/TheSecondComing123/TheSecondComing123',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'solver24',
    title: 'Solver24',
    description: 'Generalized rational 24-game solver optimized with bitmask DP and A-star search algorithm.',
    extendedDescription: 'An efficient solver for the generalized 24 game that uses dynamic programming with bitmask optimization and A-star search heuristics. The solver can find solutions for any target number using a given set of numbers with basic arithmetic operations. Implements state-space pruning and optimal path finding to minimize computation time while guaranteeing solution completeness.',
    period: '2024',
    icon: Calculator,
    githubUrl: 'https://github.com/TheSecondComing123/solver24',
    technologies: ['Python', 'Dynamic Programming', 'A* Search', 'Algorithm Optimization'],
  },
  {
    id: 'fll-robotics-2024',
    title: 'FLL Robotics Code',
    description: 'Used Pybricks to create an object-oriented codebase for my team\'s FLL Robot, achieving state recognition.',
    extendedDescription: 'Developed a modular, object-oriented Python codebase using Pybricks for FIRST LEGO League robotics competition. Implemented autonomous navigation algorithms, precise sensor integration for line following and color detection, and mission-specific routines. The clean architecture allowed for rapid iteration and testing, contributing to state-level recognition.',
    period: '2024',
    icon: Bot,
    githubUrl: 'https://github.com/TheSecondComing123/fll-robotics',
    technologies: ['Python', 'Pybricks', 'Robotics', 'OOP', 'Sensor Integration'],
  },
  {
    id: '2121',
    title: '2121',
    description: 'A game I made when I was 7 for a national Chinese 2-month-long game jam over the summer, winning 2nd place among thousands of participants.',
    extendedDescription: 'Created using Pygame when I was just 7 years old. This project won 2nd place in a highly competitive national Chinese game jam with thousands of participants, showcasing early programming skills and game design creativity. The game was over 1000 lines of Python code, demonstrating impressive complexity and technical ability for a beginner developer.',
    period: 'Early',
    icon: Gamepad2,
    githubUrl: 'https://github.com/TheSecondComing123/2121',
    technologies: ['Python', 'Pygame', 'Game Development'],
  },
];
