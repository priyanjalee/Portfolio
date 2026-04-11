import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'LankaCater',
    subtitle: 'Location & Event-Based Catering Service Finder',
    description: 'A mobile application that connects users with catering services based on location and event type. Features smart filtering, detailed profiles, and real-time booking.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Google Maps API', 'Figma'],
    status: 'Completed',
    statusColor: 'green',
    emoji: '🍽️',
    github: 'https://github.com',
  },
  {
    id: 2,
    title: 'Movie Recommendation System',
    subtitle: 'Machine Learning – Content-Based Filtering',
    description: 'A recommendation engine that suggests movies based on user preferences using TF-IDF vectorization and cosine similarity, with live TMDB API data.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'TMDB API', 'Jupyter Notebook'],
    status: 'Completed',
    statusColor: 'green',
    emoji: '🎬',
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'LankaCater Jira Dashboard',
    subtitle: 'Agile Project Management',
    description: 'End-to-end project management of LankaCater using Jira — organized sprints across planning, development, and testing phases using Kanban.',
    technologies: ['Jira', 'Agile', 'Kanban', 'Sprint Planning'],
    status: 'Completed',
    statusColor: 'green',
    emoji: '📋',
    github: 'https://github.com',
  },
  {
    id: 4,
    title: 'Real-Time IT Risk Predictor',
    subtitle: 'Streaming Machine Learning – Ongoing',
    description: 'A real-time system that analyzes Jira issues, commits, and sprint metrics to detect emerging project risks using adaptive streaming ML with drift detection.',
    technologies: ['Python', 'River', 'MOA', 'CapyMOA', 'Matplotlib', 'Seaborn'],
    status: 'In Progress',
    statusColor: 'amber',
    emoji: '⚡',
    github: 'https://github.com',
  },
  {
    id: 5,
    title: 'Personal Portfolio Website',
    subtitle: 'Frontend Development · React & Vite',
    description:
      'Designed and developed a fully responsive personal portfolio website from scratch using React 19 and Vite. Features a dark elegant theme with gold accents, smooth scroll navigation, mobile hamburger menu, animated hero section, and organized sections for projects, skills, education, and experience. Built without any UI libraries — all components and styles hand-coded.',
    technologies: ['React 19', 'Vite', 'CSS3', 'JavaScript', 'Responsive Design', 'Figma'],
    status: 'Completed',
    statusColor: 'green',
    emoji: '🌐',
    github: 'https://github.com',        // ← replace with your actual GitHub repo link
    live: 'https://yourportfolio.com',   // ← replace with your live URL when deployed
  },
];

const statusClass = { green: 'badge-green', amber: 'badge-amber' };

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">My <span>Projects</span></h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card card">
              <div className="project-top">
                <span className="project-emoji">{project.emoji}</span>
                <span className={`project-status ${statusClass[project.statusColor]}`}>
                  {project.status}
                </span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;