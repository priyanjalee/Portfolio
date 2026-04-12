import './Footer.css';

const quickLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Education',  href: '#education' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
];

const specializations = [
  { icon: '⚙️', label: 'Software Engineering' },
  { icon: '📊', label: 'Data Analysis' },
  { icon: '🤖', label: 'ML / AI' },
  { icon: '📱', label: 'Mobile Development' },
  { icon: '🗂️', label: 'Project Management' },
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">

        {/* Brand column */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">PB<span>.</span></a>
          <p className="footer-tagline">
            Building intelligent, scalable digital experiences — from web to mobile to AI.
          </p>
          <ul className="footer-specs">
            {specializations.map((s) => (
              <li key={s.label} className="footer-spec-item">
                <span className="footer-spec-icon">{s.icon}</span>
                {s.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <nav className="footer-links">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="footer-link">
                <span className="footer-link-arrow">→</span> {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Connect column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Connect</h4>
          <div className="footer-socials">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/priyanjalee-bandara-878536269/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </a>

            {/* Email */}
            <a
              href="mailto:priyanjalee@gmail.com"
              className="footer-social-btn"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
              Email Me
            </a>
          </div>

          <div className="footer-availability">
            <span className="footer-avail-dot" />
            Available for opportunities
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} Priyanjalee Bandara. All rights reserved.</p>
          <p className="footer-bottom-right">Designed & Built with ♥</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;