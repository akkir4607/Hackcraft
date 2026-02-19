import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";

import gitmLogo from "../images/GITM_Logo.jpg";
import sankalpLogo from "../images/TeamSankalp.png";
import alacticLogo from "../images/Alactic.png";

const Footer = () => {

  const location = useLocation();
  const navigate = useNavigate();


  // Scroll Function
  const scrollToSection = (id) => {

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };


  // Smart Navigation
  const handleNavClick = (id, path = "/") => {

    if (location.pathname === path) {

      // Same page → scroll
      scrollToSection(id);

    } else {

      // Go to page → then scroll
      navigate(path);

      setTimeout(() => {
        scrollToSection(id);
      }, 300);
    }
  };


  return (
    <footer className="footer">

      {/* ===== TOP AREA ===== */}
      <div className="footer-top">

        {/* Logos */}
        <div
          className="footer-logos"
          onClick={() => handleNavClick("home")}
        >

          <img src={gitmLogo} alt="GITM" />
          <span className="footer-divider" />

          <img src={sankalpLogo} alt="Team Sankalp" />
          
           {/* 
          <span className="footer-divider" />

          <img src={alacticLogo} alt="Alactic" /> */}

        </div>


        {/* Description */}
        <p className="footer-desc">
          HackCraft 3.0 is a national-level hackathon empowering
          innovators to build, learn, and lead the future.
        </p>

      </div>


      {/* ===== LINKS ===== */}
      <div className="footer-links">

        {/* Explore */}
        <div>
          <h4>Explore</h4>

          <span onClick={() => handleNavClick("home")}>
            Home
          </span>

          <span onClick={() => handleNavClick("about")}>
            About
          </span>

          <span onClick={() => handleNavClick("timeline")}>
            Timeline
          </span>

          <span onClick={() => navigate("/team")}>
            Team
          </span>
        </div>


        {/* Event */}
        <div>
          <h4>Event</h4>

          <span onClick={() => handleNavClick("profile")}>
            Themes
          </span>

          <span onClick={() => navigate("/rules")}>
            Rules
          </span>

          <span onClick={() => navigate("/prizes")}>
            Prizes
          </span>

          <span onClick={() => navigate("/faq")}>
            FAQ
          </span>
        </div>


        {/* Contact */}
        <div>
          <h4>Contact</h4>

          <span onClick={() => window.location.href = "mailto:globalhackcraft@gitmgurugram.com"}>
            Email
          </span>

          <span
            onClick={() =>
              window.open("https://instagram.com/teamsankalp.gitm", "_blank")
            }
          >
            Instagram
          </span>

          <span
            onClick={() =>
              window.open("https://linkedin.com/gitm", "_blank")
            }
          >
            LinkedIn
          </span>

          <span onClick={() => navigate("/support")}>
            Support
          </span>
        </div>

      </div>


      {/* ===== BOTTOM BAR ===== */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} HackCraft 3.0 — All Rights Reserved
        </p>

        <p>
          Designed & Developed by ♥️ <a href="https://instagram.com/teamsankalp.gitm"><span>Team Sankalp</span></a>
        </p>

      </div>

    </footer>
  );
};

export default Footer;
