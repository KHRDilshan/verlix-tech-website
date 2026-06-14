"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Let's discuss how we can help transform your ideas into
            reality.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white mx-auto mb-4">
              <Mail size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <p className="text-foreground/70 mb-2">info@verlixtech.com</p>
            <p className="text-sm text-foreground/60">We'll respond within 24 hours</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white mx-auto mb-4">
              <Phone size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Phone</h3>
            <p className="text-foreground/70 mb-1">+94 77 307 6676</p>
             
            {/* <p className="text-sm text-foreground/60">9AM-6PM EST</p> */}
          </div>

          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white mx-auto mb-4">
              <MapPin size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-foreground/70 mb-2">Gampaha, Sri Lanka</p>
            <p className="text-sm text-foreground/60">Available for remote collaboration</p>
          </div>
        </div>

        {/* Contact Form */}
        {/* <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a service</option>
                  <option value="web-mobile">Web & Mobile App Development</option>
                  <option value="3d-design">SolidWorks 3D Design</option>
                  <option value="ui-ux">UI/UX Design & Branding</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="ai">AI & Automation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div> */}
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on scope and complexity. Most projects range from 4-12 weeks. We provide detailed timelines during the initial consultation.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes, we offer comprehensive support packages including maintenance, updates, and technical assistance after project completion.",
              },
              {
                q: "What is your pricing model?",
                a: "We offer flexible pricing models including fixed-price projects, time-and-materials, and retainer agreements based on your needs.",
              },
              {
                q: "Can you work with existing systems?",
                a: "We specialize in integrating with existing systems and can work with legacy code and infrastructure.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-foreground/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
