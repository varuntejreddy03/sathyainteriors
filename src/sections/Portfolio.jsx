import React from 'react'
import { Link } from 'react-router-dom'
import { getImageUrl, getImageFallback } from '../utils/imageManifest'

const realProjects = [
  { id: 'anoop', title: 'Anoop and Family', cat: 'Residential Interior', thumb: 'Tanu Interior Designs_page-0030', category: 'portfolio', size: 'tall' },
  { id: 'shubra', title: 'Ms Shubra Project', cat: 'Residential Interior', thumb: '3D Docket_page-0010', category: 'portfolio', size: 'wide' },
  { id: 'tanu', title: 'Tanu Interior Designs', cat: 'Commercial & Design', thumb: 'Tanu Interior Designs_page-0002', category: 'portfolio', size: 'tall' }
]

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio-section section">
      <div className="container">
        <header className="text-center fade-up">
          <span className="label-caps">OUR WORK</span>
          <h2 className="section-heading">Our Work Transforming Spaces</h2>
          <div className="gold-line" />
        </header>

        <div className="masonry-grid">
          {realProjects.map((p, i) => (
            <Link to={`/portfolio/${p.id}`} key={i} className={`portfolio-card ${p.size} fade-up`} style={{ animationDelay: `${i * 0.1}s` }}>
              <picture>
                <source srcSet={getImageUrl(p.category, p.thumb)} type="image/webp" />
                <div className="card-image" style={{ backgroundImage: `url("${getImageFallback(p.category, p.thumb)}")` }}>
                  <div className="card-overlay">
                    <span className="card-category">{p.cat}</span>
                    <h3 className="card-title">{p.title}</h3>
                  </div>
                </div>
              </picture>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }} className="fade-up">
          <Link to="/portfolio" className="btn-shimmer">VIEW ALL PROJECTS</Link>
        </div>
      </div>

      <style jsx>{`
        .portfolio-section {
          background: var(--black);
          padding: 100px 0;
        }

        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 300px;
          gap: 20px;
          margin-top: 50px;
        }

        .portfolio-card {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
          display: block;
        }

        .portfolio-card.tall {
          grid-row: span 2;
        }

        .portfolio-card.wide {
          grid-column: span 2;
        }

        .card-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        picture {
          display: contents;
        }

        .portfolio-card:hover .card-image {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 30px;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .portfolio-card:hover .card-overlay {
          opacity: 1;
        }

        .card-category {
          color: var(--gold);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-family: var(--font-label);
          margin-bottom: 8px;
        }

        .card-title {
          color: var(--white);
          font-size: 1.5rem;
          font-family: var(--font-heading);
          font-weight: 600;
        }

        .btn-shimmer {
          background: var(--gold);
          color: var(--black);
          padding: 18px 50px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 2px;
          position: relative;
          overflow: hidden;
          display: inline-block;
          transition: all 0.3s;
        }

        .btn-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.6s;
        }

        .btn-shimmer:hover::before {
          left: 100%;
        }

        .btn-shimmer:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(201, 168, 76, 0.5);
        }

        @media (max-width: 992px) {
          .masonry-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .portfolio-card.wide {
            grid-column: span 1;
          }
        }

        @media (max-width: 600px) {
          .masonry-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 250px;
          }
          .portfolio-card.tall {
            grid-row: span 1;
          }
        }
      `}</style>
    </section>
  )
}

export default PortfolioSection
