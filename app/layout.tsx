import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { SkipLink } from '@/components/SkipLink'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
})
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://crafterexplorer.co.uk'),
  title: {
    default: 'CrafterExplorer Technology — UK-built USV Command & Control',
    template: '%s — CrafterExplorer Technology',
  },
  description:
    'Advanced USV command and control systems designed and proven in the UK. Enabling remote vessel operations and offshore efficiency. Military-ready.',
  keywords: [
    'USV', 'command and control', 'C2', 'uncrewed surface vessel',
    'autonomous maritime', 'maritime software', 'UK USV',
    'BlueHelm', 'remote operations centre', 'maritime autonomy',
  ],
  authors: [{ name: 'CrafterExplorer Technology Ltd' }],
  creator: 'CrafterExplorer Technology Ltd',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://crafterexplorer.co.uk',
    siteName: 'CrafterExplorer Technology',
    title: 'CrafterExplorer Technology — UK-built USV Command & Control',
    description:
      'Advanced USV command and control systems designed and proven in the UK.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CrafterExplorer Technology',
    description:
      'Advanced USV command and control systems designed and proven in the UK.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <SkipLink />
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        {/* Organization structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CrafterExplorer Technology Ltd',
              alternateName: 'CET',
              url: 'https://crafterexplorer.co.uk',
              logo: 'https://crafterexplorer.co.uk/logos/cet-logo-colour.png',
              email: 'info@crafterexplorer.co.uk',
              sameAs: ['https://www.linkedin.com/company/crafter-explorer-technology'],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Weymouth',
                addressRegion: 'Dorset',
                addressCountry: 'GB',
              },
              description:
                'UK-built command and control software for uncrewed surface vessels.',
              foundingLocation: 'Weymouth, Dorset, United Kingdom',
            }),
          }}
        />
      </body>
    </html>
  )
}
