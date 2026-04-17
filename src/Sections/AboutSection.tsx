import { aboutData } from "../data";

export default function AboutSection() {
  return (
    <section className="about">
        
        <div className="about-logos">
          <div className="about-logo sensidev" aria-label="Sensidev" />
          <div className="about-logo ledidi" aria-label="Ledidi" />
          <div className="about-logo jnj" aria-label="Johnson & Johnson" />
          <div className="about-logo nextgen" aria-label="NextGen" />
          <div className="about-logo endava" aria-label="Endava" />
        </div>

        <div className="about-content">
          <p className="eyebrow">About me</p>
          <p className='about-description'>{aboutData.sectionOne}</p>
          <p className='about-description muted'>{aboutData.sectionTwo}</p>
        </div>
        
      </section>
  )
}