import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaMobileAlt, FaLaptopCode } from 'react-icons/fa'
import { SiKotlin, SiFirebase, SiReact, SiSupabase, SiPostgresql } from 'react-icons/si'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Real Estate Mobile App',
      category: 'mobile',
      badge: 'Flagship Android Project',
      icon: <FaMobileAlt />,
      description:
        'A full-featured native Android platform empowering users to browse, search, and list residential and commercial properties for rent and purchase with seamless map integration.',
      features: [
        'Built with 100% Kotlin & Jetpack Compose declarative UI',
        'Firebase Authentication & real-time Firestore database',
        'OSMDroid OpenStreetMap interactive map search',
        'Property image upload & instant multi-criteria filtering',
      ],
      tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Firestore', 'OSMDroid Maps', 'Material 3'],
      github: 'https://github.com/fili112',
      demo: null,
      gradient: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    },
    {
      id: 2,
      title: 'Developer Portfolio Platform',
      category: 'web',
      badge: 'Production Web App',
      icon: <FaLaptopCode />,
      description:
        'High-performance personal web platform featuring interactive particle physics, dark-mode glassmorphism, smooth Framer Motion animations, and Supabase database integration.',
      features: [
        'Dynamic 60fps canvas particle constellation system',
        'Modern glassmorphic tokens & responsive UI architecture',
        'Supabase cloud backend for contact form persistence',
        'Protected admin portal with secured message dashboard',
      ],
      tech: ['React', 'Framer Motion', 'Supabase', 'Vite', 'PostgreSQL', 'CSS3'],
      github: 'https://github.com/fili112/portfolio',
      demo: 'https://github.com/fili112/portfolio',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
    },
    {
      id: 3,
      title: 'Campus & Community Utility Hub',
      category: 'web',
      badge: 'Full-Stack Solution',
      icon: <SiReact />,
      description:
        'A comprehensive university portal designed to simplify course schedule tracking, announcements, and peer-to-peer resource sharing for Adigrat University students.',
      features: [
        'Secure multi-role authentication (Students & Faculty)',
        'Real-time announcements and notification feed',
        'RESTful API architecture with PostgreSQL persistence',
        'Mobile-first responsive dashboard layout',
      ],
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'TailwindCSS'],
      github: 'https://github.com/fili112',
      demo: null,
      gradient: 'linear-gradient(135deg, #10b981 0%, #0284c7 100%)',
    },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <span className="section-pill">03 // FEATURED WORK</span>
        <h2 className="section-title">Recent Projects</h2>
        <p className="section-subtitle">
          Real-world software built with clean architecture, modern user interfaces, and robust backend engineering.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="projects-filter-bar">
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All Projects
        </button>
        <button
          className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`}
          onClick={() => setActiveFilter('mobile')}
        >
          Mobile Apps
        </button>
        <button
          className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
          onClick={() => setActiveFilter('web')}
        >
          Web Applications
        </button>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="projects-grid">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              className="project-card-v2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8 }}
            >
              {/* Project Card Header Banner */}
              <div
                className="project-banner"
                style={{ background: project.gradient }}
              >
                <div className="banner-icon">{project.icon}</div>
                <div className="banner-badge">{project.badge}</div>
              </div>

              {/* Project Card Content */}
              <div className="project-body">
                <h3 className="project-heading">{project.title}</h3>
                <p className="project-summary">{project.description}</p>

                {/* Features Checklist */}
                <div className="project-features">
                  <span className="features-title">Highlights:</span>
                  <ul className="features-list">
                    {project.features.map((feat, i) => (
                      <li key={i}>
                        <FaCheckCircle className="check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="project-tech-tags">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-action-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn-primary"
                  >
                    <FaGithub />
                    <span>View Repository</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn-secondary"
                      title="Live Preview"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Projects
