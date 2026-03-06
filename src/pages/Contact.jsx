import React from 'react'
import { Phone, Mail, MapPin, Clock, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import './pages.css'

function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `*New Inquiry*%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/919666796670?text=${text}`, '_blank')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ padding: '150px 0 100px', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '20px', transition: 'all 0.3s' }}>
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <span className="label-caps">GET IN TOUCH</span>
          <h1 className="section-heading" style={{ marginBottom: '20px' }}>Ready to Transform Your Space?</h1>
          <p className="section-subtitle">Book a free consultation with our design experts today.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '100px 0', background: 'var(--black)' }}>
        <div className="contact-grid">
          {/* Left - Contact Info */}
          <div>
            <h2 style={{ fontSize: '2rem', color: 'var(--white)', fontFamily: 'var(--font-heading)', marginBottom: '30px' }}>Contact Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div className="contact-info-item">
                <div style={{ color: 'var(--gold)', marginTop: '5px' }}><Phone size={24} /></div>
                <div>
                  <h3 style={{ color: 'var(--white)', fontSize: '1.1rem', fontFamily: 'var(--font-body)', fontWeight: '600', marginBottom: '5px' }}>Phone</h3>
                  <a href="tel:9666796670" style={{ color: 'var(--gray)', fontSize: '1rem', fontFamily: 'var(--font-body)', textDecoration: 'none' }}>9666796670</a>
                </div>
              </div>
              <div className="contact-info-item">
                <div style={{ color: 'var(--gold)', marginTop: '5px' }}><Mail size={24} /></div>
                <div>
                  <h3 style={{ color: 'var(--white)', fontSize: '1.1rem', fontFamily: 'var(--font-body)', fontWeight: '600', marginBottom: '5px' }}>Email</h3>
                  <a href="mailto:sathyainteriorss@gmail.com" style={{ color: 'var(--gray)', fontSize: '1rem', fontFamily: 'var(--font-body)', textDecoration: 'none' }}>sathyainteriorss@gmail.com</a>
                </div>
              </div>
              <div className="contact-info-item">
                <div style={{ color: 'var(--gold)', marginTop: '5px' }}><MapPin size={24} /></div>
                <div>
                  <h3 style={{ color: 'var(--white)', fontSize: '1.1rem', fontFamily: 'var(--font-body)', fontWeight: '600', marginBottom: '5px' }}>Address</h3>
                  <p style={{ color: 'var(--gray)', fontSize: '1rem', fontFamily: 'var(--font-body)', lineHeight: '1.6' }}>3-231 A 69 A, Sai Taraka Rama Nagar Colony,<br />Puttaparthi – 515134</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div style={{ color: 'var(--gold)', marginTop: '5px' }}><Clock size={24} /></div>
                <div>
                  <h3 style={{ color: 'var(--white)', fontSize: '1.1rem', fontFamily: 'var(--font-body)', fontWeight: '600', marginBottom: '5px' }}>Working Hours</h3>
                  <p style={{ color: 'var(--gray)', fontSize: '1rem', fontFamily: 'var(--font-body)' }}>Mon–Sat: 10am – 7pm<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', color: 'var(--white)', fontSize: '0.9rem', fontFamily: 'var(--font-body)', fontWeight: '600', marginBottom: '10px' }}>Name</label>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', color: 'var(--white)', fontSize: '0.9rem', fontFamily: 'var(--font-body)', fontWeight: '600', marginBottom: '10px' }}>Phone</label>
                <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', color: 'var(--white)', fontSize: '0.9rem', fontFamily: 'var(--font-body)', fontWeight: '600', marginBottom: '10px' }}>Email</label>
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              </div>
              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', color: 'var(--white)', fontSize: '0.9rem', fontFamily: 'var(--font-body)', fontWeight: '600', marginBottom: '10px' }}>Service</label>
                <select name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  <option value="Modular Kitchens">Modular Kitchens</option>
                  <option value="Pooja Units">Pooja Units</option>
                  <option value="TV Units">TV Units</option>
                  <option value="Wardrobes">Wardrobes</option>
                  <option value="CNC Doors & Curtains">CNC Doors & Curtains</option>
                  <option value="False Ceiling & Wallpapers">False Ceiling & Wallpapers</option>
                </select>
              </div>
              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', color: 'var(--white)', fontSize: '0.9rem', fontFamily: 'var(--font-body)', fontWeight: '600', marginBottom: '10px' }}>Message</label>
                <textarea name="message" placeholder="Tell us about your project" rows="5" value={formData.message} onChange={handleChange} style={{ resize: 'vertical' }} required></textarea>
              </div>
              <button type="submit" className="btn-gold" style={{ width: '100%', padding: '18px', borderRadius: '50px', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }}>Send via WhatsApp</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
