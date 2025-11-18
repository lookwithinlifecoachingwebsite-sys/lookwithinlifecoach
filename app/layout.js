import { Asap } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const asap = Asap({
  weight: ['400', '500', '600'],
  subsets: ["latin"],
  variable: "--font-asap",
});

export const metadata = {
  title: "Look Within Life Coaching | Professional Life Coach & Transformational Coaching Services",
  description: "Transform your life with personalized coaching from certified John Maxwell coach Shelia Malcolm. Individual coaching, group coaching, corporate services, and leadership development programs.",
  keywords: "life coaching, transformational coaching, John Maxwell coach, individual coaching, group coaching, corporate coaching, leadership development, career transition, work-life balance, personal growth, Shelia Malcolm",
  authors: [{ name: "Look Within Life Coaching LLC" }],
  creator: "Look Within Life Coaching LLC",
  publisher: "Look Within Life Coaching LLC",
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lookwithinlifecoaching.com',
    siteName: 'Look Within Life Coaching',
    title: 'Look Within Life Coaching | Professional Life Coach & Transformational Coaching',
    description: 'Transform your life with personalized coaching from certified John Maxwell coach Shelia Malcolm. Individual coaching, group coaching, and corporate services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Look Within Life Coaching',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Look Within Life Coaching | Professional Life Coach & Transformational Coaching',
    description: 'Transform your life with personalized coaching from certified John Maxwell coach Shelia Malcolm.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://lookwithinlifecoaching.com',
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Look Within Life Coaching LLC",
    "description": "Professional life coaching and transformational coaching services",
    "url": "https://lookwithinlifecoaching.com",
    "telephone": "866-280-4175",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "founder": {
      "@type": "Person",
      "name": "Shelia Malcolm",
      "jobTitle": "CEO and Life Coach",
      "description": "Certified John Maxwell Transformational Life Coach"
    },
    "areaServed": "United States",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Coaching Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Individual Coaching",
            "description": "One-on-one personalized coaching sessions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Group Coaching",
            "description": "90-day group coaching programs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Services",
            "description": "Employee coaching and corporate wellness programs"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/lookwithinlifecoaching",
      "https://www.youtube.com/channel/UC8pG8q-aKP9Oxox4zzPx7zg",
      "https://www.instagram.com/lookwithinu/?hl=en",
      "https://www.linkedin.com/in/sheliamalcolm/"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=4" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico?v=4" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico?v=4" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={asap.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
