"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  const handleDownloadResume = () => {
    const resumeContent = `
ARPITHA JAIN C B
8792008746 | arpithaammujain39@gmail.com
LinkedIn: linkedin.com/in/arpitha-jain-c-b-475438290
GitHub: github.com/Arpithajain26

PROFESSIONAL SUMMARY
Passionate AI/ML engineer with a strong background in deep learning, computer vision, and natural language processing. Skilled in Python, Java, and C with excellent problem-solving skills. Interested in web development and open-source contributions.

TECHNICAL SKILLS
Programming Languages: Python, Java, C, SQL, MATLAB
Web Technologies: HTML, CSS, JavaScript, React.js, Node.js
Libraries & Tools: NumPy, Pandas, Scikit-learn, Git, TensorFlow
Development Tools: VS Code, Jupyter Notebook, GitHub, Google Colab, MongoDB

EDUCATION
Visvesvaraya Technological University
B.E. in Computer Science and Engineering
SDMIT College, Dharmasthala, Dakshina Kannada
Expected Graduation: 2027
CGPA: 9.6 / 10

PROJECTS

1. AI-powered Portfolio Generator (Ongoing)
   Technologies: Python, HTML, CSS, JavaScript, NLP
   • Built an AI-powered portfolio generator that creates portfolios based on user-provided information
   • Users provide links such as LinkedIn, LeetCode, GitHub, and Medium
   • Generated portfolio is stored in PDF format
   GitHub: github.com/Arpithajain26/AI-powered-portfolio-generator
   Live: arpithajain26.github.io/AI-powered-portfolio-generator

2. E-Authentication System (Aug 2024 – Jan 2025)
   Technologies: HTML, CSS, JavaScript
   • Developed an E-Authentication system based on OTP verification
   • Implemented OTP validation using user's phone number
   • Used Excel for secure data storage

PROFESSIONAL EXPERIENCE & CONTRIBUTIONS

• Contributor at GirlScript Summer of Code 2025 (Aug 2025 – Present)
  - Contributing to open-source projects, specifically sktime
  - Opened pull requests for code improvements
  - Participated in project pitch competition with IIT Bombay

ACHIEVEMENTS & CERTIFICATIONS

• Academic Excellence: Achieved 9.6 SGPA in Computer Science Engineering
• LeetCode Problem Solver: Solved 250+ questions using Python
• TCS Certification: Completed TCS training and certification
• Udemy Certification: Web Development Course (85.9 hours completed)
• Simplilearn Certification: Web Development specialization
• Open Source Contributor: Active contributor to GirlScript Summer of Code 2025

COURSES & LEARNING

• Python for Data Science (NPTEL) - 4-credit course (Jul 2025 – Present)
• Web Development with MongoDB & React.js (Udemy) - Ongoing
• Data Structures and Algorithms - Daily LeetCode practice

LANGUAGES
• English (Fluent)
• Hindi (Fluent)
• Kannada (Native)

INTERESTS
• Artificial Intelligence & Machine Learning
• Web Development
• Open Source Contributions
• Data Science
• Problem Solving & Competitive Programming
`

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Arpitha_Jain_Resume.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

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
            <Link href="/resume" className="text-cyan-400 border-b-2 border-cyan-400">
              Resume
            </Link>
            <Link href="/biodata" className="text-gray-300 hover:text-cyan-400 transition">
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

          {/* Resume Header */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardContent className="p-8">
              <h1 className="text-4xl font-bold text-cyan-400 mb-4">&lt; Arpitha Jain C B /&gt;</h1>
              <p className="text-gray-300 text-lg mb-4">CSE Student & AI/ML Explorer</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p className="font-semibold text-cyan-300">Phone</p>
                  <p>8792008746</p>
                </div>
                <div>
                  <p className="font-semibold text-cyan-300">Email</p>
                  <p>arpithaammujain39@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold text-cyan-300">LinkedIn</p>
                  <p>linkedin.com/in/arpitha-jain-c-b-475438290</p>
                </div>
                <div>
                  <p className="font-semibold text-cyan-300">GitHub</p>
                  <p>github.com/Arpithajain26</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Button */}
          <div className="mb-8 flex justify-center">
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              <Download size={20} className="mr-2" />
              Download Resume (PDF/TXT)
            </Button>
          </div>

          {/* Resume Sections */}
          <div className="space-y-6">
            {/* Professional Summary */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Professional Summary</h2>
                <p className="text-gray-300 leading-relaxed">
                  Passionate AI/ML engineer with a strong background in deep learning, computer vision, and natural
                  language processing. Skilled in Python, Java, and C with excellent problem-solving skills. Interested
                  in web development and open-source contributions.
                </p>
              </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-purple-400 mb-2">Programming Languages</p>
                    <p className="text-gray-300">Python, Java, C, SQL, MATLAB</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-400 mb-2">Web Technologies</p>
                    <p className="text-gray-300">HTML, CSS, JavaScript, React.js, Node.js</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-400 mb-2">Libraries & Tools</p>
                    <p className="text-gray-300">NumPy, Pandas, Scikit-learn, Git, TensorFlow</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-400 mb-2">Development Tools</p>
                    <p className="text-gray-300">VS Code, Jupyter, GitHub, Google Colab, MongoDB</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Education</h2>
                <div className="border-l-4 border-cyan-400 pl-4">
                  <h3 className="text-lg font-semibold text-white">B.E. in Computer Science and Engineering</h3>
                  <p className="text-purple-400">Visvesvaraya Technological University</p>
                  <p className="text-gray-300 text-sm">SDMIT College, Dharmasthala, Dakshina Kannada</p>
                  <p className="text-gray-300 text-sm mt-2">Expected Graduation: 2027</p>
                  <p className="text-cyan-300 font-semibold mt-1">CGPA: 9.6 / 10</p>
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Projects</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h3 className="text-lg font-semibold text-white">AI-powered Portfolio Generator</h3>
                    <p className="text-purple-400 text-sm">Python, HTML, CSS, JavaScript, NLP - Ongoing</p>
                    <p className="text-gray-300 mt-2">
                      Built an AI-powered portfolio generator that creates portfolios based on user-provided
                      information. Users provide links such as LinkedIn, LeetCode, GitHub, and Medium. Generated
                      portfolio is stored in PDF format.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h3 className="text-lg font-semibold text-white">E-Authentication System</h3>
                    <p className="text-purple-400 text-sm">HTML, CSS, JavaScript - Aug 2024 to Jan 2025</p>
                    <p className="text-gray-300 mt-2">
                      Developed an E-Authentication system based on OTP verification. Implemented OTP validation using
                      user's phone number with Excel for data storage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Achievements & Certifications</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span>Academic Excellence: Achieved 9.6 SGPA in Computer Science Engineering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span>LeetCode Problem Solver: Solved 250+ questions using Python</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span>TCS Certification: Completed TCS training and certification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span>Udemy Certification: Web Development Course (85.9 hours)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span>Open Source Contributor: GirlScript Summer of Code 2025</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
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
