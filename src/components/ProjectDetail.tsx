'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projectsData } from '@/constants/projects';
import Link from 'next/link';

import { cn, theme } from '@/lib/theme';
interface ProjectDetailProps {
  projectId: string;
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className={cn("text-4xl font-bold  mb-4", theme.text.heading)}>Project Not Found</h1>
        <p className={cn(" mb-8", theme.text.muted)}>The project you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/projects"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20">
        <motion.div
          className="flex items-start gap-6 mb-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="w-20 h-20 bg-linear-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
            <Icon className="text-primary" size={40} />
          </div>
          <div className="flex-1">
            <h1 className={cn("text-4xl md:text-6xl font-bold  mb-4", theme.text.heading)}>
              {project.title}
            </h1>
            {project.period && (
              <p className="text-primary text-lg font-semibold">{project.period}</p>
            )}
          </div>
        </motion.div>

        {/* Description Section */}
        <motion.div
          className={cn("text-lg  space-y-6 max-w-4xl mb-12", theme.text.body)}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-xl leading-relaxed">{project.description}</p>
          {project.extendedDescription && (
            <p className="leading-relaxed">{project.extendedDescription}</p>
          )}
        </motion.div>

        {/* Technologies Section */}
        {project.technologies && project.technologies.length > 0 && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h2 className={cn("text-2xl font-bold  mb-4", theme.text.heading)}>Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={cn("px-4 py-2 rounded-lg text-primary font-medium", theme.bg.secondary, theme.border.subtle)}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Links Section */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={20} />
              View on GitHub
            </a>
          )}
          <Link
            href="/projects"
            className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors flex items-center gap-2"
          >
            Back to Projects
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
