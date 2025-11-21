'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-[#16181d]/95 backdrop-blur-sm z-50 shadow-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Portfolio
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-white hover:text-primary transition-colors">About</Link>
            <Link href="#projects" className="text-white hover:text-primary transition-colors">Projects</Link>
            <Link href="#skills" className="text-white hover:text-primary transition-colors">Skills</Link>
            <Link href="#contact" className="text-white hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="#about" className="block py-2 text-white hover:text-primary transition-colors">About</Link>
            <Link href="#projects" className="block py-2 text-white hover:text-primary transition-colors">Projects</Link>
            <Link href="#skills" className="block py-2 text-white hover:text-primary transition-colors">Skills</Link>
            <Link href="#contact" className="block py-2 text-white hover:text-primary transition-colors">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
