import React from 'react'

const steps = [
  { num: '01', title: 'Consultation', desc: 'We listen to your needs, preferences, and budget to understand your vision.' },
  { num: '02', title: 'Design Planning', desc: 'Our designers create detailed 3D layouts and mood boards for your approval.' },
  { num: '03', title: 'Material Selection', desc: 'Together, we choose the finest materials, finishes, and hardware.' },
  { num: '04', title: 'Execution', desc: 'Skilled craftsmen bring the designs to life with precision and care.' },
  { num: '05', title: 'Final Handover', desc: 'We do a thorough walkthrough and hand over your dream space.' },
]

const Process = () => {
  return (
    <section className="process-section section">
      <div className="container">
        <header className="text-center fade-up">
          <span className="label-caps">HOW WE WORK</span>
          <h2 className="section-heading">Our Design Process</h2>
          <p className="section-subtitle">A seamless journey from vision to reality, guided by expertise and passion.</p>
          <div className="gold-line" />
        </header>

        <div className="process-timeline">
          {steps.map((s, i) => (
            <div key={i} className="process-step fade-up" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="step-dot">
                <span>{s.num}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .process-section {
          background: var(--bg-light);
        }

        .process-timeline {
          display: flex;
          justify-content: space-between;
          margin-top: 70px;
          position: relative;
        }

        .process-timeline::before {
          content: '';
          position: absolute;
          top: 30px;
          left: 8%;
          right: 8%;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-gold) 0%, rgba(198,167,94,0.2) 100%);
        }

        .process-step {
          text-align: center;
          flex: 1;
          padding: 0 15px;
          position: relative;
        }

        .step-dot {
          width: 60px; height: 60px;
          background: var(--white);
          border: 3px solid var(--accent-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          position: relative;
          z-index: 2;
          transition: all 0.3s;
        }

        .step-dot span {
          font-family: var(--font-display);
          font-weight: 700;
          color: var(--accent-gold);
          font-size: 1rem;
        }

        .process-step:hover .step-dot {
          background: var(--accent-gold);
        }

        .process-step:hover .step-dot span {
          color: var(--white);
        }

        .process-step h3 {
          font-size: 1.1rem;
          margin-bottom: 10px;
          color: var(--primary);
        }

        .process-step p {
          font-size: 0.85rem;
          opacity: 0.6;
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .process-timeline {
            flex-direction: column;
            gap: 40px;
            align-items: center;
          }

          .process-timeline::before {
            top: 0; bottom: 0;
            left: 50%;
            width: 2px;
            height: 100%;
            right: auto;
          }

          .process-step {
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  )
}

export default Process
