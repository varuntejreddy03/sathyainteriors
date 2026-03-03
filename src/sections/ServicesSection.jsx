import React from 'react'
import { ChefHat, Flower2, Tv, Shirt, DoorOpen, Layers } from 'lucide-react'

const services = [
  { icon: <ChefHat size={40} />, title: 'Modular Kitchens', desc: 'Custom-designed kitchens with premium materials and smart storage solutions.' },
  { icon: <Flower2 size={40} />, title: 'Pooja Units', desc: 'Sacred spaces crafted with devotion, blending tradition with modern aesthetics.' },
  { icon: <Tv size={40} />, title: 'TV Units', desc: 'Sleek entertainment centers that combine style with functionality.' },
  { icon: <Shirt size={40} />, title: 'Wardrobes', desc: 'Spacious storage solutions designed to organize your lifestyle elegantly.' },
  { icon: <DoorOpen size={40} />, title: 'CNC Doors & Paneling', desc: 'Precision-crafted doors and wall panels with intricate designs.' },
  { icon: <Layers size={40} />, title: 'False Ceiling & Wallpapers', desc: 'Transform your spaces with stunning ceilings and designer wallpapers.' },
]

const ServicesSection = () => {
  return (
    <section className="services-section section">
      <div className="container">
        <header className="text-center fade-up">
          <span className="label-caps">WHAT WE DO</span>
          <h2 className="section-heading">Our Expertise</h2>
          <div className="gold-line" />
        </header>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          background: #111111;
          padding: 100px 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 60px;
        }

        .service-card {
          background: rgba(255,255,255,0.02);
          padding: 40px 30px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.05);
          text-align: center;
          transition: all 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-6px);
          border-color: var(--gold);
          box-shadow: 0 0 30px rgba(201, 168, 76, 0.3);
        }

        .service-icon {
          color: var(--gold);
          margin-bottom: 20px;
          display: inline-block;
          transition: transform 0.4s;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1);
        }

        .service-title {
          color: var(--white);
          font-size: 1.3rem;
          font-family: var(--font-heading);
          font-weight: 700;
          margin-bottom: 15px;
        }

        .service-desc {
          color: var(--gray);
          font-size: 0.95rem;
          line-height: 1.7;
          font-family: var(--font-body);
        }

        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default ServicesSection
