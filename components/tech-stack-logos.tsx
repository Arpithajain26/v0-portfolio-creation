'use client'

import React from 'react'

interface TechLogo {
  name: string
  icon: string
  color: string
  delay: number
}

const techLogos: TechLogo[] = [
  { name: "Python", icon: "🐍", color: "text-blue-400", delay: 0 },
  { name: "Java", icon: "☕", color: "text-red-400", delay: 100 },
  { name: "JavaScript", icon: "⚡", color: "text-yellow-400", delay: 200 },
  { name: "React", icon: "⚛️", color: "text-cyan-400", delay: 300 },
  { name: "Node.js", icon: "🟢", color: "text-green-400", delay: 400 },
  { name: "MongoDB", icon: "🍃", color: "text-green-500", delay: 500 },
  { name: "Git", icon: "🔧", color: "text-orange-400", delay: 600 },
  { name: "GitHub", icon: "🐙", color: "text-gray-400", delay: 700 },
  { name: "TypeScript", icon: "📘", color: "text-blue-500", delay: 800 },
  { name: "Express", icon: "🚀", color: "text-gray-300", delay: 900 },
  { name: "Tailwind", icon: "🎨", color: "text-cyan-500", delay: 1000 },
  { name: "HTML/CSS", icon: "🎭", color: "text-orange-500", delay: 1100 },
]

export default function TechStackLogos() {
  return (
    <section id="techstack" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-cyan-400">Tech Stack</h2>
        
        {/* Responsive grid layout */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 place-items-center">
          {techLogos.map((tech, index) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 group cursor-pointer"
              style={{
                animation: `float 3s ease-in-out infinite ${tech.delay}ms`,
              }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center text-4xl md:text-5xl hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 group-hover:scale-110">
                {tech.icon}
              </div>
              <p className="text-xs md:text-sm text-gray-400 group-hover:text-cyan-400 transition-colors text-center truncate w-full px-1">
                {tech.name}
              </p>
            </div>
          ))}
        </div>

        {/* Floating animation keyframes */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}</style>
      </div>
    </section>
  )
}
