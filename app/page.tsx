import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { ClientTestimonials } from "@/components/client-testimonials"
import { ClientLogos } from "@/components/client-logos"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export default function Home() {
  return (
    <>
      <Header />
      {/* <Breadcrumb /> */} 
      <main className="">
        <Hero />
        <Services />
        <About />
        <ClientTestimonials />
        <ClientLogos />
        {/* <Contact /> */}
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.verlixtech.com/#organization",
                name: "Verlix Tech",
                url: "https://www.verlixtech.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.verlixtech.com/logo.png",
                  width: 120,
                  height: 120,
                },
                description:
                  "Verlix Tech delivers smart, scalable, and creative digital solutions in Web & Mobile App Development, 3D Design, UI/UX Design, Cloud Solutions, and Digital Marketing.",
                sameAs: [
                  "https://linkedin.com/company/verlixtech",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "Customer Service",
                  telephone: "+94-763212835",
                  email: "info.verlixtech@gmail.com",
                  areaServed: "LK",
                  availableLanguage: "English",
                },
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "NO.51/D, Karaneyekamull, Bemmulla",
                  addressLocality: "Gampaha",
                  addressRegion: "Western Province",
                  postalCode: "XXXX",
                  addressCountry: "LK",
                },
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://www.verlixtech.com/#localbusiness",
                name: "Verlix Tech",
                image: "https://www.verlixtech.com/og-image.png",
                description: "Digital innovation and technology solutions provider",
                url: "https://www.verlixtech.com",
                telephone: "+94-XXXXXXXXX",
                email: "info.verlixtech@gmail.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "NO.51/D, Karaneyekamull, Bemmulla",
                  addressLocality: "Gampaha",
                  addressRegion: "Western Province",
                  postalCode: "XXXX",
                  addressCountry: "LK",
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.verlixtech.com/#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.verlixtech.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "About",
                    item: "https://www.verlixtech.com/about",
                  },
                                    {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://www.verlixtech.com/services",
                  }
                ],
              },
            ],
          }),
        }}
      />
    </>
  )
}
