"use client"

import { Code2, Cable as Cube, Palette, Cloud, TrendingUp, Shield } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web & Mobile App Development",
    description: "Build powerful, scalable applications that drive business growth with cutting-edge technologies.",
    color: "from-primary to-primary/50",
  },
  {
    icon: Cube,
    title: "SolidWorks 3D Design & Modeling",
    description: "Create precision 3D product prototypes and engineering designs that bring your vision to life.",
    color: "from-accent to-accent/50",
  },
  {
    icon: Palette,
    title: "UI/UX Design & Branding",
    description: "Craft beautiful, intuitive digital experiences that captivate and engage your audience.",
    color: "from-primary to-accent",
  },
  {
    icon: Cloud,
    title: "Full-Stack & Cloud Solutions",
    description: "Deploy robust, secure cloud infrastructure that scales with your business needs.",
    color: "from-accent to-primary",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Growth",
    description: "Boost your brand presence with data-driven marketing strategies and proven growth tactics.",
    color: "from-primary/70 to-accent/70",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Protect your digital assets with enterprise-grade security and compliance solutions.",
    color: "from-accent/70 to-primary/70",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Core <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide a comprehensive suite of services to elevate your brand's digital presence and drive innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-2.5 mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
