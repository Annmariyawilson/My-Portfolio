import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="skills-premium-section">
      <div className="skills-bg-glow"></div>
      
      {/* Particles Background for Skills */}
      <div id="particles-skills" className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="skills-header mb-5 text-center">
          <h2 className="section-title text-white" data-title="Skills">
            Core <span style={{ color: '#d4af37' }}>Competencies</span>
          </h2>
        </div>
        <div className="skills-grid animate animate-up">
          {/* Frontend Development */}
          <div className="skill-card-modern">
            <div className="skill-card-header">
              <h3>Frontend Development</h3>
            </div>
            <div className="skill-tags">
              <span>React.js</span> <span>Next.js</span> <span>Angular</span>
              <span>JavaScript (ES6+)</span> <span>Redux</span> <span>HTML5</span>
              <span>CSS3</span> <span>Bootstrap</span> <span>Tailwind CSS</span>
              <span>shadcn/ui</span>
            </div>
          </div>

          {/* Backend Development */}
          <div className="skill-card-modern">
            <div className="skill-card-header">
              <h3>Backend & Database</h3>
            </div>
            <div className="skill-tags">
              <span>Node.js</span> <span>Express.js</span> <span>RESTful APIs</span>
              <span>Authentication (JWT, RBAC)</span> <span>MongoDB</span>
              <span>Mongoose</span> <span>MySQL</span> <span>Supabase</span>
            </div>
          </div>

          {/* AI & Productivity Tools */}
          <div className="skill-card-modern">
            <div className="skill-card-header">
              <h3>AI & Productivity</h3>
            </div>
            <div className="skill-tags">
              <span>Antigravity</span> <span>Cursor</span> <span>Windruf</span>
              <span>Lovable</span> <span>Bolt</span> <span>TempAI</span>
              <span>Stitch</span> <span>Firebase Studio</span> <span>Notion AI</span>
              <span>ChatGPT</span>
            </div>
          </div>

          {/* Tools & Methodologies */}
          <div className="skill-card-modern">
            <div className="skill-card-header">
              <h3>Tools & Methodologies</h3>
            </div>
            <div className="skill-tags">
              <span>Git</span> <span>GitHub</span> <span>Bitbucket</span>
              <span>Postman</span> <span>Jira</span> <span>Slack</span>
              <span>Agile/Scrum</span>
            </div>
          </div>

          {/* Hosting & Deployment */}
          <div className="skill-card-modern">
            <div className="skill-card-header">
              <h3>Hosting & Deployment</h3>
            </div>
            <div className="skill-tags">
              <span>Vercel</span> <span>Render</span> <span>Netlify</span>
            </div>
          </div>

          {/* SEO & Performance */}
          <div className="skill-card-modern">
            <div className="skill-card-header">
              <h3>SEO & Performance</h3>
            </div>
            <div className="skill-tags">
              <span>On-page SEO</span> <span>Meta Tags</span> <span>Semantic HTML</span>
              <span>Lighthouse Audits</span> <span>Page Speed Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
