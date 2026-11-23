import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheck,
  FaCopy,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [copiedField, setCopiedField] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text)
    setCopiedField(fieldName)
    setTimeout(() => setCopiedField(null), 2500)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      if (!isSupabaseConfigured) {
        // Fallback: save to localStorage when Supabase env credentials are not configured yet
        const localList = JSON.parse(localStorage.getItem('portfolio_messages') || '[]')
        localList.push({
          id: Date.now(),
          ...formData,
          created_at: new Date().toISOString(),
          is_read: false
        })
        localStorage.setItem('portfolio_messages', JSON.stringify(localList))
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        return
      }

      const { error } = await supabase.from('messages').insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ])

      if (error) throw error

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(''), 6000)
    }
  }

  const contactMethods = [
    {
      id: 'email',
      icon: <FaEnvelope />,
      title: 'Email Address',
      value: 'filmonamare70@gmail.com',
      copyVal: 'filmonamare70@gmail.com',
      actionLabel: 'Click to copy',
    },
    {
      id: 'phone',
      icon: <FaPhone />,
      title: 'Phone / WhatsApp',
      value: '+251 968 748 912',
      copyVal: '+251968748912',
      actionLabel: 'Click to copy',
    },
    {
      id: 'location',
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Mekelle, Tigray, Ethiopia',
      copyVal: null,
      actionLabel: 'UTC+3 / EAT',
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <span className="section-pill">04 // GET IN TOUCH</span>
        <h2 className="section-title">Let's Build Together</h2>
        <p className="section-subtitle">
          Have an exciting project, internship opportunity, or question? Send a message and let's create something remarkable.
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Info Column */}
        <motion.div
          className="contact-info-column"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-info-card">
            <h3 className="info-title">Contact Channels</h3>
            <p className="info-subtitle">
              Feel free to reach out directly through any of these communication channels. I respond promptly!
            </p>

            <div className="channels-list">
              {contactMethods.map((method) => (
                <div
                  key={method.id}
                  className={`channel-item ${method.copyVal ? 'clickable' : ''}`}
                  onClick={() =>
                    method.copyVal && copyToClipboard(method.copyVal, method.id)
                  }
                >
                  <div className="channel-icon">{method.icon}</div>
                  <div className="channel-text">
                    <span className="channel-label">{method.title}</span>
                    <span className="channel-val">{method.value}</span>
                  </div>
                  {method.copyVal && (
                    <div className="channel-copy-btn" title="Copy to clipboard">
                      {copiedField === method.id ? (
                        <span className="copied-text">
                          <FaCheck /> Copied
                        </span>
                      ) : (
                        <FaCopy className="copy-icon" />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Connect Links */}
            <div className="social-connect-block">
              <span className="social-label">Find Me Online:</span>
              <div className="social-buttons-grid">
                <a
                  href="https://github.com/fili112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="GitHub"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/filmon-amare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/filmonamare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="Twitter / X"
                >
                  <FaXTwitter />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Column */}
        <motion.div
          className="contact-form-column"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form className="modern-contact-form" onSubmit={handleSubmit}>
            <h3 className="form-heading">Send a Direct Message</h3>

            <div className="input-group">
              <label htmlFor="name" className="input-label">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="e.g. Alex Johnson"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="alex@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="input-group">
              <label htmlFor="message" className="input-label">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project, idea, or questions..."
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary submit-contact-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="submit-spinner"></span>
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <motion.div
                className="form-alert alert-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FaCheck /> Message delivered successfully! I will reach out to you shortly.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className="form-alert alert-error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ⚠️ Message failed to send. Please write directly to filmonamare70@gmail.com
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
