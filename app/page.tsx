"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown, Youtube, Instagram } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

const ThreeDHero = dynamic(() => import("@/components/3d-hero"), { ssr: false })

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const sections = ["home", "about", "projects", "techstack", "achievements", "extracurricular", "results", "resume", "contact"]

  const projects = [
    {
      title: "AI Powered Portfolio Generator",
      description:
        "Built an AI-powered portfolio generator which generates a portfolio based on user-provided information. User provides links such as LinkedIn, LeetCode, GitHub, and Medium. Generated portfolio is also stored in PDF format.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Python", "HTML", "CSS", "JavaScript", "NLP"],
      liveUrl: null,
      githubUrl: "https://github.com/Arpithajain26/AI-powered-portfolio-generator",
    },
    {
      title: "Sahayya Portal - Digital Complaint Registration",
      description:
        "A digital platform designed for complaint registration and management. Streamlines the process of lodging, tracking, and resolving complaints with an intuitive user interface and efficient backend system.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveUrl: "https://sahayya-portal-tlgp.vercel.app/",
      githubUrl: "https://github.com/Arpithajain26/sahayya-portal.git",
    },
    {
      title: "Speak Up Studio",
      description:
        "An interactive platform for speech and communication practice. Currently under development, featuring tools for users to improve their public speaking and communication skills through guided exercises and feedback.",
      image: "/weather-analytics-dashboard-with-charts.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Web Audio API"],
      liveUrl: null,
      githubUrl: "https://github.com/Arpithajain26/speak-up-studio.git",
    },
  ]

  const achievements = [
    {
      title: "500+ LeetCode Problems",
      description: "Solved 500+ DSA problems on LeetCode",
      icon: "🏆",
    },
    {
      title: "Web Development & Python Courses",
      description: "Completed courses from Udemy and NPTEL",
      icon: "🎓",
    },
    {
      title: "GirlScript Summer of Code Contributor",
      description: "Contributor at GirlScript Summer of Code 2025",
      icon: "🌟",
    },
    {
      title: "CodeCraft Event Coordinator",
      description: "Coordinated CodeCraft event, organizing workshops and competitions for students",
      icon: "📋",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="#" className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            &lt; Arpitha Jain /&gt;
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "techstack", "achievements", "extracurricular", "results", "resume", "contact"].map(
              (section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors capitalize text-sm font-medium"
                >
                  {section === "techstack" ? "tech stack" : section}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/98 border-b border-gray-800 p-4">
            <div className="space-y-4">
              {["home", "about", "projects", "techstack", "achievements", "extracurricular", "results", "resume", "contact"].map(
                (section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className="block text-gray-400 hover:text-cyan-400 capitalize text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section === "techstack" ? "tech stack" : section}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div>
                <p className="text-cyan-400 font-medium mb-2">Welcome to my portfolio</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                  <span className="text-cyan-400">&lt;</span> Arpitha Jain <span className="text-purple-500">/&gt;</span>
                </h1>
              </div>
              <div>
                <p className="text-xl text-gray-300 mb-2">4th Year CSE Student</p>
                <p className="text-lg text-gray-400">AI/ML Intern at Infosys Springboard</p>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Passionate about building elegant solutions with <span className="text-cyan-400">Python</span>, <span className="text-purple-500">Web Development</span>, and exploring <span className="text-pink-500">AI/ML</span> technologies.
              </p>
              <div className="flex gap-4">
                <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3">
                  <a href="#projects">View My Work</a>
                </Button>
                <Button asChild variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-6 py-3">
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-center items-center gap-6 animate-slide-up delay-100">
              <ThreeDHero />
              <img
                src="/animated-accent.gif"
                alt="Animated accent"
                className="w-48 h-48 rounded-xl border-2 border-purple-500/30 shadow-lg shadow-purple-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">About Me</h2>
          <div className="bg-gray-800/40 backdrop-blur border border-gray-700 rounded-2xl p-8 max-w-3xl mx-auto animate-slide-up">
            <p className="text-gray-300 leading-relaxed text-center text-lg">
              I am Arpitha Jain C B from 4th year CSE department. I am interested in Python, web development and AI.
              Currently pursuing B.E. in Computer Science and Engineering at SDMIT College, Dharmasthala, with a CGPA
              of 9.6/10. I'm passionate about exploring AI/ML technologies while building strong foundations in web
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Card className="bg-gray-800/40 border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col overflow-hidden">
                  <div className="relative overflow-hidden h-48">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      {project.liveUrl && (
                        <Button size="sm" variant="secondary" asChild className="bg-cyan-500 hover:bg-cyan-600 text-white">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button size="sm" variant="secondary" asChild className="bg-purple-500 hover:bg-purple-600 text-white">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="flex-1 flex flex-col p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
            {["Java", "Python", "Git", "GitHub", "Node.js", "React", "TypeScript", "MongoDB"].map((tech, index) => (
              <Badge
                key={index}
                className={`
                  px-6 py-3 text-base font-semibold cursor-pointer 
                  hover:scale-110 transition-transform duration-300 border
                  ${
                    tech === "Java" ? "bg-red-500/10 text-red-400 border-red-500/30" :
                    tech === "Python" ? "bg-blue-500/10 text-blue-400 border-blue-500/30" :
                    tech === "Git" ? "bg-orange-500/10 text-orange-400 border-orange-500/30" :
                    tech === "GitHub" ? "bg-gray-500/10 text-gray-300 border-gray-500/30" :
                    tech === "Node.js" ? "bg-green-500/10 text-green-400 border-green-500/30" :
                    tech === "React" ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" :
                    tech === "TypeScript" ? "bg-blue-500/20 text-blue-300 border-blue-500/30" :
                    "bg-green-500/20 text-green-300 border-green-500/30"
                  }
                `}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-800/40 border border-gray-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section id="extracurricular" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">Extracurricular Activities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Coding Competitions", desc: "Actively participate in hackathons and coding contests" },
              { title: "Open Source", desc: "Contributing to open-source projects and communities" },
              { title: "Tech Events", desc: "Organizing and attending technical workshops and meetups" },
            ].map((activity, i) => (
              <Card key={i} className="bg-gray-800/40 border-gray-700 hover:border-purple-500/50 transition-all animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">{activity.title}</h3>
                  <p className="text-gray-400">{activity.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-400 mb-4">Academic Results</h2>
            <p className="text-gray-400">View and download your semester results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {[
              { sem: 1, label: "1st Semester" },
              { sem: 2, label: "2nd Semester" },
              { sem: 3, label: "3rd Semester" },
              { sem: 4, label: "4th Semester" },
              { sem: 5, label: "5th Semester" },
            ].map((semester) => (
              <Button
                key={semester.sem}
                onClick={async () => {
                  try {
                    const semesterNames: { [key: number]: string } = {
                      1: '1st',
                      2: '2nd',
                      3: '3rd',
                      4: '4th',
                      5: '5th',
                    }
                    const response = await fetch(`/api/download-result?sem=${semester.sem}`)
                    if (!response.ok) throw new Error("Failed to download result")
                    const blob = await response.blob()
                    const url = window.URL.createObjectURL(blob)
                    const link = document.createElement("a")
                    link.href = url
                    link.download = `VTU_${semesterNames[semester.sem]}_result.pdf`
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                    window.URL.revokeObjectURL(url)
                  } catch (error) {
                    console.error("[v0] Result download error:", error)
                  }
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                {semester.label}
              </Button>
            ))}
          </div>

          <Card className="bg-gray-800 border-purple-500/30">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-purple-300 mb-4">📋 How to Download</h3>
              <p className="text-gray-300 leading-relaxed">
                Click on any semester button above to download your VTU exam results in PDF format. All results are officially from Visvesvaraya Technological University and contain your subject-wise marks, grades, and performance details.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">Resume</h2>
          <Button
            onClick={async () => {
              try {
                const response = await fetch("/api/download-resume")
                if (!response.ok) throw new Error("Failed to download resume")
                const blob = await response.blob()
                const url = window.URL.createObjectURL(blob)
                const link = document.createElement("a")
                link.href = url
                link.download = "Arpitha_Jain_Resume.pdf"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                window.URL.revokeObjectURL(url)
              } catch (error) {
                console.error("[v0] Resume download error:", error)
              }
            }}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">Get In Touch</h2>
          <div className="bg-gray-800/40 backdrop-blur border border-gray-700 rounded-2xl p-8 space-y-6">
            <p className="text-gray-300 text-center mb-6">
              Have a project in mind? Let&apos;s work together to bring your ideas to life.
            </p>
            <p className="text-gray-400 text-center">Or reach out directly:</p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/Arpithajain26" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition-colors">
                <Github size={32} />
              </a>
              <a href="https://linkedin.com/in/arpitha-jain-c-b-475438290" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition-colors">
                <Linkedin size={32} />
              </a>
              <a href="https://youtube.com/@arpitha._.builds?si=fJt7jNCz-aziNQsU" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition-colors">
                <Youtube size={32} />
              </a>
              <a href="https://www.instagram.com/arpitha._.buildz/?hl=en" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition-colors">
                <Instagram size={32} />
              </a>
              <a href="mailto:arpithaammujain39@gmail.com" className="text-cyan-400 hover:text-white transition-colors">
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>© 2025 Arpitha Jain. All rights reserved.</p>
      </footer>
    </div>
  )
}
