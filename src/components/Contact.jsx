import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // Save message to Supabase
      const { error } = await supabase
        .from('messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }
        ])

      if (error) throw error

      // Success!
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })

    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000)
    }
  }

  return (
    <section id="contact" className="contact">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-content">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Let's Work Together</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, 
            or opportunities to be part of your vision.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>filmonamare70@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <h4>Phone</h4>
                <p>+251 968 748 912</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>Mekelle, Tigray, Ethiopia</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/fili112" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/filmon-amare" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <span>LinkedIn</span>
            </a>
            <a href="https://twitter.com/filmonamare" target="_blank" rel="noopener noreferrer" className="social-link" title="Twitter">
              <span>Twitter</span>
            </a>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="btn-loading">
                <span className="spinner"></span> Sending...
              </span>
            ) : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <p className="status-message success">
              ✅ Message sent! I'll get back to you soon, {formData.name || 'friend'}!
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="status-message error">
              ❌ Something went wrong. Please email me at filmonamare70@gmail.com
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
