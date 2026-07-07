"use client";
import React, { useState, useEffect } from 'react';

export default function Navigation() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const closeMenu = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const toggler = document.querySelector('.navbar-toggler') as HTMLElement;
      if (toggler) toggler.click();
    }
  };

  return (
    <nav 
      className={`navbar navbar-expand-lg navbar-dark`}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        backgroundColor: lastScrollY > 50 ? 'rgba(11, 26, 21, 0.95)' : 'transparent',
      }}
    >
      <div className="container">

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item"><a className="nav-link" href="#about" onClick={closeMenu}>About</a></li>
            <li className="nav-item"><a className="nav-link" href="#summary" onClick={closeMenu}>Summary</a></li>
            <li className="nav-item"><a className="nav-link" href="#education" onClick={closeMenu}>Education</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills" onClick={closeMenu}>Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience" onClick={closeMenu}>Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects" onClick={closeMenu}>Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#certifications" onClick={closeMenu}>Certifications</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact" onClick={closeMenu}>Contact</a></li>
            <li className="nav-item">
              <a 
                className="nav-link linkedin-link" 
                href="https://www.linkedin.com/in/annmariya-wilson/" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={closeMenu}
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
