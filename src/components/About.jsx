import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="about-content">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="image-container">
            <img src="/profile.png" alt="Filmon Amare" />
          </div>
        </motion.div>

        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Software Engineering Student at Adigrat University</h3>
          <p>
            I'm Filmon Amare, a passionate 4th year Software Engineering student 
            at Adigrat University, Tigray. I started my coding journey 4 years ago 
            and have been building innovative solutions ever since.
          </p>
          <p>
            With hands-on experience in full-stack development, I've worked on 
            real-world projects including a Real Estate application. I love turning 
            ideas into functional, beautiful web and mobile applications.
          </p>
          <p>
            My goal is to build impactful apps and websites that solve real problems 
            for people in Tigray, Ethiopia, and beyond. I believe technology can 
            transform communities and I want to be part of that change.
          </p>

          <div className="about-info">
            <div className="info-item">
              <span className="info-label">📍 Location:</span>
              <span className="info-value">Mekelle, Tigray, Ethiopia</span>
            </div>
            <div className="info-item">
              <span className="info-label">🎓 Education:</span>
              <span className="info-value">BSc Software Engineering - Adigrat University (4th Year)</span>
            </div>
            <div className="info-item">
              <span className="info-label">💻 Experience:</span>
              <span className="info-value">4 Years of Coding</span>
            </div>
            <div className="info-item">
              <span className="info-label">🌍 Languages:</span>
              <span className="info-value">Tigrinya, Amharic, English</span>
            </div>
            <div className="info-item">
              <span className="info-label">🎯 Goal:</span>
              <span className="info-value">Build Apps & Websites</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
