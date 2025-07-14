import React from "react";

function Contact() {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ 
        background: 'linear-gradient(135deg, #8b6bb1 0%, #e8a4d8 100%)',
        padding: '3rem 2rem',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 24,
        margin: '3rem auto',
        maxWidth: 600
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'Inter' }}>
          Contact
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '1.2rem' }}>
          You can reach me at <a href="mailto:ash1912shrV@gmail.com" style={{ color: '#fff', textDecoration: 'underline' }}>ash1912shrV@gmail.com</a> or <a href="tel:0468446072" style={{ color: '#fff', textDecoration: 'underline' }}>0468 446 072</a>.
        </p>
        <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
          LinkedIn: <a href="https://www.linkedin.com/in/ashutosh-shrivastav-505392205" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>ashutosh-shrivastav-505392205</a>
        </p>
      </div>
    </div>
  );
}

export default Contact; 