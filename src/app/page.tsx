import Hero from '@/components/Hero'
import GitHubContributions from '@/components/GitHubContributions'
import Competitions from '@/components/Competitions'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import ErrorBoundary from '@/components/ErrorBoundary'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen">
        <Navbar />
        <Hero />
        <AnimatedSection>
          <ErrorBoundary>
            <GitHubContributions />
          </ErrorBoundary>
        </AnimatedSection>
        <Competitions />
        <AnimatedSection delay={0.2}>
          <Contact />
        </AnimatedSection>
        <Footer />
      </main>
    </>
  )
}
