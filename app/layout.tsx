import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { EB_Garamond, DM_Sans } from 'next/font/google'


export const customHeadingFont = EB_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--custom-heading-font',
})

/* Custom font example: */
// export const customBodyFont = DM_Sans({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--custom-body-font',
//   display: 'swap'
// })


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Luke Melas-Kyriazi',
    template: '%s | Luke Melas-Kyriazi',
  },
  description: 'I\'m a Rhodes Scholar and PhD student at Oxford University. My research spans machine learning, computer vision, and natural language processing.',
  openGraph: {
    title: 'Luke Melas-Kyriazi',
    description: 'I\'m a Rhodes Scholar and PhD student at Oxford University. My research spans machine learning, computer vision, and natural language processing.',
    url: baseUrl,
    siteName: 'Luke Melas-Kyriazi',
    locale: 'en_US',
    type: 'website',
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      {/* Custom font example: */}
      <body className="antialiased max-w-3xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
