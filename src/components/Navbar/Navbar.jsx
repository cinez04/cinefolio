// src/components/Navbar/Navbar.jsx
import { useState } from "react";
import "./Navbar.css";
import CONFIG from "../../data/config";
import logo from "../../assets/new_cinetivity-01.png";

export default function Navbar() {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">
            <img 
              src={logo} 
              alt={`${CONFIG.nickname} logo`} 
              className="logo-img" 
            />
          </a>
        </div>
        <ul className="navbar-links">
          {["About", "Experience", "Projects", "Achievements", "Contact"].map((link) => (
            <li key={link}>
              <a href={`/#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
          <li>
            <button onClick={() => setShowResume(true)} className="resume-btn">Resume</button>
          </li>
        </ul>
      </nav>

      {showResume && (
        <div className="resume-modal-overlay" onClick={() => setShowResume(false)}>
          <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-header">
              <h3>Resume</h3>
              <div className="modal-actions">
                <a href={CONFIG.resume_url} download className="download-btn">Download PDF</a>
                <button className="close-btn" onClick={() => setShowResume(false)}>✕</button>
              </div>
            </div>
            <div className="resume-viewer">
              <iframe 
                src={`${CONFIG.resume_url}#toolbar=0`} 
                title="Resume Viewer"
                width="100%" 
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
