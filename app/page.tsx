import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { ClientTestimonials } from "@/components/client-testimonials"
import { ClientLogos } from "@/components/client-logos"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"

export default function Home() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main>
        <Hero />
        <Services />
        <About />
        <ClientTestimonials />
        <ClientLogos />
        <Contact />
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
                "@id": "https://verlix.tech/#organization",
                name: "Verlix Tech",
                url: "https://verlix.tech",
                logo: {
                  "@type": "ImageObject",
                  url: "https://verlix.tech/logo.png",
                  width: 40,
                  height: 40,
                },
                description: "Verlix Tech delivers smart, scalable, and creative digital solutions",
                sameAs: [
                  "https://facebook.com/verlixtech",
                  "https://twitter.com/verlixtech",
                  "https://linkedin.com/company/verlixtech",
                  "https://instagram.com/verlixtech",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "Customer Service",
                  telephone: "+1-555-123-4567",
                  email: "hello@verlix.tech",
                  areaServed: "US",
                  availableLanguage: "en",
                },
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "123 Tech Street",
                  addressLocality: "San Francisco",
                  addressRegion: "CA",
                  postalCode: "94105",
                  addressCountry: "US",
                },
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://verlix.tech/#localbusiness",
                name: "Verlix Tech",
                image: "https://verlix.tech/logo.png",
                description: "Digital innovation and technology solutions provider",
                url: "https://verlix.tech",
                telephone: "+1-555-123-4567",
                email: "hello@verlix.tech",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "123 Tech Street",
                  addressLocality: "San Francisco",
                  addressRegion: "CA",
                  postalCode: "94105",
                  addressCountry: "US",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "37.7749",
                  longitude: "-122.4194",
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://verlix.tech/#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://verlix.tech",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Digital Solutions",
                    item: "https://verlix.tech/#services",
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  )
}
