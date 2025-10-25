import React, { useEffect, useState } from 'react';
import './Home.css';
import HeroImage from '../assets/HeroImage.jpg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [popupAnim, setPopupAnim] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Popup animation for "Python Full Stack Developer"
    setTimeout(() => setPopupAnim(true), 700);
  }, []);

  const socialLinks = [
    {
      platform: 'Email',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      url: 'mailto:mjogarao21@gmail.com'
    },
    {
      platform: 'GitHub',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      url: 'https://github.com/Jogarao21'
    },
    {
      platform: 'LinkedIn',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2"/>
          <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2"/>
          <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      url: 'https://linkedin.com/in/shiva-jogarao'
    },
    {
      platform: 'Portfolio',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12h20" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      url: 'https://my-portfolio-joga.netlify.app'
    }
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const titleText = "Python Full Stack Developer";

  return (
    <section id="home" className={`hero-section ${isVisible ? 'hero-visible' : ''}`}>
      <div className="hero-container">
        {/* Left Column - Content */}
        <div className="hero-left">
          <div className="hero-content">
            {/* Greeting */}
            <div className="hero-greeting">
              <span className="greeting-text">👋 Hello, I'm</span>
            </div>

            {/* Name & Animated Title */}
            <h1 className="hero-name">
              <span className="name-highlight">Kappa Jogarao</span>
            </h1>
            <div className={`hero-title-popup ${popupAnim ? 'popup-anim' : ''}`}>
              <div className="wave-text">
                {titleText.split('').map((char, index) => (
                  <span 
                    key={index} 
                    className="wave-char"
                    style={{ '--delay': `${index * 0.1}s` }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>
            </div>
            <div className="hero-location">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Bangalore, India
            </div>

            {/* Description */}
            <p className="hero-description">
              I specialize in building <span className="highlight">responsive</span>, 
              <span className="highlight"> user-centric</span>, and 
              <span className="highlight"> scalable web applications</span> that blend design and logic seamlessly.
            </p>

            {/* CTA Button */}
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="hero-social">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.platform !== 'Email' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="social-link"
                  title={link.platform}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="hero-right">
          <div className="hero-image-container">
            <div className="hero-image">
              <img 
                src={HeroImage}
                alt="Kappa Jogarao - Python Full Stack Developer"
                className="professional-photo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="hero-background">
        <div className="bg-pattern"></div>
      </div>
    </section>
  );
};

export default Home;
