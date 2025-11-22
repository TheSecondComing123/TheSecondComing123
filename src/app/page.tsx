import Hero from '@/components/Hero'
import About from '@/components/About'
import GitHubContributions from '@/components/GitHubContributions'
import Competitions from '@/components/Competitions'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <GitHubContributions />
      <Competitions />
      <Footer />
    </main>
  )
}
