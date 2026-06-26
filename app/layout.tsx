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
  title: 'Best Wheels Car Display | Bank Repos & Used Cars in Iloilo City',
  description:
    "Iloilo City's trusted car dealer. Bank repos, 2nd hand, and slightly used cars. Financing available, trade-in accepted, lifetime free check-up. Call 0949 805 1576.",
  keywords: [
    'used cars Iloilo',
    'bank repo cars Philippines',
    '2nd hand cars Iloilo City',
    'car financing Iloilo',
    'Best Wheels Iloilo',
    'Toyota Vios Iloilo',
    'Honda City Iloilo',
    'car dealer Iloilo City',
  ],
  openGraph: {
    title: 'Best Wheels Car Display | Iloilo City',
    description: 'Bank repos, 2nd hand & slightly used cars. Financing available. Call 0949 805 1576.',
    type: 'website',
    locale: 'en_PH',
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
        <RevealInit />
        {children}
      </body>
    </html>
  )
}
