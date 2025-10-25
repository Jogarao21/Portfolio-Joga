import React, { useEffect, useState } from 'react';
import './Objective.css';

const Objective = () => {
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

    const section = document.getElementById('objective');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const objectives = [
    {
      id: 1,
      title: 'Clean UI Design',
      description: 'Building responsive and user-friendly interfaces with HTML5, CSS3, and React.js.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ),
      status: 'completed'
    },
    {
      id: 2,
      title: 'Scalable Solutions',
      description: 'Designing backend architectures that scale efficiently using Python and SQL.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
          <path d="M9 18h6"/>
          <path d="M10 22h4"/>
        </svg>
      ),
      status: 'completed'
    },
    {
      id: 3,
      title: 'Real-World Impact',
      description: 'Developing web apps that solve practical problems through innovation and logic.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      status: 'completed'
    },
    {
      id: 4,
      title: 'Team Collaboration',
      description: 'Thriving in agile, fast-paced environments with strong teamwork and adaptability.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      status: 'completed'
    }
  ];

  return (
    <section id="objective" className={`objective-section ${isVisible ? 'objective-visible' : ''}`}>
      {/* Animated Background Waves */}
      <div className="wave-background">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>

      {/* Background Pattern */}
      <div className="objective-pattern">
        <div className="pattern-circle circle-1"></div>
        <div className="pattern-circle circle-2"></div>
        <div className="pattern-circle circle-3"></div>
      </div>

      <div className="objective-container">
        {/* Header */}
        <div className="objective-header">
          <div className="title-glow">
            <h1 className="objective-title">PROJECT OBJECTIVES</h1>
            <div className="title-underline"></div>
          </div>
          <p className="objective-subtitle">
            My core development goals and professional aspirations
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="objectives-grid">
          {objectives.map((objective, index) => (
            <div 
              key={objective.id}
              className="objective-card"
              style={{ '--delay': `${index * 0.15}s` }}
            >
              {/* Status Badge */}
              <div className={`status-badge ${objective.status}`}>
                {objective.status === 'completed' ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                )}
              </div>

              {/* Icon Circle */}
              <div className="icon-wrapper">
                <div className="icon-circle">
                  <div className="icon-content">
                    {objective.icon}
                  </div>
                  <div className="icon-glow"></div>
                </div>
              </div>

              {/* Content */}
              <div className="objective-content">
                <h3 className="objective-heading">{objective.title}</h3>
                <p className="objective-description">{objective.description}</p>
              </div>

              {/* Decorative Elements */}
              <div className="card-shimmer"></div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="bottom-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-dot"></div>
          <div className="decoration-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Objective;
