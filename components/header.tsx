"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
       <header
      className="sticky  z-50 bg-black/40 backdrop-blur-sm  animate-fade-in-down rounded-4xl top-4  w-[98%] justify-center mx-auto shadow-lg border border-white/10"
    >        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
         <Image 
  src="/verlixtech.png"
  alt="Verlix Tech Logo"
  width={40}
  height={40}
  className=" hover:shadow-accent/50 transition-all"
/>

          <span className="font-bold text-xl hidden lg:inline bg-gradient-to-r from-[#1a183c] to-[#26a885] bg-clip-text text-transparent">
            Verlix Tech
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">

          <Link href="/about" className="text-white hover:text-accent transition-colors">
            About
          </Link>
                    <Link href="/services" className="text-white hover:text-accent transition-colors">
            Services
          </Link>
          {/* <Link href="/projects" className="text-foreground hover:text-accent transition-colors">
            Projects
          </Link> */}
          <Link href="/testimonials" className="text-white hover:text-accent transition-colors">
            Testimonials
          </Link>

          <ThemeToggle />
                           <Link href="/contact">

          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-[#28C28D] to-[#26838B] text-white rounded-full hover:opacity-90 transition text-sm font-medium animate-fade-in-right z-50 cursor-pointer">
            Contact us →
          </button>
          </Link>
        </div>

        <button className="md:hidden z-50 cursor-pointer " onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="/services" className="text-foreground hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-foreground hover:text-accent transition-colors">
                Projects
              </Link>
              <Link href="/testimonials" className="text-foreground hover:text-accent transition-colors">
                Testimonials
              </Link>
              <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </Link>

            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
