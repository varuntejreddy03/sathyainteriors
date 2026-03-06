import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Column 1 - About */}
          <div className="footer-col">
            <div className="footer-logo">SATHYA INTERIORS</div>
            <p className="footer-tagline">Transforming spaces into timeless masterpieces.</p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/sathya_interiors/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="footer-col">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">Modular Kitchens</Link></li>
              <li><Link value="Pooja Units" to="/services">Pooja Units</Link></li>
              <li><Link to="/services">TV Units</Link></li>
              <li><Link to="/services">Wardrobes</Link></li>
              <li><Link to="/services">Functional kids room</Link></li>
              <li><Link to="/services">CNC doors & Curtains</Link></li>
              <li><Link to="/services">False Ceilings</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-contact">
              <li>📞 9666796670</li>
              <li>✉ sathyainteriorss@gmail.com</li>
              <li>📍 3-231 A 69 A, Sai Taraka Rama Nagar Colony, Puttaparthi – 515134</li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© 2026 Sathya Interiors. All Rights Reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #0a0a0a;
          color: var(--cream);
          padding: 80px 0 30px;
          border-top: 1px solid rgba(201, 168, 76, 0.2);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 60px;
          margin-bottom: 50px;
        }

        .footer-logo {
          font-family: var(--font-label);
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--gold);
          margin-bottom: 15px;
        }

        .footer-tagline {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--gray);
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .footer-socials {
          display: flex;
          gap: 15px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid rgba(201, 168, 76, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          transition: all 0.3s;
        }

        .social-icon:hover {
          border-color: var(--gold);
          background: var(--gold);
          color: var(--black);
          transform: translateY(-3px);
        }

        .footer-heading {
          font-family: var(--font-label);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links a {
          color: var(--gray);
          font-family: var(--font-body);
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s;
        }

        .footer-links a:hover {
          color: var(--gold);
          padding-left: 5px;
        }

        .footer-contact {
          list-style: none;
        }

        .footer-contact li {
          color: var(--gray);
          font-family: var(--font-body);
          font-size: 0.9rem;
          margin-bottom: 12px;
          line-height: 1.6;
        }

        .footer-divider {
          height: 1px;
          background: var(--gold);
          margin: 40px 0;
        }

        .footer-bottom {
          text-align: center;
        }

        .footer-bottom p {
          color: var(--gray);
          font-family: var(--font-body);
          font-size: 0.85rem;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
