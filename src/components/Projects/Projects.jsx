// src/components/Projects/Projects.jsx
import "./Projects.css";
import CONFIG from "../../data/config";
import { Link } from "react-router-dom";

export default function Projects() {
  const { projects } = CONFIG;

  return (
    <section className="section" id="projects">
      <div className="section-label">
        <div className="dot" />
        <h2>Projects</h2>
        <div className="line" />
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          /* Use Link as the main container for the card */
          <Link to={`/project/${i}`} className="project-card" key={i}>
            <div className="project-img">
              {p.image ? (
                <img src={p.image} alt={p.title} />
              ) : (
                <span className="project-emoji">{p.emoji || "🖥️"}</span>
              )}
            </div>
            
            <div className="project-body">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t, j) => (
                  <span key={j} className="project-tag">{t}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}