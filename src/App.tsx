import { useState, useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Certifications } from './components/Certifications'
import { Resume } from './components/Resume'
import { Contact } from './components/Contact'
import { WelcomeDialog } from './components/WelcomeDialog'
import './App.css'
import { AudioProvider } from './contexts/AudioContext'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showWelcome, setShowWelcome] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check if it's the first visit
    const hasVisited = localStorage.getItem('hasVisited')
    if (!hasVisited) {
      setShowWelcome(true)
      localStorage.setItem('hasVisited', 'true')
    }
  }, [])

  return (
    <AudioProvider>
      <>
        {showWelcome && <WelcomeDialog onClose={() => setShowWelcome(false)} />}
        <div className="flex min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
          <Sidebar 
            activeSection={activeSection} 
            setActiveSection={setActiveSection}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          
          {/* Adjust main content padding for mobile */}
          <main className="w-full lg:ml-72 p-4 lg:p-8">
            {activeSection === 'home' && <Home setActiveSection={setActiveSection} />}
            {activeSection === 'about' && <About />}
            {activeSection === 'projects' && <Projects />}
            {activeSection === 'certifications' && <Certifications />}
            {activeSection === 'resume' && <Resume />}
            {activeSection === 'contact' && <Contact />}
            {/* Other sections will be added here */}
          </main>
        </div>
      </>
    </AudioProvider>
  )
}