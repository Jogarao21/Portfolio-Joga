import React, { useEffect, useRef } from 'react';
import './Projects.css';

const prjProjects = [
  {
    title: 'nivoxAI LMS Platform',
    tech: 'React',
    url: 'https://nivoxai-joga.netlify.app',
    desc: 'Full-featured LMS with user authentication, course modules, and progress tracking. Deployed via Netlify.'
  },
  {
    title: 'Learning Management System',
    tech: 'React',
    url: 'https://lms-website-joga.netlify.app',
    desc: 'Modular LMS UI with dynamic routing, state management, and fully responsive design.'
  },
  {
    title: 'Movie Website',
    tech: 'React',
    url: 'https://movie-website-joga.netlify.app',
    desc: 'Movie browser powered by TMDB API with infinite scroll, filters, and custom ratings.'
  },
  {
    title: 'Calculator',
    tech: 'React',
    url: 'https://calculator-jogarao.netlify.app',
    desc: 'Scientific calculator supporting keyboard input, React state, and user-friendly error handling.'
  },
  {
    title: 'Portfolio',
    tech: 'React',
    url: 'https://my-portfolio-joga.netlify.app',
    desc: 'Personal portfolio with animated sections, project galleries, and a Formik/Netlify contact form.'
  },
  {
    title: 'E-Commerce Website',
    tech: 'HTML/CSS/JS',
    url: 'https://e-commerse-joga.netlify.app',
    desc: 'Mock e-commerce site with filterable catalog, shopping cart, and vanilla JS interactions.'
  },
  {
    title: 'Scrum and Agile Guide',
    tech: 'Static Site',
    url: 'https://scrum-agile-project.netlify.app',
    desc: 'Interactive guide to Scrum ceremonies and Agile practices, built for rapid content updates.'
  }
];

const Projects = () => {
  const ref = useRef();
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.prj-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 24) card.classList.add('prj-card-visible');
      });
    };
    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <section id="projects" className="prj-section" ref={ref}>
      <div className="prj-bg"></div>
      <div className="prj-container">
        <header className="prj-header">
          <div className="prj-title-glow">
            <h1 className="prj-title">PROJECTS</h1>
            <div className="prj-title-underline"></div>
          </div>
        </header>
        <div className="prj-card-grid">
          {prjProjects.map((p, i) => (
            <a
              href={p.url}
              className="prj-card"
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
            >
              <div className="prj-card-content">
                <div className="prj-card-row">
                  <h3 className="prj-card-title">{p.title}</h3>
                  <span className="prj-tech">{p.tech}</span>
                </div>
                <div className="prj-card-url">{p.url.replace(/^https?:\/\//,'')}</div>
                <p className="prj-card-desc">{p.desc}</p>
              </div>
              <span className="prj-card-arrow">
                <svg width="28" height="28" viewBox="0 0 24 24">
                  <path d="M7 17l5-5-5-5" stroke="#81a1fa" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M12 17l5-5-5-5" stroke="#81a1fa" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6"/>
                </svg>
              </span>
              <span className="prj-card-glass"></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
