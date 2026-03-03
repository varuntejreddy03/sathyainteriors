import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ramesh & Sunita',
    location: 'Puttaparthi',
    text: 'Sathya Interiors transformed our home beautifully. The attention to detail was exceptional. Every corner reflects elegance and thoughtful design.',
    image: '/09112025 -CD-Anoop and family/15.jpg'
  },
  {
    name: 'Anil Kumar',
    location: 'Hyderabad',
    text: 'From the initial consultation to the final handover, the experience was seamless. Our modular kitchen is the highlight of our house now!',
    image: '/804 Ms Shubra final 2d drawing/1.jpg'
  },
  {
    name: 'Priya & Venkat',
    location: 'Anantapur',
    text: 'We were looking for quality interiors at a transparent price and Sathya Interiors delivered beyond expectations. Highly recommended!',
    image: '/Tanu Interior Designs (1)/30.jpg'
  },
]

const Testimonials = () => {
  return (
    <section className="testimonials-section section">
      <div className="container">
        <header className="text-center fade-up">
          <span className="label-caps">CLIENT TESTIMONIALS</span>
          <h2 className="section-heading">Words From Happy Homes</h2>
          <div className="gold-line" />
        </header>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="quote-mark">"</div>
              <div className="stars">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ backgroundImage: `url(${t.image})` }} />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          background: var(--black);
          padding: 100px 0;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 60px;
        }

        .testimonial-card {
          background: rgba(255,255,255,0.02);
          padding: 40px 30px;
          border-radius: 12px;
          border-top: 2px solid var(--gold);
          position: relative;
          transition: all 0.4s;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(201, 168, 76, 0.15);
        }

        .quote-mark {
          position: absolute;
          top: 20px;
          right: 30px;
          font-size: 80px;
          color: var(--gold);
          opacity: 0.15;
          font-family: Georgia, serif;
          line-height: 1;
        }

        .stars {
          display: flex;
          gap: 4px;
          margin-bottom: 20px;
        }

        .star {
          color: var(--gold);
          font-size: 18px;
        }

        .testimonial-text {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--cream);
          margin-bottom: 30px;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .author-avatar {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background-size: cover;
          background-position: center;
          border: 3px solid var(--gold);
          flex-shrink: 0;
        }

        .testimonial-author strong {
          display: block;
          font-size: 1rem;
          color: var(--white);
          font-weight: 600;
          font-family: var(--font-body);
        }

        .testimonial-author span {
          font-size: 0.85rem;
          color: var(--gray);
          font-family: var(--font-body);
        }

        @media (max-width: 992px) {
          .testimonials-grid { 
            grid-template-columns: 1fr; 
            max-width: 600px; 
            margin-left: auto; 
            margin-right: auto; 
          }
        }
      `}</style>
    </section>
  )
}

export default Testimonials
