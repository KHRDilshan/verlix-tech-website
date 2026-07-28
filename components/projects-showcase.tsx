"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Monitor, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Turbotech Engineering (Pvt) Ltd",
    category: "Web Development, Social Media Coverage",
    desktopImage: "/Turbotech.png",
    mobileImage: "/Turbotech-mobile.png",
    link: "https://www.turbotech.lk/",
  },
  {
    id: 2,
    title: "Hunt Me",
    category: "Web Development",
    desktopImage: "/HuntMe.png",
    mobileImage: "/HuntMe-mobile.png",
    link: "https://www.huntme.lk/",
  },
  {
    id: 3,
    title: "SIS Group (Pvt) Ltd Website (Ongoing)",
    category: "Web Development",
    desktopImage: "/sis group.png",
    mobileImage: "/sis group-mobile.png",
    link: "https://www.sisgroup.lk/",
  },
  {
    id: 4,
    title: "Cs Engineering (Pvt) Ltd",
    category: "Full-Stack Dashboard for IOT",
    desktopImage: "/Csengineerings.png",
    mobileImage: "/Csengineering-mobile.png",
    link: "https://www.csengservices.com/",
  },
  {
    id: 5,
    title: "PD Engineering & Academy (Pvt) Ltd",
    category: "Full-Stack Dashboard",
    desktopImage: "/Pdengineering.png",
    mobileImage: "/Pdengineering-mobile.png",
    link: "https://www.pdengineeringacademy.com/",
  },
  {
    id: 6,
    title: "Pink Lotus Residences (Pvt) Ltd",
    category: "Full-Stack Dashboard",
    desktopImage: "/Pinklotus.png",
    mobileImage: "/Pinklotus-mobile.png",
    link: "https://www.pinklotusresidences.lk/",
  },
];

