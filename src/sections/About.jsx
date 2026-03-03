import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="about-grid fade-up">
          <div className="about-image">
            <img src="/about-bg.png" alt="Our interior work" />
            <div className="about-gold-corner tl" />
            <div className="about-gold-corner br" />
          </div>

          <div className="about-text">
            <span className="label-caps">WHO WE ARE</span>
            <h2 className="section-heading">About Sathya Interiors</h2>
            <div className="gold-line" style={{ margin: '20px 0 30px' }} />

            <p>At Sathya Interiors, we believe that every space tells a story — and we're here to help you write yours.</p>

            <p>We specialize in curating interiors that reflect personality, purpose, and timeless design. From concept to completion, every detail is thoughtfully crafted to enhance your lifestyle.</p>

            <p>Our passion lies in blending aesthetics with functionality, transforming houses into soulful living spaces.</p>

            <Link to="/contact" className="btn-gold" style={{ marginTop: '30px' }}>Get in Touch</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: var(--white);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }

        .about-image {
          position: relative;
          padding: 20px;
        }

        .about-image img {
          border-radius: 8px;
          box-shadow: var(--shadow-lg);
          width: 100%;
          height: 450px;
          object-fit: cover;
        }

        .about-gold-corner {
          position: absolute;
          width: 60px; height: 60px;
        }

        .about-gold-corner.tl {
          top: 0; left: 0;
          border-top: 3px solid var(--accent-gold);
          border-left: 3px solid var(--accent-gold);
        }

        .about-gold-corner.br {
          bottom: 0; right: 0;
          border-bottom: 3px solid var(--accent-gold);
          border-right: 3px solid var(--accent-gold);
        }

        .about-text p {
          font-size: 1.05rem;
          line-height: 1.9;
          margin-bottom: 1.2rem;
          opacity: 0.75;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-image img { height: 350px; }
        }
      `}</style>
    </section>
  )
}

export default About
