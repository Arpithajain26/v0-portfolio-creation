"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown, Code, Instagram } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "achievements", "extracurricular", "results", "resume", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

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
  ]

  const skills = [
    { name: "Python", level: 90, color: "from-red-500 to-orange-500" },
    { name: "Java", level: 70, color: "from-green-500 to-emerald-500" },
    { name: "Web Development", level: 70, color: "from-blue-500 to-indigo-500" },
    { name: "AI/ML Exploration", level: 75, color: "from-yellow-500 to-orange-500" },
    { name: "C Programming", level: 65, color: "from-purple-500 to-pink-500" },
    { name: "SQL", level: 60, color: "from-teal-500 to-cyan-500" },
  ]

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Achieved 9.6 SGPA in Computer Science Engineering",
      icon: "🎓",
    },
    {
      title: "LeetCode Problem Solver",
      description: "Solved 250+ questions on LeetCode using Python",
      icon: "💻",
    },
    {
      title: "TCS Certification",
      description: "Gained certification from TCSion",
      icon: "🏆",
    },
    {
      title: "Udemy Certification",
      description: "Web Development Course certification from Udemy",
      icon: "📜",
    },
    {
      title: "Open Source Contributor",
      description: "Contributor at GirlScript Summer of Code 2025",
      icon: "🌟",
    },
  ]

  const extracurriculars = [
    {
      title: "Project Pitch Competition",
      description: "Participated in project pitch competition conducted in collaboration with IIT Bombay",
      icon: "🎯",
    },
    {
      title: "Open Source Contributions",
      description: "Active contributor to sktime project during GirlScript Summer of Code 2025",
      icon: "🌐",
    },
    {
      title: "Technical Problem Solving",
      description: "Daily practice of Data Structures and Algorithms on LeetCode platform",
      icon: "🧩",
    },
    {
      title: "Continuous Learning",
      description: "Pursuing multiple online courses in Web Development and Python for Data Science",
      icon: "📚",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-playfair font-bold text-xl text-cyan-400 animate-pulse">&lt; Arpitha Jain /&gt;</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "skills", "achievements", "extracurricular", "results", "resume", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item
                        ? "text-cyan-400 font-medium border-b-2 border-cyan-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item === "extracurricular" ? "Activities" : item}
                  </button>
                ),
              )}
              <Link href="/resume" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">
                Resume Page
              </Link>
              <Link href="/biodata" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">
                Bio-data Page
              </Link>
            </div>

            {/* Mobile Navigation Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700 animate-fade-in">
              {["home", "about", "projects", "skills", "achievements", "extracurricular", "results", "resume", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left py-2 capitalize text-gray-300 hover:text-white transition-colors"
                  >
                    {item === "extracurricular" ? "Activities" : item}
                  </button>
                ),
              )}
              <Link
                href="/resume"
                className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors"
              >
                Resume Page
              </Link>
              <Link
                href="/biodata"
                className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors"
              >
                Bio-data Page
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <img
              src="/arpitha-photo.jpg"
              alt="Arpitha Jain"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-cyan-400 object-cover shadow-2xl shadow-cyan-400/50 animate-float"
            />
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4 animate-slide-up">
              <span className="text-cyan-400">&lt; Arpitha Jain /&gt;</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-6 animate-slide-up delay-200">
              <span className="text-cyan-300 font-semibold">CSE Student</span>{" "}
              <span className="text-white font-medium">&</span>{" "}
              <span className="text-purple-300 font-semibold">AI/ML Explorer</span>
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up delay-300">
              Contact: 8792008746
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-500">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25 border-0"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-2 border-gray-400 text-white bg-gray-800/50 hover:bg-gray-700 hover:text-white hover:border-gray-300 font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="flex justify-center space-x-6 animate-slide-up delay-700">
            <a
              href="https://github.com/Arpithajain26"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/arpitha-jain-c-b-475438290"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://leetcode.com/u/ARPITHAJAINCB/"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code size={24} />
            </a>
            <a
              href="https://www.instagram.com/arpitha._jain/?hl=en"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} />
            </a>
            <a
              href="mailto:arpithaammujain39@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-500" />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 animate-slide-up">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </div>

          <Card className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-all duration-500 animate-slide-up">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                I am Arpitha Jain C B from 3rd year CSE department. I am interested in Python, web development and AI.
                Currently pursuing B.E. in Computer Science and Engineering at SDMIT College, Dharmasthala, with a CGPA
                of 9.6/10. I'm passionate about exploring AI/ML technologies while building strong foundations in web
                development.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 animate-slide-up">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-slide-up delay-200">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-gray-800 border-gray-700 hover:border-cyan-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.liveUrl && (
                      <Button size="sm" variant="secondary" asChild className="bg-cyan-500 hover:bg-cyan-600 text-white">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="secondary"
                      asChild
                      className="bg-purple-500 hover:bg-purple-600 text-white"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-cyan-400">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gray-700 text-cyan-300 hover:bg-gray-600 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 animate-slide-up">
              <span className="text-cyan-400">Technical Skills</span>
            </h2>
            <p className="text-lg text-gray-400 animate-slide-up delay-200">Technologies and tools I work with</p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-2xl animate-slide-up">
            <h3 className="text-xl font-semibold text-white mb-8 text-center">Core Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white text-lg">{skill.name}</span>
                    <span className="text-cyan-400 font-bold text-lg">{skill.level}%</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-600 rounded-full h-4 overflow-hidden">
                      {/* Background bar (unfilled portion) */}
                      <div className="w-full h-4 bg-gray-600 rounded-full absolute"></div>
                      {/* Filled portion with gradient color */}
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-4 rounded-full transition-all duration-2000 ease-out animate-progress-bar shadow-lg relative`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md border border-gray-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 animate-slide-up">
              <span className="text-cyan-400">Achievements</span>
            </h2>
            <p className="text-lg text-gray-400 animate-slide-up delay-200">Key milestones and accomplishments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/10 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="text-cyan-400 font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="extracurricular" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 animate-slide-up">
              <span className="text-purple-400">Extracurricular Activities</span>
            </h2>
            <p className="text-lg text-gray-400 animate-slide-up delay-200">Beyond academics and technical skills</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extracurriculars.map((activity, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-400/10 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 bg-gray-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl bg-white/90 rounded-full w-12 h-12 flex items-center justify-center">
                      {activity.icon}
                    </div>
                    <div>
                      <h3 className="text-purple-400 font-semibold mb-2">{activity.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{activity.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 animate-slide-up">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Resume</span>
            </h2>
          </div>

          <div className="space-y-8">
            {/* Header */}
            <Card className="bg-gray-800 border-gray-700 animate-slide-up">
              <CardContent className="p-8 text-center">
                <h1 className="text-3xl font-bold text-cyan-400 mb-4">&lt; Arpitha Jain C B /&gt;</h1>
                <p className="text-gray-300">
                  8792008746 | arpithaammujain39@gmail.com | linkedin.com/in/arpitha-jain-c-b-475438290 |
                  github.com/Arpithajain26
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
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
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 animate-slide-up">
              <span className="text-purple-400">Academic Results</span>
            </h2>
            <p className="text-gray-300 animate-slide-up delay-100">View and download your semester results</p>
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
                    const response = await fetch(`/api/download-result?sem=${semester.sem}`)
                    if (!response.ok) throw new Error("Failed to download result")
                    const blob = await response.blob()
                    const url = window.URL.createObjectURL(blob)
                    const link = document.createElement("a")
                    link.href = url
                    link.download = `VTU_${semester.sem === 1 ? '1st' : semester.sem === 2 ? '2nd' : semester.sem === 3 ? '3rd' : semester.sem === 4 ? '4th' : '5th'}_result.pdf`
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                    window.URL.revokeObjectURL(url)
                  } catch (error) {
                    console.error("[v0] Result download error:", error)
                  }
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 animate-slide-up"
              >
                {semester.label}
              </Button>
            ))}
          </div>

          <Card className="bg-gray-800 border-purple-500/30 animate-slide-up delay-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-purple-300 mb-4">📋 How to Download</h3>
              <p className="text-gray-300 leading-relaxed">
                Click on any semester button above to download your VTU exam results in PDF format. All results are officially from Visvesvaraya Technological University and contain your subject-wise marks, grades, and performance details.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 animate-slide-up">
              <span className="text-cyan-400 animate-pulse">Get In Touch</span>
            </h2>
            <p className="text-lg text-gray-200 animate-slide-up delay-200">
              Let's discuss your next project or opportunity
            </p>
          </div>

          <Card className="bg-gray-800 border-cyan-400/50 shadow-2xl shadow-cyan-400/20 animate-slide-up delay-300 backdrop-blur-sm">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cyan-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-cyan-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project inquiry"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cyan-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center animate-slide-up delay-500">
            <p className="text-gray-300 mb-4">Or reach out directly:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a
                href="mailto:arpithaammujain39@gmail.com"
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Mail size={20} className="mr-2" />
                arpithaammujain39@gmail.com
              </a>
              <span className="text-gray-300">📱 8792008746</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; 2024 Arpitha Jain C B. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
