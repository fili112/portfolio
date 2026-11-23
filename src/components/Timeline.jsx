import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaMobileAlt, FaLaptopCode, FaRocket } from 'react-icons/fa'
import './Timeline.css'

const Timeline = () => {
  const milestones = [
    {
      period: '2021 — PRESENT',
      title: 'B.Sc. in Software Engineering',
      institution: 'Adigrat University, Tigray, Ethiopia',
      icon: <FaGraduationCap />,
      tag: 'Academic Milestone',
      description:
        'Currently in 4th year of study. Mastered core computer science fundamentals including Data Structures & Algorithms, Object-Oriented Software Design, Operating Systems, Database Management Systems, and Software Architecture.',
    },
    {
      period: '2023 — 2024',
      title: 'Native Android & Mobile Engineering',
      institution: 'Specialized Project Focus',
      icon: <FaMobileAlt />,
      tag: 'Android & Kotlin',
      description:
        'Architected and published a full-scale Real Estate Android application leveraging modern Android development standards: Kotlin Coroutines, Jetpack Compose declarative UI, Material Design 3, Firebase Firestore, and OSMDroid maps.',
    },
    {
      period: '2024 — PRESENT',
      title: 'Full-Stack Web & Cloud Systems',
      institution: 'Modern Web Engineering',
      icon: <FaLaptopCode />,
      tag: 'React & Cloud',
      description:
        'Specializing in high-performance web applications using React, Vite, Framer Motion, and serverless databases like Supabase & PostgreSQL with clean API architecture and responsive design systems.',
    },
    {
      period: 'VISION & GOAL',
      title: 'Community Impact & Enterprise Scale',
      institution: 'Building for Ethiopia & The World',
      icon: <FaRocket />,
      tag: 'Mission Driven',
      description:
        'Passionate about engineering reliable, accessible software solutions that address critical needs in agriculture, education, housing, and fintech across Ethiopia and the broader African continent.',
    },
  ]

  return (
    <section id="journey" className="journey-section">
      <div className="section-header">
        <span className="section-pill">02 // CAREER TIMELINE</span>
        <h2 className="section-title">My Journey & Experience</h2>
        <p className="section-subtitle">
          How I evolved from learning computer science principles to building production-ready mobile and web software.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {milestones.map((m, idx) => (
          <motion.div
            key={idx}
            className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            {/* Timeline Node Icon */}
            <div className="timeline-node">
              <span className="node-icon">{m.icon}</span>
            </div>

            {/* Timeline Content Card */}
            <div className="timeline-card">
              <div className="timeline-card-header">
                <span className="timeline-period">{m.period}</span>
                <span className="timeline-tag">{m.tag}</span>
              </div>
              <h3 className="timeline-title">{m.title}</h3>
              <h4 className="timeline-institution">{m.institution}</h4>
              <p className="timeline-desc">{m.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
