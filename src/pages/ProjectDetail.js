import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div className="clean-text">Project not found.</div>;
  }

  const handleCodeClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div style={{
      maxWidth: 900,
      margin: '3rem auto',
      background: 'linear-gradient(135deg, #fbc2eb 0%, #a18cd1 100%)',
      borderRadius: 24,
      boxShadow: '0 4px 32px #e0d7f8',
      padding: '2.5rem',
      color: '#4b2067',
      fontFamily: 'Inter',
      position: 'relative'
    }}>
      {/* Top Left Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          position: 'absolute',
          top: 24,
          left: 24,
          background: '#fff',
          color: '#7b2ff2',
          border: 'none',
          borderRadius: 8,
          padding: '0.5rem 1.2rem',
          fontWeight: 'bold',
          fontSize: '1rem',
          cursor: 'pointer',
          boxShadow: '0 2px 8px #e0d7f8',
          transition: 'background 0.2s',
          zIndex: 10
        }}
        onMouseEnter={e => e.target.style.background = '#f3eaff'}
        onMouseLeave={e => e.target.style.background = '#fff'}
      >
        ← Back
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 350px', minWidth: 320 }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: 16, marginBottom: 24, border: '2px solid #a18cd1', background: '#f8f6fc', boxShadow: '0 2px 16px #e0d7f8' }} />
          {project.video && (
            <div style={{ margin: '1.5rem 0' }}>
              <iframe
                width="100%"
                height="320"
                src={project.video}
                title={project.title + ' video'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: 12, border: '2px solid #a18cd1', boxShadow: '0 2px 16px #e0d7f8' }}
              ></iframe>
            </div>
          )}
        </div>
        <div style={{ flex: '2 1 400px', minWidth: 320 }}>
          <h1 style={{ color: '#7b2ff2', fontSize: '2.5rem', marginBottom: '1.2rem' }}>{project.title}</h1>
          <p style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '2rem', lineHeight: 1.7 }}>{project.description}</p>
          <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
            <a href="#" onClick={handleCodeClick} style={{ color: '#fff', background: '#7b2ff2', padding: '0.7rem 1.5rem', borderRadius: 8, textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 2px 8px #e0d7f8', transition: 'background 0.2s', cursor: 'pointer' }}>Code</a>
            <a href={project.video} target="_blank" rel="noopener noreferrer" style={{ color: '#7b2ff2', background: '#fff', border: '2px solid #7b2ff2', padding: '0.7rem 1.5rem', borderRadius: 8, textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 2px 8px #e0d7f8', transition: 'background 0.2s' }}>Demo</a>
          </div>
        </div>
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

export default ProjectDetail; 