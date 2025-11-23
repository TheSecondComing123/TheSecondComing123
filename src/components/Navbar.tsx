import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#16181d] z-50 border-b border-gray-800" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary" aria-label="Alan Bagel - Home">
            Alan Bagel
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="text-white" aria-label="Navigate to home page">Home</Link>
            <Link href="/about" className="text-white" aria-label="Navigate to about page">About</Link>
            <Link href="/projects" className="text-white" aria-label="Navigate to projects page">Projects</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
