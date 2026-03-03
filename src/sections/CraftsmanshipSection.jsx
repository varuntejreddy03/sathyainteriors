import React from 'react'

const CraftsmanshipSection = () => {
  const services = [
    {
      id: 1,
      name: 'Pooja Units',
      description: 'Sacred spaces with divine aesthetics',
      image: '/optimized-images/about/Tanu Interior Designs_page-0030.jpg'
    },
    {
      id: 2,
      name: 'TV Units',
      description: 'Modern entertainment focal points',
      image: '/optimized-images/portfolio/3D Docket_page-0020.jpg'
    },
    {
      id: 3,
      name: 'Modular Kitchens',
      description: 'Functional luxury for modern living',
      image: '/optimized-images/portfolio/3D Docket_page-0021.jpg'
    },
    {
      id: 4,
      name: 'Wardrobes',
      description: 'Organized elegance and storage',
      image: '/optimized-images/portfolio/Tanu Interior Designs_page-0057.jpg'
    }
  ]

  return (
    <section className="craftsmanship-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="label-caps">OUR EXPERTISE</span>
          <h2 className="section-heading">Our Craftsmanship</h2>
          <div className="gold-line"></div>
        </div>

        <div className="craftsmanship-grid">
          {services.map((service) => (
            <div key={service.id} className="craftsmanship-card">
              <img src={service.image} alt={service.name} className="craftsmanship-image" loading="lazy" />
              <div className="craftsmanship-overlay"></div>
              <div className="craftsmanship-content">
                <h3 className="craftsmanship-title">{service.name}</h3>
                <p className="craftsmanship-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .craftsmanship-section {
          padding: 100px 0;
          background: var(--black);
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

        .section-heading {
          font-size: 2.5rem;
          color: var(--white);
          font-family: var(--font-heading);
          font-weight: 700;
          margin-bottom: 20px;
        }

        .gold-line {
          width: 60px;
          height: 2px;
          background: var(--gold);
          margin: 20px auto;
        }

        .craftsmanship-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .craftsmanship-card {
          position: relative;
          height: 500px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .craftsmanship-card:hover {
          border-color: var(--gold);
          transform: scale(1.03);
        }

        .craftsmanship-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
        }

        .craftsmanship-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%);
          z-index: 1;
        }

        .craftsmanship-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px;
          z-index: 2;
        }

        .craftsmanship-title {
          font-size: 1.8rem;
          color: var(--gold);
          font-family: var(--font-heading);
          font-weight: 700;
          margin-bottom: 8px;
        }

        .craftsmanship-desc {
          font-size: 0.95rem;
          color: var(--white);
          font-family: var(--font-body);
        }

        @media (max-width: 992px) {
          .craftsmanship-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .craftsmanship-card {
            height: 400px;
          }

          .section-heading {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .craftsmanship-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .craftsmanship-card {
            height: 350px;
          }

          .craftsmanship-section {
            padding: 60px 0;
          }

          .section-heading {
            font-size: 1.8rem;
          }

          .craftsmanship-content {
            padding: 30px;
          }

          .craftsmanship-title {
            font-size: 1.5rem;
          }

          .craftsmanship-desc {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  )
}

export default CraftsmanshipSection
