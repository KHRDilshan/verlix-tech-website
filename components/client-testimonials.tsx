"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc",
    role: "CEO",
    message:
      "Verlix Tech transformed our entire digital infrastructure. Their team's expertise in cloud solutions and UI/UX design exceeded our expectations.",
    rating: 5,
    image: "/professional-woman.png",
  },
  {
    name: "Michael Chen",
    company: "InnovateLabs",
    role: "Product Manager",
    message:
      "The 3D design work they did for our product was exceptional. They understood our vision and delivered beyond what we imagined.",
    rating: 5,
    image: "/professional-man.png",
  },
  {
    name: "Emma Rodriguez",
    company: "GrowthCo",
    role: "Marketing Director",
    message:
      "Their digital marketing strategies helped us increase our online presence by 300%. Highly professional and results-driven team.",
    rating: 5,
    image: "/professional-woman-2.png",
  },
  {
    name: "David Park",
    company: "FinanceFlow",
    role: "CTO",
    message:
      "Building our mobile banking app with Verlix Tech was seamless. Their full-stack expertise and attention to security was impressive.",
    rating: 5,
    image: "/professional-man-2.png",
  },
]

export function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from businesses that have partnered with us to achieve their digital transformation goals.
          </p>
        </div>

        <div className="relative">
          {/* Slider content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="p-8 rounded-xl border border-border bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-accent text-accent" />
                      ))}
                    </div>

                    <p className="text-foreground mb-6 leading-relaxed">{testimonial.message}</p>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 p-2 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 p-2 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-accent w-8" : "bg-accent/30 w-2 hover:bg-accent/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
