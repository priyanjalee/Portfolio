import './Certificates.css';

const certificates = [
  { id: 1, title: 'Foundations of Project Management', issuer: 'Google / Coursera', type: 'Project Management', icon: '🏆' },
  { id: 2, title: 'Project Initiation: Starting a Successful Project', issuer: 'Google / Coursera', type: 'Project Management', icon: '🚀' },
  { id: 3, title: 'An Introduction to JIRA Architecture', issuer: 'Alison', type: 'Tools', icon: '🎯' },
];

function Certificates() {
  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <p className="section-label">Continuous Learning</p>
        <h2 className="section-title">My <span>Certificates</span></h2>

        <div className="certs-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="cert-card card">
              <div className="cert-icon">{cert.icon}</div>
              <span className="tag cert-type">{cert.type}</span>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;