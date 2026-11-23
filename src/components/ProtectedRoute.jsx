import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { supabase, isSupabaseConfigured } from '../lib/supabase'

const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState(undefined)

  useEffect(() => {
    if (!isSupabaseConfigured) {
      // If Supabase credentials are not set, check demo admin session in localStorage
      const localAdmin = localStorage.getItem('portfolio_admin_logged_in')
      setSession(localAdmin === 'true' ? { user: { email: 'filmonamare70@gmail.com' } } : null)
      return
    }

    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        setSession(session)
      })
      .catch(() => {
        setSession(null)
      })
  }, [])

  // Still loading
  if (session === undefined) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#07090e',
          color: '#6366f1',
          fontSize: '1.2rem',
          fontFamily: 'sans-serif',
        }}
      >
        Loading dashboard...
      </div>
    )
  }

  // Not logged in → redirect to login
  if (!session) {
    return <Navigate to="/admin" replace />
  }

  return children
}

export default ProtectedRoute
