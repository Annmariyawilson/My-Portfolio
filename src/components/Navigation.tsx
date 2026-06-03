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
          </ul>
        </div>
      </div>
    </nav>
  );
}
