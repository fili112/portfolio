import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState(undefined)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
  }, [])

  // Still loading
  if (session === undefined) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a0a',
        color: '#667eea',
        fontSize: '1.2rem'
      }}>
        Loading...
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
