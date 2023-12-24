import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './ui/footer'

import { Roboto } from 'next/font/google'

const inter = Roboto({ subsets: ['latin'], weight: '300'})

export const metadata: Metadata = {
  title: 'Nick Eisele - Portfolio',
  description: 'Nick Eisele portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <footer><Footer /></footer>
      </body>
    </html>
  )
}
