'use client';

import { cn, theme } from '@/lib/theme';

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'
import AnimatedSection from '@/components/AnimatedSection'

export default function ProjectsPage() {
  return (
    <div className={cn("min-h-screen ", theme.bg.page)}>
      <Navbar />
      <main className="pt-24 pb-20">
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
