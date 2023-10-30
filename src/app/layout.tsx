import './normalize.css'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Özşahin Nakliyat',
  description: 'Özşahin Evden Eve Nakliyat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  //<link rel="preload" href="_next\static\media\6bfb3be2b6ec12f5-s.p.woff2" as="font" type="font/woff2" crossorigin/>
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
