"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
            V
          </div>
          <span className="font-bold text-xl hidden sm:inline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Verlix Tech
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-foreground hover:text-accent transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-foreground hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/projects" className="text-foreground hover:text-accent transition-colors">
            Projects
          </Link>
          <Link href="#testimonials" className="text-foreground hover:text-accent transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="text-foreground hover:text-accent transition-colors">
            Contact
          </Link>
          <ThemeToggle />
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all">
            Get a Quote
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#services" className="text-foreground hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-foreground hover:text-accent transition-colors">
                Projects
              </Link>
              <Link href="#testimonials" className="text-foreground hover:text-accent transition-colors">
                Testimonials
              </Link>
              <Link href="#contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </Link>
              <div className="flex items-center justify-between">
                <span className="text-foreground">Theme</span>
                <ThemeToggle />
              </div>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg w-full">Get a Quote</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
