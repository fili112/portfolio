import React from 'react'
import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with 3D animated background built with React and Framer Motion.',
      tech: ['React', 'Framer Motion', 'CSS3'],
      image: '🎨',
      link: 'https://github.com/fili112',
      github: 'https://github.com/fili112'
    },
    {
      title: 'Coming Soon',
      description: 'Your next amazing project will be displayed here. Stay tuned for updates!',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '🚀',
      link: '#',
      github: '#'
    },
    {
      title: 'Future Project',
      description: 'Another exciting project in development. This could be your marketplace app or any other innovative solution.',
      tech: ['React Native', 'Firebase', 'TypeScript'],
      image: '💡',
      link: '#',
      github: '#'
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
