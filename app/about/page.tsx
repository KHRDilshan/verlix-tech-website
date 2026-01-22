"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { CheckCircle, Users, Lightbulb, Target } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as partners, ensuring their vision becomes reality.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We maintain the highest standards of quality in every project we undertake.",
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    description: "We deliver on our promises with consistent, dependable service and support.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/10 to-background">
        <div className="max-w-7xl mt-10 mx-auto items-center text-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            About Verlix Tech
          </h1>
          <p className="text-xl text-foreground/80 ">
            We are a forward-thinking technology company dedicated to delivering smart, scalable, and creative digital
            solutions that empower businesses to grow in the modern world.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 mb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
            <p className="text-foreground/80 leading-relaxed">
              To transform ideas into intelligent digital and engineering realities. We combine creativity, precision,
              and technology to deliver meaningful results that help businesses thrive.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-accent">Our Vision</h2>
            <p className="text-foreground/80 leading-relaxed">
              To be the trusted partner for businesses seeking innovative technology solutions that bridge the gap
              between imagination and implementation. We envision a world where technology empowers every business to
              reach its full potential and create lasting impact in their industries.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Verlix Tech?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                desc: "Experienced professionals with deep expertise across multiple technologies and industries.",
              },
              {
                title: "Custom Solutions",
                desc: "Tailored approaches designed specifically for your unique business challenges and goals.",
              },
              {
                title: "Proven Track Record",
                desc: "Successful projects delivered for startups, SMEs, and enterprise-level organizations.",
              },
              {
                title: "24/7 Support",
                desc: "Dedicated support team available to assist you throughout your project journey.",
              },
              {
                title: "Agile Methodology",
                desc: "Flexible, iterative approach ensuring rapid delivery and continuous improvement.",
              },
              {
                title: "Quality Assurance",
                desc: "Rigorous testing and quality checks to ensure excellence in every deliverable.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent to-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Let's Build Something Amazing Together</h2>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
            Start Your Project
          </button>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
