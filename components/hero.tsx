// "use client"

// import { useEffect, useRef } from "react"
// import { ArrowRight, Sparkles } from "lucide-react"
// import { useRouter } from "next/navigation"

// export function Hero() {
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const router = useRouter()
//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     canvas.width = canvas.offsetWidth
//     canvas.height = canvas.offsetHeight

//     const particles: Array<{
//       x: number
//       y: number
//       vx: number
//       vy: number
//       size: number
//       opacity: number
//     }> = []

//     for (let i = 0; i < 50; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.5,
//         vy: (Math.random() - 0.5) * 0.5,
//         size: Math.random() * 2,
//         opacity: Math.random() * 0.5 + 0.2,
//       })
//     }

//     const animate = () => {
//       ctx.fillStyle = "rgba(248, 250, 252, 0.1)"
//       ctx.fillRect(0, 0, canvas.width, canvas.height)

//       particles.forEach((p) => {
//         p.x += p.vx
//         p.y += p.vy

//         if (p.x < 0) p.x = canvas.width
//         if (p.x > canvas.width) p.x = 0
//         if (p.y < 0) p.y = canvas.height
//         if (p.y > canvas.height) p.y = 0

//         ctx.fillStyle = `rgba(26, 188, 156, ${p.opacity})`
//         ctx.beginPath()
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
//         ctx.fill()
//       })

//       requestAnimationFrame(animate)
//     }

//     animate()
//   }, [])

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="animate-slide-down mb-6 inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
//           <Sparkles size={16} className="text-accent" />
//           <span className="text-sm font-medium text-accent">Welcome to Innovation</span>
//         </div>

//         <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//           <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
//             Innovate. Design.
//           </span>
//           <br />
//           <span className="text-foreground">Dominate.</span>
//         </h1>

//         <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
//       Verlix Tech empowers businesses with cutting-edge IT solutions. We blend creativity, engineering precision, and emerging technologies to build intelligent, scalable, and future-ready products that drive growth and innovation.
//  </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//           <button    onClick={() => router.push("/services")} className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2 group">
//             Explore Services
//             <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//           </button>
//           <button onClick={() => router.push("/projects")} className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-all">
//             View Our Work
//           </button>
//         </div>

//         {/* <div className="grid grid-cols-3 gap-4 max-w-md mx-auto text-sm">
//           <div className="p-3 bg-card rounded-lg border border-border">
//             <div className="font-bold text-accent">50+</div>
//             <div className="text-muted-foreground">Projects</div>
//           </div>
//           <div className="p-3 bg-card rounded-lg border border-border">
//             <div className="font-bold text-accent">30+</div>
//             <div className="text-muted-foreground">Clients</div>
//           </div>
//           <div className="p-3 bg-card rounded-lg border border-border">
//             <div className="font-bold text-accent">5+</div>
//             <div className="text-muted-foreground">Years</div>
//           </div>
//         </div> */}
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
//     </section>
//   )
// }


// "use client"

// import { useState } from "react"

// export function Hero() {
//   const videos = ["/Video4.mp4","/Video1.mp4","/Video6.mp4", "/Video2.mp4","/Video3.mp4"]
//   const [currentVideo, setCurrentVideo] = useState(0)

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
//       {/* CARD CONTAINER (fixed size) */}
//       <div className="relative w-[95%] h-[80vh] max-w-8xl rounded-4xl overflow-hidden mt-10">
        
//         {/* VIDEO (fills card height & width) */}
//         <video
//           playsInline
//           muted
//           autoPlay
//           preload="auto"
//           onEnded={() =>
//             setCurrentVideo((prev) => (prev + 1) % videos.length)
//           }
//           key={videos[currentVideo]}
//           className="absolute inset-0 w-full h-full object-top object-cover"
//         >
//           <source src={videos[currentVideo]} type="video/mp4" />
//         </video>

//       </div>
      

//     </section>
//   )
// }


"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const videos = [
    "/Video4.mp4",
    "/Video1.mp4",
    "/Video6.mp4",
    "/Video2.mp4",
    "/Video3.mp4",
  ]

  const captions = [
    "Building the Future with AI",
    "Smart Digital Engineering",
    "Automation Meets Intelligence",
    "Innovate. Design. Dominate.",
    "Technology That Works Together",
  ]

  const [currentVideo, setCurrentVideo] = useState(0)
  const [showText, setShowText] = useState(true)

  // Animate text in/out per video
  useEffect(() => {
    setShowText(true)

    const hideTimer = setTimeout(() => {
      setShowText(false)
    }, 7950) // text visible duration

    return () => clearTimeout(hideTimer)
  }, [currentVideo])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-[95%] h-[80vh] max-w-8xl rounded-3xl overflow-hidden mt-10">

        {/* VIDEO */}
        <video
          playsInline
          muted
          autoPlay
          preload="auto"
          onEnded={() =>
            setCurrentVideo((prev) => (prev + 1) % videos.length)
          }
          key={videos[currentVideo]}
          className="absolute inset-0 w-full h-full object-cover object-top"
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>

        {/* FULL CARD DARK OVERLAY */}
        <div
          className={`absolute inset-0 bg-black/40 z-10
            transition-all duration-700 ease-out
            ${showText ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* CENTERED ANIMATED TEXT */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1
            className={`text-white text-2xl md:text-6xl font-bold tracking-wide text-center
              transition-all duration-700 ease-out
              ${showText ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
            `}
          >
            {captions[currentVideo]}
          </h1>
        </div>

      </div>
    </section>
  )
}
