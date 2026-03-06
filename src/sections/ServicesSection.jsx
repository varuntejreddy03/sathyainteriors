import React, { useState } from 'react'

const allServices = [
  { id: 1, title: 'Modular Kitchens', category: 'Functional Areas', featured: true, image: '/island-kitchen.png', features: ['Modern', 'Storage Solutions', 'Custom Design'] },
  { id: 2, title: 'Pooja Units', category: 'Premium Designs', featured: true, image: '/poojacard.jpg', features: ['Sacred', 'Traditional', 'Modern'] },
  { id: 3, title: 'TV Units', category: 'Living Spaces', featured: true, image: '/portfolio-new/TV Unit..jpg', features: ['Entertainment', 'Sleek', 'Lighting'] },
  { id: 4, title: 'Wardrobes', category: 'Private Spaces', featured: false, image: '/portfolio-new/MBR Wardrobe.jpg', features: ['Organization', 'Elegance', 'Custom'] },
  { id: 5, title: 'Foyer Designs', category: 'Living Spaces', featured: false, image: '/portfolio-new/Entrance View.jpg', features: ['Grand Entry', 'Statement', 'Invite'] },
  { id: 6, title: 'Functional kids room', category: 'Premium Designs', featured: false, image: '/optimized-images/transforming/3D Docket_page-0024.webp', features: ['Playful', 'Safe', 'Smart Storage'] },
  { id: 7, title: 'CNC doors & Curtains', category: 'Premium Designs', featured: false, image: '/portfolio-new/CNC Door Design.jpg', features: ['Artistic', 'Intricate', 'Complete'] },
  { id: 8, title: 'False Ceilings', category: 'Functional Areas', featured: false, image: '/portfolio-new/False Ceiling View...jpg', features: ['Ambient', 'Modern', 'Style'] },
  { id: 9, title: 'Painting and Wallpapers', category: 'Premium Designs', featured: false, image: '/wallpaper-painting.png', features: ['Luxury Finish', 'Curated Art', 'Wall Decor'] },
]

const categories = ['All', 'Living Spaces', 'Private Spaces', 'Functional Areas', 'Premium Designs']

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredServices = activeCategory === 'All' ? allServices : allServices.filter(s => s.category === activeCategory)

  return (
    <section className="services-section section">
      <div className="container">
        <header className="text-center fade-up">
          <span className="label-caps">OUR SERVICES</span>
          <h2 className="section-heading">Our Interior Design Services</h2>
          <div className="gold-line" />
        </header>

        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="services-count">Showing {filteredServices.length} services</p>

        <div className="services-grid">
          {filteredServices.map((service) => (
            <div key={service.id} className={`service-card ${service.featured ? 'featured' : ''}`}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-badge">{service.category}</div>
                {service.featured && <div className="featured-badge">Featured</div>}
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-category">{service.category}</p>
                <p className="service-desc">Expertly designed spaces that combine functionality with aesthetic appeal.</p>
                <div className="service-features">
                  {service.features.map((feature, i) => (
                    <span key={i} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          background: #111111;
          padding: 100px 0;
        }

        .category-filters {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin: 50px 0;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 25px;
          border: 1px solid rgba(201, 168, 76, 0.3);
          background: transparent;
          color: var(--gray);
          border-radius: 25px;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 0.9rem;
          transition: all 0.3s ease;
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

        .services-count {
          text-align: center;
          color: var(--gray);
          font-size: 0.95rem;
          margin-bottom: 40px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .service-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(201, 168, 76, 0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .service-card:hover {
          border-color: var(--gold);
          box-shadow: 0 0 30px rgba(201, 168, 76, 0.2);
          transform: translateY(-5px);
        }

        .service-card.featured {
          grid-column: span 1;
        }

        .service-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .service-card:hover .service-image img {
          transform: scale(1.08);
        }

        .service-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background: rgba(0,0,0,0.7);
          color: var(--gold);
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .featured-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: var(--gold);
          color: var(--black);
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .service-content {
          padding: 25px;
        }

        .service-title {
          color: var(--white);
          font-size: 1.3rem;
          font-family: var(--font-heading);
          font-weight: 700;
          margin-bottom: 8px;
        }

        .service-category {
          color: var(--gold);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .service-desc {
          color: var(--gray);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .service-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .feature-tag {
          background: rgba(201, 168, 76, 0.1);
          color: var(--gold);
          padding: 4px 10px;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .category-filters {
            gap: 10px;
          }

          .filter-btn {
            padding: 8px 15px;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  )
}

export default ServicesSection
