// "use client"

// import { useEffect, useState } from "react"

// export function Hero() {
//   const videos = [
//     "/Video4.mp4",
//     "/Video1.mp4",
//     "/Video6.mp4",
//     "/Video2.mp4",
//     "/Video3.mp4",
//   ]

//   const [currentVideo, setCurrentVideo] = useState(0)
//   const [showText, setShowText] = useState(true)

//   // Animate text in/out per video
//   useEffect(() => {
//     setShowText(true)

//     const hideTimer = setTimeout(() => {
//       setShowText(false)
//     }, 7950) // text visible duration

//     return () => clearTimeout(hideTimer)
//   }, [currentVideo])

//   return (
//     <section className="flex-col min-h-screen flex items-center  justify-center overflow-hidden -mt-20">
//         {/* <div className="font-se font-serif bg-gradient-to-r from-[#28C28D] to-[#26838B] bg-clip-text text-transparent  w-[50%]  mb-8 text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-center z-20">
//     Transforming Ideas into Intelligent Digital & Engineering Realities
//    </div>
//       */}
//       <div className="relative w-[100%] h-[100vh] max-w-8xl -overflow-hidden ">
   

//         {/* VIDEO */}
//         <video
//           playsInline
//           muted
//           autoPlay
//           preload="auto"
//           onEnded={() =>
//             setCurrentVideo((prev) => (prev + 1) % videos.length)
//           }
//           key={videos[currentVideo]}
//           className="absolute inset-0 w-full h-full object-cover object-top"
//         >
//           <source src={videos[currentVideo]} type="video/mp4" />
//         </video>

//       </div>
//     </section>
//   )
// }


"use client"

import { useEffect, useState, useRef } from "react"

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
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Preload all videos
  useEffect(() => {
    videos.forEach((videoSrc) => {
      const video = document.createElement('video')
      video.src = videoSrc
      video.preload = 'auto'
      video.load()
    })
  }, [])

  // Animate text in/out per video
  useEffect(() => {
    setShowText(true)
    setIsLoading(true)

    const hideTimer = setTimeout(() => {
      setShowText(false)
    }, 7950)

    return () => clearTimeout(hideTimer)
  }, [currentVideo])

  // Handle video loaded
  const handleVideoLoaded = () => {
    setIsLoading(false)
  }

  return (
    <section className="flex-col min-h-screen flex items-center justify-center overflow-hidden -mt-20">
      <div className="relative w-[100%] h-[100vh] max-w-8xl overflow-hidden">
        {/* VIDEO */}
        <video
          ref={videoRef}
          playsInline
          muted
          autoPlay
          preload="auto"
          onEnded={() =>
            setCurrentVideo((prev) => (prev + 1) % videos.length)
          }
          onLoadedData={handleVideoLoaded}
          key={videos[currentVideo]}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>

        {/* Loading Animation */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-black z-10">
            {/* Spinner */}
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 border-4 border-[#28C28D]/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-[#28C28D] border-t-transparent rounded-full animate-spin"></div>
            </div>
            
            {/* Loading Text */}
            <div className="mt-6 flex items-center gap-1">
              <span className="text-gray-600 dark:text-white/70 font-medium text-sm tracking-wider">
                LOADING
              </span>
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-[#28C28D] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 bg-[#28C28D] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-[#28C28D] rounded-full animate-bounce"></span>
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 w-48 h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#28C28D] to-[#26838B] rounded-full animate-pulse w-3/4"></div>
            </div>

            {/* "Verlix Tech" Branding - Now right under the progress bar */}
            <p className="mt-6 text-gray-300 dark:text-white/20 text-sm tracking-[0.3em] font-light">
              VERLIX TECH
            </p>
          </div>
        )}

        {/* Optional: Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    </section>
  )
}