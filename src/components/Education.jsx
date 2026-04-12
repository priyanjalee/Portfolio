import './Education.css';

const educationItems = [
  {
    id: 1,
    degree: 'BSc (Hons) Computer Science & Technology',
    institution: 'Sabaragamuwa University of Sri Lanka',
    period: '2022 – 2026 (Expected)',
    grade: 'CGPA: 3.2',
    description: 'Studying software engineering, data structures, algorithms, databases, and project management. Actively involved in university societies.',
    current: true,
  },
  {
    id: 2,
    degree: 'G.C.E Advanced Level – Physical Science Stream',
    institution: "St.Joseph's Balika Vidyalaya', Kegalle",
    period: '2020',
    grade: 'ICT – B | Combined Maths – C | Physics – S',
    description: 'Completed Advanced Level examinations in the Physical Science stream with a focus on ICT, Mathematics, and Physics.',
    current: false,
  },
];

function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <p className="section-label">Academic Background</p>
        <h2 className="section-title">My <span>Education</span></h2>

        <div className="timeline">
          {educationItems.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-degree">{item.degree}</h3>
                    <p className="timeline-institution">{item.institution}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className="tag">{item.period}</span>
                    {item.current && <span className="current-badge">Current</span>}
                  </div>
                </div>
                <p className="timeline-grade">{item.grade}</p>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;