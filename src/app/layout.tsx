import type { Metadata } from 'next'
import { Space_Grotesk, Outfit } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' })
const outfit = Outfit({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Alan Bagel',
  description: 'Portfolio of Alan Bagel',
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
