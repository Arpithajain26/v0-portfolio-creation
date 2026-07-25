'use client'

import { Badge } from "@/components/ui/badge"

interface TechBadge {
  name: string
  color: string
  bgColor: string
  icon?: string
}

const techStack: TechBadge[] = [
  { name: "Java", color: "text-red-400", bgColor: "bg-red-500/10 border-red-500/30" },
  { name: "Python", color: "text-blue-400", bgColor: "bg-blue-500/10 border-blue-500/30" },
  { name: "Git", color: "text-orange-400", bgColor: "bg-orange-500/10 border-orange-500/30" },
  { name: "GitHub", color: "text-gray-300", bgColor: "bg-gray-500/10 border-gray-500/30" },
  { name: "Node.js", color: "text-green-400", bgColor: "bg-green-500/10 border-green-500/30" },
  { name: "React", color: "text-cyan-400", bgColor: "bg-cyan-500/10 border-cyan-500/30" },
  { name: "TypeScript", color: "text-blue-300", bgColor: "bg-blue-500/20 border-blue-500/30" },
  { name: "MongoDB", color: "text-green-300", bgColor: "bg-green-500/20 border-green-500/30" },
]

export default function TechStack() {
  return (
    <section id="techstack" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
          {techStack.map((tech, index) => (
            <Badge
              key={index}
              className={`${tech.bgColor} ${tech.color} border px-6 py-3 text-base font-semibold cursor-pointer hover:scale-110 transition-transform duration-300`}
            >
              {tech.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
