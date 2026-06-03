import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="exp-premium-section">
      <div className="exp-bg-pattern"></div>
      <div className="container relative z-10">
        <div className="text-center mb-5">
          <div className="experience-badge-wrapper">
            <i className="fas fa-briefcase"></i>
            <span>Career Journey</span>
          </div>
          <h2 className="section-title text-white" data-title="Experience">
            Professional <span className="experience-title-accent">Experience</span>
          </h2>
        </div>
        
        <div className="row">
          {/* Left Column: Sticky Sidebar */}
          <div className="col-lg-4 mb-5">
            <div id="experience-list" className="list-group sticky-experience-menu shadow-lg">
              <a className="list-group-item list-group-item-action active" href="#exp-1">
                <h5 className="mb-1 fw-bold text-white">Junior Full Stack Developer</h5>
                <small className="exp-duration">08/2025 – present</small>
                <p className="mb-0 exp-company text-white-50">Think Forge Global LLP - Perintalmanna, Kerala</p>
              </a>
              <a className="list-group-item list-group-item-action" href="#exp-2">
                <h5 className="mb-1 fw-bold text-white">Web Developer Intern</h5>
                <small className="exp-duration">03/2025 – 08/2025</small>
                <p className="mb-0 exp-company text-white-50">Nexpression Pvt Ltd - Aluva, Ernakulam</p>
              </a>
              <a className="list-group-item list-group-item-action" href="#exp-3">
                <h5 className="mb-1 fw-bold text-white">Full Stack Developer</h5>
                <small className="exp-duration">02/2025 – 03/2025</small>
                <p className="mb-0 exp-company text-white-50">Freelance - Remote</p>
              </a>
            </div>
          </div>

          {/* Right Column: Scrollable Details */}
          <div className="col-lg-8">
            <div id="scroll-box-exp" data-bs-spy="scroll" data-bs-target="#experience-list" data-bs-smooth-scroll="true" className="scrollspy-example custom-scroll-box" tabIndex={0}>
              
              {/* Experience 1 Details */}
              <div id="exp-1" className="exp-detail-block mb-5 pb-5">
                <div className="d-flex align-items-center mb-4">
                  <div className="prem-icon-box-small me-3">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <h3 className="mb-0 text-white">Role Details & Contributions</h3>
                </div>

                <div className="project-highlight-wrapper">
                  <div className="main-project-box">
                    <div className="main-project-label">Main Project</div>
                    <div className="main-project-title">
                      <i className="fas fa-star"></i>
                      <strong>Zyvest Capital – Trading Platform</strong>
                    </div>
                  </div>
                  <div className="other-projects-box overflow-hidden" style={{ padding: '10px 15px' }}>
                    <div className="d-flex align-items-center me-3 flex-shrink-0" style={{ whiteSpace: 'nowrap' }}>
                      <i className="fas fa-layer-group me-2" style={{ color: '#d4af37', fontSize: '1.1rem' }}></i>
                      <span className="fw-bold text-white" style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}>Other projects I worked on:</span>
                    </div>
                    <div className="marquee-container">
                      <div className="marquee-content">
                        <span className="marquee-item">Salmara Ayurveda (Shopify)</span>
                        <span className="marquee-item">KALANGARA PAINT HOUSE</span>
                        <span className="marquee-item">chillmaster</span>
                        <span className="marquee-item">Ambition by frameforge</span>
                        <span className="marquee-item">student management system</span>
                        <span className="marquee-item">Salmara Ayurveda (Shopify)</span>
                        <span className="marquee-item">KALANGARA PAINT HOUSE</span>
                        <span className="marquee-item">chillmaster</span>
                        <span className="marquee-item">Ambition by frameforge</span>
                        <span className="marquee-item">student management system</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="prem-tech-stack mb-4">
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Tailwind CSS</span>
                  <span className="tech-tag">Bitbucket</span>
                  <span className="tech-tag">Jira</span>
                  <span className="tech-tag">Slack</span>
                  <span className="tech-tag">Agile/Scrum</span>
                  <span className="tech-tag">SEO</span>
                  <span className="tech-tag">shadcn/ui</span>
                  <span className="tech-tag">REST APIs</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Chart Libraries</span>
                </div>

                <ul className="prem-list text-light">
                  <li>Developed enterprise-grade SaaS trading platform supporting Admin, Employee, and User roles.</li>
                  <li>Built scalable dashboards with real-time financial analytics and performance tracking.</li>
                  <li>Integrated REST APIs for trading data, portfolio management, and dynamic updates.</li>
                  <li>Designed responsive, pixel-perfect UI using Next.js, Tailwind CSS, and modern UI libraries.</li>
                  <li>Improved application performance, SEO, and loading speed through optimization techniques.</li>
                  <li>Collaborated in Agile teams using Jira, Bitbucket, and Git workflows.</li>
                  <li>Accelerated development using AI tools, improving productivity and delivery timelines.</li>
                </ul>
              </div>

              {/* Experience 2 Details */}
              <div id="exp-2" className="exp-detail-block mb-5 pb-5">
                <div className="d-flex align-items-center mb-4">
                  <div className="prem-icon-box-small me-3">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <h3 className="mb-0 text-white">Role Details & Contributions</h3>
                </div>

                <div className="project-highlight-wrapper">
                  <div className="main-project-box">
                    <div className="main-project-label">Main Project</div>
                    <div className="main-project-title">
                      <i className="fas fa-star"></i>
                      <strong>Foodyko – E-commerce Platform</strong>
                    </div>
                  </div>
                </div>

                <div className="prem-tech-stack mb-4">
                  <span className="tech-tag">Angular</span>
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Bootstrap</span>
                  <span className="tech-tag">Tailwind CSS</span>
                  <span className="tech-tag">Git</span>
                  <span className="tech-tag">GitHub</span>
                  <span className="tech-tag">Postman</span>
                </div>

                <ul className="prem-list text-light">
                  <li>Developed a scalable full-stack e-commerce application using the MEAN stack.</li>
                  <li>Implemented secure authentication and authorization using JWT and role-based access control (RBAC).</li>
                  <li>Designed and built reusable Angular components to ensure modular and maintainable code.</li>
                  <li>Integrated RESTful APIs for real-time product management, cart updates, and order processing.</li>
                  <li>Optimized application performance, reducing load time and improving overall user experience.</li>
                  <li>Built fully responsive UI ensuring seamless functionality across mobile, tablet, and desktop devices.</li>
                </ul>
              </div>

              {/* Experience 3 Details */}
              <div id="exp-3" className="exp-detail-block mb-5">
                <div className="d-flex align-items-center mb-4">
                  <div className="prem-icon-box-small me-3">
                    <i className="fas fa-user-astronaut"></i>
                  </div>
                  <h3 className="mb-0 text-white">Role Details & Contributions</h3>
                </div>

                <div className="project-highlight-wrapper">
                  <div className="main-project-box">
                    <div className="main-project-label">Main Project</div>
                    <div className="main-project-title">
                      <i className="fas fa-star"></i>
                      <strong>College Management System</strong>
                    </div>
                  </div>
                </div>

                <ul className="prem-list text-light">
                  <li>Developed a full-stack College Management System with separate Admin and User interfaces.</li>
                  <li>Built secure authentication and role-based access for controlled system usage.</li>
                  <li>Implemented CRUD operations for managing students, faculty, courses, and records.</li>
                  <li>Designed responsive dashboards ensuring seamless experience across all devices.</li>
                  <li>Integrated REST APIs for efficient data handling and real-time updates.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
