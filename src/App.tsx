import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)

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

  return (
    <div ref={containerRef} className="app-container">
      <div className="grid-background"></div>
      <div className="content">
        <h1>SWASTIK<br/>BISWAS</h1>
        <p className="subtitle">KIIT University, Class of 2028</p>
        <p className="subtitle">B.Tech, Computer Science and Engineering</p>

        {/* Flags to toggle addresses */}
        <FlagsAndAddresses />
      </div>
    </div>
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
        🇺🇸
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
        🇮🇳
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

export default App
