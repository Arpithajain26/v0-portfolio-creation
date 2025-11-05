// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById("menuToggle")
const navMenu = document.getElementById("navMenu")

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close menu when a link is clicked
  const navLinks = navMenu.querySelectorAll("a")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })
}

// ===== Smooth Scroll Behavior =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#") {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  })
})

// ===== Progress Bar Animation =====
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
      const progressBar = entry.target.querySelector(".progress-fill")
      if (progressBar) {
        progressBar.style.width = progressBar.parentElement.parentElement.getAttribute("style")
        entry.target.classList.add("animated")
      }
    }
  })
}, observerOptions)

document.querySelectorAll(".skill-item").forEach((item) => {
  observer.observe(item)
})

// ===== Resume Download Function =====
function downloadResume() {
  const resumeContent = `
ARPITHA JAIN C B
8792008746 | arpithaammujain39@gmail.com
linkedin.com/in/arpitha-jain-c-b-475438290 | github.com/Arpithajain26

PROFESSIONAL SUMMARY
Passionate AI/ML engineer with a strong background in deep learning, computer vision, and natural language processing. Skilled in Python, Java, and C. Excellent problem-solving skills and interested in web development.

TECHNICAL SKILLS
Programming Languages: Python, C, Java, SQL, MATLAB
Libraries & Tools: NumPy, Pandas, Scikit-learn, Git
Tools & Environments: VS Code, Jupyter Notebook, GitHub, Google Colab

PROJECTS

E-Authentication System (Aug 2024 – Jan 2025)
Web Development Project • HTML, CSS, JS
• Developed an E-Authentication system based on OTP.
• Worked on OTP validation using the user's phone number.
• Used Excel for storing user data.

AI-powered Portfolio Generator (Ongoing)
Natural Language Processing • Python, HTML, CSS, JS
• Built an AI-powered portfolio generator which generates a portfolio based on user-provided information.
• User provides links such as LinkedIn, LeetCode, GitHub, and Medium.
• Generated portfolio is also stored in PDF format.

ACHIEVEMENTS & CERTIFICATIONS
• Solved 250+ questions on LeetCode (Feb 2025 – Present)
• Web Development Course from Udemy (Aug 2025 – Present)
• Python for Data Science from NPTEL (Jul 2025 – Present)
• Contributor at GirlScript Summer of Code 2025
• Certification from TCS
• Certification from Simplilearn on Web Development

EDUCATION

B.E. in Computer Science and Engineering (Expected 2027)
Visvesvaraya Technological University
SDMIT College, Dharmasthala, Dakshina Kannada
CGPA: 9.6 / 10
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

// ===== Bio-data Download Function =====
function downloadBiodata() {
  const biodataContent = `
BIO-DATA

Name: Arpitha Jain C B
Phone: 8792008746
Email: arpithaammujain39@gmail.com
LinkedIn: linkedin.com/in/arpitha-jain-c-b-475438290
GitHub: github.com/Arpithajain26
Instagram: @arpitha._jain

EDUCATION
Degree: B.E. in Computer Science and Engineering
University: Visvesvaraya Technological University
College: SDMIT College, Dharmasthala
Current Year: 3rd Year
CGPA: 9.6 / 10
Expected Graduation: 2027

INTERESTS & EXPERTISE
• Python Programming
• Web Development (HTML, CSS, JavaScript)
• Artificial Intelligence & Machine Learning
• Data Science
• Natural Language Processing
• Computer Vision
• Open Source Development

HOBBIES & ACTIVITIES
• Competitive Programming
• Problem Solving (LeetCode, HackerRank)
• Web Design
• AI/ML Exploration
• Reading Tech Articles
• Contributing to Open Source Projects
• Learning New Technologies

KEY ACHIEVEMENTS
• Academic Excellence - CGPA 9.6/10
• Solved 250+ LeetCode problems
• TCS Certification
• Udemy Web Development Certification
• NPTEL Python for Data Science Course
• GirlScript Summer of Code 2025 Contributor
• Project Pitch Competition Participant (IIT Bombay)

CORE SKILLS
Python, Java, C Programming, Web Development, AI/ML, SQL, Git, NumPy, Pandas, JavaScript, HTML/CSS, React
    `

  const blob = new Blob([biodataContent], { type: "text/plain" })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "Arpitha_Jain_Biodata.txt"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  window.URL.revokeObjectURL(url)
}

// ===== Print Resume Function =====
function printResume() {
  window.print()
}

// ===== Print Bio-data Function =====
function printBiodata() {
  window.print()
}

// ===== Animations on Scroll =====
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".project-card, .achievement-card, .biodata-card, .skill-item")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "slideUp 0.6s ease-out forwards"
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  elements.forEach((element) => observer.observe(element))
}

// Initialize animations when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", animateOnScroll)
} else {
  animateOnScroll()
}

// ===== Add scroll-to-top button functionality =====
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.boxShadow = "0 5px 15px rgba(6, 182, 212, 0.1)"
  } else {
    navbar.style.boxShadow = "none"
  }
})
