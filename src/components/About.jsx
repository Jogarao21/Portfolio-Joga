import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const highlights = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
          <path d="M7 7h10v6H7z"/>
        </svg>
      ),
      title: 'Full Stack Development',
      subtitle: 'React, Django, Python, Node.js',
      description: 'End-to-end web application development with modern technologies'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Scalable APIs & Database Integration',
      subtitle: 'RESTful APIs, MySQL, PostgreSQL',
      description: 'Building robust backend systems and seamless data management'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Modern UI Design & Responsive Layouts',
      subtitle: 'CSS3, React Components, Mobile-First',
      description: 'Creating beautiful, intuitive interfaces that work everywhere'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: 'Deployment & Performance Optimization',
      subtitle: 'Netlify, Vercel, CI/CD Workflows',
      description: 'Ensuring fast, reliable, and scalable application delivery'
    }
  ];

  const hobbies = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
        </svg>
      ),
      name: 'Cricket',
      description: 'Playing and watching cricket matches'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
          <polygon points="10,6 14,6 14,10 10,10" fill="currentColor" opacity="0.4"/>
        </svg>
      ),
      name: 'TV Shows',
      description: 'Binge-watching series and documentaries'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13"/>
          <circle cx="6" cy="18" r="3"/>
          <circle cx="18" cy="16" r="3"/>
        </svg>
      ),
      name: 'Music',
      description: 'Relaxing with various music genres'
    }
  ];

  return (
    <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`}>
      {/* Animated Background */}
      <div className="about-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="about-container">
        {/* Header Section */}
        <div className="about-header">
          <div className="section-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            About Me
          </div>
          <div className="title-glow">
            <h1 className="about-title">
              A PASSIONATE DEVELOPER BLENDING
              <span className="gradient-text"> CREATIVITY WITH LOGIC</span>
            </h1>
            <div className="title-underline"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="content-grid">
          {/* Left Column - Personal Info */}
          <div className="content-left">
            {/* Introduction Card */}
            <div className="glass-card intro-card">
              <div className="card-header">
                <div className="profile-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <h2>Introduction</h2>
              </div>
              <div className="card-content">
                <p className="intro-text">
                  I'm <span className="name-highlight">Kappa Jogarao</span>, a dedicated Python Full Stack Developer based in 
                  <span className="location-highlight"> Bangalore, India</span>.
                </p>
                <p className="intro-description">
                  With a strong foundation in frontend (React, JavaScript, CSS) and backend (Python, SQL, Django) technologies, 
                  I specialize in creating responsive and user-focused web applications that provide seamless digital experiences.
                </p>
              </div>
            </div>

            {/* Professional Summary Card */}
            <div className="glass-card summary-card">
              <div className="card-header">
                <div className="profile-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                    <circle cx="12" cy="13" r="3"/>
                  </svg>
                </div>
                <h2>Professional Summary</h2>
              </div>
              <div className="card-content">
                <p className="summary-text">
                  I believe in writing <span className="highlight-text">clean, maintainable, and scalable code</span> that not only works 
                  but also tells a story through design and structure.
                </p>
                <p className="summary-text">
                  My journey began with a curiosity for how websites work — and over time, it grew into a full-fledged passion for web development. 
                  I constantly challenge myself to stay ahead with new technologies and best practices in the fast-evolving web ecosystem.
                </p>
              </div>
            </div>

            {/* Outside Work Card */}
            <div className="glass-card hobbies-card">
              <div className="card-header">
                <div className="profile-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h2>Outside of Work</h2>
              </div>
              <div className="card-content">
                <p className="hobbies-description">
                  When I'm not coding, you'll find me pursuing activities that keep me balanced, creative, and inspired to build better user experiences every day.
                </p>
                <div className="hobbies-grid">
                  {hobbies.map((hobby, index) => (
                    <div 
                      key={index} 
                      className="hobby-item"
                      style={{ '--delay': `${index * 0.1}s` }}
                    >
                      <div className="hobby-icon">{hobby.icon}</div>
                      <div className="hobby-content">
                        <h4>{hobby.name}</h4>
                        <p>{hobby.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="content-right">
            <div className="glass-card highlights-card">
              <div className="card-header">
                <div className="profile-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <h2>Core Expertise</h2>
              </div>
              <div className="highlights-grid">
                {highlights.map((item, index) => (
                  <div 
                    key={index} 
                    className="highlight-card"
                    style={{ '--delay': `${index * 0.15}s` }}
                  >
                    <div className="highlight-icon-wrapper">
                      <div className="highlight-icon">{item.icon}</div>
                      <div className="icon-glow"></div>
                    </div>
                    <div className="highlight-content">
                      <h3 className="highlight-title">{item.title}</h3>
                      <p className="highlight-subtitle">{item.subtitle}</p>
                      <p className="highlight-description">{item.description}</p>
                    </div>
                    <div className="highlight-border"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
