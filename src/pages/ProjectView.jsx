import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const projectsData = {
  'anoop': {
    title: 'Anoop and Family',
    folder: '/09112025 -CD-Anoop and family',
    images: ["0.jpg", "1.jpg", "11.jpg", "12.jpg", "14.jpg", "15.jpg", "18.jpg", "20.jpg", "23.jpg", "24.jpg", "26.jpg", "27.jpg", "30.jpg", "31.jpg", "34.jpg", "36.jpg", "37.jpg", "6.jpg", "9.jpg"]
  },
  'shubra': {
    title: 'Ms Shubra Project',
    folder: '/804 Ms Shubra final 2d drawing',
    images: ["1.jpg", "10.jpg", "13.jpg", "14.jpg", "15.jpg", "17.jpg", "19.jpg", "25.jpg", "26.jpg", "29.jpg", "34.jpg", "35.jpg", "4.jpg", "6.jpg"]
  },
  'tanu': {
    title: 'Tanu Interior Designs',
    folder: '/Tanu Interior Designs (1)',
    images: ["0.jpg", "1.jpg", "10.jpg", "11.jpg", "12.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "3.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "4.jpg", "40.jpg", "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg", "46.jpg", "47.jpg", "48.jpg", "49.jpg", "5.jpg", "50.jpg", "51.jpg", "52.jpg", "53.jpg", "54.jpg", "55.jpg", "56.jpg", "57.jpg", "58.jpg", "59.jpg", "6.jpg", "60.jpg", "61.jpg", "62.jpg", "63.jpg", "64.jpg", "65.jpg", "66.jpg", "67.jpg", "68.jpg", "69.jpg", "7.jpg", "70.jpg", "71.jpg", "72.jpg", "73.jpg", "74.jpg", "75.jpg", "76.jpg", "77.jpg", "78.jpg", "79.jpg", "8.jpg", "80.jpg", "81.jpg", "82.jpg", "83.jpg", "84.jpg", "85.jpg", "86.jpg", "87.jpg", "88.jpg", "89.jpg", "9.jpg", "90.jpg", "91.jpg", "92.jpg"]
  }
}

const imageRotations = {
  'anoop': {
    "0.jpg": 90,
    "1.jpg": 90,
    "11.jpg": 180,
    "12.jpg": 90,
    "14.jpg": 90,
    "15.jpg": 90,
    "18.jpg": 90,
    "20.jpg": 180,
    "23.jpg": 90,
    "24.jpg": 90,
    "26.jpg": 180,
    "27.jpg": 180,
    "31.jpg": 90,
    "34.jpg": 90,
    "36.jpg": 90,
    "37.jpg": 90,
    "6.jpg": 90,
    "9.jpg": 180
  },
  'shubra': {},
  'tanu': {}
}

const ProjectView = () => {
  const { id } = useParams()
  const project = projectsData[id]

  if (!project) {
    return (
      <div style={{ paddingTop: '100px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Project not found</h2>
        <Link to="/portfolio">Back to Portfolio</Link>
      </div>
    )
  }

  return (
    <div className="project-view-page">
      {/* Hero Section */}
      <div className="project-hero">
        <div className="hero-overlay" />
        <Link to="/portfolio" className="back-link">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
        <div className="hero-content">
          <h1 className="project-title">{project.title}</h1>
          <div className="gold-line" />
          <p className="project-subtitle">Crafted with precision and passion</p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <div className="container">
          <div className="masonry-grid">
            {project.images.map((filename, idx) => {
              const rotation = imageRotations[id]?.[filename] || 0
              return (
                <div key={filename} className="masonry-item" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <div className="image-wrapper">
                    <img
                      src={`${project.folder}/${filename}`}
                      alt={`${project.title} ${filename}`}
                      loading="lazy"
                      style={{ transform: `rotate(${rotation}deg)` }}
                    />
                    <div className="image-overlay">
                      <span className="view-text">View Full</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Space?</h2>
          <p>Let's create something extraordinary together</p>
          <Link to="/contact" className="cta-button">Start Your Project</Link>
        </div>
      </div>

      <style jsx>{`
        .project-view-page {
          background: #0a0a0a;
          min-height: 100vh;
        }

        .project-hero {
          position: relative;
          height: 60vh;
          min-height: 400px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: url('/hero-bg.png') center/cover;
          opacity: 0.1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 20px;
        }

        .project-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: var(--white);
          font-weight: 700;
          margin: 20px 0;
          letter-spacing: -1px;
        }

        .project-subtitle {
          color: rgba(255,255,255,0.7);
          font-size: 1.1rem;
          margin-top: 15px;
          font-style: italic;
        }

        .gold-line {
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--accent-gold), transparent);
          margin: 20px auto;
        }

        .gallery-section {
          padding: 80px 20px;
          background: #0a0a0a;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s;
          padding: 12px 24px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50px;
          backdrop-filter: blur(10px);
          background: rgba(255,255,255,0.05);
          position: absolute;
          top: 100px;
          left: 40px;
          z-index: 100;
        }
        
        .back-link:hover {
          color: var(--accent-gold);
          border-color: var(--accent-gold);
          background: rgba(255,255,255,0.1);
        }

        .masonry-grid {
          column-count: 3;
          column-gap: 25px;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 25px;
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .image-wrapper {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: #1a1a1a;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .image-wrapper:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px var(--accent-gold);
        }

        .masonry-item img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.6s ease;
        }

        .image-wrapper:hover img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .image-wrapper:hover .image-overlay {
          opacity: 1;
        }

        .view-text {
          color: var(--accent-gold);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.85rem;
        }

        .cta-section {
          padding: 100px 20px;
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .cta-section h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--white);
          margin-bottom: 15px;
        }

        .cta-section p {
          color: rgba(255,255,255,0.7);
          font-size: 1.2rem;
          margin-bottom: 40px;
        }

        .cta-button {
          display: inline-block;
          padding: 18px 50px;
          background: var(--accent-gold);
          color: var(--primary);
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          border-radius: 50px;
          transition: all 0.3s;
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(212, 175, 55, 0.5);
          background: #e6c84f;
        }

        @media (max-width: 900px) {
          .masonry-grid { column-count: 2; }
          .project-hero { height: 50vh; }
          .back-link { top: 90px; left: 20px; padding: 10px 20px; font-size: 0.9rem; }
          .gallery-section { padding: 60px 15px; }
          .cta-section { padding: 80px 20px; }
        }

        @media (max-width: 600px) {
          .masonry-grid { column-count: 1; }
          .project-hero { height: 40vh; }
          .project-title { font-size: 2rem; }
          .back-link { top: 80px; left: 15px; padding: 8px 16px; font-size: 0.85rem; }
        }
      `}</style>
    </div>
  )
}

export default ProjectView
