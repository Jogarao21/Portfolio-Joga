import React from 'react';
import './Experience.css';

const xpExperienceCards = [
  {
    icon: (
      // Laptop + JS/React Symbol Icon
      <svg className="xp-icon" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="16" width="32" height="14" rx="4" fill="#4915d1" />
        <rect x="12" y="20" width="24" height="6" rx="2" fill="#a992fc" opacity="0.16"/>
        <circle cx="24" cy="23" r="5.5" fill="#fff" opacity="0.06"/>
        <path d="M17 25 21 21m0 0-4-4m4 4h6m0 0 4-4m-4 4 4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="16" y="34" width="16" height="3" rx="1.5" fill="#e6e7fb" opacity="0.22"/>
      </svg>
    ),
    headline: 'Sepnoty Technologies Pvt. Ltd., Bangalore, India',
    subhead: 'Web Developer Intern | Sep 2025–Present',
    bullets: [
      'Developed responsive landing page components using React.js and CSS Grid, improving mobile usability by 25%.',
      'Collaborated with senior developers to integrate RESTful APIs for dynamic content rendering and streamlined data flow.',
      'Identified and fixed cross-browser compatibility issues, reducing frontend bug reports by 30%.'
    ]
  },
  {
    icon: (
      // Shield Security Icon
      <svg className="xp-icon" viewBox="0 0 48 48" fill="none">
        <path d="M24 9 Q36 16 39 17 Q39 33 24 43 Q9 33 9 17 Q12 16 24 9" fill="#6739ec" stroke="#fff" strokeWidth="2.5" />
        <ellipse cx="24" cy="17" rx="7.5" ry="3" fill="#bfaaff" opacity=".11"/>
        <ellipse cx="24" cy="26" rx="11" ry="5" fill="#c5bfff" opacity=".10"/>
      </svg>
    ),
    headline: 'Besant Technologies, Bangalore, India',
    subhead: 'Python Full Stack Development',
    bullets: [
      'Proficient in frontend development using HTML5, CSS3, JavaScript, and React.js.',
      'Skilled in Python and SQL for backend logic, API handling, and database management.',
      'Experienced with Git/GitHub and deployment using Netlify/Vercel.'
    ]
  },
  {
    icon: (
      // Cloud Deployment Icon
      <svg className="xp-icon" viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="33" rx="11" ry="4.7" fill="#dacfff" opacity="0.16"/>
        <path d="M14 34v-7a1 1 0 011-1h18a1 1 0 011 1v7" stroke="#fff" strokeWidth="2" fill="#7b61fa" opacity="0.15"/>
        <rect x="15" y="15" width="18" height="10" rx="3" fill="#fff" opacity="0.11"/>
        <path d="M24 26v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        <path d="M21 29l3 3 3-3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    headline: 'Projects Portfolio | Feb 2025–Aug 2025',
    subhead: 'Full Stack Development Projects',
    bullets: [
      'Built responsive web applications using React.js, Python, and SQL.',
      'Implemented best practices for maintainable code and scalable design.',
      'Deployed full-stack projects with CI/CD workflows on Netlify and Vercel.'
    ]
  }
];

const Experience = () => (
  <section className="xp-section" id="experience">
    <div className="xp-bg"></div>
    <div className="xp-container">
      <div className="xp-heading">
        <div className="xp-title-glow">
          <h1 className="xp-title">PROFESSIONAL EXPERIENCE</h1>
          <div className="xp-title-underline"></div>
        </div>
        <p className="xp-desc">
          Industry experience, training, and hands-on projects using modern tech stack. <br className="xp-desc-break" /> Bangalore, India.
        </p>
      </div>
      <div className="xp-cards-row">
        {xpExperienceCards.map((card, idx) => (
          <div className="xp-card" key={idx}>
            <div className="xp-card-icon">{card.icon}</div>
            <div className="xp-card-info">
              <div className="xp-card-headline">{card.headline}</div>
              <div className="xp-card-subhead">{card.subhead}</div>
              <ul className="xp-card-bullets">
                {card.bullets.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
            <div className="xp-card-glow"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;