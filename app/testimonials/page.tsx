"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    image: "/professional-woman-ceo.jpg",
    rating: 5,
    text: "Verlix Tech transformed our vision into a stunning mobile app. Their team was professional, responsive, and delivered beyond our expectations. Highly recommended!",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    image: "/professional-man-product-manager.jpg",
    rating: 5,
    text: "The 3D design and product modeling services were exceptional. They understood our requirements perfectly and delivered detailed CAD models that impressed our entire team.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "BrandBoost Co",
    image: "/professional-woman-marketing-director.jpg",
    rating: 5,
    text: "Their digital marketing strategy increased our online presence significantly. The team was strategic, data-driven, and truly invested in our success.",
  },
  {
    name: "David Thompson",
    role: "CTO",
    company: "CloudFirst Systems",
    image: "/professional-man-cto.jpg",
    rating: 5,
    text: "The cloud infrastructure solutions they provided are robust and scalable. Their technical expertise and attention to security gave us complete peace of mind.",
  },
  {
    name: "Lisa Anderson",
    role: "Founder",
    company: "DesignHub Studio",
    image: "/professional-woman-founder.jpg",
    rating: 5,
    text: "Working with Verlix Tech on our UI/UX design was a game-changer. They created a design system that perfectly aligned with our brand and user needs.",
  },
  {
    name: "James Wilson",
    role: "Operations Manager",
    company: "LogisticsPro",
    image: "/professional-man-operations.jpg",
    rating: 5,
    text: "Their automation solutions streamlined our operations and reduced costs significantly. The implementation was smooth and the support was outstanding.",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb items={[{ label: "Testimonials", href: "/testimonials" }]} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Client Testimonials
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience working with Verlix Tech
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/80 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <p className="text-white/90">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-white/90">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-white/90">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8+</div>
              <p className="text-white/90">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Growing List of Satisfied Clients</h2>
          <p className="text-lg text-foreground/80 mb-8">Ready to experience the Verlix Tech difference?</p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
