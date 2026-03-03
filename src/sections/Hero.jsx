import React from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getImageUrl, getImageFallback } from '../utils/imageManifest'

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        <div className="hero-overlay" />
      </div>
      <div className="container hero-content">
        <div className="hero-text-block">
          <div className="gold-accent-line"></div>
          <div className="hero-text">
            <h1 className="hero-main fade-up">
              Transform Your Space Into
            </h1>
            <h2 className="hero-italic fade-up" style={{ animationDelay: '0.2s' }}>
              Timeless Elegance
            </h2>
            <p className="hero-sub fade-up" style={{ animationDelay: '0.4s' }}>
              Award-Winning Interior Design · 250+ Happy Homes · Premium Quality Guaranteed
            </p>
            <div className="hero-actions fade-up" style={{ animationDelay: '0.6s' }}>
              <Link to="/contact" className="btn-primary">
                Book Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn-secondary">View Our Portfolio</Link>
            </div>
          </div>
        </div>
        
        <div className="hero-stats fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="stat">
            <h3 className="counter">250+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <h3 className="counter">10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <h3 className="counter">100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
      <a href="#portfolio" className="scroll-indicator">
        <ChevronDown size={28} />
      </a>

      <style jsx>{`
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          color: var(--white);
          overflow: hidden;
          padding-top: 80px;
        }

        .hero-bg {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-image: url('/heroimage.png');
          background-size: cover;
          background-position: 20% center;
          background-attachment: fixed;
          will-change: transform;
          filter: brightness(1.15) contrast(1.05);
        }

        .hero-overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.55) 0%,
            rgba(0,0,0,0.45) 30%,
            rgba(0,0,0,0.30) 60%,
            rgba(0,0,0,0.15) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
        }

        .hero-text-block {
          display: flex;
          gap: 30px;
          max-width: 700px;
        }

        .gold-accent-line {
          width: 3px;
          background: var(--gold);
          flex-shrink: 0;
          box-shadow: 0 0 12px rgba(201, 168, 76, 0.6);
        }

        .hero-main {
          font-size: 56px;
          color: var(--white);
          line-height: 1.1;
          margin-bottom: 0.5rem;
          font-weight: 700;
          font-family: var(--font-heading);
        }

        .hero-italic {
          font-size: 80px;
          font-style: italic;
          color: var(--gold);
          line-height: 1;
          margin-bottom: 1.5rem;
          font-family: var(--font-heading);
          font-weight: 700;
        }

        .hero-sub {
          font-size: 1.1rem;
          color: var(--cream);
          margin-bottom: 2.5rem;
          max-width: 600px;
          font-family: var(--font-body);
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }

        .btn-primary {
          background: var(--gold);
          color: var(--black);
          padding: 18px 40px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          font-family: var(--font-body);
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s;
          box-shadow: 0 10px 30px rgba(201, 168, 76, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(201, 168, 76, 0.6);
          background: #B89851;
        }

        .btn-secondary {
          padding: 18px 40px;
          border: 2px solid rgba(255,255,255,0.3);
          color: #fff;
          border-radius: 50px;
          font-weight: 600;
          font-family: var(--font-body);
          backdrop-filter: blur(10px);
          background: rgba(255,255,255,0.05);
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          border-color: var(--gold);
          background: rgba(201, 168, 76, 0.1);
        }

        .hero-stats {
          display: flex;
          gap: 40px;
          align-items: center;
          margin-top: 40px;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(12px);
          border-top: 1px solid rgba(201, 168, 76, 0.25);
          padding: 30px 40px;
          border-radius: 12px;
          width: fit-content;
        }

        .stat {
          text-align: center;
        }

        .stat h3 {
          font-size: 2.5rem;
          color: var(--gold);
          margin-bottom: 5px;
          font-weight: 800;
          font-family: var(--font-heading);
        }

        .stat p {
          color: var(--white);
          font-size: 0.9rem;
          font-family: var(--font-body);
        }

        .stat-divider {
          width: 1px;
          height: 60px;
          background: var(--gold);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          color: var(--gold);
          z-index: 2;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }

        .fade-up {
          opacity: 0;
          animation: fadeUp 0.8s ease-out forwards;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 992px) {
          .hero-main { font-size: 42px; }
          .hero-italic { font-size: 60px; }
          .hero-stats { gap: 20px; }
          .stat h3 { font-size: 2rem; }
          .stat-divider { height: 50px; }
        }

        @media (max-width: 480px) {
          .hero-main { font-size: 32px; }
          .hero-italic { font-size: 48px; }
          .hero-actions { flex-direction: column; width: 100%; }
          .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
          .hero-section { min-height: 600px; }
          .hero-stats { flex-wrap: wrap; gap: 20px; }
          .stat-divider { display: none; }
        }
      `}</style>
    </section>
  )
}

export default Hero
