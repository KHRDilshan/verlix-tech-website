"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function Breadcrumb() {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="text-accent hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        <li className="text-muted-foreground">
          <ChevronRight size={16} className="inline" />
        </li>
        <li className="text-foreground">Digital Solutions</li>
      </ol>
    </nav>
  )
}
