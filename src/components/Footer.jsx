import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Built with ❤️ in Mekelle, Tigray
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Filmon Amare. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
