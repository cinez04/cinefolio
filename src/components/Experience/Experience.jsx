// src/components/Experience/Experience.jsx
import "./Experience.css";
import CONFIG from "../../data/config";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function Experience() {
  const { revealProps } = useScrollReveal();
  const { experiences, leadership, skills, tools } = CONFIG;

  // Combine experiences and leadership for the scroll
  const allHistory = [
    ...experiences.map(e => ({ ...e, type: 'Professional' })),
    ...leadership.map(l => ({ ...l, company: l.org, type: 'Leadership' }))
  ];

  return (
    <section className="section section-alt" id="experience">
      <div className="section-label">
        <div className="dot blue-dot" />
        <h2>Professional Journey</h2>
        <div className="line" />
      </div>

      {/* Curved Horizontal Scroll */}
      <div className="scroll-wrapper">
        <div className="experience-scroll">
          {allHistory.map((item, i) => (
            <div key={i} className="exp-card-curved" {...revealProps(`exp-scroll-${i}`, i * 100)}>
              <div className="card-top-curve" />
              <div className="card-content">
                <span className="card-type-tag">{item.type}</span>
                <h3 className="card-company">{item.company}</h3>
                <p className="card-role">{item.role}</p>
                <span className="card-period">{item.period}</span>
                <ul className="card-points">
                  {item.points.slice(0, 3).map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="card-bottom-curve" />
            </div>
          ))}
        </div>
      </div>

      {/* Side-by-Side Skills & Tools */}
      <div className="skills-tools-container">
        <div className="skills-side">
          <div className="section-label mini">
            <div className="dot blue-dot" />
            <h3>Core Skills</h3>
          </div>
          <div className="skills-flex">
            {skills.map((s, i) => (
              <span key={i} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>

        <div className="tools-side">
          <div className="section-label mini">
            <div className="dot blue-dot" />
            <h3>Design Tools</h3>
          </div>
          <div className="tools-grid-mini">
            {tools.map((t, i) => (
              <div key={i} className="tool-item-mini" title={t.name}>
                <img src={t.icon} alt={t.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
