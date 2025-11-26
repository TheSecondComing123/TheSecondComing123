'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';

import { cn, theme } from '@/lib/theme';
export default function Navbar() {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setColorMode(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // No saved theme, apply default dark theme
      document.documentElement.classList.add('dark');
    }
    setMounted(true);
  }, []);

  // Save theme to localStorage and apply to document
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', colorMode);
      document.documentElement.classList.toggle('dark', colorMode === 'dark');
    }
  }, [colorMode, mounted]);

  const toggleTheme = () => {
    setColorMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className={cn("fixed w-full z-50 border-b", theme.bg.page, theme.border.default)} aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary" aria-label="Alan Bagel - Home">
            Alan Bagel
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/" className={cn("", theme.text.heading)} aria-label="Navigate to home page">Home</Link>
            <Link href="/about" className={cn("", theme.text.heading)} aria-label="Navigate to about page">About</Link>
            <Link href="/projects" className={cn("", theme.text.heading)} aria-label="Navigate to projects page">Projects</Link>
            <button
              type="button"
              onClick={toggleTheme}
              className={cn("p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110", theme.bg.secondary)}
              aria-label={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
            >
              {mounted ? (
                colorMode === 'dark' ? (
                  <Sun className="w-5 h-5 text-primary" />
                ) : (
                  <Moon className="w-5 h-5 text-primary" />
                )
              ) : (
                <Sun className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
