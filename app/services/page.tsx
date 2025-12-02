"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Code2, Palette, TrendingUp, Cpu } from "lucide-react"

// Service data
const services = [
  {
    id: 1,
    title: "Web & Mobile App Development",
    icon: Code2,
    description: "Build powerful, scalable web and mobile applications tailored to your business needs.",
    features: [
      "Full-stack web development",
      "Native & cross-platform mobile apps",
      "Progressive Web Apps (PWA)",
      "API development & integration",
      "Real-time applications",
      "Performance optimization",
    ],
    technologies: ["React", "Next.js", "Node.js", "Flutter", "React Native", "TypeScript"],
  },
  {
 id: 2,
    title: "SolidWorks 3D modelling & Product design",
    icon: Cpu,
    description: "Professional 3D design and product modeling for engineering and visualization.",
    features: [
      "Product design & prototyping",
      "3D CAD modeling",
      "Technical drawings & documentation",
      "Assembly design",
      "Simulation & analysis",
      "Rendering & visualization",
    ],
    technologies: ["SolidWorks", "CAD", "3D Modeling", "Rendering", "Simulation"],
  },
  {
    id: 3,
    title: "UI/UX Design & Digital Branding",
    icon: Palette,
    description: "Create stunning user experiences and cohesive brand identities.",
    features: [
      "User interface design",
      "User experience research",
      "Wireframing & prototyping",
      "Brand identity design",
      "Design systems",
      "Accessibility compliance",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping", "Design Systems"],
  },
  {
    id: 5,
    title: "Digital Marketing & Brand Growth",
    icon: TrendingUp,
    description: "Strategic marketing solutions to boost your brand presence and growth.",
    features: [
      "SEO optimization",
      "Content marketing",
      "Social media strategy",
      "Email marketing campaigns",
      "Analytics & reporting",
      "Conversion optimization",
    ],
    technologies: ["Google Analytics", "SEO Tools", "Social Media", "Email Marketing", "CRM"],
  },
]

// Memoized Icon Component
const ServiceIcon = React.memo(({ Icon }: { Icon: any }) => (
  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
    <Icon size={28} />
  </div>
))

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />



      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-primary">
            Our Services
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to transform your business and drive innovation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className="group bg-card border border-border rounded-xl p-8 hover:shadow-md hover:shadow-accent/20 transition-transform duration-300 hover:-translate-y-1 will-change-transform"
                >
                  <div className="mb-6">
                    <ServiceIcon Icon={Icon} />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-foreground/70 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                          <span className="text-accent mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's discuss how our services can help you achieve your goals
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
