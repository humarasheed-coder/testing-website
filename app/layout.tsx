import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

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
        {/* VWO SmartCode - Replace with your actual VWO SmartCode from vwo.com */}
        {/* 
        <Script id="vwo-smartcode" strategy="afterInteractive">
          {`
            window._vwo_code = (function(){
              // Paste your VWO SmartCode here
            })();
          `}
        </Script>
        */}
        {children}
      </body>
    </html>
  )
}

