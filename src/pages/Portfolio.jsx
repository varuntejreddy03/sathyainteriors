import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const featuredProjects = [
  { id: 1, title: 'Modern Kitchen', subtitle: 'Modern Kitchen', desc: 'Minimalist Design', image: '/Kitchen_-_Main_jmcaz7.jpg.jpeg' },
  { id: 2, title: 'Luxurious Living Room', subtitle: 'Luxurious Living Room', desc: 'Luxury Comfort', image: '/Living_Room_Main_dius4h.jpg.jpeg' },
  { id: 3, title: 'Elegant Dining Room', subtitle: 'Elegant Dining Room', desc: 'Classic Style', image: '/Elegant_Dining_Room_ghhcvi.jpg.jpeg' },
  { id: 4, title: 'Modern Bedroom', subtitle: 'Modern Bedroom', desc: 'Functional Beauty', image: '/Bedroom_-_Main_tstccu.jpg.jpeg' },
  { id: 5, title: 'Cozy Office Space', subtitle: 'Cozy Office Space', desc: 'Productive Environment', image: '/Cozy_Office_Space_eyl5bc.jpg.jpeg' },
  { id: 6, title: 'Contemporary Living Area', subtitle: 'Contemporary Living Area', desc: 'Modern Elegance', image: '/Contemporary_Living_Area_uxxndp.jpg.jpeg' },
]

const Portfolio = () => {
  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '20px', transition: 'all 0.3s' }}>
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <span className="label-caps">OUR PORTFOLIO</span>
          <h1 className="portfolio-hero-title">Our Portfolio</h1>
          <p className="portfolio-hero-subtitle">Explore our recent projects and see how we transform spaces into extraordinary environments</p>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section style={{ padding: '80px 0', background: 'var(--black)' }}>
        <div className="container">
          <div className="featured-grid">
            {featuredProjects.map((project, i) => (
              <div key={project.id} className="featured-card fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="featured-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="featured-overlay">
                    <h3 className="featured-title">{project.title}</h3>
                    <p className="featured-subtitle">{project.subtitle}</p>
                    <p className="featured-desc">{project.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .portfolio-hero {
          padding: 150px 0 100px;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        }
        
        .portfolio-hero-title {
          font-size: 56px;
          color: var(--white);
          font-family: var(--font-heading);
          font-weight: 700;
          margin-bottom: 20px;
        }
        
        .portfolio-hero-subtitle {
          font-size: 1.2rem;
          color: var(--gray);
          max-width: 700px;
          margin: 0 auto;
          font-family: var(--font-body);
        }

        .label-caps {
          color: var(--gold);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-family: var(--font-label);
          display: block;
          margin-bottom: 10px;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .featured-card {
          position: relative;
          height: 400px;
          border-radius: 12px;
          overflow: hidden;
          opacity: 0;
          animation: fadeInCard 0.6s ease-out forwards;
        }

        @keyframes fadeInCard {
          to {
            opacity: 1;
          }
        }

        .featured-image {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .featured-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .featured-card:hover .featured-image img {
          transform: scale(1.08);
        }

        .featured-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 30px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .featured-card:hover .featured-overlay {
          opacity: 1;
        }

        .featured-title {
          color: var(--gold);
          font-size: 1.8rem;
          font-family: var(--font-heading);
          font-weight: 700;
          margin-bottom: 8px;
        }

        .featured-subtitle {
          color: var(--white);
          font-size: 1.1rem;
          font-family: var(--font-body);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .featured-desc {
          color: var(--cream);
          font-size: 0.95rem;
          font-family: var(--font-body);
        }

        @media (max-width: 992px) {
          .featured-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .featured-card {
            height: 350px;
          }

          .portfolio-hero-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .featured-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .featured-card {
            height: 300px;
          }

          .portfolio-hero {
            padding: 100px 0 60px;
          }

          .portfolio-hero-title {
            font-size: 2rem;
          }

          .portfolio-hero-subtitle {
            font-size: 1rem;
          }

          .featured-overlay {
            opacity: 1;
            padding: 20px;
          }

          .featured-title {
            font-size: 1.5rem;
          }

          .featured-subtitle {
            font-size: 1rem;
          }

          .featured-desc {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Portfolio
