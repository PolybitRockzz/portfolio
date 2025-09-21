import { useEffect, useRef } from 'react'
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
        <h1>SWASTIK BISWAS</h1>
        <p className="university">KIIT University, Class of 2028</p>
        <p className="location">Wilmington, Delaware, United States   |   Kolkata, West Bengal, India</p>
      </div>
    </div>
  )
}

export default App
