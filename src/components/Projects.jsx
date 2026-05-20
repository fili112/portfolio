import React from 'react'
import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Real Estate App',
      description: 'A full-stack real estate platform where users can browse, list, and find properties for sale or rent. Built with modern web technologies.',
      tech: ['React', 'Node.js', 'SQL', 'CSS'],
      image: '🏠',
      link: 'https://github.com/fili112',
      github: 'https://github.com/fili112'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website with stunning 3D animated background, smooth animations, and Supabase backend for contact form messages.',
      tech: ['React', 'Framer Motion', 'Supabase', 'Vite'],
      image: '🎨',
      link: 'https://portfolio-szk8.vercel.app',
      github: 'https://github.com/fili112/portfolio'
    },
    {
      title: 'Tigray Marketplace App',
      description: 'Coming soon! A local marketplace connecting buyers and sellers in Tigray. Helping local businesses grow through technology.',
      tech: ['React Native', 'Supabase', 'Node.js'],
      image: '🛒',
      link: 'https://github.com/fili112',
      github: 'https://github.com/fili112'
    }
  ]

  return (
    <section id="projects" className="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-image">
              <span className="project-emoji">{project.image}</span>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>View Project</span>
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
