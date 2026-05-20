import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './AdminDashboard.css'

const AdminDashboard = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all') // all, unread, read
  const navigate = useNavigate()

  useEffect(() => {
    checkAuth()
    fetchMessages()
  }, [])

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      navigate('/admin')
    }
  }

  const fetchMessages = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error) setMessages(data || [])
    setLoading(false)
  }

  const markAsRead = async (id) => {
    await supabase
      .from('messages')
      .update({ is_read: true })
      .eq('id', id)
    fetchMessages()
  }

  const markAsUnread = async (id) => {
    await supabase
      .from('messages')
      .update({ is_read: false })
      .eq('id', id)
    fetchMessages()
  }

  const deleteMessage = async (id) => {
    if (window.confirm('Delete this message?')) {
      await supabase.from('messages').delete().eq('id', id)
      fetchMessages()
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin')
  }

  const filteredMessages = messages.filter(msg => {
    if (filter === 'unread') return !msg.is_read
    if (filter === 'read') return msg.is_read
    return true
  })

  const unreadCount = messages.filter(m => !m.is_read).length

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1>📬 Admin Dashboard</h1>
          <p>Welcome back, Filmon!</p>
        </div>
        <div className="header-right">
          <a href="/" className="view-site-btn">🌐 View Site</a>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </header>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-icon">📨</span>
          <div>
            <h3>{messages.length}</h3>
            <p>Total Messages</p>
          </div>
        </div>
        <div className="stat-card unread">
          <span className="stat-icon">🔴</span>
          <div>
            <h3>{unreadCount}</h3>
            <p>Unread</p>
          </div>
        </div>
        <div className="stat-card read">
          <span className="stat-icon">✅</span>
          <div>
            <h3>{messages.length - unreadCount}</h3>
            <p>Read</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        <button
          className={`tab ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({messages.length})
        </button>
        <button
          className={`tab ${filter === 'unread' ? 'active' : ''}`}
          onClick={() => setFilter('unread')}
        >
          Unread ({unreadCount})
        </button>
        <button
          className={`tab ${filter === 'read' ? 'active' : ''}`}
          onClick={() => setFilter('read')}
        >
          Read ({messages.length - unreadCount})
        </button>
        <button onClick={fetchMessages} className="refresh-btn">🔄 Refresh</button>
      </div>

      {/* Messages */}
      <div className="messages-list">
        {loading ? (
          <div className="loading-state">
            <div className="spinner-large"></div>
            <p>Loading messages...</p>
          </div>
        ) : filteredMessages.length === 0 ? (
          <div className="empty-state">
            <span>📭</span>
            <p>No messages yet</p>
          </div>
        ) : (
          filteredMessages.map(msg => (
            <div key={msg.id} className={`message-card ${!msg.is_read ? 'unread' : ''}`}>
              <div className="message-header">
                <div className="sender-info">
                  <div className="avatar">{msg.name.charAt(0).toUpperCase()}</div>
                  <div>
                    <h3>{msg.name}</h3>
                    <a href={`mailto:${msg.email}`} className="sender-email">
                      {msg.email}
                    </a>
                  </div>
                </div>
                <div className="message-meta">
                  {!msg.is_read && <span className="unread-badge">NEW</span>}
                  <span className="message-date">{formatDate(msg.created_at)}</span>
                </div>
              </div>

              <p className="message-body">{msg.message}</p>

              <div className="message-actions">
                <a href={`mailto:${msg.email}?subject=Re: Portfolio Contact`} className="action-btn reply">
                  📧 Reply
                </a>
                {!msg.is_read ? (
                  <button onClick={() => markAsRead(msg.id)} className="action-btn read">
                    ✅ Mark Read
                  </button>
                ) : (
                  <button onClick={() => markAsUnread(msg.id)} className="action-btn unread-btn">
                    🔵 Mark Unread
                  </button>
                )}
                <button onClick={() => deleteMessage(msg.id)} className="action-btn delete">
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
