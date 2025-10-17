"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
    image: "/modern-e-commerce-platform-dashboard.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    id: 2,
    title: "Mobile Fitness App",
    category: "Mobile App Development",
    description: "Cross-platform fitness tracking app with AI-powered workout recommendations and social features.",
    image: "/fitness-app-interface-workout-tracking.jpg",
    tags: ["React Native", "Firebase", "AI/ML"],
    link: "#",
  },
  {
    id: 3,
    title: "3D Product Visualization",
    category: "3D Design & SolidWorks",
    description: "Interactive 3D product configurator for manufacturing company with real-time rendering.",
    image: "/3d-product-visualization-interface.jpg",
    tags: ["Three.js", "SolidWorks", "WebGL"],
    link: "#",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    category: "Full-Stack Solution",
    description: "Enterprise-grade analytics dashboard with real-time data visualization and custom reporting.",
    image: "/analytics-dashboard-charts-graphs.jpg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Recharts"],
    link: "#",
  },
  {
    id: 5,
    title: "Brand Identity Design",
    category: "UI/UX Design",
    description: "Complete brand identity system including logo, color palette, typography, and design guidelines.",
    image: "/brand-identity-design-system.png",
    tags: ["Figma", "Design System", "Branding"],
    link: "#",
  },
  {
    id: 6,
    title: "Cloud Migration Solution",
    category: "Cloud Solutions",
    description: "Seamless migration of legacy systems to cloud infrastructure with zero downtime deployment.",
    image: "/cloud-infrastructure-architecture.jpg",
    tags: ["AWS", "Docker", "Kubernetes", "DevOps"],
    link: "#",
  },
  {
    id: 7,
    title: "AI Chatbot Integration",
    category: "Web Development",
    description: "Intelligent customer support chatbot with natural language processing and multi-language support.",
    image: "/ai-chatbot-interface-conversation.jpg",
    tags: ["Python", "NLP", "React", "OpenAI"],
    link: "#",
  },
  {
    id: 8,
    title: "Digital Marketing Campaign",
    category: "Digital Marketing",
    description: "Multi-channel marketing campaign with SEO optimization, social media strategy, and content creation.",
    image: "/digital-marketing-campaign-analytics.jpg",
    tags: ["SEO", "Social Media", "Content", "Analytics"],
    link: "#",
  },
]

const categories = [
  "All",
  "Web Development",
  "Mobile App Development",
  "3D Design & SolidWorks",
  "UI/UX Design",
  "Full-Stack Solution",
  "Cloud Solutions",
  "Digital Marketing",
]

export function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions, from web applications to 3D designs. Each project represents
            our commitment to excellence and innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
                  >
                    View Project <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm font-semibold text-accent mb-1">{project.category}</p>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life. Contact us today to discuss your project requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            Get Started <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
