import React from 'react'
import { Award, Clock, Shield, TrendingUp } from 'lucide-react'

const reasons = [
  { icon: <Award size={48} />, title: 'Award-Winning Designs', desc: 'Recognized for excellence in interior design with multiple industry awards and certifications.' },
  { icon: <Shield size={48} />, title: '100% Quality Guarantee', desc: 'Premium materials, expert craftsmanship, and lifetime warranty on all our work.' },
  { icon: <Clock size={48} />, title: 'On-Time Delivery', desc: 'We value your time. Projects completed within agreed timelines, every single time.' },
  { icon: <TrendingUp size={48} />, title: 'Best Value for Money', desc: 'Transparent pricing with no hidden costs. Get premium quality at competitive rates.' },
]

const WhyChooseUs = () => {
  return (
    <section className="why-section section">
      <div className="grain-overlay"></div>
      <div className="container">
        <header className="text-center fade-up">
          <span className="label-caps">WHY CHOOSE US</span>
          <h2 className="section-heading">The Sathya Interiors Advantage</h2>
          <div className="gold-line" />
        </header>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <div key={i} className="why-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="why-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-section {
          background: #0a0a0a;
          color: var(--white);
          position: relative;
          overflow: hidden;
          padding: 100px 0;
        }

        .grain-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 60px;
          position: relative;
          z-index: 1;
        }

        .why-card {
          padding: 40px 30px;
          background: rgba(255,255,255,0.02);
          border-radius: 8px;
          border-left: 4px solid var(--gold);
          transition: all 0.4s;
        }

        .why-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 40px rgba(201, 168, 76, 0.25);
        }

        .why-icon {
          color: var(--gold);
          margin-bottom: 25px;
          display: inline-block;
          transition: transform 0.4s;
        }

        .why-card:hover .why-icon {
          transform: scale(1.1);
        }

        .why-card h3 {
          color: var(--white);
          font-size: 1.4rem;
          margin-bottom: 15px;
          font-weight: 700;
          font-family: var(--font-heading);
        }

        .why-card p {
          font-size: 0.95rem;
          color: var(--gray);
          line-height: 1.7;
          font-family: var(--font-body);
        }

        @media (max-width: 992px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr; gap: 20px; }
        }
      `}</style>
    </section>
  )
}

export default WhyChooseUs
