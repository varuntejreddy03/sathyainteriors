import React from 'react'

const PoojaUnitsHighlight = () => {
  const poojaUnits = [
    {
      id: 1,
      image: '/pooja-room-designs.jpg',
      alt: 'Pooja Unit 1'
    },
    {
      id: 2,
      image: '/pooja-room-designs1.jpg',
      alt: 'Pooja Unit 2'
    },
    {
      id: 3,
      image: '/simple-pooja-room-designs.jpg',
      alt: 'Pooja Unit 3'
    }
  ]

  return (
    <section className="pooja-highlight-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="label-caps">FEATURED SERVICE</span>
          <h2 className="section-heading">Pooja Units</h2>
          <div className="gold-line"></div>
        </div>

        <div className="pooja-cards-grid">
          {poojaUnits.map((unit) => (
            <div key={unit.id} className="pooja-card">
              <img src={unit.image} alt={unit.alt} className="pooja-card-image" loading="lazy" />
              <div className="pooja-card-overlay">
                <h3 className="pooja-card-title">Pooja Unit</h3>
                <p className="pooja-card-desc">Sacred spaces designed with devotion</p>
                <a href="#" className="pooja-card-link">View More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pooja-highlight-section {
          padding: 100px 0;
          background: var(--black);
        }

        .section-heading {
          font-size: 2.5rem;
          color: var(--white);
          font-family: var(--font-heading);
          font-weight: 700;
          margin-bottom: 20px;
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

        .gold-line {
          width: 60px;
          height: 2px;
          background: var(--gold);
          margin: 20px auto;
        }

        .pooja-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .pooja-card {
          position: relative;
          height: 400px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
        }

        .pooja-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .pooja-card:hover .pooja-card-image {
          transform: scale(1.05);
        }

        .pooja-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 40px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .pooja-card:hover .pooja-card-overlay {
          opacity: 1;
        }

        .pooja-card-title {
          font-size: 1.8rem;
          color: var(--gold);
          font-family: var(--font-heading);
          font-weight: 700;
          margin-bottom: 8px;
        }

        .pooja-card-desc {
          font-size: 0.95rem;
          color: var(--cream);
          font-family: var(--font-body);
          margin-bottom: 15px;
        }

        .pooja-card-link {
          color: var(--white);
          font-size: 0.9rem;
          font-family: var(--font-body);
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .pooja-card-link:hover {
          color: var(--gold);
        }

        @media (max-width: 992px) {
          .pooja-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .pooja-card {
            height: 350px;
          }

          .section-heading {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .pooja-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .pooja-card {
            height: 300px;
          }

          .pooja-highlight-section {
            padding: 60px 0;
          }

          .section-heading {
            font-size: 1.8rem;
          }

          .pooja-card-overlay {
            opacity: 1;
            padding: 30px;
          }

          .pooja-card-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default PoojaUnitsHighlight
