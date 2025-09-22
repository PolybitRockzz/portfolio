import { useEffect, useRef, useState } from 'react'
import { FiVolume2, FiVolumeX, FiUser, FiBriefcase, FiFolder, FiMail } from 'react-icons/fi'
import './App.css'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeSection, setActiveSection] = useState(0) // 0: About, 1: Experience, 2: Projects, 3: Contact

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      container.style.setProperty('--mouse-x', `${x}px`)
      container.style.setProperty('--mouse-y', `${y}px`)
    }

    container.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    // create audio element that points to public/pronounciation.mp3
    const audio = new Audio('/pronounciation.mp3')
    audio.preload = 'auto'
    audioRef.current = audio

    const onEnded = () => setIsPlaying(false)
    const onPause = () => setIsPlaying(false)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('pause', onPause)

    return () => {
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('pause', onPause)
      audio.pause()
      audioRef.current = null
    }
  }, [])

  // Handle section navigation with smooth animation
  const navigateToSection = (sectionIndex: number) => {
    setActiveSection(sectionIndex)
    const sectionsContainer = sectionsRef.current
    if (sectionsContainer) {
      const targetY = -sectionIndex * 100 // Each section is 100vh
      sectionsContainer.style.transform = `translateY(${targetY}vh)`
    }
  }

  return (
    <div ref={containerRef} className="app-container">
      <div className="grid-background"></div>
      
      {/* Navigation */}
      <NavigationButtons activeSection={activeSection} onNavigate={navigateToSection} />
      
      {/* Sections Container */}
      <div ref={sectionsRef} className="sections-container">
        <AboutSection 
          audioRef={audioRef} 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying} 
        />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  )
}

function USFlag() {
  return (
    <svg width="28" height="20" viewBox="0 0 19 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <rect width="19" height="14" fill="#b22234"/>
      <g fill="#fff">
        <rect y="1" width="19" height="1"/>
        <rect y="3" width="19" height="1"/>
        <rect y="5" width="19" height="1"/>
        <rect y="7" width="19" height="1"/>
        <rect y="9" width="19" height="1"/>
        <rect y="11" width="19" height="1"/>
      </g>
      <rect x="-1" width="10" height="7" fill="#3c3b6e"/>
    </svg>
  )
}

function INFlag() {
  return (
    <svg width="28" height="20" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <rect width="24" height="16" fill="#ff9933"/>
      <rect y="5.33" width="24" height="5.34" fill="#fff"/>
      <rect y="10.66" width="24" height="5.34" fill="#138808"/>
      <circle cx="12" cy="8" r="2.5" fill="#000080"/>
      <circle cx="12" cy="8" r="1.5" fill="#fff"/>
      <circle cx="12" cy="8" r="1" fill="#000080"/>
    </svg>
  )
}

function FlagsAndAddresses() {
  const [selected, setSelected] = useState<'us' | 'in' | null>('us')

  return (
    <div className="inline-row" role="group" aria-label="Country addresses">
      {/* US Flag */}
      <button
        className={`flag-btn ${selected === 'us' ? 'active' : ''}`}
        onClick={() => setSelected('us')}
        aria-pressed={selected === 'us'}
        title="Show United States address"
      >
        <USFlag />
      </button>

      {/* US Address box - expands when selected */}
      <div
        className={`addr-box us ${selected === 'us' ? 'expanded animate-in-left' : 'collapsed'}`}
        role="region"
        aria-label="US address"
        aria-hidden={selected !== 'us'}
      >
        <div className="addr-text">Wilmington, Delaware, United States</div>
      </div>

      {/* India Flag */}
      <button
        className={`flag-btn ${selected === 'in' ? 'active' : ''}`}
        onClick={() => setSelected('in')}
        aria-pressed={selected === 'in'}
        title="Show India address"
      >
        <INFlag />
      </button>

      {/* India Address box - expands when selected */}
      <div
        className={`addr-box in ${selected === 'in' ? 'expanded animate-in-right' : 'collapsed'}`}
        role="region"
        aria-label="India address"
        aria-hidden={selected !== 'in'}
      >
        <div className="addr-text">Kolkata, West Bengal, India</div>
      </div>
    </div>
  )
}

// Navigation Buttons Component
function NavigationButtons({ activeSection, onNavigate }: { activeSection: number, onNavigate: (index: number) => void }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const navItems = [
    { icon: FiUser, label: 'About', index: 0 },
    { icon: FiBriefcase, label: 'Experience', index: 1 },
    { icon: FiFolder, label: 'Projects', index: 2 },
    { icon: FiMail, label: 'Contact', index: 3 }
  ]

  return (
    <nav className="navigation" role="navigation" aria-label="Page sections">
      {navItems.map((item) => (
        <div key={item.index} className="nav-item-container">
          {hoveredIndex === item.index && (
            <div className="nav-label">{item.label}</div>
          )}
          <button
            className={`nav-btn ${activeSection === item.index ? 'active' : ''}`}
            onClick={() => onNavigate(item.index)}
            onMouseEnter={() => setHoveredIndex(item.index)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={`Navigate to ${item.label} section`}
            aria-pressed={activeSection === item.index}
          >
            <item.icon size={20} />
          </button>
        </div>
      ))}
    </nav>
  )
}

// About Section (contains the original content)
function AboutSection({ audioRef, isPlaying, setIsPlaying }: { 
  audioRef: React.RefObject<HTMLAudioElement | null>, 
  isPlaying: boolean, 
  setIsPlaying: (playing: boolean) => void 
}) {
  return (
    <section className="section about-section">
      <div className="content">
        <div className="title-block">
          <h1>SWASTIK</h1>
          <div className="name-row">
            <h1>BISWAS</h1>
            <button
              className={"audio-btn " + (isPlaying ? 'playing' : '')}
              onClick={() => {
                if (!audioRef.current) return
                if (isPlaying) {
                  audioRef.current.pause()
                } else {
                  audioRef.current.play()
                }
                setIsPlaying(!isPlaying)
              }}
              aria-pressed={isPlaying}
              aria-label={isPlaying ? 'Pause pronunciation' : 'Play pronunciation'}
              title={isPlaying ? 'Pause pronunciation' : 'Play pronunciation'}
            >
              {isPlaying ? <FiVolumeX size={18} /> : <FiVolume2 size={18} />}
            </button>
          </div>
        </div>
        <p className="subtitle">KIIT University, Class of 2028<br/>
                                B.Tech, Computer Science and Engineering</p>
        <FlagsAndAddresses />
        <p className="subtitle">Interested in <a>Data Science</a>, <a>Machine Learning</a></p>
      </div>
    </section>
  )
}

// Experience Section (blank for now)
function ExperienceSection() {
  return (
    <section className="section experience-section">
      <div className="content">
        <h2>Experience</h2>
        <p>Coming soon...</p>
      </div>
    </section>
  )
}

// Projects Section (blank for now)
function ProjectsSection() {
  return (
    <section className="section projects-section">
      <div className="content">
        <h2>Projects</h2>
        <p>Coming soon...</p>
      </div>
    </section>
  )
}

// Contact Section (blank for now)
function ContactSection() {
  return (
    <section className="section contact-section">
      <div className="content">
        <h2>Contact</h2>
        <p>Coming soon...</p>
      </div>
    </section>
  )
}

export default App
