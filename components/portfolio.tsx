"use client"

import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with payment integration",
    image: "/modern-e-commerce-platform-dashboard.jpg",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure banking application with real-time transactions",
    image: "/mobile-banking-app.png",
  },
  {
    title: "3D Product Design",
    category: "SolidWorks Design",
    description: "Precision 3D modeling for industrial products",
    image: "/3d-product-design-cad-model.jpg",
  },
  {
    title: "Brand Identity",
    category: "UI/UX Design",
    description: "Complete branding and design system",
    image: "/modern-brand-identity.png",
  },
  {
    title: "Cloud Infrastructure",
    category: "Cloud Solutions",
    description: "Scalable cloud deployment and management",
    image: "/cloud-infrastructure-dashboard.png",
  },
  {
    title: "Marketing Campaign",
    category: "Digital Marketing",
    description: "Data-driven marketing strategy and execution",
    image: "/digital-marketing-dashboard.png",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6 bg-card">
                <div className="text-sm text-accent font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <button className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-semibold">
                  View Project
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
