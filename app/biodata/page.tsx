"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Mail, Phone, MapPin, Globe } from "lucide-react"
import Link from "next/link"

export default function BiodataPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-playfair font-bold text-xl text-cyan-400 hover:text-cyan-300 transition">
            &lt; Arpitha Jain /&gt;
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition">
              Home
            </Link>
            <Link href="/resume" className="text-gray-300 hover:text-cyan-400 transition">
              Resume
            </Link>
            <Link href="/biodata" className="text-cyan-400 border-b-2 border-cyan-400">
              Bio-data
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/">
            <Button variant="outline" className="mb-8 border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Button>
          </Link>

          {/* Profile Section */}
          <Card className="bg-gray-800 border-gray-700 mb-8 overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 h-32"></div>
            <CardContent className="p-8 -mt-16 relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-shrink-0">
                  <img
                    src="/arpitha-photo.jpg"
                    alt="Arpitha Jain"
                    className="w-32 h-32 rounded-full border-4 border-cyan-400 object-cover shadow-lg shadow-cyan-400/50"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-cyan-400 mb-2">&lt; Arpitha Jain C B /&gt;</h1>
                  <p className="text-2xl text-purple-400 mb-4">CSE Student & AI/ML Explorer</p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    I am Arpitha Jain C B from 3rd year CSE department at SDMIT College, Dharmasthala. I am interested
                    in Python, web development, and artificial intelligence. Currently pursuing B.E. in Computer Science
                    and Engineering with a CGPA of 9.6/10. I'm passionate about exploring AI/ML technologies while
                    building strong foundations in web development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-gray-300">8792008746</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-300">arpithaammujain39@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-300">Dharmasthala, Dakshina Kannada, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Online Profiles</p>
                    <div className="space-y-1">
                      <p className="text-gray-300">
                        <a
                          href="https://github.com/Arpithajain26"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300"
                        >
                          GitHub
                        </a>
                        {" | "}
                        <a
                          href="https://www.linkedin.com/in/arpitha-jain-c-b-475438290"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300"
                        >
                          LinkedIn
                        </a>
                        {" | "}
                        <a
                          href="https://www.instagram.com/arpitha._jain/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300"
                        >
                          Instagram
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <p className="font-semibold text-purple-400">Full Name</p>
                  <p>Arpitha Jain C B</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-400">Date of Birth</p>
                  <p>Not specified (Available upon request)</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-400">Nationality</p>
                  <p>Indian</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-400">Languages Known</p>
                  <p>English, Hindi, Kannada</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Education</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-400 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">B.E. Computer Science and Engineering</h3>
                  <p className="text-cyan-300 font-semibold mb-1">Visvesvaraya Technological University</p>
                  <p className="text-gray-400 mb-2">SDMIT College, Dharmasthala, Dakshina Kannada</p>
                  <p className="text-gray-300">Expected Graduation: 2027</p>
                  <p className="text-purple-400 font-semibold mt-2">CGPA: 9.6 / 10</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Interests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-purple-400 mb-4">Technical Interests</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Artificial Intelligence & Machine Learning
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Web Development & Full Stack
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Data Science & Analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Problem Solving & Algorithms
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-purple-400 mb-4">Hobbies & Activities</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Competitive Programming & LeetCode
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Open Source Contributions
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Learning & Self-Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    Participating in Tech Events
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Achievements</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">🎓</div>
                  <div>
                    <p className="font-semibold text-white">Academic Excellence</p>
                    <p className="text-gray-300">Achieved 9.6 SGPA in Computer Science Engineering</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">💻</div>
                  <div>
                    <p className="font-semibold text-white">LeetCode Problem Solver</p>
                    <p className="text-gray-300">Solved 250+ questions using Python</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">🏆</div>
                  <div>
                    <p className="font-semibold text-white">TCS Certification</p>
                    <p className="text-gray-300">Gained certification from TCSion</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">📜</div>
                  <div>
                    <p className="font-semibold text-white">Udemy Certification</p>
                    <p className="text-gray-300">Web Development Course certification</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">🌟</div>
                  <div>
                    <p className="font-semibold text-white">Open Source Contributor</p>
                    <p className="text-gray-300">Contributor at GirlScript Summer of Code 2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; 2025 Arpitha Jain C B. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
