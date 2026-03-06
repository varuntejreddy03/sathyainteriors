import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const featuredProjects = [
  { id: 1, title: 'Island Kitchen', subtitle: 'Modern Kitchen Concept', desc: 'Premium Island with Breakfast Counter', image: '/island-kitchen.png' },
  { id: 2, title: 'Luxurious Living', subtitle: 'Main Hall Design', desc: 'Luxury Comfort', image: '/portfolio-new/Living Area View.jpg' },
  { id: 3, title: 'Master Bedroom', subtitle: 'Contemporary MBR', desc: 'Functional Beauty', image: '/portfolio-new/MBR View.jpg' },
  { id: 4, title: 'Divine Pooja Room', subtitle: 'Spiritual Sanctuary', desc: 'Traditional Elegance', image: '/portfolio-new/Pooja Unit.jpg' },
  { id: 5, title: 'Creative Kids Room', subtitle: 'Smart Storage', desc: 'Playful Environment', image: '/portfolio-new/Kids Wardrobe with Sitting.jpg' },
  { id: 6, title: 'Sleek TV Units', subtitle: 'Entertainment Hub', desc: 'Modern Minimalist', image: '/portfolio-new/TV Unit..jpg' },
  { id: 7, title: 'Elegant Dining', subtitle: 'Breakfast Setups', desc: 'High-end Craftsmanship', image: '/portfolio-new/Breakfast Counter with Dining set.jpg' },
  { id: 8, title: 'Grand Wardrobes', subtitle: 'Storage Solutions', desc: 'Luxury Walk-in Closets', image: '/portfolio-new/Walkin Wardrobe.jpg' },
  { id: 9, title: 'Entrance Designs', subtitle: 'Smart Shoe Racks', desc: 'Thoughtful Entrance Layouts', image: '/portfolio-new/Shoerack Entrance view.jpg' },
  { id: 10, title: 'Modern Crockery', subtitle: 'Dining Storage', desc: 'Sophisticated Glass Units', image: '/portfolio-new/Crockery Unit.jpg' },
  { id: 11, title: 'CNC Doors & Curtains', subtitle: 'Entrance Art', desc: 'Precision CNC Designs & Premium Curtains', image: '/portfolio-new/CNC Door Design.jpg' },
  { id: 12, title: 'MBR Workspace', subtitle: 'Home Office Setups', desc: 'Quiet & Professional Design', image: '/portfolio-new/MBR Workspace.jpg' },
  { id: 13, title: 'Modern Bed Design', subtitle: 'Bedroom Comfort', desc: 'Sleek Master Bed', image: '/portfolio-new/Bed Room New.jpg' },
  { id: 14, title: 'Kids Study Unit', subtitle: 'Focus Areas', desc: 'Ergonomic Study Desks', image: '/portfolio-new/Kids Study.jpg' },
  { id: 15, title: 'False Ceiling Art', subtitle: 'Modern Ceilings', desc: 'Ambient LED Lighting', image: '/portfolio-new/False Ceiling View...jpg' },
  { id: 16, title: 'Vanity Designs', subtitle: 'Bathroom Luxury', desc: 'Common Area Vanity', image: '/portfolio-new/Comman Vanity.jpg' },
  { id: 17, title: 'Modern Modular Kitchen', subtitle: 'Kitchen Units', desc: 'Complete Storage Solution', image: '/portfolio-new/Modular Kitchen.jpg' },
  { id: 18, title: 'MBR TV Unit', subtitle: 'Bedroom Entertainment', desc: 'Custom Ceiling-to-Floor Designs', image: '/portfolio-new/MBR TV Unit.jpg' },
  { id: 19, title: 'Grand Entrance', subtitle: 'Living Entrance', desc: 'Sophisticated Foyer View', image: '/portfolio-new/Entrance View.jpg' },
  { id: 20, title: 'Kids Bed Concept', subtitle: 'Kids Bedroom', desc: 'Playful and Safe Bedding', image: '/portfolio-new/Kids Bed With Design.jpg' },
  { id: 21, title: 'Plywood Interior Base', subtitle: 'Material Quality', desc: 'Premium Raw Material Views', image: '/portfolio-new/PLYWOOD View.jpg' },
  { id: 22, title: 'Kitchen Accessories', subtitle: 'Functional Kits', desc: 'High-end Storage Accessories', image: '/portfolio-new/Storage Accessaries.jpg' },
  { id: 23, title: 'Master Bed Concept', subtitle: 'Luxury Bedding', desc: 'Custom Fabricated Bed Frames', image: '/portfolio-new/Bed with Design.jpg' },
  { id: 24, title: 'Dining Room View', subtitle: 'Dining Area', desc: 'Elegant and Spacious Layouts', image: '/portfolio-new/Dining Area View.jpg' },
  { id: 25, title: 'Premium Wardrobes', subtitle: 'MBR Storage', desc: 'Full Wall Wardrobe Designs', image: '/portfolio-new/MBR Wardrobe.jpg' },
  { id: 26, title: 'Revolving Shoe Rack', subtitle: 'Smart Storage', desc: 'Space-saving Innovation', image: '/portfolio-new/Revolving Shoe Rack View.jpg' },
  { id: 27, title: 'Modern Living Room', subtitle: 'Hall Design', desc: 'Contemporary Interiors', image: '/portfolio-new/Living Room.jpg' },
  { id: 28, title: 'Integrated Pooja Unit', subtitle: 'TV & Pooja Duo', desc: 'Smart Space Partitioning', image: '/portfolio-new/TV Unit With Pooja Unit.jpg' },
  { id: 29, title: 'Wicker Basket Units', subtitle: 'Kitchen Storage', desc: 'Natural Texture Storage', image: '/portfolio-new/Wicker Basket unit.jpg' },
  { id: 30, title: 'Mirrored Wardrobes', subtitle: 'Bedroom Storage', desc: 'Space-enhancing Reflections', image: '/portfolio-new/Wardrobe view with Mirror.jpg' },
  { id: 31, title: 'False Ceiling Lux', subtitle: 'MBR Lighting', desc: 'Intricate Ceiling Designs', image: '/portfolio-new/False ceiling MBR.jpg' },
  { id: 32, title: 'Functional Kitchen 2', subtitle: 'Modern Layout', desc: 'End-to-end Kitchen View', image: '/portfolio-new/Kitchen 2.jpg' },
  { id: 33, title: 'Luxury MBR Bed', subtitle: 'MBR Furnishing', desc: 'Elegant Bed Designs', image: '/portfolio-new/Bed Room.jpg' },
  { id: 34, title: 'Modern Entrance', subtitle: 'Foyer Aesthetics', desc: 'Inviting Home Entrances', image: '/portfolio-new/New View.jpg' },
  { id: 35, title: 'Kitchen Organization', subtitle: 'Storage Kits', desc: 'Standard High-end Accessories', image: '/portfolio-new/Standard Accessories.jpg' },
  { id: 36, title: 'The Complete Look', subtitle: 'Home Showcase', desc: 'Our Full-scale Interior Designs', image: '/portfolio-new/Designs_page-.jpg' },
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
