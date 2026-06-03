"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowProjects(true);
      }, 3500); // 3.5 seconds loader animation
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].clientWidth;
      carouselRef.current.scrollBy({ left: -(cardWidth + 30), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = container.children[0].clientWidth;
      
      // Check if we're at the end
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        // Smoothly scroll back to the beginning
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth + 30, behavior: 'smooth' });
      }
    }
  };

  // Auto-scroll logic
  useEffect(() => {
    if (!showProjects) return; // Only auto-scroll when projects are visible
    const interval = setInterval(() => {
      scrollRight();
    }, 3000);

    return () => clearInterval(interval);
  }, [showProjects]);

  return (
    <section id="projects" ref={sectionRef} style={{ minHeight: '60vh' }}>
      <div className="container position-relative">
        
        {!showProjects ? (
          isVisible && (
            <div className="projects-intro-loader">
              <h2 className="intro-text">
                <span className="intro-line intro-line-1">Some of my works...</span><br/>
                <span className="intro-line intro-line-2">Take a look</span>
              </h2>
              <div className="progress-container">
                <div className="progress-fill"></div>
              </div>
            </div>
          )
        ) : (
          <div className="projects-content fade-in-up">
            <h2 className="section-title">Projects</h2>
            
            {/* Custom Carousel Controls */}
        <div className="carousel-controls">
          <button className="carousel-btn prev-btn" onClick={scrollLeft} aria-label="Previous Project">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-btn next-btn" onClick={scrollRight} aria-label="Next Project">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="carousel-wrapper">
          <div className="projects-carousel" ref={carouselRef}>
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-img-wrapper">
                <Image
                  src="/image/kph.png"
                  alt="KALANGARA PAINT HOUSE (KPH) WEBSITE"
                  className="project-img"
                  width={600}
                  height={400}
                />
            </div>
            <div className="project-body">
              <h5 className="project-title">KALANGARA PAINT HOUSE (KPH) WEBSITE</h5>
              <div className="project-tech">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Supabase</span>
              </div>
              <p className="card-text">
                Full-stack business website with admin dashboard, WhatsApp enquiry integration, image-to-PDF conversion, and Supabase storage.
              </p>
              <a
                href="https://www.kalangarapaints.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
                >View Project</a
              >
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-img-wrapper">
                <Image
                  src="/image/college_new.png"
                  alt="College Management System"
                  className="project-img"
                  width={600}
                  height={400}
                />
            </div>
            <div className="project-body">
              <h5 className="project-title">College Management System</h5>
              <div className="project-tech">
                <span className="tech-badge">Angular</span>
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">Express</span>
                <span className="tech-badge">Node.js</span>
              </div>
              <p className="card-text">
                A complete MEAN stack platform enabling admin control, student
                data tracking, and course management.
              </p>
              <a
                href="https://holycrosscollege.co.in/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
                >View Project</a
              >
            </div>
          </div>

          {/* Project 3: Chillmaster UAE */}
          <div className="project-card">
            <div className="project-img-wrapper">
                <Image
                  src="/image/chillmaster_uae.png"
                  alt="Chillmaster UAE"
                  className="project-img"
                  width={600}
                  height={400}
                />
            </div>
            <div className="project-body">
              <h5 className="project-title">Chillmaster UAE</h5>
              <div className="project-tech">
                <span className="tech-badge">Next.js</span>
                <span className="tech-badge">Tailwind CSS</span>
              </div>
              <p className="card-text">
                Modern business website for an AC and refrigeration company with a sleek and responsive design.
              </p>
              <a
                href="https://www.chillmasteruae.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
                >View Project</a
              >
            </div>
          </div>

          {/* Project 4: Salmara Ayurveda */}
          <div className="project-card">
            <div className="project-img-wrapper">
                <Image
                  src="/image/salmara_ayurveda.png"
                  alt="Salmara Ayurveda"
                  className="project-img"
                  width={600}
                  height={400}
                />
            </div>
            <div className="project-body">
              <h5 className="project-title">Salmara Ayurveda</h5>
              <div className="project-tech">
                <span className="tech-badge">Shopify</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Express</span>
                <span className="tech-badge">Supabase</span>
              </div>
              <p className="card-text">
                Luxurious ayurveda e-commerce website with a custom backend and database integration.
              </p>
              <a
                href="https://salmaraayurveda.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
                >View Project</a
              >
            </div>
          </div>

          {/* Project 5: REST Countries Explorer */}
          <div className="project-card">
            <div className="project-img-wrapper">
                <Image
                  src="/image/country_new.png"
                  alt="REST Countries Explorer"
                  className="project-img"
                  width={600}
                  height={400}
                />
            </div>
            <div className="project-body">
              <h5 className="project-title">REST Countries Explorer</h5>
              <div className="project-tech">
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">API</span>
                <span className="tech-badge">Bootstrap</span>
              </div>
              <p className="card-text">
                Interactive app displaying country data with flags, population,
                and region details via REST API.
              </p>
              <a
                href="https://annmariyawilson.github.io/Api/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
                >View Project</a
              >
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-card">
            <div className="project-img-wrapper">
                <Image
                  src="/image/trade.jpg"
                  alt="Trade Learners UI"
                  className="project-img"
                  width={600}
                  height={400}
                />
            </div>
            <div className="project-body">
              <h5 className="project-title">Trade Learners UI</h5>
              <div className="project-tech">
                <span className="tech-badge">Angular</span>
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">CSS</span>
              </div>
              <p className="card-text">
                Responsive single-page design for a trading education website
                built with Angular.
              </p>
              <a
                href="https://trade-learners.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
                >View Project</a
              >
            </div>
          </div>

          {/* Project 6 */}
          <div className="project-card">
            <div className="project-img-wrapper">
                <Image
                  src="/image/chocomint.png"
                  alt="ChocoMint E-Commerce Platform"
                  className="project-img"
                  width={600}
                  height={400}
                />
            </div>
            <div className="project-body">
              <h5 className="project-title">ChocoMint E-Commerce Platform</h5>
              <div className="project-tech">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">WhatsApp API</span>
              </div>
              <p className="card-text">
                E-commerce platform with admin dashboard, product management, analytics, and WhatsApp-based ordering system.
              </p>
              <a
                href="https://choco-mint.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
                >View Project</a
              >
            </div>
          </div>

          {/* Project 7 */}
          <div className="project-card">
            <div className="project-img-wrapper">
                <Image
                  src="/image/truenews.png"
                  alt="True News Admin Dashboard"
                  className="project-img"
                  width={600}
                  height={400}
                />
            </div>
            <div className="project-body">
              <h5 className="project-title">True News Admin Dashboard</h5>
              <div className="project-tech">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">MongoDB</span>
              </div>
              <p className="card-text">
                News management system with full CRUD operations, ad management, category filtering, and analytics dashboard.
              </p>
              <a
                href="https://true-news-kappa.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
                >View Project</a
              >
            </div>
          </div>

          {/* Project 8 */}
          <div className="project-card">
            <div className="project-img-wrapper">
                <Image
                  src="/image/phoenix.png"
                  alt="Phoenix Architecture Website"
                  className="project-img"
                  width={600}
                  height={400}
                />
            </div>
            <div className="project-body">
              <h5 className="project-title">Phoenix Architecture Website</h5>
              <div className="project-tech">
                <span className="tech-badge">React</span>
                <span className="tech-badge">CSS</span>
              </div>
              <p className="card-text">
                Modern single-page architecture portfolio website with smooth UI, responsive design, and project showcase.
              </p>
              <a
                href="https://phoenix-nine-alpha.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
                >View Project</a
              >
            </div>
          </div>

          {/* Project 9 */}
          <div className="project-card">
            <div className="project-img-wrapper">
                <Image
                  src="/image/amilas.png"
                  alt="Amilas Masala Paste Website"
                  className="project-img"
                  width={600}
                  height={400}
                />
            </div>
            <div className="project-body">
              <h5 className="project-title">Amilas Masala Paste Website</h5>
              <div className="project-tech">
                <span className="tech-badge">React</span>
                <span className="tech-badge">WhatsApp Integration</span>
              </div>
              <p className="card-text">
                Product-based website with WhatsApp ordering, showcasing premium masala pastes, recipes, and brand storytelling.
              </p>
              <a
                href="https://amilas-masala-paste.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
                >View Project</a
              >
            </div>
          </div>

          {/* Project 10 */}
          <div className="project-card">
            <div className="project-img-wrapper">
                <Image
                  src="/image/securityspy.png"
                  alt="Security Spy Website"
                  className="project-img"
                  width={600}
                  height={400}
                />
            </div>
            <div className="project-body">
              <h5 className="project-title">Security Spy Website</h5>
              <div className="project-tech">
                <span className="tech-badge">React</span>
                <span className="tech-badge">UI/UX</span>
              </div>
              <p className="card-text">
                Premium security services website with modern UI, service highlights, and consultation features.
              </p>
              <a
                href="https://security-spy.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
                >View Project</a
              >
            </div>
          </div>

          {/* Project 11 */}
          <div className="project-card">
            <div className="project-img-wrapper">
                <Image
                  src="/image/ararchitect.png"
                  alt="AR Architect & Interior Website"
                  className="project-img"
                  width={600}
                  height={400}
                />
            </div>
            <div className="project-body">
              <h5 className="project-title">AR Architect & Interior Website</h5>
              <div className="project-tech">
                <span className="tech-badge">React</span>
                <span className="tech-badge">UI/UX</span>
                <span className="tech-badge">Responsive Design</span>
              </div>
              <p className="card-text">
                Luxury architecture and interior design website with portfolio, services, WhatsApp enquiry system, and premium user experience.
              </p>
              <a
                href="https://ararchitectsin.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
                >View Project</a
              >
            </div>
            </div>
          </div>
        </div>
        </div>
        )}
      </div>
    </section>
  );
}
