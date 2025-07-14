import React from "react";

function Profile() {
  return (
    <div style={{ width: '100%' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #8b6bb1 0%, #e8a4d8 100%)',
        padding: '3rem 2rem',
        textAlign: 'center',
        color: '#fff',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'Inter' }}>
          Ashutosh Shrivastav
        </h1>
        <div style={{ fontSize: '1.1rem', marginBottom: '1rem', opacity: 0.95 }}>
          <span style={{ marginRight: 16 }}>Email: <a href="mailto:ash1912shrV@gmail.com" style={{ color: '#fff', textDecoration: 'underline' }}>ash1912shrV@gmail.com</a></span>
          <span>Phone: <a href="tel:0468446072" style={{ color: '#fff', textDecoration: 'underline' }}>0468 446 072</a></span>
        </div>
        <p style={{ fontSize: '1.2rem', maxWidth: 700, margin: '0 auto', opacity: 0.9 }}>
          Confident and articulate individual with commended ability to work with others to achieve set outcomes. Possesses an interminable urge to learn more and employ feedback, accept challenging tasks and work even outside traditional work hours.
        </p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 2rem' }}>
        {/* Key Skills */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #e0d7f8', padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ color: '#7b2ff2', marginBottom: '1rem', fontFamily: 'Inter' }}>Key Skills</h2>
          <ul style={{ color: '#4b2067', fontSize: '1.1rem', lineHeight: 1.7, marginLeft: 24 }}>
            <li>Problem solving</li>
            <li>Building understanding fast</li>
            <li>Team work</li>
            <li>Task allocation (reliability)</li>
            <li>Recognised verbal proficiency</li>
          </ul>
        </div>

        {/* Technical Skills */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #e0d7f8', padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ color: '#7b2ff2', marginBottom: '1rem', fontFamily: 'Inter' }}>Technical Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: 12 }}>
            {["C", "JavaScript", "Java", "Python", "HTML/CSS", "MySQL", "SQLite", "MongoDB", "React", "Flutter"].map(skill => (
              <span key={skill} style={{
                background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
                color: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.95rem',
                fontWeight: 'bold'
              }}>{skill}</span>
            ))}
          </div>
          <div style={{ color: '#4b2067', fontSize: '1.05rem' }}>
            Microsoft Word, Microsoft Excel
          </div>
        </div>

        {/* Education */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #e0d7f8', padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ color: '#7b2ff2', marginBottom: '1rem', fontFamily: 'Inter' }}>Education</h2>
          <div style={{ marginBottom: 16 }}>
            <h3 style={{ color: '#7b2ff2', marginBottom: 4 }}>Monash University</h3>
            <div style={{ color: '#4b2067', fontSize: '1.05rem' }}>Software Engineering student (2nd year)</div>
            <div style={{ color: '#4b2067', fontSize: '1.05rem' }}>Latest W.A.M: <b>Over 80% (High Distinction)</b></div>
          </div>
          <div>
            <h3 style={{ color: '#7b2ff2', marginBottom: 4 }}>John Monash Science School</h3>
            <div style={{ color: '#4b2067', fontSize: '1.05rem' }}>Year 12 graduate (ATAR: 95.75)</div>
          </div>
        </div>

        {/* Experience & Internships */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #e0d7f8', padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ color: '#7b2ff2', marginBottom: '1rem', fontFamily: 'Inter' }}>Experience & Internships</h2>
          <div style={{ marginBottom: 18 }}>
            <h3 style={{ color: '#7b2ff2', marginBottom: 4 }}>Monash University Open Day Representative (2025)</h3>
            <ul style={{ color: '#4b2067', fontSize: '1.05rem', marginLeft: 24 }}>
              <li>Chosen out of 1000+ applicants to represent the Faculty of Engineering</li>
              <li>Liaised with prospective students, explained course structure, motivated them to pursue engineering</li>
              <li>Explained software engineering applications, frameworks, and languages</li>
            </ul>
          </div>
          <div style={{ marginBottom: 18 }}>
            <h3 style={{ color: '#7b2ff2', marginBottom: 4 }}>Engineering Consulting Internship - GHD (2024)</h3>
            <ul style={{ color: '#4b2067', fontSize: '1.05rem', marginLeft: 24 }}>
              <li>Worked on construction project: cost/time estimates for train route viability</li>
              <li>Analyzed risk, importance, environmental viability</li>
              <li>Created SWOT analysis report for management/client</li>
              <li>Achieved certificate</li>
            </ul>
          </div>
          <div style={{ marginBottom: 18 }}>
            <h3 style={{ color: '#7b2ff2', marginBottom: 4 }}>Tutor (2019–Present)</h3>
            <ul style={{ color: '#4b2067', fontSize: '1.05rem', marginLeft: 24 }}>
              <li>Subjects: VCE Software Development, Specialist Maths, Methods, English, Chemistry, Selective School Entrance</li>
              <li>4+ years experience, including ACER/EduTest formats</li>
            </ul>
          </div>
          <div style={{ marginBottom: 18 }}>
            <h3 style={{ color: '#7b2ff2', marginBottom: 4 }}>Programming Bootcamp Tutor (Monash University)</h3>
            <ul style={{ color: '#4b2067', fontSize: '1.05rem', marginLeft: 24 }}>
              <li>Selected as tutor for 1000+ students</li>
              <li>Languages taught: Python, Java, C</li>
              <li>Submitted coding challenge and video explanation for application</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #e0d7f8', padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ color: '#7b2ff2', marginBottom: '1rem', fontFamily: 'Inter' }}>Projects</h2>
          <ul style={{ color: '#4b2067', fontSize: '1.05rem', marginLeft: 24, lineHeight: 1.7 }}>
            <li><b>Professional Full-Stack Website Building (React, JavaScript, SQLite, Stripe, Mailgun)</b> (June 2025)<br />Industry-standard frontend/backend, Stripe payments, Mailgun emails, login/logout, hashed passwords</li>
            <li><b>2D Elden Ring Game Simulation (Java, SOLID, OOP)</b><br />Team project, SOLID principles, low coupling, high cohesion, system design, testing, handover interviews</li>
            <li><b>Football Season Simulator (ADTs, Algorithms)</b><br />Binary Trees, Max-Heaps, MergeSort, HeapSort, Big O analysis, scored 91%</li>
          </ul>
        </div>

        {/* Certifications */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #e0d7f8', padding: '2rem' }}>
          <h2 style={{ color: '#7b2ff2', marginBottom: '1rem', fontFamily: 'Inter' }}>Certifications</h2>
          <ul style={{ color: '#4b2067', fontSize: '1.05rem', marginLeft: 24, lineHeight: 1.7 }}>
            <li>HackerRank Frontend Developer (React)</li>
            <li>HackerRank Software Engineering Intern</li>
            <li>HackerRank SQL (Advanced)</li>
            <li>HackerRank Rest API</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile; 