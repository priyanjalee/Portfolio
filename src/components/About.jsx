import './About.css';

const stats = [

  { value: '4+',   label: 'Projects Built' },
  { value: '2026', label: 'Expected Grad' },
  { value: '3+',   label: 'Certifications' },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <p className="section-label">Who I Am</p>
        <h2 className="section-title">About <span>Me</span></h2>

        <div className="about-grid">
          <div className="about-text">
            <p>I'm a Computer Science & Technology undergraduate at Sabaragamuwa University of Sri Lanka, passionate about bridging the gap between software engineering and effective project management.</p>
            <p>My work spans mobile app development, machine learning systems, and agile project workflows. I enjoy turning complex problems into clean, working solutions.</p>
            <p>Outside academics, I serve as Secretary of the Society of Technological Studies at SUSL, helping organize tech events and connect fellow students with opportunities.</p>
            <div className="about-tags">
              <span className="tag">📍 Kegalle, Sri Lanka</span>
              <span className="tag">🎓 BSc Computer Science</span>
              <span className="tag">✅ Open to Internships</span>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;