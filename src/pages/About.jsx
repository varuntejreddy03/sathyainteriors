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
            <img src="/Living_Room_Main_dius4h.jpg.jpeg" alt="Interior Design" className="about-image" />
            <div className="about-image-border"></div>
          </div>
          <div>
            <span className="label-caps">OUR STORY</span>
            <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>We Don't Just Design — We Create Homes That Feel Like You</h2>
            <div style={{ width: '40px', height: '2px', background: 'var(--gold)', margin: '25px 0' }}></div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--gray)', fontFamily: 'var(--font-body)', marginBottom: '20px' }}>
              At Sathya Interiors, we believe every space tells a story. We specialize in interiors that reflect personality, purpose, and timeless design. From concept to completion, every detail is thoughtfully crafted to enhance your lifestyle.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--gray)', fontFamily: 'var(--font-body)' }}>
              With over 250 completed projects and 10+ years of expertise, we've mastered the art of blending functionality with aesthetics. Our team of skilled designers and craftsmen work tirelessly to bring your vision to life.
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

      {/* Image Gallery */}
      <section style={{ padding: '100px 0', background: 'var(--black)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="label-caps">OUR WORK</span>
            <h2 className="section-heading">Transforming Spaces</h2>
            <div className="gold-line"></div>
          </div>
          <div className="about-gallery-grid">
            {[
              '/09112025 -CD-Anoop and family/30.jpg',
              '/804 Ms Shubra final 2d drawing/1.jpg',
              '/Tanu Interior Designs (1)/30.jpg',
              '/Tanu Interior Designs (1)/35.jpg',
              '/09112025 -CD-Anoop and family/15.jpg',
              '/Tanu Interior Designs (1)/40.jpg',
            ].map((img, i) => (
              <div key={i} className="about-gallery-item">
                <img src={img} alt={`Project ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

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
