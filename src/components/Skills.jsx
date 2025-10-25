import React, { useEffect, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const skills = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'HTML5, CSS3, JavaScript (ES6+), React.js — building responsive, component-driven interfaces.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
          <path d="M7 8l3 3-3 3"/>
          <path d="M13 14h4"/>
        </svg>
      ),
      glowColor: '#00f5ff'
    },
    {
      id: 2,
      title: 'Backend & Automation',
      description: 'Python, Node.js, SQL — creating scalable APIs, backend logic, and automation scripts.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6"/>
          <path d="M21 12h-6m-6 0H3"/>
          <path d="M18.364 5.636L15.536 8.464"/>
          <path d="M8.464 15.536L5.636 18.364"/>
          <path d="M5.636 5.636L8.464 8.464"/>
          <path d="M15.536 15.536L18.364 18.364"/>
        </svg>
      ),
      glowColor: '#8a2be2'
    },
    {
      id: 3,
      title: 'Database Management',
      description: 'MySQL — designing normalized schemas and optimizing query performance.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
          <path d="M12 8v8"/>
          <path d="M8 10v6"/>
          <path d="M16 10v6"/>
        </svg>
      ),
      glowColor: '#0080ff'
    },
    {
      id: 4,
      title: 'DevOps & Deployment',
      description: 'Git, Netlify, Vercel — version control, CI/CD, and seamless web deployment.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      glowColor: '#ff6b35'
    },
    {
      id: 5,
      title: 'Tools & Methodologies',
      description: 'Agile, Scrum, VS Code, Postman — efficient collaboration and testing workflows.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ),
      glowColor: '#00ff88'
    }
  ];

  return (
    <section id="skills" className={`skills-section ${isVisible ? 'skills-visible' : ''}`}>
      {/* Cyber Background */}
      <div className="cyber-background">
        <div className="grid-overlay"></div>
        <div className="tech-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>
        </div>
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                '--delay': `${i * 0.5}s`,
                '--duration': `${8 + (i % 5)}s`,
                '--size': `${2 + (i % 3)}px`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <div className="title-glow">
            <h1 className="skills-title">TECHNICAL EXPERTISE</h1>
            <div className="title-underline"></div>
          </div>
          <p className="skills-subtitle">
            Advanced technologies powering modern web development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={skill.id}
              className="skill-card"
              style={{ 
                '--delay': `${index * 0.15}s`,
                '--glow-color': skill.glowColor
              }}
            >
              {/* Card Background Effects */}
              <div className="card-bg-effect"></div>
              <div className="card-border-glow"></div>
              
              {/* Icon Section */}
              <div className="skill-icon-section">
                <div className="icon-container">
                  <div className="icon-bg-glow"></div>
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <div className="icon-ring"></div>
                </div>
                <div className="skill-number">
                  <span>{String(skill.id).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Content */}
              <div className="skill-content">
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>

              {/* Holographic Effects */}
              <div className="hologram-overlay"></div>
              <div className="scan-line"></div>
            </div>
          ))}
        </div>

        {/* Tech Stats */}
        <div className="tech-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <div className="stat-value">100%</div>
            <div className="stat-label">Performance</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="stat-value">5+</div>
            <div className="stat-label">Core Skills</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div className="stat-value">24/7</div>
            <div className="stat-label">Availability</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
