"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Dr. (Eng.) Ananda Handunge",
    company: "Global Engineering Solutions (pvt) Ltd",
    role: "Chairman / Chief Executive Officer",
    message:
      "Thank you so much for your outstanding work! Your dedication and effort truly made a difference, and the results speak for themselves. I really appreciate your commitment and the high quality of work done.",
    rating: 5,
    image: "/DrAnanda.webp",
  },
  {
    name: "Odv - Labs",
    company: "France",
    role: "Odv - Labs",
    message:
      "Pour cette première expérience ,j'avoue avoir été plus que convaincu par le professionnalisme et la qualité du travail. Son écoute a mon projet, ses compétences on permis de mener a bien ce travail. N'hésitez pas a lui faire confiance. ( For this first experience, I must say I was more than impressed by the professionalism and quality of the work. His attentiveness to my project and his skills allowed us to successfully complete the work. Don't hesitate to trust him.)",
    rating: 5,
    image: "/professional-product-manager.png",
  },
  {
    name: "Odv - Labs",
    company: "France",
    role: "Odv - Labs",
    message:
      "Je n'es qu'un mot a dire : Bravo.Encore une fois vous avez effectué le travail que souhaite et comme je l'imagine.Merci beaucoup pour ce travail. ( I only have one word to say: Bravo. Once again, you've done the job exactly as I wanted and envisioned it. Thank you so much for this work.)",
    rating: 5,
    image: "/professional-product-manager.png",
  }
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
