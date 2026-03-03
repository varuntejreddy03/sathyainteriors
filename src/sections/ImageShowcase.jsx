import React, { useState, useEffect } from 'react'

const ImageShowcase = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const portfolioImages = [
      '01072025-3D-Sunil and Prapti_page-0004.jpg',
      '01072025-3D-Sunil and Prapti_page-0005.jpg',
      '01072025-3D-Sunil and Prapti_page-0007.jpg',
      '01072025-3D-Sunil and Prapti_page-0008.jpg',
      '01072025-3D-Sunil and Prapti_page-0010.jpg',
      '01072025-3D-Sunil and Prapti_page-0011.jpg',
      '01072025-3D-Sunil and Prapti_page-0012.jpg',
      '01072025-3D-Sunil and Prapti_page-0013.jpg',
      '01072025-3D-Sunil and Prapti_page-0014.jpg',
      '01072025-3D-Sunil and Prapti_page-0017.jpg',
      '01072025-3D-Sunil and Prapti_page-0019.jpg',
      '01072025-3D-Sunil and Prapti_page-0020.jpg',
      '01072025-3D-Sunil and Prapti_page-0021.jpg',
      '01072025-3D-Sunil and Prapti_page-0022.jpg',
      '01072025-3D-Sunil and Prapti_page-0025.jpg',
      '07092025-3D-Sudharshan and family_page-0004.jpg',
      '07092025-3D-Sudharshan and family_page-0005.jpg',
      '07092025-3D-Sudharshan and family_page-0006.jpg',
      '07092025-3D-Sudharshan and family_page-0007.jpg',
      '07092025-3D-Sudharshan and family_page-0010.jpg',
      '07092025-3D-Sudharshan and family_page-0012.jpg',
      '07092025-3D-Sudharshan and family_page-0015.jpg',
      '07092025-3D-Sudharshan and family_page-0016.jpg',
      '07092025-3D-Sudharshan and family_page-0017.jpg',
      '07092025-3D-Sudharshan and family_page-0018.jpg',
      '07092025-3D-Sudharshan and family_page-0024.jpg',
      '07092025-3D-Sudharshan and family_page-0025.jpg',
      '07092025-3D-Sudharshan and family_page-0026.jpg',
      '07092025-3D-Sudharshan and family_page-0027.jpg',
      '3D Docket_page-0003.jpg',
      '3D Docket_page-0005.jpg',
      '3D Docket_page-0010.jpg',
      '3D Docket_page-0015.jpg',
      '3D Docket_page-0017.jpg',
      '3D Docket_page-0019.jpg',
      '3D Docket_page-0020.jpg',
      '3D Docket_page-0021.jpg',
      '3D Docket_page-0022.jpg',
      '3D Docket_page-0023.jpg',
      '3D Docket_page-0025.jpg',
      'Tanu Interior Designs_page-0002.jpg',
      'Tanu Interior Designs_page-0003.jpg',
      'Tanu Interior Designs_page-0030.jpg',
      'Tanu Interior Designs_page-0033.jpg',
      'Tanu Interior Designs_page-0042.jpg',
      'Tanu Interior Designs_page-0043.jpg',
      'Tanu Interior Designs_page-0046.jpg',
      'Tanu Interior Designs_page-0047.jpg',
      'Tanu Interior Designs_page-0054.jpg',
      'Tanu Interior Designs_page-0057.jpg',
      'Tanu Interior Designs_page-0058.jpg',
      'Tanu Interior Designs_page-0060.jpg',
      'Tanu Interior Designs_page-0083.jpg',
      'Tanu Interior Designs_page-0084.jpg',
      'Tanu Interior Designs_page-0085.jpg',
      'Tanu Interior Designs_page-0086.jpg',
      'Tanu Interior Designs_page-0087.jpg',
      'Tanu Interior Designs_page-0088.jpg',
      'Tanu Interior Designs_page-0089.jpg',
      'Tanu Interior Designs_page-0090.jpg',
    ]

    const loadedImages = portfolioImages.map((img, idx) => ({
      id: idx + 1,
      url: `/optimized-images/portfolio/${img}`,
      alt: img.replace('.jpg', '')
    }))

    setImages(loadedImages)
  }, [])

  return (
    <section className="image-showcase-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="showcase-title">Our Signature Spaces</h2>
          <div className="gold-line" style={{ margin: '20px auto' }}></div>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...images, ...images].map((img, i) => (
              <div key={i} className="marquee-item">
                <img src={img.url} alt={img.alt} className="showcase-image" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .image-showcase-section {
          padding: 80px 0;
          background: var(--black);
          overflow: hidden;
        }

        .showcase-title {
          font-size: 2.5rem;
          color: var(--gold);
          font-family: var(--font-heading);
          font-weight: 700;
          margin-bottom: 10px;
        }

        .gold-line {
          width: 60px;
          height: 2px;
          background: var(--gold);
          margin: 20px auto;
        }

        .marquee-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          gap: 20px;
          animation: scroll 80s linear infinite;
          width: fit-content;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          flex-shrink: 0;
          width: 300px;
          height: 220px;
          border-radius: 12px;
          overflow: hidden;
          border: 2px solid rgba(201, 168, 76, 0.4);
          transition: all 0.3s ease;
        }

        .marquee-item:hover {
          border-color: var(--gold);
          box-shadow: 0 0 20px rgba(201, 168, 76, 0.3);
        }

        .showcase-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }

        .marquee-item:hover .showcase-image {
          transform: scale(1.05);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-300px * 60 - 20px * 60));
          }
        }

        @media (max-width: 768px) {
          .marquee-item {
            width: 220px;
            height: 160px;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-220px * 60 - 20px * 60));
            }
          }
        }

        @media (max-width: 480px) {
          .marquee-item {
            width: 150px;
            height: 110px;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-150px * 60 - 20px * 60));
            }
          }
        }
      `}</style>
    </section>
  )
}

export default ImageShowcase
