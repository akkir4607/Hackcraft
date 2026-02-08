import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import './Front.css';
import Team from './Team';
import Timeline from './Timeline';
import Profile from './Profile';
import About from './About';
import Epic from './Epic';
import img500 from '../images/500.png';
import img501 from '../images/501.png';
import img200 from '../images/200.png';
import img201 from '../images/201.png';
import img510 from '../images/2.png';


// ===== COUNTDOWN TIMER =====
function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <motion.div 
        className="countdown-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="time-value">{String(timeLeft.days).padStart(2, '0')}</div>
        <div className="time-label">DAYS</div>
      </motion.div>
      
      <motion.div 
        className="countdown-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <div className="time-value">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="time-label">HOURS</div>
      </motion.div>
      
      <motion.div 
        className="countdown-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <div className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="time-label">MINUTES</div>
      </motion.div>
      
      <motion.div 
        className="countdown-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <div className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="time-label">SECONDS</div>
      </motion.div>
    </div>
  );
}

function Front() {
  return (
    <div className="front-wrapper">
      <div className="front-container">

        {/* Sidebar - Only visible on desktop */}
        <div className="sidebar">
          <a href="#home" className="sidebar-item">
            <div className="sidebar-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </div>
            <span className="sidebar-label">HOME</span>
          </a>
          <a href="/profile" className="sidebar-item">
            <div className="sidebar-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
              </svg>
            </div>
            <span className="sidebar-label">EVENTS</span>
          </a>
          <a href="/team" className="sidebar-item">
            <div className="sidebar-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
              </svg>
            </div>
            <span className="sidebar-label">CONTACT</span>
          </a>
          <a href="/about" className="sidebar-item">
            <div className="sidebar-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <span className="sidebar-label">ABOUT US</span>
          </a>
        </div>

        {/* Background Images */}
        <motion.div 
          className="bg-image-left"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.2 }}
        >
          <img src={img200} alt="Background Left" />
        </motion.div>

        <motion.div 
          className="bg-image-right"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.4 }}
        >
          <img src={img201} alt="Background Right" />
        </motion.div>

        {/* Main Content */}
        <div className="main-content">
          <motion.div 
            className="content-wrapper"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.div 
              className="event-logo"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <img src={img510} alt="Event Logo" className="main-logo-img" />
            </motion.div>
            
            <motion.div className="event-tagline">
              LEARN IT | CRACK IT | HACK IT!
            </motion.div>
            
            <motion.div className="event-date">
              28th-29th MARCH 2026
            </motion.div>
            <br></br>

            {/* Sponsors */}
            <motion.div className="sponsor-section">
              <div className="sponsor-column">
                <div className="sponsor-label">HOSTED BY</div>
                <div className="sponsor-logo">
                  <img src={img500} alt="Host Logo" />
                </div>
              </div>
              
              <div className="sponsor-divider"></div>
              
              <div className="sponsor-column">
                <div className="sponsor-label">CO-POWERED BY</div>
                <div className="sponsor-logo">
                  <img src={img501} alt="Co-Powered Logo" />
                </div>
              </div>
            </motion.div>

            <CountdownTimer targetDate="2026-03-28T00:00:00" />
          </motion.div>
        </div>

        <Profile />
        <About />
        <Timeline />
        <Epic />
        <Team />

      </div>
    </div>
  );
}

export default Front;
