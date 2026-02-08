import React from "react";
import "./About.css";

const About = () => {

  const topFeatures = [
    {
      icon: "<>",
      title: "Innovation Challenge",
      desc: "24 hours to design the future and break technological boundaries."
    },
    {
      icon: "👥",
      title: "Collaborative Spirit",
      desc: "Connect with brilliant minds from diverse backgrounds."
    },
    {
      icon: "💡",
      title: "Cutting-Edge Tech",
      desc: "Access modern tools, APIs, and platforms."
    },
    {
      icon: "🏆",
      title: "Epic Rewards",
      desc: "Compete for recognition and exciting prizes."
    }
  ];


  const bottomFeatures = [
    {
      title: "Industry Mentorship",
      desc: "Guidance from experienced industry leaders."
    },
    {
      title: "Real-World Impact",
      desc: "Build solutions that solve genuine problems."
    },
    {
      title: "Networking Opportunities",
      desc: "Create strong professional connections."
    },
    {
      title: "Post-Event Support",
      desc: "Mentorship, funding & scaling support."
    }
  ];


  return (
    <section className="about-section" id="about">

      {/* Background */}
      <div className="cyber-grid"></div>


      <div className="about-container">

        {/* ===== HEADER ===== */}
        <div className="about-header">

          <h2 className="about-title">
            About <span className="highlight">HACKCRAFT</span>
          </h2>

          <p className="about-description">
            HACKCRAFT isn't just another hackathon — it’s where innovation meets execution.
            Join us for a 24-hour journey of creativity, collaboration, and technology.
          </p>

        </div>



        {/* ===== TOP FEATURES ===== */}
        <div className="features-grid">

          {topFeatures.map((item, i) => (

            <div
              key={i}
              className="feature-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >

              <div className="feature-icon">{item.icon}</div>

              <h3 className="feature-title">{item.title}</h3>

              <p className="feature-description">{item.desc}</p>

            </div>

          ))}

        </div>



        {/* ===== DIVIDER ===== */}
        <div className="about-divider">
          What Makes HackCraft Special?
        </div>



        {/* ===== BOTTOM FEATURES ===== */}
        <div className="aboutt-grid">

          {bottomFeatures.map((item, i) => (

            <div
              key={i}
              className="aboutt-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >

              <h3 className="aboutt-card-title">
                {item.title}
              </h3>

              <p className="aboutt-card-description">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default About;
