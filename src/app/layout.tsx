import './normalize.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '700', '800'],
  subsets: ['latin'],
  display:'optional',
})

export const metadata: Metadata = {
  title: 'Özşahin Nakliyat',
  description: 'Özşahin Evden Eve Nakliyat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
