import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import ReactLogo from "../assets/react-logo.svg";

function Home() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    document.title = "Ash's Developer Portfolio";
  }, []);

  const openVideo = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const handleCodeClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Hero Header */}
      <div style={{ 
        background: 'linear-gradient(135deg, #8b6bb1 0%, #e8a4d8 100%)',
        padding: '4rem 2rem',
        textAlign: 'center',
        color: '#fff'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: 'Inter' }}>
          Ash's Developer Portfolio
        </h1>
        <p style={{ fontSize: '1.3rem', marginBottom: '2rem', opacity: 0.9 }}>
          Full Stack Developer | React Enthusiast | Modern Web Experiences
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/profile" style={{ 
            background: '#fff', 
            color: '#7b2ff2', 
            padding: '0.8rem 1.5rem', 
            borderRadius: '8px', 
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
            View Profile
          </Link>
          <Link to="/contact" style={{ 
            border: '2px solid #fff', 
            color: '#fff', 
            padding: '0.8rem 1.5rem', 
            borderRadius: '8px', 
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Projects Section */}
      <div style={{ padding: '4rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ 
          color: '#7b2ff2', 
          fontSize: '2.5rem', 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontFamily: 'Inter'
        }}>
          Featured Projects
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {projects.map(project => (
            <div key={project.id} style={{
              background: '#fff',
              border: '1.5px solid #e0d7f8',
              borderRadius: 16,
              boxShadow: '0 2px 16px #e0d7f8',
              padding: '1.5rem',
              width: 350,
              textAlign: 'left',
              transition: 'transform 0.2s',
              position: 'relative',
            }}>
              <div style={{ position: 'relative' }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: 10, marginBottom: 12, background: '#f8f6fc' }} />
                <img src={ReactLogo} alt="React" style={{ 
                  position: 'absolute', 
                  top: '8px', 
                  right: '8px', 
                  width: '24px', 
                  height: '24px',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                }} />
                {project.video && (
                  <button
                    onClick={() => openVideo(project.video)}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(123, 47, 242, 0.9)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'rgba(123, 47, 242, 1)'}
                    onMouseLeave={(e) => e.target.style.background = 'rgba(123, 47, 242, 0.9)'}
                  >
                    <div style={{
                      width: 0,
                      height: 0,
                      borderLeft: '12px solid white',
                      borderTop: '8px solid transparent',
                      borderBottom: '8px solid transparent',
                      marginLeft: '4px'
                    }} />
                  </button>
                )}
              </div>
              <h3 style={{ color: '#7b2ff2', margin: '0 0 0.5rem 0', fontFamily: 'Inter' }}>{project.title}</h3>
              <p style={{ color: '#4b2067', marginBottom: 12 }}>{project.description}</p>
              <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <a href="#" onClick={handleCodeClick} style={{ color: '#7b2ff2', textDecoration: 'underline', cursor: 'pointer' }}>Code</a>
                <a href={`https://www.youtube.com/watch?v=${project.video.split('/embed/')[1]}`} target="_blank" rel="noopener noreferrer" style={{ color: '#7b2ff2', textDecoration: 'underline' }}>Demo</a>
                <Link to={`/projects/${project.id}`} style={{ color: '#7b2ff2', textDecoration: 'underline' }}>Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh'
          }}>
            <button
              onClick={closeVideo}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                zIndex: 1001
              }}
            >
              ×
            </button>
            <iframe
              width="800"
              height="450"
              src={selectedVideo}
              title="Project Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '8px' }}
            />
          </div>
        </div>
      )}
      {/* Code Request Popup */}
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

export default Home; 