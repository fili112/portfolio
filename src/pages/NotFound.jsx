import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaArrowLeft } from 'react-icons/fa'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="notfound-page">
      <div className="notfound-glow"></div>
      <div className="notfound-card">
        <span className="notfound-badge">404 ERROR</span>
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-text">
          The page or route you are looking for doesn't exist or has been relocated.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary">
            <FaHome />
            <span>Back to Portfolio</span>
          </Link>
          <button onClick={() => window.history.back()} className="btn btn-secondary">
            <FaArrowLeft />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
