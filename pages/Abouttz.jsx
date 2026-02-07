import React from 'react';
import './Aboutt.css';

const Aboutt = () => {
  const features = [
    {
      title: 'Industry Mentorship',
      description: 'Receive mentorship from experienced industry leaders and accomplished entrepreneurs who will support and guide you throughout the event.'
    },
    {
      title: 'Real-World Impact',
      description: 'Build solutions that address genuine problems and have the potential for real-world implementation.'
    },
    {
      title: 'Networking Opportunities',
      description: 'Engage with talented innovators, potential collaborators, and industry professionals to build valuable long-term connections.'
    },
    {
      title: 'Post-Event Support',
      description: 'Top teams gain access to post-event mentorship and opportunities for further development, including potential funding and scaling support.'
    }
  ];

  return (
    <div className="aboutt-container">
      <div className="aboutt-bg-grid"></div>
      <div className="aboutt-wrapper">
        <div className="aboutt-box">
          <h2 className="aboutt-title">
            <span className="aboutt-title-text">What Makes</span>
            <span className="aboutt-title-highlight"> HACKCRAFT </span>
            <span className="aboutt-title-text">Special?</span>
          </h2>
          
          <div className="aboutt-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="aboutt-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="aboutt-card-title">{feature.title}</h3>
                <p className="aboutt-card-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutt;