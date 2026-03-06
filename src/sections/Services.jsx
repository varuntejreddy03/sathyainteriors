import React from 'react'

const services = [
  { icon: '🛕', title: 'Pooja Units', desc: 'Sacred spaces designed with devotion, blending tradition with modern aesthetics.' },
  { icon: '📺', title: 'TV Units', desc: 'Sleek entertainment walls with integrated storage and premium finishes for modern living.' },
  { icon: '🍽', title: 'Modular Kitchens', desc: 'Ergonomic, beautiful and fully customized kitchens built for your specialized lifestyle.' },
  { icon: '👗', title: 'Wardrobes', desc: 'Custom storage solutions designed for maximum space, organization, and elegance.' },
  { icon: '🏠', title: 'Foyer Designs', desc: 'Impeccable entrance designs that make a grand statement for your home.' },
  { icon: '🧸', title: 'Functional kids room', desc: 'Playful, safe, and smart storage designs tailored for modern growing children.' },
  { icon: '🚪', title: 'CNC doors & Curtains', desc: 'Precision-cut CNC doors and elegant curtain solutions that complete your home decor.' },
  { icon: '💎', title: 'False Ceilings', desc: 'Elegant ceiling designs with ambient lighting to elevate the aura of any room.' },
  { icon: '🎨', title: 'Painting and Wallpapers', desc: 'Premium wall finishes and luxury wallpapers that add depth and personality to your space.' },
]

const Services = () => {
  return (
    <section id="services" className="services-section section">
      <div className="container">
        <header className="text-center fade-up">
          <span className="label-caps">WHAT WE OFFER</span>
          <h2 className="section-heading">Our Interior Services</h2>
          <p className="section-subtitle">Every project is a masterpiece. We offer end-to-end interior solutions tailored to your vision.</p>
          <div className="gold-line" />
        </header>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          background: var(--bg-light);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 60px;
        }

        .service-card {
          background: var(--white);
          padding: 40px 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: var(--shadow-sm);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid transparent;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent-gold);
          box-shadow: var(--shadow-md);
        }

        .service-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 20px;
        }

        .service-card h3 {
          font-size: 1.3rem;
          margin-bottom: 12px;
          color: var(--primary);
        }

        .service-card p {
          font-size: 0.9rem;
          opacity: 0.6;
          line-height: 1.7;
        }

        @media (max-width: 992px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

export default Services
