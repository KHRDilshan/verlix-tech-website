"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

/* Animation variants for cards */
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="mt-0 md:mt-20 relative "
    >
      <div className="absolute inset-0 -z-10 ">
        <div className="absolute top-1/2 left-1/2 w-[70%] h-[600px] bg-teal-400/10 rounded-full blur-3xl animate-floatGlow -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-[70%] h-[400px] bg-indigo-500/10 rounded-full blur-2xl animate-floatGlow2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-[90%] mx-auto"  data-aos="fade-right" data-aos-duration="1000">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,1fr)] md:auto-rows-[160px]">
          <div
            className="md:row-span-1 -mb-10 md:-mb-0 rounded-3xl flex flex-col justify-center text-center md:text-left"
   
          >
            <h2 className="text-3xl font-serif bg-gradient-to-r from-[#28C28D] to-[#26838B] text-transparent bg-clip-text  mb-4">
              Verlix Tech Core Services
            </h2>
            <p className="text-gray-400 text-base md:max-w-sm text-center md:text-left">
              We provide a comprehensive suite of services to elevate your brand’s
              digital presence and drive innovation.
            </p>
          </div>

          <ServiceCard
            title="Web & Mobile App Development"
            desc="High-performance, scalable web and mobile applications built with modern technologies."
            img="/web@mobile.png"
            span="md:row-span-3"
              position="center"
          />

          <ServiceCard
            title="Digital Marketing & Growth"
            desc="Boost your brand presence with data-driven marketing strategies and proven growth tactics."
            img="/marketing2.jpeg"
            span="md:row-span-2"
              position="right"
          />
          <ServiceCard
            title="UI/UX Design & Branding"
            desc="Craft beautiful, intuitive digital experiences that captivate and engage your audience."
            img="/uiux.jpeg"
            span="md:row-span-1"
             position="left"
          />
          <ServiceCard
            title="SolidWorks 3D Modelling"
            desc="Professional 3D design and product modeling for engineering and visualization."
            img="/3dworks.jpeg"
            span="md:row-span-1"
            position="right"
          />
          <ServiceCard
            title="Full-Stack & Cloud Solutions"
            desc="End-to-end full-stack development with secure, scalable cloud infrastructure."
            img="/fullstack.png"
            span="md:row-span-1"
             position="left"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  desc,
  img,
  span,
  position, // "left" | "right" | "center"
}: {
  title: string;
  desc: string;
  img: string;
  span: string;
  position: "left" | "right" | "center";
}) {
  // Determine AOS animation based on position
  let aosAnimation = "fade-up";
  if (position === "left") aosAnimation = "fade-right";
  else if (position === "right") aosAnimation = "fade-right";

  return (
    <div
      className={`relative  group overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-end transition-all duration-500 hover:border-teal-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.15)] ${span}`}
      data-aos={aosAnimation}
      data-aos-duration="1000"
    >
      <div className="absolute inset-0">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover object-bottom grayscale group-hover:grayscale-0 transition duration-700 scale-105 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 text-white">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
