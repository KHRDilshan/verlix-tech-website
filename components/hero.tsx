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
    <section className="flex-col min-h-screen flex items-center  justify-center overflow-hidden -mt-20">
        {/* <div className="font-se font-serif bg-gradient-to-r from-[#28C28D] to-[#26838B] bg-clip-text text-transparent  w-[50%]  mb-8 text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-center z-20">
    Transforming Ideas into Intelligent Digital & Engineering Realities
   </div>
      */}
      <div className="relative w-[100%] h-[100vh] max-w-8xl -overflow-hidden ">
   

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

      </div>
    </section>
  )
}
