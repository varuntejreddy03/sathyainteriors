import React from 'react'
import { ChefHat, Flower2, Tv, Shirt, DoorOpen, Layers, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

function Services() {
  const services = [
    { icon: <ChefHat size={48} />, title: 'Modular Kitchens', desc: 'Custom-designed kitchens with premium materials and smart storage solutions that blend style with functionality.' },
    { icon: <Flower2 size={48} />, title: 'Pooja Units', desc: 'Sacred spaces crafted with devotion, blending tradition with modern aesthetics for your spiritual corner.' },
    { icon: <Tv size={48} />, title: 'TV Units', desc: 'Sleek entertainment centers that combine style with functionality, perfect for modern living spaces.' },
    { icon: <Shirt size={48} />, title: 'Wardrobes', desc: 'Spacious storage solutions designed to organize your lifestyle elegantly with custom configurations.' },
    { icon: <DoorOpen size={48} />, title: 'CNC Doors & Paneling', desc: 'Precision-crafted doors and wall panels with intricate designs that add character to your interiors.' },
    { icon: <Layers size={48} />, title: 'False Ceiling & Wallpapers', desc: 'Transform your spaces with stunning ceilings and designer wallpapers that create the perfect ambiance.' },
  ]

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '20px', transition: 'all 0.3s' }}>
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <span className="label-caps">OUR SERVICES</span>
          <h1 className="services-hero-title">Complete Interior Solutions</h1>
          <p className="services-hero-subtitle">From concept to completion, we handle every aspect of your interior design needs.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '100px 0', background: '#111' }}>
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle">Let's discuss your project and bring your vision to life</p>
          <Link to="/contact" className="cta-button">
            Book Consultation
          </Link>
        </div>
      </section>
      
      <style jsx>{`
        .services-hero {
          padding: 150px 0 100px;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        }
        
        .services-hero-title {
          font-size: 56px;
          color: var(--white);
          font-family: var(--font-heading);
          font-weight: 700;
          margin-bottom: 20px;
        }
        
        .services-hero-subtitle {
          font-size: 1.2rem;
          color: var(--gray);
          max-width: 700px;
          margin: 0 auto;
          font-family: var(--font-body);
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        
        .service-card {
          background: rgba(255,255,255,0.02);
          padding: 40px 30px;
          border-radius: 12px;
          border-left: 4px solid var(--gold);
          transition: all 0.4s;
          cursor: pointer;
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 40px rgba(201, 168, 76, 0.25);
        }
        
        .service-icon {
          color: var(--gold);
          margin-bottom: 25px;
        }
        
        .service-title {
          color: var(--white);
          font-size: 1.4rem;
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
        
        .services-cta {
          padding: 100px 0;
          background: var(--black);
          text-align: center;
        }
        
        .cta-title {
          font-size: 48px;
          color: var(--white);
          font-family: var(--font-heading);
          margin-bottom: 20px;
        }
        
        .cta-subtitle {
          font-size: 1.2rem;
          color: var(--gray);
          margin-bottom: 40px;
        }
        
        .cta-button {
          display: inline-block;
          background: var(--gold);
          color: var(--black);
          padding: 18px 50px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          transition: all 0.3s;
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(201, 168, 76, 0.4);
        }
        
        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          
          .services-hero {
            padding: 120px 0 80px;
          }
          
          .services-hero-title {
            font-size: 2.5rem;
          }
          
          .cta-title {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .service-card {
            padding: 30px 24px;
          }
          
          .service-icon {
            margin-bottom: 20px;
          }
          
          .service-icon :global(svg) {
            width: 36px;
            height: 36px;
          }
          
          .service-title {
            font-size: 1.2rem;
            margin-bottom: 12px;
          }
          
          .service-desc {
            font-size: 0.9rem;
          }
          
          .services-hero {
            padding: 100px 0 60px;
          }
          
          .services-hero-title {
            font-size: 2rem;
          }
          
          .services-hero-subtitle {
            font-size: 1rem;
          }
          
          .services-cta {
            padding: 60px 0;
          }
          
          .cta-title {
            font-size: 2rem;
          }
          
          .cta-subtitle {
            font-size: 1rem;
          }
          
          .cta-button {
            padding: 16px 40px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Services
