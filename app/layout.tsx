import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import 'aos/dist/aos.css'
import 'antd/dist/antd.css'
import '../src/css/tailwind.css'
import '../src/css/mytailwind.css'
import '../src/css/dashboard.css'

export const metadata: Metadata = {
  title: 'welink med app',
  description: 'welink Med platform',
  icons: {
    icon: '/logo192.png',
    apple: '/logo192.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </head>
      <body>
        {children}
        <Script src="https://use.fontawesome.com/cc81e5167f.js" strategy="lazyOnload" />
        <Script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}

