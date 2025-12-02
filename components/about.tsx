"use client"

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="text-accent">Verlix Tech</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              At Verlix Tech, our mission is to transform ideas into intelligent digital and engineering realities.
              We're a forward-thinking technology company dedicated to delivering smart, scalable, and creative digital
              solutions that empower businesses to grow in the modern world.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Whether it's building a powerful Web / mobile apps, designing a 3D product prototype, or boosting your brand
              presence online — we're here to make it happen. We believe in combining creativity, precision, and
              technology to deliver meaningful results that help businesses thrive.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-foreground">Expert team with 24/7h support </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-foreground">Proven track record with successful projects</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-foreground">Commitment to innovation and excellence</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <div className="space-y-6">
                <div className="p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-accent mb-2">5+</div>
                  <div className="text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-accent mb-2">5+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
