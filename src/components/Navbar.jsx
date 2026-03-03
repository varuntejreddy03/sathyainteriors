import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          SATHYA
          <span className="logo-sub">INTERIORS</span>
        </Link>

        <div className="nav-links">
          {navLinks.map(l => (
            <Link key={l.path} to={l.path} className={`nav-link ${location.pathname === l.path ? 'active' : ''}`}>{l.name}</Link>
          ))}
        </div>

        <Link to="/contact" className="btn-cta">Book Consultation</Link>

        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-nav-links">
            {navLinks.map(l => (
              <Link key={l.path} to={l.path} className={`mobile-link ${location.pathname === l.path ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                {l.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-cta mobile" onClick={() => setMenuOpen(false)}>Book Consultation</Link>
          </div>
          <div className="mobile-footer-info">
            <p>📞 9666796670</p>
            <p>✉ sathyainteriorss@gmail.com</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
