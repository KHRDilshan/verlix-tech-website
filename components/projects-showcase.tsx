"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Global Engineering Solutions",
    category: "Web Development , Social Media Coverage",
     description: `
🌐 About GES -
Since 2006, GES has specialized in the import and installation of Electrical & Manual Lifting Hoists, Overhead Cranes, and material handling equipment. They are the exclusive Sri Lankan agent for Black Bear Hoists (Taiwan), with over 600 successful installations across major industries.
`,
    image: "/globalsolutions.webp",
    tags: [],
    link: "https://www.globalengnsolutions.com/",
  },
  {
    id: 2,
    title: "SAGA Engineering (Pvt) Ltd",
    category: "Web Development",
    description: "🌐 About SAGA Engineering - SAGA Engineering specializes in comprehensive mechanical engineering services, including design, installation, and maintenance of industrial equipment. Their expertise spans machinery import & supply, preventive and corrective maintenance, and full project support, ensuring optimal performance and safety.",
    image: "/Saga.webp",
    tags: [],
    link: "https://www.sagaengineering.lk/",
  },
  {
    id: 3,
    title: "SIS Group (Pvt) Ltd Website (Ongoing)",
    category: "Web Development",
    description: "🌐 About SIS Group - SIS Group delivers innovative and sustainable solutions to both domestic and industrial engineering sectors. With years of industry experience, they offer a wide range of products and services to help customers achieve efficiency, sustainability, and cost-effectiveness.",
    image: "/sisgorup.png",
    tags: [],
    link: "#",
  },
  {
    id: 4,
    title: "ODV - Labs",
    category: "Full-Stack Dashboard for IOT Project , real time Weather data analysis",
    description: "The dashboard visualizes real-time weather and environmental data collected from IoT sensors, offering insights through interactive charts, graphs.",
    image: "/odvlab1.webp",
    tags: ["Location - France"],
    link: "#",
  },
    {
    id: 5,
    title: "ODV - Labs",
    category: "Full-Stack Dashboard for IOT Project , Video data analysis, sensor data vizualizaton and real time video stream",
    description: "The dashboard visualizes real-time sensor data vizualizaton, video stream , offering insights through interactive charts, graphs.",
    image: "/odvlab2.jpeg",
    tags: ["Location - France"],
    link: "#",
  },
  {
    id: 6,
    title: "Zion Property Care",
    category: "Brand Identity Design, ",
    description: "Founded in 2024, we're dedicated to revolutionizing property management across Sri Lanka with integrity, transparency, and exceptional service.",
    image: "/zionproperty.png",
    tags: [],
    link: "#",
  },
  // {
  //   id: 7,
  //   title: "Digital Marketing Campaign",
  //   category: "Digital Marketing",
  //   description: "Multi-channel marketing campaign with SEO optimization, social media strategy, and content creation.",
  //   image: "/digital-marketing-campaign-analytics.jpg",
  //   tags: ["SEO", "Social Media", "Content", "Analytics"],
  //   link: "#",
  // },
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
        {/* <div className="mb-12 flex flex-wrap gap-3 justify-center">
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
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
<div
  key={project.id}
  className={`group bg-card rounded-xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 animate-fade-in delay-[${index * 100}ms]`}
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
                    <h3 className="text-xl font-bold text-foreground group-hover:text-[#1a183c] transition-colors">
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
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            Get Started <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
