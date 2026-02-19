import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <section className="location-section" id="location">

      <h2 className="section-title">
        Event <span className="highlight">Venue</span>
      </h2>

      <p className="location-subtitle">
        Global Institute of Technology & Management, Gurugram
      </p>

      <div className="location-container">

        {/* Map */}
        <div className="map-box">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28060.288972707982!2d77.285201!3d28.4633968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d6bab65a4c0c9%3A0xf41d605e3cf00f59!2sGlobal%20Institute%20of%20Technology%20%26%20Management%20(%20GITM%20)!5e0!3m2!1sen!2sin!4v1770572932703!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HackCraft Venue Map"
          />

        </div>


        {/* Address Info */}
        <div className="location-info">

          <h3>📍 Venue Address</h3>

          <p>
            Global Institute of Technology & Management (GITM) <br />
            Gurugram, Haryana, India
          </p>


          <div className="location-details">

            <div>
              <span>Date</span>
              <p>28–29 March 2026</p>
            </div>

            <div>
              <span>Time</span>
              <p>9:00 AM Onwards</p>
            </div>

            <div>
              <span>Parking</span>
              <p>Available</p>
            </div>

            <div>
              <span>Help Desk</span>
              <p>On Campus</p>
            </div>

          </div>


          <a
            href="https://maps.google.com/?q=Global+Institute+of+Technology+and+Management+Gurugram"
            target="_blank"
            rel="noopener noreferrer"
            className="direction-btn"
          >
            Get Directions →
          </a>

        </div>

      </div>

    </section>
  );
};

export default Location;
