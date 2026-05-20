import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './AdminLogin.css'

const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      setError('Invalid email or password. Try again.')
    } else {
      navigate('/admin/dashboard')
    }

    setLoading(false)
  }

  return (
    <div className="admin-login">
      <div className="login-card">
        <div className="login-logo">🔐</div>
        <h1>Admin Login</h1>
        <p>Filmon Amare - Portfolio Dashboard</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="filmonamare70@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-msg">❌ {error}</p>}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? (
              <span className="btn-loading">
                <span className="spinner"></span> Logging in...
              </span>
            ) : 'Login'}
          </button>
        </form>

        <a href="/" className="back-link">← Back to Portfolio</a>
      </div>
    </div>
  )
}

export default AdminLogin
