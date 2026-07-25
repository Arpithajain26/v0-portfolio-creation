"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Github, ExternalLink, Code } from "lucide-react"
import { projectsData } from "@/lib/projects-data"

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  const goToSlide = (index: number) => {
    setCurrentIndex(index % projectsData.length)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length)
    setIsAutoPlay(false)
  }

  useEffect(() => {
    if (!isAutoPlay) {
      const timeout = setTimeout(() => setIsAutoPlay(true), 8000)
      return () => clearTimeout(timeout)
    }

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length)
    }, 6000)

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlay])

  const currentProject = projectsData[currentIndex]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/0 to-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-cyan-400">Featured</span>
          <span className="text-white"> Projects</span>
        </h2>

        {/* Carousel Container */}
        <div className="relative rounded-2xl overflow-hidden bg-gray-900/40 backdrop-blur border border-cyan-500/20">
          <div className="perspective">
            {/* Project Card with 3D Transform */}
            <div className="relative h-96 md:h-96">
              <div className="absolute inset-0 overflow-hidden">
                {projectsData.map((project, index) => (
                  <div
                    key={project.id}
                    className={`
                      absolute inset-0 transition-all duration-700 ease-out
                      ${index === currentIndex ? "opacity-100 translate-x-0 scale-100" : 
                        index > currentIndex ? "opacity-0 translate-x-full scale-95" : 
                        "opacity-0 -translate-x-full scale-95"}
                    `}
                    style={{
                      transform: index === currentIndex ? 
                        "perspective(1000px) rotateY(0deg) rotateX(0deg)" : 
                        index > currentIndex ?
                        "perspective(1000px) rotateY(-20deg) rotateX(5deg)" :
                        "perspective(1000px) rotateY(20deg) rotateX(5deg)"
                    }}
                  >
                    <div className="grid md:grid-cols-2 gap-8 p-8 h-full items-center">
                      {/* Image Side */}
                      <div className="hidden md:flex items-center justify-center">
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">{project.title}</h3>
                          <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-2">
                          <p className="text-purple-400 font-semibold text-sm">TECHNOLOGIES</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex gap-4 pt-4">
                          {project.links.frontend && (
                            <a
                              href={project.links.frontend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-colors"
                              title="Frontend Repository"
                            >
                              <Code size={18} />
                              <span>Frontend</span>
                            </a>
                          )}
                          {project.links.backend && (
                            <a
                              href={project.links.backend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/50 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-colors"
                              title="Backend Repository"
                            >
                              <Code size={18} />
                              <span>Backend</span>
                            </a>
                          )}
                          {project.links.github && project.links.github !== "#" && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-gray-700/20 border border-gray-600/50 text-gray-300 rounded-lg hover:bg-gray-700/40 transition-colors"
                            >
                              <Github size={18} />
                              <span>Code</span>
                            </a>
                          )}
                          {project.links.live && project.links.live !== "#" && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-cyan-600/20 border border-cyan-500/50 text-cyan-200 rounded-lg hover:bg-cyan-600/40 transition-colors"
                            >
                              <ExternalLink size={18} />
                              <span>Live</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/40 transition-all hover:scale-110"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/40 transition-all hover:scale-110"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  transition-all duration-300 rounded-full
                  ${index === currentIndex
                    ? "w-8 h-2 bg-cyan-400"
                    : "w-2 h-2 bg-gray-600 hover:bg-gray-500"
                  }
                `}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Project Counter */}
        <div className="text-center mt-8 text-gray-400">
          <p className="text-sm">
            <span className="text-cyan-400 font-semibold">{currentIndex + 1}</span>
            {" / "}
            <span>{projectsData.length}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
