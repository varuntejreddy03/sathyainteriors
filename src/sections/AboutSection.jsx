import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="/Living_Room_Main_dius4h.jpg.jpeg" alt="Interior Design" />
          <div className="image-frame"></div>
        </div>
        <div className="about-content">
          <span className="label-caps">ABOUT US</span>
          <h2 className="about-heading">We Don't Just Design — We Create Homes That Feel Like You</h2>
          <div className="gold-rule"></div>
          <p className="about-text">
            At Sathya Interiors, we believe every space tells a story. 
            We specialize in interiors that reflect personality, purpose, and 
            timeless design. From concept to completion, every detail is 
            thoughtfully crafted to enhance your lifestyle.
          </p>
          <Link to="/about" className="about-link">
            Learn Our Story <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: var(--black);
          padding: 100px 0;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about-image {
          position: relative;
          height: 600px;
        }

        .about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        .image-frame {
          position: absolute;
          inset: -15px;
          border: 2px solid var(--gold);
          border-radius: 8px;
          pointer-events: none;
        }

        .about-content {
          padding: 40px 0;
        }

        .about-heading {
          font-size: 44px;
          color: var(--white);
          font-family: var(--font-heading);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .gold-rule {
          width: 40px;
          height: 2px;
          background: var(--gold);
          margin: 25px 0;
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--gray);
          font-family: var(--font-body);
          margin-bottom: 30px;
        }

        .about-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--gold);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          position: relative;
          transition: all 0.3s;
        }

        .about-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gold);
          transition: width 0.3s;
        }

        .about-link:hover::after {
          width: 100%;
        }

        .about-link:hover {
          gap: 15px;
        }

        @media (max-width: 992px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .about-image {
            height: 400px;
          }
          .about-heading {
            font-size: 36px;
          }
        }

        @media (max-width: 600px) {
          .about-heading {
            font-size: 28px;
          }
          .about-image {
            height: 300px;
          }
        }
      `}</style>
    </section>
  )
}

export default AboutSection
