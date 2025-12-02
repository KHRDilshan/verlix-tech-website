"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let's talk about your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all">
            <Mail className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">hello@verlix.tech</p>
          </div>
          <div className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all">
            <Phone className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
          <div className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all">
            <MapPin className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">San Francisco, CA</p>
          </div>
        </div>

        {/* <div className="max-w-2xl mx-auto bg-card rounded-xl border border-border p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div> */}
      </div>
    </section>
  )
}
