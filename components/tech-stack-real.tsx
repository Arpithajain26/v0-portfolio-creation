"use client"

import { techLogos } from "@/lib/tech-logos"
import { useState } from "react"

export default function TechStackReal() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="techstack" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-cyan-400">Tech Stack</span>
          <span className="text-white"> & Tools</span>
        </h2>
        <p className="text-center text-gray-400 mb-16">Technologies I work with to build amazing experiences</p>

        {/* Orbital Layout */}
        <div className="relative w-full h-96 md:h-[500px] flex items-center justify-center">
          {/* Center Decoration */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-xl" />
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-cyan-500/50" />

          {/* Orbiting Logos */}
          {techLogos.map((tech, index) => {
            const total = techLogos.length
            const angle = (index / total) * Math.PI * 2
            const radius = 140 + (index % 2) * 30 // Staggered radius for visual interest
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            return (
              <div
                key={tech.name}
                className="absolute w-20 h-20 flex items-center justify-center"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  top: "50%",
                  left: "50%",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`
                    relative w-full h-full rounded-full border-2 backdrop-blur flex items-center justify-center
                    transition-all duration-300 cursor-pointer group
                    ${hoveredIndex === index
                      ? "bg-cyan-500/30 border-cyan-400 shadow-lg shadow-cyan-500/50 scale-125 z-10"
                      : "bg-gray-800/40 border-cyan-500/20 hover:border-cyan-500/40"
                    }
                  `}
                >
                  <img
                    src={tech.url}
                    alt={tech.name}
                    className="w-10 h-10 object-contain filter drop-shadow-lg transition-transform group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Tooltip */}
                  <div
                    className={`
                      absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 border border-cyan-500/50
                      rounded-md text-xs text-cyan-300 whitespace-nowrap opacity-0 pointer-events-none
                      transition-opacity duration-200 ${hoveredIndex === index ? "opacity-100" : ""}
                    `}
                  >
                    {tech.name}
                  </div>
                </div>
              </div>
            )
          })}

          {/* Orbit Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.1))" }}>
            <circle
              cx="50%"
              cy="50%"
              r="140"
              fill="none"
              stroke="url(#gradientCyan)"
              strokeWidth="1"
              opacity="0.2"
            />
            <circle
              cx="50%"
              cy="50%"
              r="170"
              fill="none"
              stroke="url(#gradientPurple)"
              strokeWidth="1"
              opacity="0.2"
            />
            <defs>
              <linearGradient id="gradientCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0891B2" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="gradientPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Grid Layout Fallback for Mobile */}
        <div className="md:hidden grid grid-cols-3 gap-4 mt-12">
          {techLogos.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-3 p-4 rounded-lg bg-gray-800/40 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:bg-cyan-500/10"
            >
              <img
                src={tech.url}
                alt={tech.name}
                className="w-12 h-12 object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform"
                loading="lazy"
              />
              <p className="text-xs text-center text-gray-300 group-hover:text-cyan-300 transition-colors">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
