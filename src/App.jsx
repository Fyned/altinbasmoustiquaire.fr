import { Phone, Truck, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import Logo from './components/Logo'
import './styles/App.css'

function App() {
  return (
    <>
      <div className="background-pattern" />

      <main className="container">
        <div className="content-card">
          {/* Logo */}
          <div className="logo-container">
            <Logo className="logo" />
          </div>

          {/* Titles */}
          <h1 className="title">Site en construction</h1>
          <p className="subtitle">Notre nouveau site arrive bientôt !</p>
          <p className="description">
            Nous travaillons actuellement sur notre site web pour vous offrir une meilleure expérience.
            En attendant, n'hésitez pas à nous contacter.
          </p>

          {/* Contact */}
          <div className="contact-section">
            <a href="tel:+33660990370" className="contact-item" target="_blank" rel="noopener noreferrer">
              <Phone className="icon" size={22} />
              <div className="contact-info">
                <span className="contact-text">06 60 99 03 70</span>
                <span className="contact-label">Devis & RDV</span>
              </div>
            </a>

            <a href="tel:+33781609026" className="contact-item" target="_blank" rel="noopener noreferrer">
              <Truck className="icon" size={22} />
              <div className="contact-info">
                <span className="contact-text">07 81 60 90 26</span>
                <span className="contact-label">Livraison & Pose</span>
              </div>
            </a>

            <a href="mailto:ent.altinbas@gmail.com" className="contact-item" target="_blank" rel="noopener noreferrer">
              <Mail className="icon" size={22} />
              <div className="contact-info">
                <span className="contact-text">ent.altinbas@gmail.com</span>
              </div>
            </a>

            <a
              href="https://maps.google.com/?q=24+Rue+Francisque+Cartallier,+38780+Pont-Evêque"
              className="contact-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="icon" size={22} />
              <div className="contact-info">
                <span className="contact-text">24 Rue Francisque Cartallier, 38780 Pont-Evêque</span>
              </div>
            </a>
          </div>

          {/* Social Media */}
          <div className="social-section">
            <a
              href="https://instagram.com/moustiquairealtinbas"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://facebook.com/altinbasmoustiquaire"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p className="artisanal">Fabrication artisanale en Isère (38)</p>
          <p className="copyright">&copy; 2025 ALTINBAS</p>
        </footer>
      </main>
    </>
  )
}

export default App
