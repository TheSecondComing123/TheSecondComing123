'use client';

import { cn, theme } from '@/lib/theme';

import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className={cn("min-h-screen ", theme.bg.page)}>
      <Navbar />
      <main className="pt-24 pb-20">
        <About />
      </main>
      <Footer />
    </div>
  );
}
