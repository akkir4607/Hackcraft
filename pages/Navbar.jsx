import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

import gitmLogo from "../images/GITM_Logo.jpg";
import sankalpLogo from "../images/TeamSankalp.png";
import alacticLogo from "../images/Alactic.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

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

    setMenuOpen(false);
  };


  // Smart Navigation (Scroll + Route)
  const handleNavClick = (id, path = "/") => {

    if (location.pathname === path) {

      scrollToSection(id);

    } else {

      navigate(path);

      setTimeout(() => {
        scrollToSection(id);
      }, 300);
    }
  };


  // Register Link
  const registerLink =
    "https://unstop.com/o/sHkeOP0?lb=K9UelnkJ&utm_medium=Share&utm_source=gitmgur42672&utm_campaign=Online_coding_challenge";


  return (
    <>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar-desktop">


        {/* ===== LEFT LOGOS ===== */}
        <div
          className="nav-logos"
          onClick={() => handleNavClick("home")}
        >

          <img src={gitmLogo} alt="GITM" className="nav-logo gitm-logo" />

          <span className="logo-divider" />

          <img src={sankalpLogo} alt="Team Sankalp" className="nav-logo sankalp-logo" />

          {/*  <span className="logo-divider" />

         <img src={alacticLogo} alt="Alactic" className="nav-logo alactic-logo" />*/} 

        </div>


        {/* ===== CENTER LINKS (DESKTOP) ===== */}
        <div className="nav-links desktop-links">

          <span
            onClick={() => handleNavClick("home")}
            className="nav-link"
          >
            Home
          </span>

          <span
            onClick={() => handleNavClick("about")}
            className="nav-link"
          >
            About
          </span>

          <span
            onClick={() => handleNavClick("timeline")}
            className="nav-link"
          >
            Timeline
          </span>

          {/* Team Page Routing */}
          <Link to="/team" className="nav-link">
            Team
          </Link>

          <span
            onClick={() => handleNavClick("profile")}
            className="nav-link"
          >
            Themes
          </span>

        </div>


        {/* ===== RIGHT AREA ===== */}
        <div className="nav-right">

          {/* Register Button */}
          <a
            href={registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="sign-in-btn desktop-btn"
          >
            Register Now
          </a>


          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>


      </nav>



      {/* ================= MOBILE MENU ================= */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <span onClick={() => handleNavClick("home")}>Home</span>

        <span onClick={() => handleNavClick("about")}>About</span>

        <span onClick={() => handleNavClick("timeline")}>Timeline</span>

        {/* Team Routing Mobile */}
        <Link
          to="/team"
          onClick={() => setMenuOpen(false)}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Team
        </Link>

        <span onClick={() => handleNavClick("profile")}>Themes</span>


        {/* Mobile Register */}
        <a
          href={registerLink}
          target="_blank"
          rel="noopener noreferrer"
          className="sign-in-btn mobile-btn"
          onClick={() => setMenuOpen(false)}
        >
          Register Now
        </a>

      </div>

    </>
  );
}

export default Navbar;
