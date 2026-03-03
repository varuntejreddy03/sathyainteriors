import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const portfolioImages = [
  { id: 1, title: '01072025-3D-Sunil and Prapti_page-0004', category: 'portfolio', image: '/optimized-images/portfolio/01072025-3D-Sunil and Prapti_page-0004.jpg', location: 'Bangalore' },
  { id: 2, title: '01072025-3D-Sunil and Prapti_page-0005', category: 'portfolio', image: '/optimized-images/portfolio/01072025-3D-Sunil and Prapti_page-0005.jpg', location: 'Mumbai' },
  { id: 3, title: '01072025-3D-Sunil and Prapti_page-0007', category: 'portfolio', image: '/optimized-images/portfolio/01072025-3D-Sunil and Prapti_page-0007.jpg', location: 'Delhi' },
  { id: 4, title: '01072025-3D-Sunil and Prapti_page-0008', category: 'portfolio', image: '/optimized-images/portfolio/01072025-3D-Sunil and Prapti_page-0008.jpg', location: 'Bangalore' },
  { id: 5, title: '01072025-3D-Sunil and Prapti_page-0010', category: 'portfolio', image: '/optimized-images/portfolio/01072025-3D-Sunil and Prapti_page-0010.jpg', location: 'Pune' },
  { id: 6, title: '01072025-3D-Sunil and Prapti_page-0011', category: 'portfolio', image: '/optimized-images/portfolio/01072025-3D-Sunil and Prapti_page-0011.jpg', location: 'Bangalore' },
  { id: 7, title: '01072025-3D-Sunil and Prapti_page-0012', category: 'portfolio', image: '/optimized-images/portfolio/01072025-3D-Sunil and Prapti_page-0012.jpg', location: 'Hyderabad' },
  { id: 8, title: '01072025-3D-Sunil and Prapti_page-0013', category: 'portfolio', image: '/optimized-images/portfolio/01072025-3D-Sunil and Prapti_page-0013.jpg', location: 'Bangalore' },
  { id: 9, title: '01072025-3D-Sunil and Prapti_page-0014', category: 'portfolio', image: '/optimized-images/portfolio/01072025-3D-Sunil and Prapti_page-0014.jpg', location: 'Chennai' },
  { id: 10, title: '01072025-3D-Sunil and Prapti_page-0017', category: 'portfolio', image: '/optimized-images/portfolio/01072025-3D-Sunil and Prapti_page-0017.jpg', location: 'Bangalore' },
  { id: 11, title: '01072025-3D-Sunil and Prapti_page-0019', category: 'portfolio', image: '/optimized-images/portfolio/01072025-3D-Sunil and Prapti_page-0019.jpg', location: 'Pune' },
  { id: 12, title: '01072025-3D-Sunil and Prapti_page-0020', category: 'portfolio', image: '/optimized-images/portfolio/01072025-3D-Sunil and Prapti_page-0020.jpg', location: 'Bangalore' },
  { id: 13, title: '01072025-3D-Sunil and Prapti_page-0021', category: 'portfolio', image: '/optimized-images/portfolio/01072025-3D-Sunil and Prapti_page-0021.jpg', location: 'Bangalore' },
  { id: 14, title: '01072025-3D-Sunil and Prapti_page-0022', category: 'portfolio', image: '/optimized-images/portfolio/01072025-3D-Sunil and Prapti_page-0022.jpg', location: 'Bangalore' },
  { id: 15, title: '01072025-3D-Sunil and Prapti_page-0025', category: 'portfolio', image: '/optimized-images/portfolio/01072025-3D-Sunil and Prapti_page-0025.jpg', location: 'Bangalore' },
  { id: 16, title: '07092025-3D-Sudharshan and family_page-0004', category: 'portfolio', image: '/optimized-images/portfolio/07092025-3D-Sudharshan and family_page-0004.jpg', location: 'Bangalore' },
  { id: 17, title: '07092025-3D-Sudharshan and family_page-0005', category: 'portfolio', image: '/optimized-images/portfolio/07092025-3D-Sudharshan and family_page-0005.jpg', location: 'Bangalore' },
  { id: 18, title: '07092025-3D-Sudharshan and family_page-0006', category: 'portfolio', image: '/optimized-images/portfolio/07092025-3D-Sudharshan and family_page-0006.jpg', location: 'Bangalore' },
  { id: 19, title: '07092025-3D-Sudharshan and family_page-0007', category: 'portfolio', image: '/optimized-images/portfolio/07092025-3D-Sudharshan and family_page-0007.jpg', location: 'Bangalore' },
  { id: 20, title: '07092025-3D-Sudharshan and family_page-0010', category: 'portfolio', image: '/optimized-images/portfolio/07092025-3D-Sudharshan and family_page-0010.jpg', location: 'Bangalore' },
  { id: 21, title: '07092025-3D-Sudharshan and family_page-0012', category: 'portfolio', image: '/optimized-images/portfolio/07092025-3D-Sudharshan and family_page-0012.jpg', location: 'Bangalore' },
  { id: 22, title: '07092025-3D-Sudharshan and family_page-0015', category: 'portfolio', image: '/optimized-images/portfolio/07092025-3D-Sudharshan and family_page-0015.jpg', location: 'Bangalore' },
  { id: 23, title: '07092025-3D-Sudharshan and family_page-0016', category: 'portfolio', image: '/optimized-images/portfolio/07092025-3D-Sudharshan and family_page-0016.jpg', location: 'Bangalore' },
  { id: 24, title: '07092025-3D-Sudharshan and family_page-0017', category: 'portfolio', image: '/optimized-images/portfolio/07092025-3D-Sudharshan and family_page-0017.jpg', location: 'Bangalore' },
  { id: 25, title: '07092025-3D-Sudharshan and family_page-0018', category: 'portfolio', image: '/optimized-images/portfolio/07092025-3D-Sudharshan and family_page-0018.jpg', location: 'Bangalore' },
  { id: 26, title: '07092025-3D-Sudharshan and family_page-0024', category: 'portfolio', image: '/optimized-images/portfolio/07092025-3D-Sudharshan and family_page-0024.jpg', location: 'Bangalore' },
  { id: 27, title: '07092025-3D-Sudharshan and family_page-0025', category: 'portfolio', image: '/optimized-images/portfolio/07092025-3D-Sudharshan and family_page-0025.jpg', location: 'Bangalore' },
  { id: 28, title: '07092025-3D-Sudharshan and family_page-0026', category: 'portfolio', image: '/optimized-images/portfolio/07092025-3D-Sudharshan and family_page-0026.jpg', location: 'Bangalore' },
  { id: 29, title: '07092025-3D-Sudharshan and family_page-0027', category: 'portfolio', image: '/optimized-images/portfolio/07092025-3D-Sudharshan and family_page-0027.jpg', location: 'Bangalore' },
  { id: 30, title: '3D Docket_page-0003', category: 'portfolio', image: '/optimized-images/portfolio/3D Docket_page-0003.jpg', location: 'Bangalore' },
  { id: 31, title: '3D Docket_page-0005', category: 'portfolio', image: '/optimized-images/portfolio/3D Docket_page-0005.jpg', location: 'Bangalore' },
  { id: 32, title: '3D Docket_page-0010', category: 'portfolio', image: '/optimized-images/portfolio/3D Docket_page-0010.jpg', location: 'Bangalore' },
  { id: 33, title: '3D Docket_page-0015', category: 'portfolio', image: '/optimized-images/portfolio/3D Docket_page-0015.jpg', location: 'Bangalore' },
  { id: 34, title: '3D Docket_page-0017', category: 'portfolio', image: '/optimized-images/portfolio/3D Docket_page-0017.jpg', location: 'Bangalore' },
  { id: 35, title: '3D Docket_page-0019', category: 'portfolio', image: '/optimized-images/portfolio/3D Docket_page-0019.jpg', location: 'Bangalore' },
  { id: 36, title: '3D Docket_page-0020', category: 'portfolio', image: '/optimized-images/portfolio/3D Docket_page-0020.jpg', location: 'Bangalore' },
  { id: 37, title: '3D Docket_page-0021', category: 'portfolio', image: '/optimized-images/portfolio/3D Docket_page-0021.jpg', location: 'Bangalore' },
  { id: 38, title: '3D Docket_page-0022', category: 'portfolio', image: '/optimized-images/portfolio/3D Docket_page-0022.jpg', location: 'Bangalore' },
  { id: 39, title: '3D Docket_page-0023', category: 'portfolio', image: '/optimized-images/portfolio/3D Docket_page-0023.jpg', location: 'Bangalore' },
  { id: 40, title: '3D Docket_page-0025', category: 'portfolio', image: '/optimized-images/portfolio/3D Docket_page-0025.jpg', location: 'Bangalore' },
  { id: 41, title: 'Tanu Interior Designs_page-0002', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0002.jpg', location: 'Bangalore' },
  { id: 42, title: 'Tanu Interior Designs_page-0003', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0003.jpg', location: 'Bangalore' },
  { id: 43, title: 'Tanu Interior Designs_page-0030', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0030.jpg', location: 'Bangalore' },
  { id: 44, title: 'Tanu Interior Designs_page-0033', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0033.jpg', location: 'Bangalore' },
  { id: 45, title: 'Tanu Interior Designs_page-0042', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0042.jpg', location: 'Bangalore' },
  { id: 46, title: 'Tanu Interior Designs_page-0043', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0043.jpg', location: 'Bangalore' },
  { id: 47, title: 'Tanu Interior Designs_page-0046', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0046.jpg', location: 'Bangalore' },
  { id: 48, title: 'Tanu Interior Designs_page-0047', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0047.jpg', location: 'Bangalore' },
  { id: 49, title: 'Tanu Interior Designs_page-0054', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0054.jpg', location: 'Bangalore' },
  { id: 50, title: 'Tanu Interior Designs_page-0057', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0057.jpg', location: 'Bangalore' },
  { id: 51, title: 'Tanu Interior Designs_page-0058', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0058.jpg', location: 'Bangalore' },
  { id: 52, title: 'Tanu Interior Designs_page-0060', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0060.jpg', location: 'Bangalore' },
  { id: 53, title: 'Tanu Interior Designs_page-0083', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0083.jpg', location: 'Bangalore' },
  { id: 54, title: 'Tanu Interior Designs_page-0084', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0084.jpg', location: 'Bangalore' },
  { id: 55, title: 'Tanu Interior Designs_page-0085', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0085.jpg', location: 'Bangalore' },
  { id: 56, title: 'Tanu Interior Designs_page-0086', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0086.jpg', location: 'Bangalore' },
  { id: 57, title: 'Tanu Interior Designs_page-0087', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0087.jpg', location: 'Bangalore' },
  { id: 58, title: 'Tanu Interior Designs_page-0088', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0088.jpg', location: 'Bangalore' },
  { id: 59, title: 'Tanu Interior Designs_page-0089', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0089.jpg', location: 'Bangalore' },
  { id: 60, title: 'Tanu Interior Designs_page-0090', category: 'portfolio', image: '/optimized-images/portfolio/Tanu Interior Designs_page-0090.jpg', location: 'Bangalore' },
]

const Portfolio = () => {
  const filteredImages = portfolioImages
  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '20px', transition: 'all 0.3s' }}>
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <span className="label-caps">OUR PORTFOLIO</span>
          <h1 className="portfolio-hero-title">Crafted With Passion, Built to Last</h1>
          <p className="portfolio-hero-subtitle">Explore our collection of beautifully designed spaces that tell unique stories.</p>
        </div>
      </section>

      {/* Portfolio Masonry Grid */}
      <section style={{ padding: '0 0 100px', background: 'var(--black)' }}>
        <div className="container">
          <div className="portfolio-masonry">
            {filteredImages.map((img, i) => (
              <div key={img.id} className="portfolio-masonry-item fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                <img src={img.image} alt={img.title} className="portfolio-image" loading="lazy" />
                <div className="portfolio-image-overlay">
                  <h3 className="portfolio-image-title">{img.title}</h3>
                  <p className="portfolio-image-location">{img.location}</p>
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
        
        .filter-bar {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .filter-btn {
          padding: 12px 24px;
          border: 2px solid rgba(201, 168, 76, 0.3);
          background: transparent;
          color: var(--white);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.85rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .filter-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
        }
        
        .filter-btn.active {
          background: var(--gold);
          color: var(--black);
          border-color: var(--gold);
        }
        
        .portfolio-masonry {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          grid-auto-rows: 300px;
        }
        
        .portfolio-masonry-item {
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          opacity: 0;
          animation: fadeInMasonry 0.6s ease-out forwards;
        }

        @keyframes fadeInMasonry {
          to {
            opacity: 1;
          }
        }
        
        .portfolio-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        
        .portfolio-masonry-item:hover .portfolio-image {
          transform: scale(1.05);
        }
        
        .portfolio-image-wrapper {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          position: relative;
          transition: transform 0.6s ease;
        }
        
        .portfolio-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .portfolio-masonry-item:hover .portfolio-image-overlay {
          opacity: 1;
        }
        
        .portfolio-image-title {
          color: var(--gold);
          font-size: 1rem;
          font-family: var(--font-heading);
          font-weight: 700;
          margin-bottom: 5px;
        }
        
        .portfolio-image-location {
          color: var(--white);
          font-size: 0.85rem;
          font-family: var(--font-body);
        }
        
        @media (max-width: 992px) {
          .portfolio-masonry {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            grid-auto-rows: 250px;
          }
          
          .portfolio-hero {
            padding: 120px 0 80px;
          }
          
          .portfolio-hero-title {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .portfolio-masonry {
            grid-template-columns: 1fr;
            gap: 15px;
            grid-auto-rows: 250px;
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

          .filter-bar {
            gap: 10px;
          }

          .filter-btn {
            padding: 10px 16px;
            font-size: 0.75rem;
          }
          
          .portfolio-image-overlay {
            opacity: 1;
            padding: 15px;
          }
          
          .portfolio-image-title {
            font-size: 0.9rem;
          }
          
          .portfolio-image-location {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Portfolio
