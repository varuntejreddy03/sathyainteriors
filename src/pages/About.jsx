import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, Target, Heart, ArrowLeft } from 'lucide-react'
import ServicesSection from '../sections/ServicesSection'
import './pages.css'

function About() {
  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ padding: '150px 0 100px', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)', position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '20px', transition: 'all 0.3s' }}>
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <span className="label-caps">ABOUT US</span>
          <h1 className="section-heading" style={{ marginBottom: '20px' }}>Crafting Spaces, Creating Stories</h1>
          <p className="section-subtitle">10+ years of transforming houses into dream homes with passion, precision, and timeless design.</p>
        </div>
      </section>

      {/* Main About Section */}
      <section style={{ padding: '100px 0', background: 'var(--black)' }}>
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img src="/optimized-images/transforming/3b2987fca1935ad6793011a3e56c2b3b.webp" alt="Interior Design" className="about-image" />
            <div className="about-image-border"></div>
          </div>
          <div>
            <span className="label-caps">OUR STORY</span>
            <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Precision-Crafted Interiors for Modern Living</h2>
            <div style={{ width: '40px', height: '2px', background: 'var(--gold)', margin: '25px 0' }}></div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--gray)', fontFamily: 'var(--font-body)', marginBottom: '20px' }}>
              Sathya Interiors is driven by a passion for design and a commitment to quality. We specialize in residential interiors including 2BHK, 3BHK, 4BHK apartments and luxury villas, delivering elegant and functional living spaces.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--gray)', fontFamily: 'var(--font-body)', marginBottom: '20px' }}>
              With advanced modular manufacturing facility, we design and produce precision-crafted interiors using factory-made modular components, high-quality boards, CNC cutting technology, edge banding, and professional finishing systems. This ensures accurate measurements, superior durability, and flawless installation.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--gray)', fontFamily: 'var(--font-body)' }}>
              From modular kitchens and wardrobes to false ceilings, TV units, pooja units, storage solutions, and complete home interiors, our expert team manages every stage — design, factory production, and on-site installation — with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '100px 0', background: '#111' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="label-caps">OUR VALUES</span>
            <h2 className="section-heading">What Drives Us</h2>
            <div className="gold-line"></div>
          </div>
          <div className="about-values-grid">
            {[
              { icon: <Award size={48} />, title: 'Excellence', desc: 'Uncompromising quality in every project we undertake.' },
              { icon: <Users size={48} />, title: 'Collaboration', desc: 'Working closely with clients to realize their vision.' },
              { icon: <Target size={48} />, title: 'Precision', desc: 'Attention to detail in every aspect of design.' },
              { icon: <Heart size={48} />, title: 'Passion', desc: 'Love for creating beautiful, functional spaces.' },
            ].map((v, i) => (
              <div key={i} className="about-value-card">
                <div style={{ color: 'var(--gold)', marginBottom: '20px' }}>{v.icon}</div>
                <h3 style={{ color: 'var(--white)', fontSize: '1.3rem', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '15px' }}>{v.title}</h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Interior Design Services Section */}
      <ServicesSection />

      {/* CTA Section */}
      <section style={{ padding: '100px 0', background: '#111', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-heading" style={{ marginBottom: '20px' }}>Ready to Transform Your Space?</h2>
          <p className="section-subtitle" style={{ marginBottom: '40px' }}>Let's create something extraordinary together</p>
          <Link to="/contact" className="btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
