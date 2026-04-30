// src/components/Projects/ProjectDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CONFIG from "../../data/config";
import "./ProjectDetail.css";

const ImageViewer = ({ src, onClose }) => {
  const [zoom, setZoom] = useState(1);
  
  const handleWheel = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      setZoom(prev => Math.min(Math.max(prev + (e.deltaY < 0 ? 0.1 : -0.1), 1), 3));
    }
  };

  return (
    <div className="image-viewer-overlay" onClick={onClose} onWheel={handleWheel}>
      <div className="viewer-content" onClick={(e) => e.stopPropagation()}>
        <div className="viewer-toolbar">
          <div className="zoom-group">
            <button onClick={() => setZoom(prev => Math.max(prev - 0.2, 1))}>-</button>
            <span>{Math.round(zoom * 100)}%</span>
            <button onClick={() => setZoom(prev => Math.min(prev + 0.2, 3))}>+</button>
          </div>
          <button className="viewer-close-inline" onClick={onClose}>✕</button>
        </div>
        <div className="image-frame">
          <img 
            src={src} 
            alt="Zoomed" 
            style={{ transform: `scale(${zoom})` }}
            className="zoomable-image"
          />
        </div>
        <p className="viewer-hint">Ctrl + Scroll to zoom</p>
      </div>
    </div>
  );
};

export default function ProjectDetail() {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState(null);
  const projectId = parseInt(id);
  const project = CONFIG.projects[projectId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div>Project not found</div>;

  const totalProjects = CONFIG.projects.length;
  const prevId = (projectId - 1 + totalProjects) % totalProjects;
  const nextId = (projectId + 1) % totalProjects;

  const renderGallery = () => {
    switch(project.type) {
      case 'logos':
        return (
          <div className="logofolio-grid">
            {project.images.map((img, i) => (
              <div key={i} className="logo-item-box">
                <img src={img} alt={`Logo ${i}`} onClick={() => setSelectedImg(img)} className="clickable-img" />
              </div>
            ))}
          </div>
        );
      case 'posters':
        return (
          <div className="posters-grid">
            {project.images.map((img, i) => (
              <img key={i} src={img} alt={`Poster ${i}`} onClick={() => setSelectedImg(img)} className="clickable-img poster-item" />
            ))}
          </div>
        );
      case 'egd':
        return (
          <div className="egd-gallery-refined">
            {project.pairs.map((pair, i) => (
              <div key={i} className="egd-pair-refined">
                <div className="image-container">
                  <img src={pair.layout} alt="Layout" onClick={() => setSelectedImg(pair.layout)} className="clickable-img" />
                  <span className="image-label">Layout</span>
                </div>
                <div className="image-container">
                  <img src={pair.mockup} alt="Mockup" onClick={() => setSelectedImg(pair.mockup)} className="clickable-img" />
                  <span className="image-label">Mockup</span>
                </div>
              </div>
            ))}
          </div>
        );
      case 'layout-mockup':
        return (
          <div className="layout-mockup-gallery-refined">
            {project.items.map((item, i) => (
              <div key={i} className="gallery-item-refined">
                <div className="side-by-side-refined">
                  <div className="image-container">
                    <img src={item.layout} alt="Layout" onClick={() => setSelectedImg(item.layout)} className="clickable-img" />
                    <span className="image-label">Technical Layout</span>
                  </div>
                  {item.mockup && (
                    <div className="image-container">
                      <img src={item.mockup} alt="Mockup" onClick={() => setSelectedImg(item.mockup)} className="clickable-img" />
                      <span className="image-label">Final Mockup</span>
                    </div>
                  )}
                  {item.mockups && item.mockups.map((m, j) => (
                    <div key={j} className="image-container">
                      <img src={m} alt="Mockup" onClick={() => setSelectedImg(m)} className="clickable-img" />
                      <span className="image-label">Mockup {j+1}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case 'oasis':
        return (
          <div className="oasis-specific">
            {project.palette_typo && (
              <div className="palette-section">
                <h3 className="section-subtitle">Palette & Typography</h3>
                <img src={project.palette_typo} alt="Palette" onClick={() => setSelectedImg(project.palette_typo)} className="full-width-img clickable-img" />
              </div>
            )}
            {project.details.map((d, i) => (
              <div key={i} className="detail-block">
                <h3 className="section-subtitle">{d.title}</h3>
                {d.text && <p className="detail-text">{d.text}</p>}
                {d.image && <img src={d.image} alt={d.title} onClick={() => setSelectedImg(d.image)} className="detail-img clickable-img" />}
                {d.images && (
                  <div className="detail-grid-refined">
                    {d.images.map((img, j) => (
                      <img key={j} src={img} alt="Gallery" onClick={() => setSelectedImg(img)} className="clickable-img" />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="project-detail-layout blue-theme">
      <aside className="project-sidebar">
        <div className="sidebar-top">
          <h1 className="project-main-title">{project.title}</h1>
          <div className="project-meta">
            <div className="meta-row"><span className="meta-label">Client</span><span className="meta-value">{project.client}</span></div>
            <div className="meta-row"><span className="meta-label">Year</span><span className="meta-value">{project.year}</span></div>
            <div className="meta-row"><span className="meta-label">Services</span><span className="meta-value">{project.services}</span></div>
          </div>
        </div>

        <nav className="project-nav-sticky">
          <Link to={`/project/${prevId}`} className="nav-link">Prev</Link>
          <Link to="/" className="nav-link home">Back Home</Link>
          <Link to={`/project/${nextId}`} className="nav-link">Next</Link>
        </nav>
      </aside>

      <main className="project-content">
        <div className="content-scroll-wrapper">
          {/* Narratives Section - Horizontal Step Flow */}
          {project.type !== 'logos' && (
            <div className="narrative-horizontal-flow">
              <div className="narrative-step">
                <h3 className="narrative-title">The Brief</h3>
                <p className="narrative-text">{project.brief}</p>
              </div>
              <div className="flow-arrow">→</div>
              <div className="narrative-step">
                <h3 className="narrative-title">The Process</h3>
                <p className="narrative-text">{project.process}</p>
              </div>
              <div className="flow-arrow">→</div>
              <div className="narrative-step">
                <h3 className="narrative-title">Execution</h3>
                <p className="narrative-text">{project.result}</p>
              </div>
            </div>
          )}

          <div className="gallery-section">
            {renderGallery()}
          </div>
        </div>
      </main>

      {selectedImg && <ImageViewer src={selectedImg} onClose={() => setSelectedImg(null)} />}
    </div>
  );
}
