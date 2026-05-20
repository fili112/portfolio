import React, { useEffect, useRef } from 'react'
import './AnimatedBackground.css'

const AnimatedBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.z = Math.random() * 1000
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.vz = Math.random() * 2 + 1
        this.radius = Math.random() * 2 + 1
      }

      update() {
        this.z -= this.vz
        if (this.z <= 0) {
          this.z = 1000
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
        }

        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }

      draw() {
        const scale = 1000 / (1000 + this.z)
        const x2d = (this.x - canvas.width / 2) * scale + canvas.width / 2
        const y2d = (this.y - canvas.height / 2) * scale + canvas.height / 2
        const radius2d = this.radius * scale

        const opacity = 1 - this.z / 1000
        const hue = 200 + (this.z / 1000) * 60

        ctx.beginPath()
        ctx.arc(x2d, y2d, radius2d, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${hue}, 70%, 60%, ${opacity * 0.8})`
        ctx.fill()
      }
    }

    // Create particles
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3
            ctx.beginPath()
            ctx.strokeStyle = `rgba(102, 126, 234, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.moveTo(
              (p1.x - canvas.width / 2) * (1000 / (1000 + p1.z)) + canvas.width / 2,
              (p1.y - canvas.height / 2) * (1000 / (1000 + p1.z)) + canvas.height / 2
            )
            ctx.lineTo(
              (p2.x - canvas.width / 2) * (1000 / (1000 + p2.z)) + canvas.width / 2,
              (p2.y - canvas.height / 2) * (1000 / (1000 + p2.z)) + canvas.height / 2
            )
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="animated-background" />
}

export default AnimatedBackground
