import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './pages/NotFound'

// Main portfolio page
const Portfolio = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <div className="App">
      <AnimatedBackground />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <Hero onOpenResume={() => setIsResumeOpen(true)} />
      <About onOpenResume={() => setIsResumeOpen(true)} />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
      <Footer onOpenResume={() => setIsResumeOpen(true)} />
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        {/* Professional 404 Catch-All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
