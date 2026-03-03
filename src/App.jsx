import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import ProjectView from './pages/ProjectView'
import Contact from './pages/Contact'
import ImageCurator from './pages/ImageCurator'
import { Phone } from 'lucide-react'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const location = useLocation()
  const [key, setKey] = React.useState(0)

  React.useEffect(() => {
    setKey(prev => prev + 1)
  }, [location.pathname])

  return (
    <div className="app">

      <Navbar />
      <ScrollToTop />
      <main key={key} className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectView />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/curator" element={<ImageCurator />} />
        </Routes>
      </main>
      <Footer />

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/919666796670"
        className="whatsapp-fab"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.553 4.197 1.603 6.04L0 24l6.108-1.604a11.803 11.803 0 005.937 1.604h.005c6.634 0 12.032-5.395 12.034-12.03a11.777 11.777 0 00-3.489-8.502" />
        </svg>
      </a>

      {/* Mobile Call Now Bar */}
      <a href="tel:9666796670" className="call-now-bar">
        <Phone size={18} /> Call Now — 9666796670
      </a>
    </div>
  )
}

export default App
