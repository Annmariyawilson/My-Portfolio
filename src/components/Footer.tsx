import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer-premium">
      <div className="footer-wave"></div>
      <div className="container relative">
        <div className="row align-items-center">
          
          {/* Left Column: Brand & Graphic */}
          <div className="col-md-6 mb-5 mb-md-0 text-center text-md-start">
            <h3 className="footer-title mb-4">Let&apos;s Build Something Amazing</h3>
            <div className="footer-developer-graphic">
              <Image 
                src="/image/developer.png" 
                alt="Developer Graphic" 
                width={200} 
                height={200} 
                className="developer-floating-img"
              />
            </div>
            <div className="footer-bottom mt-4">
              <p>&copy; {new Date().getFullYear()} Annmariya Wilson.<br/>All Rights Reserved.</p>
            </div>
          </div>

          {/* Right Column: Navigation Links */}
          <div className="col-md-6">
            <div className="footer-nav-grid">
              <h4 className="footer-nav-title mb-4 text-center text-md-start">Quick Links</h4>
              <div className="footer-links-split">
                <div className="footer-links-col">
                  <a href="#about">About</a>
                  <a href="#summary">Summary</a>
                  <a href="#education">Education</a>
                  <a href="#skills">Skills</a>
                </div>
                <div className="footer-links-col">
                  <a href="#experience">Experience</a>
                  <a href="#projects">Projects</a>
                  <a href="#certifications">Certifications</a>
                  <a href="#contact">Contact</a>
                  <a href="https://www.linkedin.com/in/annmariya-wilson/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
