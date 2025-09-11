import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3a5a40' },
    { media: '(prefers-color-scheme: dark)', color: '#588157' }
  ]
}

export const metadata: Metadata = {
  title: {
    default: 'Shared Happy Farm - Organic Farm and Eco-Stay near Pakse, Laos',
    template: '%s | Shared Happy Farm'
  },
  description: 'Nestled on the scenic Bolaven Plateau, our farm thrives in cool mountain air and nutrient-rich volcanic soil—perfect for growing coffee, avocados, passionfruit, and a variety of other fruits and vegetables. We set out on this journey with a simple goal: to cultivate a more sustainable, fulfilling life while sharing the beauty of farm life in Laos with visitors.',
  keywords: [
    'organic farm Laos',
    'eco-stay Bolaven Plateau',
    'farm accommodation Pakse',
    'sustainable tourism Laos',
    'farm-to-table restaurant',
    'bungalow accommodation Champasak',
    'waterfall trekking tours',
    'volunteer farm work',
    'coffee farm experience',
    'backpacker hostel Laos',
    'eco-lodge Bolaven',
    'organic vegetables',
    'permaculture farm',
    'nature retreat Laos'
  ],
  authors: [{ name: 'Shared Happy Farm' }],
  creator: 'Shared Happy Farm',
  publisher: 'Shared Happy Farm',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.sharedhappyfarm.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Shared Happy Farm',
    title: 'Shared Happy Farm - Organic Farm and Eco-Stay near Pakse, Laos',
    description: 'Experience sustainable farm life on the Bolaven Plateau. Stay in our eco-friendly bungalows, enjoy farm-to-table meals, and explore untouched waterfalls in Laos.',
    url: 'https://www.sharedhappyfarm.com/',
    images: [
      {
        url: '/images/aerial_view.jpeg',
        width: 1200,
        height: 630,
        alt: 'Aerial view of Shared Happy Farm on the Bolaven Plateau'
      }
    ],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shared Happy Farm - Organic Farm and Eco-Stay near Pakse, Laos',
    description: 'Experience sustainable farm life on the Bolaven Plateau. Stay in our eco-friendly bungalows, enjoy farm-to-table meals, and explore untouched waterfalls in Laos.',
    images: ['/images/aerial_view.jpeg']
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Shared Happy Farm',
  description: 'Organic farm and eco-stay on the Bolaven Plateau near Pakse, Laos offering sustainable accommodation and farm-to-table experiences.',
  url: 'https://www.sharedhappyfarm.com/',
  telephone: '+856-20-9282-3908',
  email: 'info@sharedhappyfarm.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'LA',
    addressRegion: 'Champasak Province',
    addressLocality: 'Bolaven Plateau'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '15.287082175916206',
    longitude: '106.32394992505432'
  },
  image: [
    'https://www.sharedhappyfarm.com/images/aerial_view.jpeg',
    'https://www.sharedhappyfarm.com/images/family-bungalow.JPG',
    'https://www.sharedhappyfarm.com/images/gardenview.jpeg'
  ],
  priceRange: '120,000 - 370,000 LAK',
  servesCuisine: 'Farm-to-table, Organic, Vegetarian',
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Organic Farm Tours',
      value: 'true'
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Waterfall Trekking',
      value: 'true'
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Farm-to-table Dining',
      value: 'true'
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Volunteer Programs',
      value: 'true'
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Free WiFi',
      value: 'false'
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Parking',
      value: 'true'
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Restaurant',
      value: 'true'
    }
  ],
  accommodation: [
    {
      '@type': 'Accommodation',
      name: 'Family Bungalow',
      description: 'Cozy bungalow with farm views and attached bathroom for up to 4 guests',
      occupancy: {
        '@type': 'QuantitativeValue',
        maxValue: 4
      },
      offers: {
        '@type': 'Offer',
        price: '370000',
        priceCurrency: 'LAK'
      }
    },
    {
      '@type': 'Accommodation',
      name: 'Standard Bungalow',
      description: 'Bungalow with shared bathroom for up to 2 guests',
      occupancy: {
        '@type': 'QuantitativeValue',
        maxValue: 2
      },
      offers: {
        '@type': 'Offer',
        price: '270000',
        priceCurrency: 'LAK'
      }
    },
    {
      '@type': 'Accommodation',
      name: 'Dormitory',
      description: 'Shared dormitory style accommodation',
      offers: {
        '@type': 'Offer',
        price: '120000',
        priceCurrency: 'LAK'
      }
    }
  ],
  sameAs: [
    'https://www.instagram.com/shared_happy_farm/',
    'https://www.tiktok.com/@sharedhappyfarm',
    'https://www.facebook.com/p/ສວນປັນສຸກ-Shared-happy-Farm-100063266675817/'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.instagram.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; frame-src https://www.google.com https://www.instagram.com; connect-src 'self' https:;" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