export function ProjectsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = projects.length;

  /*
   * Detect mobile screen.
   * Tailwind's md breakpoint = 768px.
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleScreenChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleScreenChange();

    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  /*
   * Move to a particular slide.
   */
  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;

      setIsTransitioning(true);

      const newIndex = ((index % totalSlides) + totalSlides) % totalSlides;

      setCurrentIndex(newIndex);

      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }

      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 900);
    },
    [totalSlides, isTransitioning],
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  /*
   * Auto play
   */
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isAutoPlaying, nextSlide]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const getCardStyle = (index: number) => {
    let offset = index - currentIndex;

    if (offset > totalSlides / 2) {
      offset -= totalSlides;
    }

    if (offset < -totalSlides / 2) {
      offset += totalSlides;
    }

    const absOffset = Math.abs(offset);
    const isCurrent = offset === 0;

    /*
     * MOBILE
     */
    if (isMobile) {
      const translateX = offset * 82;

      return {
        transform: `
          translateX(${translateX}%)
          scale(${isCurrent ? 1 : 0.88})
        `,
        opacity: absOffset <= 1 ? (isCurrent ? 1 : 0.45) : 0,
        zIndex: isCurrent ? 10 : 5,
        filter: isCurrent ? "grayscale(0%)" : "grayscale(70%) brightness(0.65)",
        transition: "all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        cursor: absOffset <= 1 ? "pointer" : "default",
        pointerEvents: absOffset <= 1 ? ("auto" as const) : ("none" as const),
      };
    }

    /*
     * DESKTOP
     */
    const scale = Math.max(0.7, 1 - 0.15 * absOffset);
    const opacity = Math.max(0.4, 1 - 0.3 * absOffset);
    const translateX = offset * 300;
    const zIndex = totalSlides - absOffset;
    const isVisible = absOffset <= 2;
    const grayscale = isCurrent ? 0 : 100;

    return {
      transform: `
        translateX(${translateX}px)
        scale(${scale})
        rotateY(${offset * -5}deg)
      `,
      opacity: isVisible ? opacity : 0,
      zIndex: isVisible ? zIndex : -1,
      filter: `grayscale(${grayscale}%)`,
      transition: "all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      cursor: isVisible ? "pointer" : "default",
      pointerEvents: isVisible ? ("auto" as const) : ("none" as const),
    };
  };

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}

        <div className="mb-10 text-center md:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5  px-4 py-1.5  backdrop-blur-sm ">
            <Monitor size={14} className="text-accent" />

            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-wider
                text-white/60
              "
            >
              Portfolio
            </span>
          </div>

          <h1
            className="
              mb-4
              bg-gradient-to-r
              from-[#28C28D]
              to-[#26838B]
              bg-clip-text
              font-serif
              text-3xl
              text-transparent
              sm:text-4xl
            "
          >
            Our Projects
          </h1>

          <p
            className="
              mx-auto
              max-w-2xl
              text-sm
              leading-relaxed
              text-white/50
              sm:text-base
            "
          >
            Explore our portfolio — each card shows a preview of our work. Visit
            the project to learn more.
          </p>
        </div>

        {/* ================= CAROUSEL ================= */}

        <div
          className="
            relative
            flex
            h-[560px]
            items-center
            justify-center
            overflow-hidden
            md:h-[420px]
          "
          style={{
            perspective: "1400px",
          }}
        >
          <div
            className="
              relative
              flex
              h-full
              w-full
              items-center
              justify-center
            "
          >
            {projects.map((project, index) => {
              const style = getCardStyle(index);
              const isCurrent = index === currentIndex;

              return (
                <div
                  key={project.id}
                  style={style}
                  onClick={() => goToSlide(index)}
                  className="
                    absolute

                    h-[520px]
                    w-[78vw]
                    max-w-[320px]

                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/40
                    shadow-2xl
                    backdrop-blur-sm

                    md:h-[380px]
                    md:w-[640px]
                    md:max-w-none
                  "
                >
                  <div className="group relative h-full w-full">
                    {/* ===================================
                        DESKTOP SCREENSHOT
                    =================================== */}

                    <Image
                      src={project.desktopImage || "/placeholder.svg"}
                      alt={`${project.title} desktop preview`}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 767px) 1px, 640px"
                      className="
                        hidden
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                        md:block
                      "
                    />

                    {/* ===================================
                        MOBILE SCREENSHOT
                    =================================== */}

                    <Image
                      src={
                        project.mobileImage ||
                        project.desktopImage ||
                        "/placeholder.svg"
                      }
                      alt={`${project.title} mobile preview`}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 767px) 78vw, 1px"
                      className="
                        block
                        object-cover
                        object-top
                        transition-transform
                        duration-700
                        group-hover:scale-105
                        md:hidden
                      "
                    />

                    {/* Dark gradient */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/95
                        via-black/20
                        to-transparent
                      "
                    />

                    {/* ================= PROJECT DETAILS ================= */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        p-4
                        sm:p-5
                      "
                    >
                      <div className="mb-2">
                        <span
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-black/30
                            px-2.5
                            py-1
                            text-[10px]
                            text-white/60
                            backdrop-blur-md
                            sm:text-xs
                          "
                        >
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="
                          mb-2
                          line-clamp-2
                          text-base
                          font-semibold
                          text-white
                          sm:text-lg
                        "
                      >
                        {project.title}
                      </h3>

                      {project.link && project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="
                              inline-flex
                              items-center
                              gap-1.5
                              text-sm
                              font-medium
                              text-accent
                              transition-colors
                              hover:text-accent/80
                            "
                        >
                          Visit Site
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>

                    {/* Active border */}
                    {/* 
                    {isCurrent && (
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          hidden
                          rounded-2xl
                          ring-2
                          ring-accent/70
                          ring-inset
                        "
                      />
                    )} */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= NAVIGATION ================= */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-3
            sm:gap-4
            md:mt-8
          "
        >
          {/* Previous */}

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous project"
            className="
              group
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white/60
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-accent/30
              hover:bg-white/10
              hover:text-white
            "
          >
            <ChevronLeft
              size={18}
              className="
                transition-transform
                group-hover:-translate-x-0.5
              "
            />
          </button>

          {/* Dots */}

          <div className="flex items-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                aria-label={`Go to project ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={`
                  rounded-full
                  transition-all
                  duration-500

                  ${
                    index === currentIndex
                      ? `
                        h-2
                        w-7
                        bg-accent
                        shadow-lg
                        shadow-accent/30
                        sm:w-8
                      `
                      : `
                        h-2
                        w-2
                        bg-white/20
                        hover:bg-white/40
                      `
                  }
                `}
              />
            ))}
          </div>

          {/* Next */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next project"
            className="
              group
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white/60
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-accent/30
              hover:bg-white/10
              hover:text-white
            "
          >
            <ChevronRight
              size={18}
              className="
                transition-transform
                group-hover:translate-x-0.5
              "
            />
          </button>

          {/* Play / Pause */}

          <button
            type="button"
            onClick={() => setIsAutoPlaying((previous) => !previous)}
            aria-label={isAutoPlaying ? "Pause carousel" : "Play carousel"}
            className="
              ml-1
              text-xs
              text-white/30
              transition-colors
              hover:text-white/60
            "
          >
            {isAutoPlaying ? "⏸" : "▶"}
          </button>
        </div>

        {/* ================= CTA ================= */}

        <div
          className="
            mt-16
            rounded-2xl
            border
            border-white/10
            bg-gradient-to-r
            from-accent/5
            via-white/5
            to-accent/5
            p-6
            text-center
            backdrop-blur-sm
            sm:p-10
            md:mt-20
            md:p-12
          "
        >
          <h2
            className="
              mb-3
              text-2xl
              font-bold
              text-white
              sm:text-3xl
            "
          >
            Ready to Start Your Project?
          </h2>

          <p
            className="
              mx-auto
              mb-6
              max-w-2xl
              text-sm
              leading-relaxed
              text-white/50
              sm:text-base
            "
          >
            Let's collaborate to bring your ideas to life. Contact us today to
            discuss your project requirements.
          </p>

          <a
            href="/contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-accent
              px-8
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
              hover:shadow-accent/30
            "
          >
            Get Started
            <ChevronRight
              size={18}
              className="
                transition-transform
                group-hover:translate-x-0.5
              "
            />
          </a>
        </div>
      </div>

      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          top-1/4
          h-96
          w-96
          rounded-full
          bg-accent/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-1/4
          h-96
          w-96
          rounded-full
          bg-accent/5
          blur-3xl
        "
      />
    </section>
  );
}
