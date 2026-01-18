import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
title: {
  default: "Verlix Tech",
  template: "%s | Verlix Tech",
},
  icons:{
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" }
    ],
  },
  description:
    "Verlix Tech delivers smart, scalable, and creative digital solutions. Web & Mobile App Development, SolidWorks 3D modelling & Product design, UI/UX Design, Cloud Solutions, and Digital Marketing.",
  keywords:
    "web development, mobile app development, 3D design, SolidWorks, UI/UX design, cloud solutions, digital marketing, software development, tech startup, app development company, digital transformation, verlix, sri lanka it company, verlixtech sri lanka, verlix tech",
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
    url: "https://www.verlixtech.com/",
    siteName: "Verlix Tech",
    images: [
      {
        url: "https://www.verlixtech.com/og-image.png",
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
    images: ["https://www.verlixtech.com/og-image.png"],
  },
 robots: "index, follow",
  alternates: {
    canonical: "https://www.verlixtech.com/",
  },
  verification: {
    google: "O_3PEqxY_p38gVBzWZODRUczICo6Mo-1V-4v-wbfLeo",
  }
  // verification: {
  //   google: "ERnScZFGanFENVOOM7CCokcgOHQeKIEJpSshBEthzvQ",
  // }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
    function addOrganizationJsonLd() {
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Verlix Tech",
        alternateName: "Verlix Tech",
        description: "Smart, scalable, and innovative digital solutions for web, mobile, and engineering.",
        url: "https://www.verlixtech.com/",
        logo: "https://www.verlixtech.com/og-image.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+94763212835",
          contactType: "customer service",
          availableLanguage: "English",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "NO.51/D, Karaneyekamull, Bemmulla",
          addressLocality: "Gampaha",
          addressCountry: "LK",
          postalCode: "XXXX",
        },
        sameAs: [
          "https://www.linkedin.com/company/verlixtech",
        ],
      }),
    }
  }

  function addWebsiteJsonLd() {
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Verlix Tech",
        alternateName: "Verlix Tech",
        url: "https://www.verlixtech.com/",
        description: "Smart, scalable, and innovative digital solutions for web, mobile, and engineering.",
        publisher: {
          "@type": "Organization",
          name: "Verlix Tech",
          logo: "https://www.verlixtech.com/og-image.png",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.verlixtech.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
        mainEntity: [
          {
            "@type": "WebPage",
            "@id": "https://www.verlixtech.com/contact",
            name: "Contact Us",
            description: "Get in touch with Verlix Tech for innovative digital solutions.",
            url: "https://www.verlixtech.com/contact",
          },
          {
            "@type": "WebPage",
            "@id": "https://www.verlixtech.com/about",
            name: "About Us",
            description: "Learn about Verlix Tech’s vision and digital expertise.",
            url: "https://www.verlixtech.com/about",
          },
          {
            "@type": "WebPage",
            "@id": "https://www.verlixtech.com/services",
            name: "Services",
            description: "Explore the full range of digital services offered by Verlix Tech.",
            url: "https://www.verlixtech.com/services",
          },
        ],
      }),
    }
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        <link rel="canonical" href="https://www.verlixtech.com/" />
                <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="icon" href="/favicon-32x32.png?v=2" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png?v=2" sizes="16x16" />
         <link rel="icon" href="/favicon-192x192.png?v=2" sizes="192x192" />
          <link rel="icon" href="/favicon-512x512.png?v=2" sizes="512x512" />
          <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:site_name" content="Verlix Tech" />
        <meta property="og:url" content="https://www.verlixtech.com/" />
        <meta property="og:title" content="Verlix Tech" />
        <meta property="og:description" content="Smart, scalable, and innovative digital solutions for web, mobile, and engineering." />
        <meta property="og:image" content="https://www.verlixtech.com/Logo.webp" />
        <meta name="google-site-verification" content="O_3PEqxY_p38gVBzWZODRUczICo6Mo-1V-4v-wbfLeo" />
        <link rel="alternate" hrefLang="x-default" href="https://www.verlixtech.com/" />
        <meta name="color-scheme" content="light dark" />
                 <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addOrganizationJsonLd()}
          key="organization-jsonld"
        />
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addWebsiteJsonLd()}
          key="website-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
        "@type": "Organization",
        name: "Verlix Tech",
        alternateName: "Verlix Tech",
        description: "Smart, scalable, and innovative digital solutions for web, mobile, and engineering.",
        url: "https://www.verlixtech.com/",
        logo: "https://www.verlixtech.com/og-image.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+94763212835",
          contactType: "customer service",
          availableLanguage: "English",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "NO.51/D, Karaneyekamull, Bemmulla",
          addressLocality: "Gampaha",
          addressCountry: "LK",
          postalCode: "XXXX",
        },
        sameAs: [
          "https://www.linkedin.com/company/verlixtech",
        ],
            }),
          }}
        />

          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
             "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Verlix Tech",
        alternateName: "Verlix Tech",
        url: "https://www.verlixtech.com/",
        description: "Smart, scalable, and innovative digital solutions for web, mobile, and engineering.",
        publisher: {
          "@type": "Organization",
          name: "Verlix Tech",
          logo: "https://www.verlixtech.com/og-image.png",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.verlixtech.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
        mainEntity: [
          {
            "@type": "WebPage",
            "@id": "https://www.verlixtech.com/contact",
            name: "Contact Us",
            description: "Get in touch with Verlix Tech for innovative digital solutions.",
            url: "https://www.verlixtech.com/contact",
          },
          {
            "@type": "WebPage",
            "@id": "https://www.verlixtech.com/about",
            name: "About Us",
            description: "Learn about Verlix Tech’s vision and digital expertise.",
            url: "https://www.verlixtech.com/about",
          },
          {
            "@type": "WebPage",
            "@id": "https://www.verlixtech.com/services",
            name: "Services",
            description: "Explore the full range of digital services offered by Verlix Tech.",
            url: "https://www.verlixtech.com/services",
          },
        ],
            }),
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.verlixtech.com/"
                },
                {
                  "@type": "ListItem", 
                  position: 2,
                  name: "Contact Us",
                  item: "https://www.verlixtech.com/contact"
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Company Profile",
                  item: "https://www.verlixtech.com/about"
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Services", 
                  item: "https://www.verlixtech.com/services"
                }
              ]
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
