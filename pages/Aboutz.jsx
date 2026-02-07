// About.jsx
import React from 'react';
import './About.css';
import Aboutt from './Aboutt';

const About = () => {
  const features = [
    {
      icon: '<>',
      title: 'Innovation Challenge',
      description: '24 hours to design the future and break technological boundaries.',
      delay: '0s'
    },
    {
      icon: '👥',
      title: 'Collaborative Spirit',
      description: 'Connect with brilliant minds from diverse backgrounds and skill sets',
      delay: '0.1s'
    },
    {
      icon: '💡',
      title: 'Cutting-Edge Tech',
      description: 'Access to latest tools, APIs and technologies to bring your ideas to life',
      delay: '0.2s'
    },
    {
      icon: '🏆',
      title: 'Epic Rewards',
      description: 'Compete for amazing prizes and recognition in the tech community',
      delay: '0.3s'
    }
  ];

  return (
    <>
      

      <section className="about-section" id="about">
        <div className="cyber-grid"></div>
        <div className="cyber-particles"></div>
        
        <div className="about-container">
          <div className="about-header">
            <h2 className="about-title">
              About <span className="highlight">HACKCRAFT</span>
            </h2>
            <p className="about-description">
              HACKCRAFT isn't just another hackathon—it's where innovation meets execution. 
              Join us for an intense 24-hour journey where creativity, technology, and 
              collaboration converge to create the future.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                className="feature-card" 
                key={index}
                style={{ animationDelay: feature.delay }}
              >
                <div className="card-border"></div>
                <div className="card-glow"></div>
                
                <div className="feature-icon">
                  <span>{feature.icon}</span>
                </div>
                
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                
                <div className="corner top-left"></div>
                <div className="corner top-right"></div>
                <div className="corner bottom-left"></div>
                <div className="corner bottom-right"></div>
              </div>
            ))}
          </div>

          <Aboutt />
        </div>
      </section>
    </>
  );
};

export default About;
