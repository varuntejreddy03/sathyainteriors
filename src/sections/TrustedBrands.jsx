import React from 'react'

const brands = [
  { name: 'Greenply', category: 'Laminates & Plywood', logo: 'https://companieslogo.com/img/orig/GREENPLY.NS_BIG-b6a4a002.png?t=1604670420' },
  { name: 'CenturyPly', category: 'Laminates & Plywood', logo: 'https://companieslogo.com/img/orig/CENTURYPLY.NS_BIG-33e1b422.png?t=1604067031' },
  { name: 'Asian Paints', category: 'Paints', logo: 'https://www.kindpng.com/picc/m/9-91067_asian-paints-logo-png-asian-paints-transparent-png.png' },
  { name: 'Berger', category: 'Paints', logo: 'https://companieslogo.com/img/orig/BERGEPAINT.NS-7a7201df.png?t=1601653024&download=true' },
  { name: 'Nerolac', category: 'Paints', logo: 'https://companieslogo.com/img/orig/KANSAINER.NS_BIG-4ad69786.png?t=1611280024' },
  { name: 'Birla Opus', category: 'Paints', logo: 'https://images.seeklogo.com/logo-png/54/1/birla-opus-paints-logo-png_seeklogo-541342.png' },
  { name: 'Hettich', category: 'Hardware', logo: 'https://w7.pngwing.com/pngs/923/701/png-transparent-hettich-international-hd-logo.png' },
  { name: 'Havells', category: 'Lighting & Electrical', logo: 'https://e7.pngegg.com/pngimages/680/167/png-clipart-havells-logo-havell-s-electrical-shop-havells-logo-company-krrish-text-carnivoran.png' },
  { name: 'Philips', category: 'Lighting & Electrical', logo: 'https://w7.pngwing.com/pngs/359/652/png-transparent-philips-lighting-philips-lighting-philips-hue-light-light-fixture-blue-text.png' },
  { name: 'KalingaStone', category: 'Countertops', logo: 'https://www.themarbleworkshop.co.uk/wp-content/uploads/2018/07/kalinga-stone-logo.jpg' },
  { name: 'Caesarstone', category: 'Countertops', logo: 'https://www.liblogo.com/img-logo/ca6209c459-caesarstone-logo-caesarstone-cabinets-direct-usa.png' },
]

const TrustedBrands = () => {
  return (
    <section className="trusted-brands-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Trusted Brands we work with</h2>
          <p className="section-subtitle">Collaborating with the world's best brands to deliver <span className="highlight">quality and elegance</span> in every design.</p>
        </div>

        <div className="brands-carousel">
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="brand-card">
              <div className="brand-logo-wrapper">
                <img src={brand.logo} alt={brand.name} className="brand-logo" loading="lazy" />
              </div>
              <p className="brand-name">{brand.name}</p>
              <p className="brand-category">{brand.category}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .trusted-brands-section {
          padding: 100px 0;
          background: var(--black);
          overflow: hidden;
        }

        .section-heading {
          font-size: 2.5rem;
          color: var(--white);
          font-family: var(--font-heading);
          font-weight: 700;
          margin-bottom: 20px;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--gray);
          max-width: 700px;
          margin: 0 auto;
          font-family: var(--font-body);
        }

        .highlight {
          color: var(--gold);
          font-weight: 600;
        }

        .brands-carousel {
          display: flex;
          gap: 30px;
          animation: autoScroll 60s linear infinite;
          width: fit-content;
        }

        .brands-carousel:hover {
          animation-play-state: paused;
        }

        @keyframes autoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 15px));
          }
        }

        .brand-card {
          flex-shrink: 0;
          width: 180px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(201, 168, 76, 0.1);
          transition: all 0.3s ease;
        }

        .brand-card:hover {
          transform: scale(1.05);
          border-color: var(--gold);
          box-shadow: 0 0 20px rgba(201, 168, 76, 0.2);
        }

        .brand-logo-wrapper {
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          margin-bottom: 15px;
        }

        .brand-logo {
          max-width: 90px;
          max-height: 90px;
          object-fit: contain;
        }

        .brand-name {
          color: var(--white);
          font-size: 0.95rem;
          font-weight: 600;
          font-family: var(--font-body);
          margin-bottom: 5px;
          text-align: center;
        }

        .brand-category {
          color: var(--gray);
          font-size: 0.8rem;
          font-family: var(--font-body);
          text-align: center;
        }

        @media (max-width: 768px) {
          .section-heading {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .brand-card {
            width: 150px;
            padding: 15px;
          }

          .brand-logo-wrapper {
            width: 80px;
            height: 80px;
          }

          .brand-logo {
            max-width: 70px;
            max-height: 70px;
          }
        }
      `}</style>
    </section>
  )
}

export default TrustedBrands
