import React, { useEffect, useRef, useState } from 'react';
import './Team.css';

import img1 from '../images/151.jpg';
import img4 from '../images/155.jpg';
import img2 from '../images/153.jpeg';
import img3 from '../images/154.jpeg';
import img5 from '../images/156.jpeg';
import img8 from '../images/157.jpeg';
import img7 from '../images/158.jpeg';
import img100 from '../images/159.jpeg';
import img101 from '../images/160.jpeg';
import img102 from '../images/161.jpeg';
import img103 from '../images/162.jpeg';
import img104 from '../images/163.jpeg';

const Team = () => {
  const [visibleMembers, setVisibleMembers] = useState([]);
  const teamRef = useRef(null);

  const teamData = [
    {
      id: 1,
      name: 'Kunal',
      role: 'Organizer',
      image: img1,
      social: {
        email: 'alex.cipher@hackathon.dev',
        linkedin: 'linkedin.com/in/kunal-biserwal-b2a70528a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BYP6G3uLKTjmcwB9hxQhVhA%3D%3D',
        instagram: '@alex_cipher_dev'
      }
    },
    {
      id: 2,
      name: 'Ayush Chahar',
      role: 'Marketing Lead',
      image: img2,
      social: {
        email: 'maya.neon@hackathon.dev',
        linkedin: 'linkedin.com/in/ayush-kumar-chahar-a76175329/',
        instagram: '@maya_neon_design'
      }
    },
    {
      id: 3,
      name: 'Manya Kanojia',
      role: 'Marketing Lead',
      image: img3,
      social: {
        email: 'zero.byte@hackathon.dev',
        linkedin: 'linkedin.com/in/manya-kanojia-7a0334290/',
        instagram: '@zero_byte_tech'
      }
    },
    {
      id: 4,
      name: 'Devansh Singh',
      role: 'Organizer',
      image: img5,
      social: {
        email: 'nova.syntax@hackathon.dev',
        linkedin: 'linkedin.com/in/amphitter/',
        instagram: '@nova_syntax_ai'
      }
    },
    {
      id: 5,
      name: 'Mohit',
      role: 'Web & Creatives Manager',
      image: img4,
      social: {
        email: 'raven.core@hackathon.dev',
        linkedin: 'linkedin.com/in/mohit-grover-99b799336/',
        instagram: '@raven_core_ops'
      }
    },
    {
      id: 6,
      name: 'Hritik Singh',
      role: 'Web & Creatives Manager',
      image: img8,
      social: {
        email: 'alex.cipher@hackathon.dev',
        linkedin: 'linkedin.com/in/hritik-kumar-singh-85a721291/',
        instagram: '@alex_cipher_dev'
      }
    },
    {
      id: 7,
      name: 'Pritika',
      role: 'Media & Publicity Manager',
      image: img7,
      social: {
        email: 'alex.cipher@hackathon.dev',
        linkedin: 'linkedin.com/in/pritika0908/',
        instagram: '@alex_cipher_dev'
      }
    },
    {
      id: 8,
      name: 'Tamanna',
      role: 'Media & Publicity Manager',
      image: img100,
      social: {
        email: 'alex.cipher@hackathon.dev',
        linkedin: '#',
        instagram: '@alex_cipher_dev'
      }
    },
    {
      id: 9,
      name: 'Ansh',
      role: 'Tech Lead',
      image: img101,
      social: {
        email: 'alex.cipher@hackathon.dev',
        linkedin: 'linkedin.com/in/ansh-kumar-95a84a28a/',
        instagram: '@alex_cipher_dev'
      }
    },
    {
      id: 10,
      name: 'Divya',
      role: 'Media & Publicity Manager',
      image: img102,
      social: {
        email: 'alex.cipher@hackathon.dev',
        linkedin: 'linkedin.com/in/divya-801387297/',
        instagram: '@alex_cipher_dev'
      }
    },
    {
      id: 11,
      name: 'Vishnu',
      role: 'Tech Lead',
      image: img103,
      social: {
        email: 'alex.cipher@hackathon.dev',
        linkedin: 'linkedin.com/in/kumarvishnu2912/',
        instagram: '@alex_cipher_dev'
      }
    },
    {
      id: 12,
      name: 'Sahil',
      role: 'Media & Publicity Manager',
      image: img104,
      social: {
        email: 'alex.cipher@hackathon.dev',
        linkedin: '#',
        instagram: '@alex_cipher_dev'
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const memberId = parseInt(entry.target.dataset.id);
            setVisibleMembers((prev) => {
              if (!prev.includes(memberId)) {
                return [...prev, memberId];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const members = teamRef.current?.querySelectorAll('.team-member');
    members?.forEach((member) => observer.observe(member));

    return () => {
      members?.forEach((member) => observer.unobserve(member));
    };
  }, []);

  return (
    <>
     

      <div className="team-container">

        {/* Header */}
        <div className="team-header">
          <h2 className="team-title">CORE TEAM</h2>
          <p className="team-subtitle">MEET THE ARCHITECTS</p>
        </div>

        {/* Team Grid */}
        <div className="team-grid" ref={teamRef}>
          {teamData.map((member, index) => (
            <div
              key={member.id}
              data-id={member.id}
              className={`team-member ${
                visibleMembers.includes(member.id) ? 'visible' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="member-card">

                {/* Image */}
                <div className="member-image-container">
                  <img src={member.image} alt={member.name} className="member-image" />
                </div>

                {/* Info */}
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <div className="member-role">{member.role}</div>
                </div>

                {/* Social Panel */}
                <div className="social-panel">
                  <div className="social-header">
                    <span className="social-title">CONNECT</span>
                  </div>

                  <div className="social-links">
                    <a
                      href={`https://${member.social.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      {member.social.linkedin}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Team;
