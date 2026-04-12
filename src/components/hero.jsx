import './hero.css';
import profileImg from '../assets/profile.png'; 
function Hero() {
  return (
    <section id="home" className="hero">

      {/* Clean background — no grid dots, just subtle radial glows */}
      <div className="hero-bg" />

      <div className="container hero-content">

        {/* ── LEFT: Text ── */}
        <div className="hero-left">

          <div className="hero-badge fade-up">
            <span className="badge-dot" />
            Available for internships &amp; opportunities
          </div>

          <h1 className="hero-name fade-up">
            Priyanjalee
            <span>Bandara</span>
          </h1>

          <p className="hero-role fade-up">
            Software Engineering · Machine Learning · Data Analytics · Mobile Development · Project Management
          </p>

          <p className="hero-bio fade-up">
             Computer Science undergraduate seeking internship opportunities
            in Software Engineering, Project Management, Data Science, or AI/ML. Experienced in building
            full-stack mobile applications, machine learning pipelines, and managing
            agile software projects end-to-end. Passionate about creating scalable,
            data-driven solutions that deliver real-world impact.
          </p>

          <div className="hero-actions fade-up">
            
            <a href="#projects" className="btn btn-primary">
              View Projects
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
          <a href="public/W.K.C.P.Bandara_all( Resume).pdf" download="Priyanjalee_Bandara_CV.pdf" className="btn-cv">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
  Download CV
</a>

          <div className="hero-socials fade-up">
            <a href="https://www.linkedin.com/in/priyanjalee-bandara-878536269/" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* ── RIGHT: Photo — clean professional ── */}
        <div className="hero-right">
          <div className="profile-frame">

            {/* Subtle glow under photo */}
            <div className="profile-glow" />

            {/* Thin left accent line */}
            <div className="profile-line" />

          

            {/* Photo — just the image, no heavy borders or rings */}
            <img
              src={profileImg}
              alt="Priyanjalee Bandara"
              className="profile-photo"
            />

            {/* Floating status badge */}
            <div className="profile-badge">
              <span className="profile-badge-dot" />
              Open to Internships
            </div>

          </div>
        </div>

      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot" />
      </div>
    </section>
  );
}

export default Hero;