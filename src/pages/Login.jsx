import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      navigate('/admin')
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">🔐</div>
        <h1>Admin Login</h1>
        <p>Filmon Amare - Portfolio Dashboard</p>

        <form onSubmit={handleLogin}>
          <div className="login-field">
            <label>Email</label>
            <input
              type="email"
              placeholder="filmonamare70@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="login-error">❌ {error}</p>}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? (
              <span>
                <span className="spinner"></span> Logging in...
              </span>
            ) : 'Login to Dashboard'}
          </button>
        </form>

        <a href="/" className="back-link">← Back to Portfolio</a>
      </div>
    </div>
  )
}

export default Login
