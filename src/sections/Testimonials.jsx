import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'S R Radhha',
    location: 'Puttaparthi',
    text: 'Sathya Interiors transformed our home beautifully. The attention to detail was exceptional. Every corner reflects elegance and thoughtful design.',
    image: '/Bedroom_-_Main_tstccu.jpg.jpeg'
  },
  {
    name: 'Meera & Rajesh',
    location: 'Puttaparthi',
    text: 'Outstanding craftsmanship and professionalism! The wardrobe design maximized our space beautifully. We couldn\'t be happier with the results.',
    image: '/Wardrobe_-_Main_b9lplx.jpg.jpeg'
  },
  {
    name: 'Anil Kumar',
    location: 'Hyderabad',
    text: 'Seamless experience from initial consultation to final delivery. Our modular kitchen with island is the highlight of our house now!',
    image: '/island-kitchen.png'
  },
  {
    name: 'Deepak Sharma',
    location: 'Bangalore',
    text: 'Sathya Interiors understood our vision perfectly. The 45-day delivery promise was met with incredible precision and high-quality finishes.',
    image: '/portfolio-new/MBR View.jpg'
  },
  {
    name: 'Dr. Sandeep',
    location: 'Bangalore',
    text: 'A complete transformation of our apartment space. The team managed the logistics perfectly, and the end product feels like a luxury resort. Five stars!',
    image: '/portfolio-new/Entrance View.jpg'
  },
  {
    name: 'Priya & Venkat',
    location: 'Anantapur',
    text: 'We were looking for quality interiors with a professional touch. Every corner reflects elegance and thoughtful design. Highly recommended!',
    image: '/portfolio-new/Pooja Unit.jpg'
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
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        }

        @media (max-width: 600px) {
          .testimonials-grid { 
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Testimonials
