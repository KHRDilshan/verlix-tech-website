"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Star } from "lucide-react"

const testimonials = [
 {
    name: "Dr. (Eng.) Ananda Handunge",
    company: "Global Engineering Solutions (pvt) Ltd",
    role: "Chairman / Chief Executive Officer",
    text:
      "Thank you so much for your outstanding work! Your dedication and effort truly made a difference, and the results speak for themselves. I really appreciate your commitment and the high quality of work done.",
    rating: 5,
    image: "/DrAnanda.webp",
  },
  {
    name: "Odv - Labs",
    company: "France",
    role: "Odv - Labs",
    text:
      "Pour cette première expérience ,j'avoue avoir été plus que convaincu par le professionnalisme et la qualité du travail. Son écoute a mon projet, ses compétences on permis de mener a bien ce travail. N'hésitez pas a lui faire confiance. ( For this first experience, I must say I was more than impressed by the professionalism and quality of the work. His attentiveness to my project and his skills allowed us to successfully complete the work. Don't hesitate to trust him.)",
    rating: 5,
    image: "/professional-product-manager.png",
  },
  {
    name: "Odv - Labs",
    company: "France",
    role: "Odv - Labs",
   text:
      "Je n'es qu'un mot a dire : Bravo.Encore une fois vous avez effectué le travail que souhaite et comme je l'imagine.Merci beaucoup pour ce travail. ( I only have one word to say: Bravo. Once again, you've done the job exactly as I wanted and envisioned it. Thank you so much for this work.)",
    rating: 5,
    image: "/professional-product-manager.png",
  }
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 ">
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
      <section className="mb-20 mt-10 px-4 sm:px-6 lg:px-8">
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
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="text-white/90">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-white/90">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="text-white/90">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3+</div>
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
