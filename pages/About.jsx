import React, { useState } from "react";
import "./About.css";
// Import your hackcraft image - update the path as needed
import hackcraftImage from "../images/hackcraft.png";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const topFeatures = [
    {
      icon: "⚡",
      title: "Innovation Challenge",
      desc: "24 hours to design the future and break technological boundaries with cutting-edge solutions."
    },
    {
      icon: "🤝",
      title: "Collaborative Spirit",
      desc: "Connect with brilliant minds from diverse backgrounds to build something extraordinary."
    },
    {
      icon: "💻",
      title: "Cutting-Edge Tech",
      desc: "Access modern tools, APIs, and platforms to bring your ideas to life."
    },
    {
      icon: "🏆",
      title: "Epic Rewards",
      desc: "Compete for recognition, prizes, and opportunities that can launch your career."
    }
  ];

  const bottomFeatures = [
    {
      title: "Industry Mentorship",
      desc: "Guidance from experienced industry leaders who have been where you are."
    },
    {
      title: "Real-World Impact",
      desc: "Build solutions that solve genuine problems and make a difference."
    },
    {
      title: "Networking Opportunities",
      desc: "Create strong professional connections that last beyond the event."
    },
    {
      title: "Post-Event Support",
      desc: "Continued mentorship, funding opportunities, and scaling support."
    }
  ];

  const timelineData = [
    { date: "7 FEB, 2026", event: "REGISTRATION & PPT SUBMISSION START" },
    { date: "7 MARCH, 2026", event: "REGISTRATION DEADLINE" },
    { date: "12 MARCH, 2026", event: "DEADLINE PPT SUBMISSION" },
    { date: "13-15 MARCH, 2026", event: "ONLINE PRESENTATION ROUND" },
    { date: "17 MARCH, 2026", event: "SHORTLISTED TEAM ANNOUNCEMENT" },
    { date: "28-29 MARCH, 2026", event: "OFFLINE ON-CAMPUS HACKATHON" }
  ];

  const themes = ["HEALTHCARE", "FINANCE", "IOT", "AI", "CYBERSECURITY"];

  const prizesData = [
    { tier: "1st", rewards: ["Cash Prize", "Funding", "Mentoring", "Internship Opportunity", "Placement Opportunity", "Goodies"] },
    { tier: "2nd", rewards: ["Cash Prize", "Mentoring", "Network access", "tech package", "Goodies"] },
    { tier: "3rd", rewards: ["Cash Prize", "tech package", "Network access", "mentoring", "Goodies"] },
    { tier: "4th", rewards: ["Cash Prize", "Mentoring", "goodies"] },
    { tier: "5th", rewards: ["Cash Prize", "Mentoring", "goodies"] }
  ];

  return (
    <>
      <section className="about-section" id="about">
        <div className="about-container">
          {/* Main Header */}
          <div className="about-header">
            <h2 className="about-title">
              About <span className="highlight">HACKCRAFT 3.0</span>
            </h2>
            <p className="about-subtitle">
              Where Innovation Meets Execution
            </p>
          </div>

          {/* Main Content - Image Left, Text Right */}
          <div className="about-main-content">
            <div className="about-text-content">
              <h3 className="about-content-title">The Ultimate Hackathon Experience</h3>
              <p className="about-content-description">
                HACKCRAFT 3.0 isn't just another hackathon — it's where innovation meets execution. 
                Join us for a transformative 24-hour journey of creativity, collaboration, and cutting-edge 
                technology. This is your opportunity to turn ideas into reality, connect with industry 
                leaders, and compete for life-changing opportunities.
              </p>
              
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">24</span>
                  <span className="stat-label">Hours of Innovation</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Participants</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Mentors & Judges</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">₹50K+</span>
                  <span className="stat-label">In Prizes</span>
                </div>
              </div>
<a href="/about">
              <button 
                className="read-more-btn"
                >
                Read More
              </button>
                </a>
            </div>

            <div className="about-image-container">
              <img 
                src={hackcraftImage} 
                alt="HACKCRAFT 3.0" 
                className="hackcraft-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x500/0a0a1a/00ffff?text=HACKCRAFT+3.0";
                }}
              />
            </div>
          </div>

          {/* Top Features */}
          <div className="features-section">
            <h3 className="section-title">Why Join HACKCRAFT?</h3>
            <div className="features-grid">
              {topFeatures.map((item, i) => (
                <div key={i} className="feature-card">
                  <div className="feature-icon">{item.icon}</div>
                  <h4 className="feature-title">{item.title}</h4>
                  <p className="feature-description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Features */}
          <div className="features-section">
            <h3 className="section-title">What Makes Us Special?</h3>
            <div className="features-grid bottom-grid">
              {bottomFeatures.map((item, i) => (
                <div key={i} className="feature-card">
                  <h4 className="feature-title">{item.title}</h4>
                  <p className="feature-description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default About;