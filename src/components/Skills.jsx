import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiKotlin,
  SiReact,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiCplusplus,
  SiGit,
  SiPostgresql,
  SiFirebase,
  SiAndroid,
  SiHtml5,
} from 'react-icons/si'
import { FaJava, FaCss3Alt } from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'mobile', label: 'Android & Mobile' },
    { id: 'web', label: 'Frontend & Web' },
    { id: 'backend', label: 'Backend & Database' },
    { id: 'core', label: 'Core Languages' },
  ]

  const skillsData = [
    {
      name: 'Kotlin',
      category: 'mobile',
      level: 90,
      badge: 'Advanced',
      icon: <SiKotlin />,
      color: '#7f52ff',
      description: 'Primary language for Android, Coroutines, Jetpack',
    },
    {
      name: 'Jetpack Compose',
      category: 'mobile',
      level: 88,
      badge: 'Advanced',
      icon: <SiAndroid />,
      color: '#3ddc84',
      description: 'Declarative modern Android UI, Material Design 3',
    },
    {
      name: 'React.js',
      category: 'web',
      level: 88,
      badge: 'Advanced',
      icon: <SiReact />,
      color: '#61dafb',
      description: 'Hooks, Vite, SPA architecture, Framer Motion',
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'web',
      level: 85,
      badge: 'Proficient',
      icon: <SiJavascript />,
      color: '#f7df1e',
      description: 'Async/Await, DOM manipulation, Functional JS',
    },
    {
      name: 'Python',
      category: 'core',
      level: 82,
      badge: 'Proficient',
      icon: <SiPython />,
      color: '#3776ab',
      description: 'Scripting, Algorithms, Data structures, AI basics',
    },
    {
      name: 'Java',
      category: 'core',
      level: 80,
      badge: 'Proficient',
      icon: <FaJava />,
      color: '#ea2d2e',
      description: 'OOP, Android fundamentals, Software engineering',
    },
    {
      name: 'C / C++',
      category: 'core',
      level: 78,
      badge: 'Proficient',
      icon: <SiCplusplus />,
      color: '#00599c',
      description: 'Memory management, Data structures, Low-level computing',
    },
    {
      name: 'Node.js',
      category: 'backend',
      level: 80,
      badge: 'Proficient',
      icon: <SiNodedotjs />,
      color: '#5fa04e',
      description: 'RESTful APIs, Express, server runtime',
    },
    {
      name: 'SQL & PostgreSQL',
      category: 'backend',
      level: 82,
      badge: 'Proficient',
      icon: <SiPostgresql />,
      color: '#4169e1',
      description: 'Relational database schema, Queries, Supabase',
    },
    {
      name: 'Firebase & Firestore',
      category: 'backend',
      level: 85,
      badge: 'Advanced',
      icon: <SiFirebase />,
      color: '#ffca28',
      description: 'Real-time database, Authentication, Cloud storage',
    },
    {
      name: 'Git & GitHub',
      category: 'core',
      level: 90,
      badge: 'Advanced',
      icon: <SiGit />,
      color: '#f05032',
      description: 'Version control, Branching workflows, Collaboration',
    },
    {
      name: 'HTML5 & Modern CSS3',
      category: 'web',
      level: 92,
      badge: 'Mastery',
      icon: <SiHtml5 />,
      color: '#e34f26',
      description: 'Responsive flex/grid, Animations, Glassmorphism',
    },
  ]

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <span className="section-pill">02 // TECHNICAL ARSENAL</span>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          A battle-tested stack of modern tools, frameworks, and programming languages I leverage to build resilient software.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="skills-filter-container">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`skills-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div layout className="skills-grid">
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              className="skill-card-v2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
            >
              <div className="skill-card-top">
                <div
                  className="skill-icon-badge"
                  style={{ color: skill.color, backgroundColor: `${skill.color}15` }}
                >
                  {skill.icon}
                </div>
                <div className="skill-level-pill">{skill.badge}</div>
              </div>

              <div className="skill-info">
                <div className="skill-name-row">
                  <h3 className="skill-title">{skill.name}</h3>
                  <span className="skill-pct">{skill.level}%</span>
                </div>
                <p className="skill-sub">{skill.description}</p>
              </div>

              {/* Glowing Progress Bar */}
              <div className="skill-track">
                <motion.div
                  className="skill-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  style={{
                    background: `linear-gradient(90deg, #6366f1, ${skill.color})`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Skills
