import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhyChoose } from "@/components/WhyChoose"
import { ClientTestimonials } from "@/components/client-testimonials"
import { ClientLogos } from "@/components/client-logos"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Services from "@/components/services"

export default function Home() {
  return (
    <>
      <Header />
      {/* <Breadcrumb /> */} 
      <main className="bg-[#181818]">
        <Hero />
        <About />
        <WhyChoose />
        <Services />
        <ClientTestimonials />
        {/* <ClientLogos /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  )
}
