import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFileAlt,
  FaTerminal,
} from 'react-icons/fa'
import { SiKotlin, SiReact, SiPython } from 'react-icons/si'
import './Hero.css'

const Hero = ({ onOpenResume }) => {
  const [showTerminal, setShowTerminal] = useState(false)

  const stats = [
    { value: '4+', label: 'Years Coding', icon: <FaCode /> },
    { value: '10+', label: 'Tech Stack Skills', icon: <FaLaptopCode /> },
    { value: 'BSc 4th', label: 'Adigrat University', icon: '🎓' },
    { value: 'Mekelle', label: 'Tigray, Ethiopia', icon: <FaMapMarkerAlt /> },
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-glow-ambient"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Availability Badge */}
        <motion.div
          className="hero-badge-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <span className="badge badge-emerald">
            <span className="pulse-dot"></span> Available for Projects & Engineering Roles
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          Building intelligent <br />
          <span className="gradient-text">Mobile & Web Solutions</span>
        </motion.h1>

        {/* Dynamic Subheading */}
        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Hi, I'm <strong className="hero-name">Filmon Amare</strong> — 4th-Year Software Engineering Student at Adigrat University specializing in modern Android (Jetpack Compose & Kotlin) & Full-Stack React development.
        </motion.h2>

        {/* Tech Quick-Pills */}
        <motion.div
          className="hero-tech-pills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="tech-pill"><SiKotlin /> Kotlin & Jetpack Compose</span>
          <span className="tech-pill"><SiReact /> React & Node.js</span>
          <span className="tech-pill"><SiPython /> Python & AI</span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <a href="#projects" className="btn btn-primary">
            <span>Explore Projects</span>
            <FaArrowRight />
          </a>

          {onOpenResume && (
            <button onClick={onOpenResume} className="btn btn-secondary btn-resume-cta">
              <FaFileAlt />
              <span>View Resume</span>
            </button>
          )}

          <a href="#contact" className="btn btn-secondary">
            <FaEnvelope />
            <span>Contact Me</span>
          </a>

          <button
            onClick={() => setShowTerminal(!showTerminal)}
            className={`btn btn-secondary btn-terminal-toggle ${showTerminal ? 'active' : ''}`}
            title="Toggle Developer Terminal"
          >
            <FaTerminal />
            <span>{showTerminal ? 'Hide Terminal' : 'Terminal'}</span>
          </button>

          <a
            href="https://github.com/fili112"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-icon-only"
            title="GitHub Profile"
          >
            <FaGithub />
          </a>
        </motion.div>

        {/* Interactive Developer Terminal Widget */}
        {showTerminal && (
          <motion.div
            className="hero-terminal-card"
            initial={{ opacity: 0, y: 15, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 15, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-title">filmon@portfolio: ~ (zsh)</span>
            </div>
            <pre className="terminal-body">
              <code>
                <span className="term-prompt">$</span> cat filmon_profile.json{'\n'}
                {JSON.stringify(
                  {
                    engineer: 'Filmon Amare',
                    status: '4th Year @ Adigrat University',
                    focus: ['Native Android (Compose)', 'Full-Stack React', 'Cloud DBs'],
                    location: 'Mekelle, Tigray, Ethiopia',
                    languages: ['Tigrinya', 'Amharic', 'English'],
                    availability: 'Internships, Contracts & Full-time Roles',
                  },
                  null,
                  2
                )}
              </code>
            </pre>
          </motion.div>
        )}

        {/* Stats Row */}
        <motion.div
          className="hero-stats-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="hero-stat-card">
              <div className="stat-icon-wrapper">{stat.icon}</div>
              <div className="stat-content">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modern Scroll Indicator */}
      <motion.a
        href="#about"
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-label="Scroll to about section"
      >
        <span className="scroll-mouse">
          <span className="scroll-wheel"></span>
        </span>
        <span className="scroll-text">Scroll Down</span>
      </motion.a>
    </section>
  )
}

export default Hero
