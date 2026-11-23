import React from 'react'
import { FaArrowUp, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-v2">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-badge-row">
              <div className="footer-brand-avatar">FA</div>
              <span className="footer-brand-title">Filmon Amare</span>
            </div>
            <p className="footer-tagline">
              Software Engineer & Full-Stack Developer creating intuitive digital experiences.
            </p>
          </div>

          <div className="footer-links-group">
            <span className="footer-group-title">Navigation</span>
            <div className="footer-nav-list">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-social-group">
            <span className="footer-group-title">Connect</span>
            <div className="footer-social-icons">
              <a
                href="https://github.com/fili112"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/filmon-amare"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/filmonamare"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter / X"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Filmon Amare. Crafted with{' '}
            <FaHeart className="heart-icon" /> in Mekelle, Tigray, Ethiopia.
          </p>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            title="Back to Top"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
