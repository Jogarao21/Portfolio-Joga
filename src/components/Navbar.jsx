import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Navigation items
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Objective', id: 'objective' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsDropdownOpen(false);
  };

  // Handle contact button click
  const handleLetsTalk = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'mailto:mjogarao21@gmail.com';
    }
  };

  // Handle resume download
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Kappa_Jogarao_Resume.pdf';
    link.click();
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-brackets">&lt;/&gt;</span>
          <span className="logo-text">Portfolio</span>
        </div>

        {/* Center Dropdown */}
        <div className="navbar-center" ref={dropdownRef}>
          <button 
            className={`explore-btn ${isDropdownOpen ? 'explore-btn--active' : ''}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-expanded={isDropdownOpen}
          >
            Explore 
            <span className={`dropdown-arrow ${isDropdownOpen ? 'dropdown-arrow--rotated' : ''}`}>-</span>
          </button>
          
          <div className={`dropdown-menu ${isDropdownOpen ? 'dropdown-open' : ''}`}>
            <div className="dropdown-content">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  className="dropdown-item"
                  onClick={() => scrollToSection(item.id)}
                  style={{ '--delay': `${index * 0.05}s` }}
                >
                  <span className="dropdown-item-text">{item.name}</span>
                  <span className="dropdown-item-arrow">→</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="navbar-actions">
          <button 
            className="btn btn-outline"
            onClick={handleResumeDownload}
            title="Download Resume"
          >
            <span className="btn-text">Resume</span>
          </button>
          <button 
            className="btn btn-primary"
            onClick={handleLetsTalk}
            title="Get in touch"
          >
            <span className="btn-text">Let's Talk</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;