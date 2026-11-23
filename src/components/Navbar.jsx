import React, { useState, useEffect } from 'react'
import { FaGithub, FaBars, FaTimes, FaArrowRight, FaFileAlt } from 'react-icons/fa'
import './Navbar.css'

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = ['home', 'about', 'journey', 'skills', 'projects', 'contact']
      const scrollPos = window.scrollY + 180

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="nav-brand">
          <div className="brand-avatar">FA</div>
          <div className="brand-text">
            <span className="brand-name">Filmon Amare</span>
            <span className="brand-role">Software Engineer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <a
            href="#home"
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </a>
          <a
            href="#journey"
            className={`nav-link ${activeSection === 'journey' ? 'active' : ''}`}
          >
            Journey
          </a>
          <a
            href="#skills"
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </a>
        </div>

        {/* Action Buttons */}
        <div className="nav-actions">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="nav-resume-btn"
              title="View Resume / CV"
            >
              <FaFileAlt />
              <span>Resume</span>
            </button>
          )}
          <a
            href="https://github.com/fili112"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-btn"
            title="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a href="#contact" className="nav-cta-btn">
            <span>Let's Talk</span>
            <FaArrowRight className="nav-cta-arrow" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>
            Journey
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          {onOpenResume && (
            <button
              onClick={() => {
                setMenuOpen(false)
                onOpenResume()
              }}
              className="mobile-resume-btn"
            >
              <FaFileAlt /> View Resume / CV
            </button>
          )}
          <a
            href="https://github.com/fili112"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mobile-github"
          >
            <FaGithub /> GitHub Profile
          </a>
        </div>
      </div>
      {menuOpen && (
        <div className="drawer-backdrop" onClick={() => setMenuOpen(false)}></div>
      )}
    </header>
  )
}

export default Navbar
