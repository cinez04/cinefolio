// src/components/Hero/Hero.jsx
import "./Hero.css";
import CONFIG from "../../data/config";
import profileImg from "../../assets/francine_pic.jpg";

export default function Hero() {
  const { name, tagline, school, projects, achievements, skills, tools } = CONFIG;

  return (
    <section className="hero" id="about">
      <div className="hero-text">
        <span className="hero-eyebrow">Portfolio</span>
        <h1 className="hero-name">
          {name || <span style={{ opacity: 0.35 }}>Your Name Here</span>}
        </h1>
        <p className="hero-tagline">{tagline}</p>
        <p className="hero-school">{school}</p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View Projects ↓</a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="avatar-frame">
          <img src={profileImg} alt="Profile" className="hero-avatar" />
        </div>
        
        <div className="stats-row">
          <div className="stat-chip">
            <span className="num">{projects.length}+</span>
            <span className="lbl">Projects</span>
          </div>
          <div className="stat-chip">
            <span className="num">{achievements.length}</span>
            <span className="lbl">Awards</span>
          </div>
          <div className="stat-chip">
            <span className="num">{skills.length + tools.length}+</span>
            <span className="lbl">Skills & Tools</span>
          </div>
        </div>
      </div>
    </section>
  );
}