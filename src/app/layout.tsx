import type { Metadata } from 'next'
import { Space_Grotesk, Outfit } from 'next/font/google'
import './globals.css'
import { cn, theme } from '@/lib/theme'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk'
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-outfit'
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://alanbagel.com'),
  title: {
    default: 'Alan Bagel - Competitive Programmer & Developer',
    template: '%s | Alan Bagel',
  },
  description:
    'Portfolio of Alan Bagel, a competitive programmer and full-stack developer. ACSL National Silver, USACO Silver Division, TJIOI 1st Place. Specializing in algorithms, web development, and code golfing.',
  keywords: [
    'Alan Bagel',
    'Competitive Programming',
    'USACO',
    'ACSL',
    'Web Development',
    'TypeScript',
    'Next.js',
    'React',
    'Python',
    'Code Golfing',
    'Vyxal',
    'Portfolio',
  ],
  authors: [{ name: 'Alan Bagel' }],
  creator: 'Alan Bagel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Alan Bagel Portfolio',
    title: 'Alan Bagel - Competitive Programmer & Developer',
    description:
      'Portfolio showcasing competitive programming achievements, development projects, and GitHub contributions.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Alan Bagel Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alan Bagel - Competitive Programmer & Developer',
    description:
      'Portfolio showcasing competitive programming achievements, development projects, and GitHub contributions.',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(spaceGrotesk.variable, outfit.variable, theme.bg.page)}>
        {children}
      </body>
    </html>
  )
}
