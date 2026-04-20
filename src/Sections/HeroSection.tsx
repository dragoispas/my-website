import avatar from "../assets/avatar.jpeg"
import { heroData } from "../data"

export default function HeroSection() {
  return (
    <section className="hero">
        
        <div className="hero-inner">
          <div className="hero-bubble">
            <img src={avatar} alt="Dragos - " className="hero-avatar" />
            <p className='secondary'>{heroData.welcomeMessage}</p>
          </div>

          <h2 className='hero-title'>
            {heroData.name},
            <br />
            {heroData.tagline}
          </h2>

          <p className='muted s'>Scroll down to see portfolio ↓</p>
        </div>
      </section>
  )
}