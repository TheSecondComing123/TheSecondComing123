'use client';

import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#16181d]">
      <Navbar />
      <main className="pt-24 pb-20">
        <About />
      </main>
      <AnimatedSection delay={0.3}>
        <Footer />
      </AnimatedSection>
    </div>
  );
}
