import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

// SEO Metadata - Comprehensive
export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: "Campus Dirasah - منصة خدمات الطلاب المتكاملة",
    template: "%s | Campus Dirasah"
  },
  description: "منصة شاملة لخدمات طلاب الأزهر في مصر. قوائم الإقامة، المستشفيات، السفارات، المنح الدراسية، المكتبة الإلكترونية وأكثر.",
  
  // Keywords for SEO
  keywords: [
    "الأزهر",
    "Campus Dirasah",
    "طلاب الأزهر",
    "قوائم الإقامة",
    "المستشفيات",
    "السفارات",
    "المنح الدراسية",
    "المكتبة الإلكترونية",
    "الجامعات المصرية",
    "خدمات الطلاب",
    "Al-Azhar",
    "Egypt students",
    "scholarships",
    "student services"
  ],
  
  // Authors
  authors: [
    { name: "Campus Dirasah Team" }
  ],
  
  // Creator
  creator: "Campus Dirasah",
  publisher: "Campus Dirasah",
  
  // Robots
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
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    url: 'https://campusdirasah.com',
    title: 'Campus Dirasah - منصة خدمات الطلاب المتكاملة',
    description: 'منصة شاملة لخدمات طلاب الأزهر في مصر',
    siteName: 'Campus Dirasah',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Campus Dirasah'
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Campus Dirasah - منصة خدمات الطلاب المتكاملة',
    description: 'منصة شاملة لخدمات طلاب الأزهر في مصر',
    images: ['/twitter-image.jpg'],
  },
  
  // Verification
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Replace with your code
    // yandex: 'YOUR_YANDEX_CODE',
    // bing: 'YOUR_BING_CODE',
  },
  
  // App Links
  alternates: {
    canonical: 'https://campusdirasah.com',
    languages: {
      'ar-EG': 'https://campusdirasah.com',
      'en-US': 'https://campusdirasah.com/en',
    },
  },
  
  // Category
  category: 'education',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#10b981" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Arabic Font - Tajawal */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&display=swap" 
          rel="stylesheet"
        />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Campus Dirasah",
              "description": "منصة خدمات الطلاب المتكاملة",
              "url": "https://campusdirasah.com",
              "logo": "https://campusdirasah.com/logo.png",
              "sameAs": [
                "https://facebook.com/campusdirasah",
                "https://twitter.com/campusdirasah",
                "https://instagram.com/campusdirasah"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "info@campusdirasah.com"
              }
            })
          }}
        />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Campus Dirasah",
              "url": "https://campusdirasah.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://campusdirasah.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      
      <body 
        className="font-sans antialiased flex flex-col min-h-screen bg-gray-50" 
        suppressHydrationWarning
        style={{ fontFamily: "'Tajawal', sans-serif" }}
      >
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {/* Google Analytics (Optional) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        
        <Providers>
          <TopNav />
          <main className="flex-1 pb-20 lg:pb-0">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
