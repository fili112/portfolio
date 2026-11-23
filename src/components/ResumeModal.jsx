import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaTimes,
  FaDownload,
  FaGraduationCap,
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPrint,
} from 'react-icons/fa'
import './ResumeModal.css'

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <AnimatePresence>
      <div className="resume-backdrop" onClick={onClose}>
        <motion.div
          className="resume-modal-container"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Modal Header Actions */}
          <div className="resume-modal-header">
            <div className="header-left">
              <span className="cv-badge">Curriculum Vitae</span>
              <h2 className="modal-title">Filmon Amare — Resume</h2>
            </div>
            <div className="header-actions">
              <button onClick={handlePrint} className="resume-action-btn" title="Print or Save as PDF">
                <FaPrint /> <span>Print / Save PDF</span>
              </button>
              <button onClick={onClose} className="resume-close-btn" aria-label="Close modal">
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div className="resume-paper" id="resume-document">
            {/* Top Identity Block */}
            <div className="cv-profile-header">
              <div>
                <h1 className="cv-name">Filmon Amare</h1>
                <p className="cv-title">Software Engineer · Full-Stack & Android Specialist</p>
              </div>
              <div className="cv-contact-pills">
                <span><FaMapMarkerAlt /> Mekelle, Tigray, Ethiopia</span>
                <span><FaEnvelope /> filmonamare70@gmail.com</span>
                <span><FaPhone /> +251 968 748 912</span>
                <span><FaGithub /> github.com/fili112</span>
                <span><FaLinkedin /> linkedin.com/in/filmon-amare</span>
              </div>
            </div>

            {/* Summary */}
            <div className="cv-section">
              <h3 className="cv-section-title">Professional Summary</h3>
              <p className="cv-summary-text">
                Dedicated 4th-Year Software Engineering student at Adigrat University with 4+ years of practical software development experience. Proven capability in building scalable native Android applications utilizing Kotlin, Jetpack Compose, and Firebase, as well as production-ready web applications using React, modern CSS, Node.js, and Supabase. Passionate about solving real-world challenges through clean code and robust engineering.
              </p>
            </div>

            {/* Education */}
            <div className="cv-section">
              <h3 className="cv-section-title">
                <FaGraduationCap className="cv-icon" /> Education
              </h3>
              <div className="cv-item">
                <div className="cv-item-header">
                  <div>
                    <h4 className="cv-item-title">B.Sc. in Software Engineering</h4>
                    <span className="cv-item-institution">Adigrat University — Tigray, Ethiopia</span>
                  </div>
                  <span className="cv-item-date">2021 – Present (4th Year)</span>
                </div>
                <p className="cv-item-desc">
                  Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Software Architecture, Mobile Application Development, Computer Networks, Operating Systems.
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="cv-section">
              <h3 className="cv-section-title">Technical Expertise</h3>
              <div className="cv-skills-grid">
                <div className="cv-skill-group">
                  <strong>Mobile Development:</strong> Kotlin, Android Jetpack Compose, Material 3, ViewModel, LiveData, Coroutines, Room DB, OSMDroid.
                </div>
                <div className="cv-skill-group">
                  <strong>Frontend Web:</strong> React.js, JavaScript (ES6+), HTML5, CSS3/SCSS, Framer Motion, Responsive Design, Vite.
                </div>
                <div className="cv-skill-group">
                  <strong>Backend & DB:</strong> Node.js, Express, Firebase Firestore, Supabase, PostgreSQL, RESTful APIs.
                </div>
                <div className="cv-skill-group">
                  <strong>Core Languages:</strong> Python, Java, C/C++, JavaScript, Kotlin, SQL.
                </div>
                <div className="cv-skill-group">
                  <strong>Tools & Workflow:</strong> Git, GitHub, Linux / PowerShell, VS Code, Android Studio, Figma.
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div className="cv-section">
              <h3 className="cv-section-title">
                <FaBriefcase className="cv-icon" /> Featured Projects
              </h3>

              <div className="cv-item">
                <div className="cv-item-header">
                  <div>
                    <h4 className="cv-item-title">Real Estate Android App</h4>
                    <span className="cv-item-institution">Kotlin · Jetpack Compose · Firebase · OSMDroid Maps</span>
                  </div>
                  <span className="cv-item-date">Completed</span>
                </div>
                <ul className="cv-bullets">
                  <li>Engineered a native Android property discovery application with Material 3 declarative UI.</li>
                  <li>Integrated Cloud Firestore for real-time listings, user authentication, and bookmarking.</li>
                  <li>Implemented geospatial search via OpenStreetMap (OSMDroid) for location-based property exploration.</li>
                </ul>
              </div>

              <div className="cv-item">
                <div className="cv-item-header">
                  <div>
                    <h4 className="cv-item-title">Developer Portfolio & Admin System</h4>
                    <span className="cv-item-institution">React · Vite · Framer Motion · Supabase</span>
                  </div>
                  <span className="cv-item-date">Completed</span>
                </div>
                <ul className="cv-bullets">
                  <li>Architected a fast personal web application with custom canvas physics and glassmorphism.</li>
                  <li>Developed protected admin authentication and message monitoring with Supabase backend.</li>
                </ul>
              </div>
            </div>

            {/* Languages */}
            <div className="cv-section">
              <h3 className="cv-section-title">Languages</h3>
              <p className="cv-summary-text">
                <strong>Tigrinya</strong> (Native) · <strong>Amharic</strong> (Fluent) · <strong>English</strong> (Professional Working Proficiency)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default ResumeModal
