"use client"

const clients = [
  { name: "TechStart Inc", logo: "/tech-company-logo-1.jpg" },
  { name: "InnovateLabs", logo: "/tech-company-logo-2.jpg" },
  { name: "GrowthCo", logo: "/tech-company-logo-3.jpg" },
  { name: "FinanceFlow", logo: "/tech-company-logo-4.jpg" },
  { name: "CloudVision", logo: "/tech-company-logo-5.jpg" },
  { name: "DataSync", logo: "/tech-company-logo-6.jpg" },
]

export function ClientLogos() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Trusted by Leading <span className="text-accent">Companies</span>
          </h2>
          <p className="text-muted-foreground">Join hundreds of businesses using Verlix Tech solutions</p>
        </div>

        <div className="relative w-full overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            .marquee {
              animation: marquee 30s linear infinite;
            }
            .marquee:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="marquee flex gap-8 whitespace-nowrap">
            {/* Duplicate clients for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-lg border border-border bg-card hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group flex-shrink-0 w-40"
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
