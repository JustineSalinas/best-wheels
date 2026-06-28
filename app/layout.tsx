import type { Metadata } from 'next'
import { Barlow_Condensed, Nunito } from 'next/font/google'
import RevealInit from '@/components/RevealInit'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const nunito = Nunito({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Best Wheels Car Display | Bank Repo & Used Cars Iloilo City',
  description:
    "Iloilo City's #1 trusted source for bank repo, 2nd hand, and slightly used cars. Toyota, Honda, Nissan, Mitsubishi, Ford, Isuzu, MG, GAC. Financing available through BDO, BPI, Metrobank. Call 0949 805 1576.",
  keywords: [
    'used cars Iloilo',
    'bank repo cars Iloilo',
    '2nd hand cars Iloilo City',
    'car for sale Iloilo',
    'financing used cars Philippines',
    'Best Wheels Iloilo',
    'Toyota Vios for sale Iloilo',
    'Honda City Iloilo',
    'pickup truck for sale Iloilo',
    'Mitsubishi Triton Iloilo',
    'Ford Ranger for sale Iloilo',
    'car dealer Guzman Jesena Iloilo',
  ],
  authors: [{ name: 'Best Wheels Car Display' }],
  creator: 'Best Wheels Car Display',
  openGraph: {
    title: 'Best Wheels Car Display | Bank Repo & Used Cars Iloilo City',
    description:
      'Bank repos, 2nd hand & used cars in Iloilo City. Toyota, Honda, Nissan, Mitsubishi, Ford, Isuzu and more. Financing available. Call 0949 805 1576.',
    type: 'website',
    locale: 'en_PH',
    siteName: 'Best Wheels Car Display',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Wheels Car Display | Iloilo City',
    description: 'Bank repo & used cars. Financing available. Iloilo City.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} ${nunito.variable} font-body antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoDealer',
              name: 'Best Wheels Car Display',
              description: 'Bank repo, 2nd hand, and slightly used cars in Iloilo City',
              telephone: '+639498051576',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Guzman-Jesena St.',
                addressLocality: 'Iloilo City',
                addressRegion: 'Western Visayas',
                postalCode: '5000',
                addressCountry: 'PH',
              },
              url: 'https://bestwheelsiloilo.com',
              sameAs: ['https://www.facebook.com/bestwheelscardisplay'],
            }),
          }}
        />
        <RevealInit />
        {children}
      </body>
    </html>
  )
}
