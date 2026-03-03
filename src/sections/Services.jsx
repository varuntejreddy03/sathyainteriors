import React from 'react'

const services = [
  { icon: '🛕', title: 'Pooja Units', desc: 'Sacred spaces designed with devotion, blending traditional motifs with modern craftsmanship.' },
  { icon: '📺', title: 'TV Units', desc: 'Sleek entertainment walls with integrated storage, LED backlighting, and premium finishes.' },
  { icon: '🍽', title: 'Modular Kitchens', desc: 'Ergonomic, beautiful and fully customized kitchens built for your lifestyle.' },
  { icon: '👗', title: 'Wardrobes', desc: 'Walk-in or sliding — every wardrobe is designed for maximum space and elegance.' },
  { icon: '🛏', title: 'Bedroom & Living', desc: 'Complete room interiors that blend comfort, storage, and stunning aesthetics.' },
  { icon: '🚪', title: 'CNC Doors & Panels', desc: 'Precision-cut CNC doors and wall panels that add depth and character to any room.' },
  { icon: '🏠', title: 'False Ceiling', desc: 'Elegant false ceiling designs with ambient lighting that transform your space.' },
  { icon: '⚡', title: 'Electrical Work', desc: 'Professional electrical installations with concealed wiring and smart switches.' },
  { icon: '🎨', title: 'Painting & Wallpapers', desc: 'Premium paints and curated wallpapers for walls that speak luxury.' },
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
