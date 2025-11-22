import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Alan Bagel - Competitive Programmer & Developer',
  description: 'Portfolio of Alan Bagel, ACSL National Silver and USACO Silver Division competitive programmer. Explore my projects and GitHub contributions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.className} bg-[#16181d]`}>
        {children}
      </body>
    </html>
  )
}
