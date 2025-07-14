import React, { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

function Projects() {
  const [showPopup, setShowPopup] = useState(false);

  const handleCodeClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="clean-text" style={{ width: '100%', maxWidth: 900, margin: '0 auto' }}>
      <h1>Projects</h1>
      <p style={{ color: '#7b2ff2', fontSize: '1.1rem' }}>Explore my work below!</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
        {projects.map(project => (
          <div key={project.id} style={{
            background: '#fff',
            border: '1.5px solid #e0d7f8',
            borderRadius: 16,
            boxShadow: '0 2px 16px #e0d7f8',
            padding: '1.5rem',
            width: 320,
            textAlign: 'left',
            transition: 'transform 0.2s',
            position: 'relative',
          }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: 10, marginBottom: 12, border: '1px solid #a18cd1', background: '#f8f6fc' }} />
            <h2 style={{ color: '#7b2ff2', margin: '0 0 0.5rem 0', fontFamily: 'Inter' }}>{project.title}</h2>
            {/* Description hidden on card */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
              <a href="#" onClick={handleCodeClick} style={{ color: '#7b2ff2', textDecoration: 'underline', cursor: 'pointer' }}>Code</a>
              <a href={`https://www.youtube.com/watch?v=${project.video.split('/embed/')[1]}`} target="_blank" rel="noopener noreferrer" style={{ color: '#7b2ff2', textDecoration: 'underline' }}>Demo</a>
              <Link to={`/projects/${project.id}`} style={{ color: '#7b2ff2', textDecoration: 'underline' }}>Details</Link>
            </div>
            {project.video && (
              <div style={{ marginTop: 12 }}>
                <iframe width="100%" height="180" src={project.video} title={project.title + ' video'} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ borderRadius: 8, border: '1px solid #a18cd1' }}></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          <div style={{ background: '#fff', padding: '2rem 2.5rem', borderRadius: 16, boxShadow: '0 2px 16px #e0d7f8', textAlign: 'center', maxWidth: 350 }}>
            <h2 style={{ color: '#7b2ff2', marginBottom: 16 }}>Request Access</h2>
            <p style={{ color: '#4b2067', fontSize: '1.1rem', marginBottom: 24 }}>
              Please send an email to <b>ash1912shrV@gmail.com</b> to request the GitHub repo link for this project.
            </p>
            <button onClick={() => setShowPopup(false)} style={{ background: '#7b2ff2', color: '#fff', border: 'none', borderRadius: 8, padding: '0.7rem 1.5rem', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects; 