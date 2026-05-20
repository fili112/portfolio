import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import AdminLogin from './AdminLogin'
import AdminDashboard from './AdminDashboard'

const Admin = () => {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#0a0a0a',
        color: '#667eea',
        fontSize: '1.5rem'
      }}>
        <div className="spinner" style={{
          width: '40px',
          height: '40px',
          border: '4px solid rgba(102, 126, 234, 0.3)',
          borderTop: '4px solid #667eea',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite'
        }}></div>
      </div>
    )
  }

  return session
    ? <AdminDashboard onLogout={() => setSession(null)} />
    : <AdminLogin onLogin={() => {}} />
}

export default Admin
