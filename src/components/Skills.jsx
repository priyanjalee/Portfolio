import './Skills.css';

const skillCategories = [
  { id: 1, category: 'Programming Languages', icon: '💻', skills: ['Python', 'Java', 'PHP', 'C', 'C#'] },
  { id: 2, category: 'Mobile Development',    icon: '📱', skills: ['Flutter', 'Dart', 'Kotlin'] },
  { id: 3, category: 'Web Development',       icon: '🌐', skills: ['HTML', 'CSS', 'RESTful APIs'] },
  { id: 4, category: 'Data & Analytics',      icon: '📊', skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Power BI', 'Jupyter Notebook', 'Google Colab'] },
  { id: 5, category: 'Databases',             icon: '🗄️', skills: ['MySQL', 'Firebase', 'Cloud Firestore'] },
  { id: 6, category: 'Project Management',    icon: '📋', skills: ['Agile', 'Waterfall', 'Kanban', 'Jira', 'Trello', 'Microsoft Project'] },
  { id: 7, category: 'Tools',                 icon: '🛠️', skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Firebase Console'] },
  { id: 8, category: 'Soft Skills',           icon: '🧠', skills: ['Leadership', 'Communication', 'Strategic Planning', 'Analytical Thinking'] },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-label">What I Know</p>
        <h2 className="section-title">Skills & <span>Technologies</span></h2>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="skill-category card">
              <div className="category-header">
                <span className="category-icon">{cat.icon}</span>
                <h3 className="category-name">{cat.category}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;