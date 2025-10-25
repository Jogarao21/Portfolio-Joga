import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="ctc-section" id="contact">
    <div className="ctc-bg"></div>
    <div className="ctc-container">
      <div className="ctc-box">
        {/* Left | Info */}
        <div className="ctc-info">
          <div className="ctc-info-content">
            <div className="ctc-title-glow">
              <h1 className="ctc-title">CONTACT ME</h1>
              <div className="ctc-title-underline"></div>
            </div>
            <h2 className="ctc-heading">Let’s Build Something Amazing Together</h2>
            <p className="ctc-desc">
              I’m always open to discussing new projects, creative ideas, or opportunities to collaborate.<br/>
              Feel free to reach out!
            </p>
            <ul className="ctc-highlights">
              <li>
                <span className="ctc-li-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke="#11f2b7" strokeWidth="2.2" fill="none"/></svg>
                </span>
                Web App Development
              </li>
              <li>
                <span className="ctc-li-icon"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke="#11f2b7" strokeWidth="2.2" fill="none"/></svg></span>
                Frontend & Full Stack Projects
              </li>
              <li>
                <span className="ctc-li-icon"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke="#11f2b7" strokeWidth="2.2" fill="none"/></svg></span>
                Freelance Collaborations
              </li>
              <li>
                <span className="ctc-li-icon"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke="#11f2b7" strokeWidth="2.2" fill="none"/></svg></span>
                Internship & Job Opportunities
              </li>
            </ul>
            <div className="ctc-contact-list">
              <div><span className="ctc-contact-icon">📞</span> <span>+91-9100622933</span></div>
              <div><span className="ctc-contact-icon">📧</span> <a href="mailto:mjogarao21@gmail.com" tabIndex={-1}>mjogarao21@gmail.com</a></div>
              <div><span className="ctc-contact-icon">📍</span> <span>Bangalore, India</span></div>
            </div>
          </div>
        </div>
        {/* Right | Form */}
        <div className="ctc-form-side">
          <form className="ctc-form" autoComplete="off">
            <div className="ctc-form-row">
              <input type="text" name="name" placeholder="Full Name" className="ctc-field" required />
            </div>
            <div className="ctc-form-row">
              <input type="email" name="email" placeholder="Email Address" className="ctc-field" required />
            </div>
            <div className="ctc-form-row">
              <input type="text" name="subject" placeholder="Subject" className="ctc-field" required />
            </div>
            <div className="ctc-form-row">
              <textarea name="message" placeholder="Message" className="ctc-field ctc-textarea" rows={4} required></textarea>
            </div>
            <div className="ctc-form-row ctc-checkbox-row">
              <input type="checkbox" id="terms" className="ctc-checkbox" required />
              <label htmlFor="terms" className="ctc-checkbox-label">
                I agree to the Terms &amp; Privacy Policy.
              </label>
            </div>
            <div className="ctc-form-row">
              <button className="ctc-submit" type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
