import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#16181d] z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Alan Bagel
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="text-white">Home</Link>
            <Link href="/projects" className="text-white">Projects</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
