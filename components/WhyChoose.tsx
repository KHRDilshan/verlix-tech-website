'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import {
  FiCheckCircle,
  FiCloudSnow,
  FiEye,
  FiClock,
  FiUsers,
  FiTarget
} from 'react-icons/fi'
import { FaNetworkWired } from 'react-icons/fa6'

export function WhyChoose() {
  const { ref, isVisible } = useScrollAnimation()

  const features = [
    {
      icon: FiCheckCircle, // Check ring
      title: 'Quality Assurance',
      description: 'Rigorous testing and checks to ensure excellence in every deliverable'
    },
    {
      icon: FaNetworkWired, // Snowflake
      title: 'Agile Methodology',
      description: 'Flexible, iterative approach ensuring rapid delivery and continuous improvement'
    },
    {
      icon: FiEye, // Eye
      title: 'Proven Track Record',
      description: 'Successful projects delivered for startups, SMEs, and enterprise-level organizations.'
    },
    {
      icon: FiClock, // Time forward sixty equivalent
      title: '24/7 Support',
      description: 'Dedicated support team available to assist you throughout your project journey.'
    },
    {
      icon: FiUsers,
      title: 'Expert Team',
      description: 'Experienced professionals with deep expertise across multiple technologies and industries.'
    },
    {
      icon: FiTarget,
      title: 'Custom Solutions',
      description: 'Tailored approaches designed specifically for your unique business challenges and goals.'
    }
  ]

  return (
    <section className="mt-10 md:mt-0" ref={ref}>
      
      <div className="max-w-[90%]  mx-auto  rounded-3xl bg-[#0f0f0f] text-primary-foreground p-6 sm:p-8 md:p-12 lg:p-16  hover:border-teal-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.15)] border border-zinc-800 transition-all duration-500" 
data-aos="zoom-in"     data-aos-duration="1000"
     >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">

          {/* Left Content */}
          <div
          data-aos="fade-right" data-aos-duration="1000"
            className={`transition-all duration-700 ${
              isVisible ? 'animate-fade-in-left' : 'opacity-0'
            } text-center md:text-left`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 font-serif bg-gradient-to-r from-[#28C28D] to-[#26838B] text-transparent bg-clip-text">
              Why Choose Verlix Tech?
            </h2>

            <p className="text-base sm:text-lg leading-relaxed opacity-90 text-[#828282]">
              We focus on quality, innovation, and long-term partnerships to deliver scalable,
              future-ready technology solutions.
            </p>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`flex gap-4 items-start transition-all duration-700 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                  style={{ animationDelay: isVisible ? `${index * 0.1}s` : undefined }}
                >
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-accent">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold text-sm sm:text-lg bg-gradient-to-r from-[#28C28D] to-[#26838B] text-transparent bg-clip-text">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm opacity-80 text-[#828282]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
