import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Verlix Tech — The Elixir of Digital Innovation",
  description:
    "Verlix Tech delivers smart, scalable, and creative digital solutions. Web & Mobile App Development, SolidWorks 3D Design, UI/UX Design, Cloud Solutions, and Digital Marketing.",
  keywords:
    "web development, mobile app development, 3D design, SolidWorks, UI/UX design, cloud solutions, digital marketing, software development, tech startup, app development company, digital transformation",
  authors: [{ name: "Verlix Tech" }],
  creator: "Verlix Tech",
  publisher: "Verlix Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Verlix Tech — The Elixir of Digital Innovation",
    description: "Transform ideas into intelligent digital and engineering realities",
    type: "website",
    locale: "en_US",
    url: "https://verlix.tech",
    siteName: "Verlix Tech",
    images: [
      {
        url: "https://verlix.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Verlix Tech - Digital Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verlix Tech — The Elixir of Digital Innovation",
    description: "Transform ideas into intelligent digital and engineering realities",
    creator: "@verlixtech",
    images: ["https://verlix.tech/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://verlix.tech",
  },
  verification: {
    google: "google-site-verification-code",
  },
  colorScheme: "light dark",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1a2a5e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Security Headers */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.vercel-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://cdn.vercel-analytics.com;"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://verlix.tech" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.vercel-analytics.com" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
