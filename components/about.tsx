"use client";
import Image from "next/image";
import heroImage from "../public/Whisk_ea7d50eec570b43a7ea485c09d72fba3dr.png";
import { useState, useEffect, useRef } from "react";

export function About() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [shadow, setShadow] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  // Automatic floating animation
  useEffect(() => {
    let frame: number;
    let angle = 0;

    const animate = () => {
      if (!isHovering) {
        const rotateX = Math.sin(angle) * 5; // max 5deg
        const rotateY = Math.cos(angle) * 5;

        const shadowX = -Math.cos(angle) * 15;
        const shadowY = -Math.sin(angle) * 15;

        setRotation({ x: rotateX, y: rotateY });
        setShadow({ x: shadowX, y: shadowY });

        angle += 0.02; // animation speed
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isHovering]);

  // Mouse hover tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 30; // max 10deg
    const rotateX = -((y - centerY) / centerY) * 30;

    const shadowX = -((x - centerX) / centerX) * 20;
    const shadowY = -((y - centerY) / centerY) * 20;

    setRotation({ x: rotateX, y: rotateY });
    setShadow({ x: shadowX, y: shadowY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  // Scroll detection to trigger count-up
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  // Count-up animation
  useEffect(() => {
    if (!statsVisible) return;

    const duration = 2000; // 2 seconds
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);

    let frame = 0;
    const projectsTarget = 5;
    const clientsTarget = 5;
    const satisfactionTarget = 100;

    const counter = setInterval(() => {
      frame++;
      setProjects(Math.min(projectsTarget, Math.floor((projectsTarget * frame) / totalFrames)));
      setClients(Math.min(clientsTarget, Math.floor((clientsTarget * frame) / totalFrames)));
      setSatisfaction(Math.min(satisfactionTarget, Math.floor((satisfactionTarget * frame) / totalFrames)));

      if (frame === totalFrames) clearInterval(counter);
    }, duration / totalFrames);
  }, [statsVisible]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative mt-10">
      <div className="absolute inset-0 -z-10">
  <div className="absolute top-1/2 left-1/2 w-[70%] h-[600px] bg-teal-400/10 rounded-full blur-3xl animate-floatGlow -translate-x-1/2 -translate-y-1/2" />
  <div className="absolute bottom-1/4 right-1/4 w-[70%] h-[400px] bg-indigo-500/10 rounded-full blur-2xl animate-floatGlow2 -translate-x-1/2 -translate-y-1/2" />
</div>
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-[93%] w-full">
<div className="flex-1 self-center justify-center mb-10 hidden md:block">
  <div
    className="relative mx-auto rounded-3xl overflow-hidden transition-transform duration-300 ease-out  "
    onMouseMove={handleMouseMove}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{
      transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    }}
      data-aos="zoom-out-left"
  data-aos-duration="1000"
  >
    <Image
      src={heroImage}
      alt="Intelligent Digital Products"
      className="rounded-3xl w-[90%] h-auto  hover:border-[#26838B] hover:shadow-[0_0_40px_rgba(20,184,166,0.15)] border border-zinc-800 transition-all duration-500"
      style={{
        boxShadow: `${shadow.x}px ${shadow.y}px 40px rgba(0,0,0,0.25)`, 
      }}
      priority
    />
  </div>
</div>


        <div className="flex-1 flex flex-col justify-center z-40"  >
          <h1 className="text-3xl sm:text-2xl md:text-4xl font-serif mb-10 bg-gradient-to-r from-[#28C28D] to-[#26838B] text-transparent bg-clip-text" data-aos="fade-right" data-aos-duration="1000">
            Turning Vision into Intelligent Digital Products
          </h1>
          <span className="text-justify text-base z-50" data-aos="fade-right" data-aos-duration="1000">
            Verlix Tech is a forward-thinking IT and digital engineering company dedicated to delivering smart, scalable, and future-ready technology solutions. We help startups, SMEs, and enterprises transform ideas into intelligent digital products that drive growth, efficiency, and competitive advantage.
          </span>
          <span className="mt-10 text-justify z-50" data-aos="fade-right" data-aos-duration="1000">
            By blending creativity, engineering precision, and emerging technologies, Verlix Tech delivers end-to-end solutions across web and mobile application development, 3D product modeling, UI/UX design, cloud infrastructure, digital marketing, and security. Our focus on quality, innovation, and client satisfaction positions us as a reliable technology partner in a rapidly evolving digital landscape
          </span>

                <div className="flex-1 self-center justify-center block md:hidden mt-10"  >
          <div
          
            className="relative w-[100%] mx-auto rounded-3xl overflow-hidden transition-transform duration-300 ease-out"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              boxShadow: `${shadow.x}px ${shadow.y}px 40px rgba(0,0,0,0.25)`,
            }}
          >
            <Image
              src={heroImage}
              alt="Intelligent Digital Products"
              className="rounded-3xl w-full h-auto hover:border-[#26838B] hover:shadow-[0_0_40px_rgba(20,184,166,0.15)] border border-zinc-800 transition-all duration-500"
              priority
            />

          </div>
        </div>
          <div
          
            ref={statsRef}
            className="flex flex-col md:flex-row justify-around items-center mt-12 w-full max-w-4xl gap-8 text-center"
          >
            <div >
              <h2 className="text-5xl font-serif bg-gradient-to-r from-[#28C28D] to-[#26838B] text-transparent bg-clip-text">{projects}+</h2>
              <p className="text-lg font-serif bg-gradient-to-r from-[#28C28D] to-[#26838B] text-transparent bg-clip-text">Projects Delivered</p>
            </div>
            <div>
              <h2 className="text-5xl font-serif bg-gradient-to-r from-[#28C28D] to-[#26838B] text-transparent bg-clip-text">{clients}+</h2>
              <p className="text-lg font-serif bg-gradient-to-r from-[#28C28D] to-[#26838B] text-transparent bg-clip-text">Happy Clients</p>
            </div>
            <div>
              <h2 className="text-5xl font-serif bg-gradient-to-r from-[#28C28D] to-[#26838B] text-transparent bg-clip-text">{satisfaction}%</h2>
              <p className="text-lg font-serif bg-gradient-to-r from-[#28C28D] to-[#26838B] text-transparent bg-clip-text">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
