"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate parallax offsets
  const bgTextOffsetX = mousePos.x * -30; // Background moves opposite to mouse
  const bgTextOffsetY = mousePos.y * -20;
  
  const fgImageOffsetX = mousePos.x * 20; // Foreground moves with mouse
  const fgImageOffsetY = mousePos.y * 15;

  return (
    <section id="about" className="editorial-hero">
      
      {/* Giant Background Typography (Parallax) */}
      <div 
        className="editorial-giant-text"
        style={{ transform: `translate(${bgTextOffsetX}px, ${bgTextOffsetY}px)` }}
      >
        <div className="giant-line giant-line-1">FULL STACK</div>
        <div className="giant-line giant-line-2">DEVELOPER</div>
      </div>

      {/* Main Hero Container */}
      <div className="editorial-container relative">
        
        {/* Top Left Greeting */}
        <div className="editorial-greeting">
          <span className="editorial-hello">HELLO! ✌️</span>
          <br />
          <span className="editorial-name">I&apos;M ANNMARIYA</span>
        </div>

        {/* Right Side Bio */}
        <div className="editorial-bio">
          <p>
            I HAVE EXPERIENCE IN FULL-STACK WEB DEVELOPMENT<br />
            I CREATE FUNCTIONAL & SCALABLE DIGITAL EXPERIENCES.
          </p>
          <div className="editorial-social mt-3">
            <a href="https://github.com/Annmariyawilson" target="_blank" rel="noreferrer">GITHUB</a> | 
            <a href="https://www.linkedin.com/in/annmariya-wilson" target="_blank" rel="noreferrer"> LINKEDIN</a> | 
            <a href="https://www.instagram.com/annmariyawilson_/" target="_blank" rel="noreferrer"> INSTAGRAM</a>
          </div>
        </div>


        {/* Rotating Badge */}
        <a href="/image/Annmariya_Wilson.pdf" download className="editorial-badge">
          <div className="rotating-text">
            {/* Creates a circular text effect using SVG */}
            <svg viewBox="0 0 100 100" width="120" height="120">
              <defs>
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text fontSize="11" fontWeight="bold" letterSpacing="1.5" fill="var(--pure-white)">
                <textPath href="#circlePath" startOffset="0%">
                  DOWNLOAD MY RESUME • DOWNLOAD MY RESUME • 
                </textPath>
              </text>
            </svg>
          </div>
          <div className="badge-center-icon">
            <i className="fas fa-arrow-down"></i>
          </div>
        </a>

        {/* Foreground Image (Parallax) */}
        <div 
          className="editorial-image-wrapper"
          style={{ transform: `translate(${fgImageOffsetX}px, ${fgImageOffsetY}px)` }}
        >
          <Image 
            src="/image/professional.png" 
            alt="Annmariya Wilson" 
            width={700} 
            height={900} 
            className="editorial-main-image"
            priority 
          />
        </div>

      </div>

      {/* Scrolling Marquee Section */}
      <div className="editorial-marquee-wrapper">
        <div className="editorial-marquee">
          <div className="marquee-content">
            FRONTEND <span className="marquee-star">✦</span> 
            REACT DEVELOPER <span className="marquee-star">✦</span> 
            BACKEND DEVELOPER <span className="marquee-star">✦</span> 
            FULL STACK DEVELOPER <span className="marquee-star">✦</span> 
            AI DEVELOPER <span className="marquee-star">✦</span> 
            ANTIGRAVITY <span className="marquee-star">✦</span> 
            CURSOR <span className="marquee-star">✦</span>
          </div>
          <div className="marquee-content" aria-hidden="true">
            FRONTEND <span className="marquee-star">✦</span> 
            REACT DEVELOPER <span className="marquee-star">✦</span> 
            BACKEND DEVELOPER <span className="marquee-star">✦</span> 
            FULL STACK DEVELOPER <span className="marquee-star">✦</span> 
            AI DEVELOPER <span className="marquee-star">✦</span> 
            ANTIGRAVITY <span className="marquee-star">✦</span> 
            CURSOR <span className="marquee-star">✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
