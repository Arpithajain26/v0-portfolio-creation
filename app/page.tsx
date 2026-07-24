"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, Youtube, Instagram, Menu, X } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    {
      title: "AI Powered Portfolio Generator",
      description: "Built an AI-powered portfolio generator which generates a portfolio based on user-provided information. User provides links such as LinkedIn, GitHub. Generated portfolio is also stored in PDF format.",
      technologies: ["Python", "HTML", "CSS", "JavaScript", "NLP"],
      liveUrl: null,
      githubUrl: "https://github.com/Arpithajain26/AI-powered-portfolio-generator",
    },
    {
      title: "Sahayya Portal",
      description: "A digital platform designed for complaint registration and management. Streamlines the process of lodging, tracking, and resolving complaints with an intuitive user interface.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://sahayya-portal-tlgp.vercel.app/",
      githubUrl: "https://github.com/Arpithajain26/sahayya-portal.git",
    },
    {
      title: "Speak Up Studio",
      description: "An interactive platform for speech and communication practice. Tools to improve public speaking and communication skills through guided exercises and feedback.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: null,
      githubUrl: "https://github.com/Arpithajain26/speak-up-studio.git",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="#" className="text-2xl font-bold tracking-tight">
            Arpitha Jain
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">
              Projects
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4">
            <a href="#about" className="block text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm Arpitha.
            </h1>
            <p className="text-xl text-gray-400 mb-6 leading-relaxed max-w-lg">
              4th year CSE student passionate about <span className="text-cyan-400">Python</span>, <span className="text-cyan-400">Web Development</span>, and exploring <span className="text-cyan-400">AI/ML</span> technologies.
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Building digital experiences that are fast, accessible, and meaningful.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                View Work
              </a>
              <a href="#contact" className="px-6 py-3 border border-gray-600 text-white hover:border-white hover:bg-white/5 transition-all">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <img
              src="/arpitha-photo.jpg"
              alt="Arpitha Jain"
              className="w-80 h-96 object-cover rounded-lg border border-gray-800"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-12">About</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm currently pursuing B.E. in Computer Science and Engineering at SDMIT College, Dharmasthala with a CGPA of 9.6/10. I'm fascinated by AI/ML and enjoy building web applications that solve real problems.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, solving DSA problems on LeetCode, or exploring new technologies.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-gray-400">B.E. Computer Science Engineering</p>
              <p className="text-gray-500 text-sm">SDMIT College, Dharmasthala</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Achievements</h3>
              <ul className="text-gray-400 space-y-1 text-sm">
                <li>• 9.6 CGPA</li>
                <li>• CodeCraft Event Coordinator</li>
                <li>• GSOC 2025 Contributor</li>
                <li>• TCS & Udemy Certifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-12">Selected Work</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed max-w-2xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 text-gray-400 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-2 transition-colors"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-2 transition-colors"
                >
                  View Code <ExternalLink size={16} />
                </a>
              </div>
              {index < projects.length - 1 && <div className="mt-12 border-t border-gray-800"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-semibold mb-4 text-gray-300">Languages</h3>
            <div className="space-y-3">
              {[
                { name: "Python", level: 90 },
                { name: "Java", level: 70 },
                { name: "C Programming", level: 65 },
                { name: "SQL", level: 60 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-400">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-900 h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-cyan-400 h-full rounded-full transition-all"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-300">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "MongoDB", "Express", "Tailwind", "Next.js", "Git", "Web Audio API"].map(
                (tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-900 border border-gray-800 text-gray-400 text-sm rounded">
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-800 mb-20">
        <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
        <div className="max-w-2xl">
          <p className="text-gray-400 text-lg mb-8">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or just say hi!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="mailto:arpithaammujain39@gmail.com"
              className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
            >
              Send Email
            </a>
            <a href="tel:8792008746" className="px-6 py-3 border border-gray-600 text-white hover:border-white hover:bg-white/5 transition-all">
              Call Me
            </a>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/Arpithajain26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/arpitha-jain-c-b-475438290"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://youtube.com/@arpitha._.builds?si=fJt7jNCz-aziNQsU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://www.instagram.com/arpitha._.buildz/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a href="mailto:arpithaammujain39@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6 text-center text-gray-500 text-sm">
        <p>© 2025 Arpitha Jain. All rights reserved.</p>
      </footer>
    </div>
  )
}
