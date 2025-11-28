'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Toggle } from '@/components/ui/toggle';
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

  return (
    <nav className={cn("fixed w-full z-50 border-b", theme.bg.page, theme.border.default)} aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className={cn("text-2xl font-bold text-primary", theme.font.heading)} aria-label="Alan Bagel - Home">
            Alan Bagel
          </Link>
          <div className="flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/projects" className={navigationMenuTriggerStyle()}>
                    Projects
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/#contact" className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Toggle
              pressed={colorMode === 'dark'}
              onPressedChange={(pressed) => setColorMode(pressed ? 'dark' : 'light')}
              aria-label={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
              className="transition-transform duration-300 hover:scale-110"
            >
              {mounted ? (
                colorMode === 'dark' ? (
                  <Sun className="h-5 w-5 text-primary" />
                ) : (
                  <Moon className="h-5 w-5 text-primary" />
                )
              ) : (
                <Sun className="h-5 w-5 text-primary" />
              )}
            </Toggle>
          </div>
        </div>
      </div>
    </nav>
  );
}
