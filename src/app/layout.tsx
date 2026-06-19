import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Lijun Zhang - Guzheng Artist & PhD Candidate',
  description: 'Lijun Zhang is a Guzheng performer and PhD candidate at the University of Leeds, serving as a UK-China cultural ambassador.',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Lijun Zhang - Guzheng Artist & PhD Candidate',
    description: 'Guzheng performer and cultural ambassador based in the UK',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="theme-color" content="#1A1A1A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://vimeo.com" />
      </head>
      <body className="bg-brand-dark text-gray-100">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
