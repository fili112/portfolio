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
          <h3>Software Engineering Student from Mekelle, Tigray</h3>
          <p>
            I'm a passionate software engineering student dedicated to building 
            innovative solutions that make a difference in my community and beyond.
          </p>
          <p>
            With a strong foundation in modern web technologies, I'm constantly 
            learning and exploring new ways to solve real-world problems through code.
          </p>
          <p>
            My goal is to create applications that are not only technically sound 
            but also meaningful and impactful for users in Tigray and across Ethiopia.
          </p>

          <div className="about-info">
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">Mekelle, Tigray</span>
            </div>
            <div className="info-item">
              <span className="info-label">Education:</span>
              <span className="info-value">Software Engineering Student</span>
            </div>
            <div className="info-item">
              <span className="info-label">Languages:</span>
              <span className="info-value">Tigrinya, Amharic, English</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
