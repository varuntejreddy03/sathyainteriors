import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <header className="text-center fade-up">
          <span className="label-caps">GET IN TOUCH</span>
          <h2 className="section-heading">Let's Build Your Dream Space</h2>
          <p className="section-subtitle">Have a project in mind? We'd love to hear about it.</p>
          <div className="gold-line" />
        </header>

        <div className="contact-grid">
          {/* Info Panel */}
          <div className="contact-info fade-up">
            <div className="info-card">
              <MapPin size={22} color="var(--accent-gold)" />
              <div>
                <h4>Visit Our Studio</h4>
                <p>3-231 A 69 A, Sai Taraka Rama Nagar Colony,<br />Kammavaripalli Road, Puttaparthi – 515134</p>
              </div>
            </div>

            <div className="info-card">
              <Phone size={22} color="var(--accent-gold)" />
              <div>
                <h4>Call / WhatsApp</h4>
                <p>9666796670</p>
              </div>
            </div>

            <div className="info-card">
              <Mail size={22} color="var(--accent-gold)" />
              <div>
                <h4>Email Us</h4>
                <p>sathyainteriorss@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <Clock size={22} color="var(--accent-gold)" />
              <div>
                <h4>Business Hours</h4>
                <p>Mon–Fri: 10am – 7pm<br />Saturday: 10am – 7pm<br />Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap fade-up" style={{ animationDelay: '0.15s' }}>
            <form className="contact-form">
              <h3>Send an Enquiry</h3>
              <p className="form-sub">Fill out the form below and we'll get back to you shortly.</p>

              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" placeholder="Your Number" required />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your Email" />
              </div>

              <div className="form-group">
                <label>Service Required</label>
                <select>
                  <option>Modular Kitchen</option>
                  <option>TV Unit</option>
                  <option>Pooja Unit</option>
                  <option>Wardrobes</option>
                  <option>CNC Doors & Curtains</option>
                  <option>Bedroom & Living</option>
                  <option>False Ceiling</option>
                  <option>Painting & Wallpapers</option>
                  <option>Complete Interior</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>Send Enquiry →</button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: var(--bg-light);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          margin-top: 60px;
        }

        .info-card {
          display: flex;
          gap: 20px;
          background: var(--white);
          padding: 25px;
          border-radius: 12px;
          box-shadow: var(--shadow-sm);
          border-left: 4px solid var(--accent-gold);
          margin-bottom: 20px;
          transition: transform 0.3s;
        }

        .info-card:hover {
          transform: translateX(5px);
        }

        .info-card h4 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 5px;
          color: var(--primary);
        }

        .info-card p {
          font-size: 0.9rem;
          opacity: 0.7;
          line-height: 1.6;
        }

        .contact-form {
          background: var(--white);
          padding: 50px;
          border-radius: 16px;
          box-shadow: var(--shadow-md);
        }

        .contact-form h3 {
          font-size: 1.5rem;
          margin-bottom: 5px;
        }

        .form-sub {
          font-size: 0.9rem;
          opacity: 0.6;
          margin-bottom: 30px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          margin-bottom: 22px;
        }

        .form-group label {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--primary);
          margin-bottom: 10px;
        }

        input, select, textarea {
          width: 100%;
          padding: 14px;
          border: 1px solid rgba(0,0,0,0.08);
          background: var(--bg-light);
          border-radius: 8px;
          font-family: var(--font-body);
          font-size: 0.95rem;
          transition: border-color 0.3s;
        }

        input:focus, select:focus, textarea:focus {
          border-color: var(--accent-gold);
          outline: none;
        }

        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr; }
          .contact-form { padding: 40px 24px; }
        }

        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr; }
          .contact-form { padding: 30px 20px; }
        }
      `}</style>
    </section>
  )
}

export default Contact
