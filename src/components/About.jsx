import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaLanguage, FaRocket, FaMobileAlt, FaServer, FaFileAlt, FaEnvelope } from 'react-icons/fa'
import './About.css'

const About = ({ onOpenResume }) => {
  const highlights = [
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App Development',
      desc: 'Building high-performance Android applications using Kotlin, Jetpack Compose, Firebase, and Material 3 design principles.',
    },
    {
      icon: <FaServer />,
      title: 'Full-Stack Web Engineering',
      desc: 'Developing responsive web apps with React, Vite, Framer Motion, Node.js, and Supabase / PostgreSQL backends.',
    },
    {
      icon: <FaCode />,
      title: 'Clean Architecture',
      desc: 'Writing maintainable, scalable code with strong adherence to design patterns, modularity, and problem-solving best practices.',
    },
  ]

  const infoItems = [
    { label: 'Location', value: 'Mekelle, Tigray, Ethiopia', icon: <FaMapMarkerAlt /> },
    { label: 'Education', value: 'BSc Software Engineering (4th Year)', icon: <FaGraduationCap /> },
    { label: 'University', value: 'Adigrat University', icon: '🏛️' },
    { label: 'Languages', value: 'Tigrinya, Amharic, English', icon: <FaLanguage /> },
    { label: 'Experience', value: '4+ Years Active Coding', icon: <FaCode /> },
    { label: 'Mission', value: 'Building Impactful Apps for the World', icon: <FaRocket /> },
  ]

  return (
    <section id="about" className="about">
      <div className="section-header">
        <span className="section-pill">01 // ABOUT ME</span>
        <h2 className="section-title">Engineering With Purpose</h2>
        <p className="section-subtitle">
          Driven by a relentless passion to transform real-world challenges into intuitive, robust digital experiences.
        </p>
      </div>

      <div className="about-grid">
        {/* Profile Image & Experience Badges */}
        <motion.div
          className="about-image-column"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-image-wrapper">
            <div className="about-glow-ring"></div>
            <div className="about-avatar-card">
              <img src="/profile.png" alt="Filmon Amare" className="about-avatar-img" />
            </div>

            {/* Floating Floating Badges */}
            <motion.div
              className="about-badge top-badge"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="badge-icon">🎓</div>
              <div>
                <span className="badge-title">4th Year Student</span>
                <span className="badge-sub">Adigrat University</span>
              </div>
            </motion.div>

            <motion.div
              className="about-badge bottom-badge"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="badge-icon">📍</div>
              <div>
                <span className="badge-title">Mekelle, Tigray</span>
                <span className="badge-sub">Ethiopia</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Narrative & Specialty Cards */}
        <motion.div
          className="about-text-column"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-story">
            <h3 className="story-heading">
              Software Engineer crafting scalable products from Tigray to the world.
            </h3>
            <p>
              I am <strong>Filmon Amare</strong>, an ambitious 4th-year Software Engineering student at Adigrat University. Over the past 4 years of intense coding, I have developed a deep fascination for turning conceptual ideas into high-performing, elegant applications.
            </p>
            <p>
              From crafting a comprehensive <strong>Real Estate Mobile Platform</strong> in Android (Kotlin & Jetpack Compose) to engineering interactive full-stack web platforms with modern React and Supabase, I love the full spectrum of software engineering.
            </p>
            <p>
              My goal is to craft digital products that make everyday life easier, empower local communities, and create tangible value across Ethiopia and the global tech scene.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="about-info-grid">
            {infoItems.map((item, idx) => (
              <div key={idx} className="about-info-cell">
                <span className="cell-icon">{item.icon}</span>
                <div className="cell-content">
                  <span className="cell-label">{item.label}</span>
                  <span className="cell-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Specialty Pillars */}
          <div className="about-pillars">
            {highlights.map((h, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon">{h.icon}</div>
                <div className="pillar-body">
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* About Actions */}
          <div className="about-actions-row">
            {onOpenResume && (
              <button onClick={onOpenResume} className="btn btn-primary">
                <FaFileAlt />
                <span>View Full Curriculum Vitae</span>
              </button>
            )}
            <a href="#contact" className="btn btn-secondary">
              <FaEnvelope />
              <span>Get In Touch</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
