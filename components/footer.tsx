"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a183c] text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">VerlixTech</h3>
            <p className="text-primary-foreground/80">
              Transforming ideas into intelligent digital and engineering realities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="#services" className="hover:text-primary-foreground transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-foreground transition-colors">
                  3D Design
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-foreground transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-foreground transition-colors">
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="#about" className="hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-primary-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {/* <a href="#" className="hover:text-primary-foreground/80 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a> */}
              <a href="#" className="hover:text-primary-foreground/80 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              {/* <a href="#" className="hover:text-primary-foreground/80 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-primary-foreground/80 text-sm">
          <p>&copy; {currentYear} Verlix Tech. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-primary-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Verlix Tech",
            url: "https://verlix.tech",
            logo: "https://verlix.tech/logo.png",
            description: "Verlix Tech delivers smart, scalable, and creative digital solutions",
            sameAs: [
              "https://facebook.com/verlixtech",
              "https://twitter.com/verlixtech",
              "https://linkedin.com/company/verlixtech",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Service",
              telephone: "+1-555-123-4567",
              email: "hello@verlix.tech",
            },
          }),
        }}
      />
    </footer>
  )
}
