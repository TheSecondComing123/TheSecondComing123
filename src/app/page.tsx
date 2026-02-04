import Hero from '@/components/Hero'
import GitHubContributions from '@/components/GitHubContributions'
import Competitions from '@/components/Competitions'
import Technologies from '@/components/Technologies'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import ErrorBoundary from '@/components/ErrorBoundary'
import { Separator } from '@/components/ui/separator'
import { Container } from '@/components/ui/Container'
import { AnimatedHeading } from '@/components/ui/AnimatedHeading'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Github } from 'lucide-react'

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
        <AnimatedSection>
          <Technologies />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <section id="contact" className="py-16 md:py-20 lg:py-24 bg-neutral-950">
            <Container>
              <AnimatedHeading as="h2" scroll className="text-4xl font-bold text-center mb-12">
                Contact
              </AnimatedHeading>

              <div className="grid gap-4 max-w-2xl mx-auto">
                <Card>
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="font-mono text-neutral-300">jiuprogrammer@gmail.com</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Github className="w-5 h-5 text-primary" />
                      <span className="font-mono text-neutral-300">github.com/TheSecondComing123</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Container>
          </section>
        </AnimatedSection>
        <Footer />
      </main>
    </>
  )
}
