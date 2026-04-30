// src/components/Achievements/Achievements.jsx
import "./Achievements.css";
import CONFIG from "../../data/config";

export default function Achievements() {
  const { achievements } = CONFIG;

  return (
    <section className="section section-alt" id="achievements">
      <div className="section-label">
        <div className="dot" />
        <h2>Achievements</h2>
        <div className="line" />
      </div>

      <div className="ach-grid">
        {achievements.map((a, i) => (
          <div className="ach-card" key={i}>
            <span className="ach-icon">{a.icon}</span>
            <div className="ach-title">{a.title}</div>
            <div className="ach-org">{a.org}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
