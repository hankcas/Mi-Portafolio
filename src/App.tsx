import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'

function getInitialDarkMode(): boolean {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
  } catch {
    // localStorage can be blocked (private mode); fall back to the system theme.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function App() {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode)

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Ignore: the theme still works for this visit.
    }
  }, [darkMode])

  useRevealOnScroll()

  const toggleTheme = () => setDarkMode(prev => !prev)

  return (
    <>
      <div className="aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
