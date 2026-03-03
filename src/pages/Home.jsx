import React from 'react'
import Hero from '../sections/Hero'
import ImageShowcase from '../sections/ImageShowcase'
import PoojaUnitsHighlight from '../sections/PoojaUnitsHighlight'
import ServicesSection from '../sections/ServicesSection'
import WhyChooseUs from '../sections/WhyChooseUs'
import AboutSection from '../sections/AboutSection'
import Testimonials from '../sections/Testimonials'

function Home() {
  React.useEffect(() => {
    const isMobile = window.innerWidth <= 768
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          } else if (!isMobile) {
            entry.target.classList.remove('animate-in')
          }
        })
      },
      { threshold: isMobile ? 0.05 : 0.1, rootMargin: isMobile ? '0px' : '0px 0px -100px 0px' }
    )

    document.querySelectorAll('.section-animate').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="home-page-content">
      <Hero />
      <ImageShowcase />
      <PoojaUnitsHighlight />
      <div className="section-animate"><ServicesSection /></div>
      <div className="section-animate"><WhyChooseUs /></div>
      <div className="section-animate"><AboutSection /></div>
      <div className="section-animate"><Testimonials /></div>
    </div>
  )
}

export default Home
