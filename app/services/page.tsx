"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Code2, Palette, Cloud, TrendingUp, Cpu, Zap } from "lucide-react"

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
    title: "SolidWorks 3D Design & Product Modeling",
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
    id: 4,
    title: "Full-Stack & Cloud-Based Solutions",
    icon: Cloud,
    description: "Scalable cloud infrastructure and comprehensive backend solutions.",
    features: [
      "Cloud architecture design",
      "Microservices development",
      "Database design & optimization",
      "DevOps & CI/CD",
      "Serverless solutions",
      "Security & compliance",
    ],
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "PostgreSQL"],
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
  {
    id: 6,
    title: "AI & Automation Solutions",
    icon: Zap,
    description: "Intelligent automation and AI-powered solutions for modern businesses.",
    features: [
      "Machine learning models",
      "AI chatbots & assistants",
      "Process automation",
      "Data analytics",
      "Predictive modeling",
      "Computer vision solutions",
    ],
    technologies: ["Python", "TensorFlow", "OpenAI", "Machine Learning", "Data Science"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }]} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
                  className="group bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
                      <Icon size={28} />
                    </div>
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

                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-white/90 mb-8">Let's discuss how our services can help you achieve your goals</p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
