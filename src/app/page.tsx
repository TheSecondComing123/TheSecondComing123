import Hero from '@/components/Hero'
import GitHubContributions from '@/components/GitHubContributions'
import Competitions from '@/components/Competitions'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AnimatedSection>
        <GitHubContributions />
      </AnimatedSection>
      <Competitions />
      <AnimatedSection delay={0.2}>
        <Footer />
      </AnimatedSection>
    </main>
  )
}
