import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { VWOScript } from 'vwo-smartcode-nextjs'

export const metadata: Metadata = {
  title: 'Testing Website - VWO Testing',
  description: 'A simple testing website for VWO experiments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* VWO SmartCode - Must be in body for Next.js App Router */}
        <VWOScript accountId="1180999" />
        {children}
      </body>
    </html>
  )
}

