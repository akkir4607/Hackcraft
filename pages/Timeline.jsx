import React, { useEffect, useRef, useState } from "react";
import "./Timeline.css";

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef(null);

  const scheduleData = [
    {
      id: 1,
      time: "7 FEB, 2026",
      title: "REGISTRATION & PPT SUBMISSION STARTS",
      description: "Registration and PPT submission begins.",
      status: "START",
    },
    {
      id: 2,
      time: "7 MARCH, 2026",
      title: "REGISTRATION DEADLINE",
      description: "Last date to register for the event.",
      status: "ACTIVE",
    },
    {
      id: 3,
      time: "12 MARCH, 2026",
      title: "PPT SUBMISSION DEADLINE",
      description: "Final PPT submission deadline.",
      status: "ACTIVE",
    },
    {
      id: 4,
      time: "13–15 MARCH, 2026",
      title: "ONLINE PRESENTATION",
      description: "Teams present ideas online.",
      status: "ACTIVE",
    },
    {
      id: 5,
      time: "17 MARCH, 2026",
      title: "SHORTLIST ANNOUNCEMENT",
      description: "Shortlisted teams announced.",
      status: "BREAK",
    },
    {
      id: 6,
      time: "28–29 MARCH, 2026",
      title: "FINAL EVENT",
      description: "Final round and winner announcement.",
      status: "ACTIVE",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.dataset.id);

            setVisibleItems((prev) =>
              prev.includes(id) ? prev : [...prev, id]
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = timelineRef.current?.querySelectorAll(".timeline-item");

    items?.forEach((el) => observer.observe(el));

    return () => {
      items?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="timeline-section">

      {/* HEADER */}
      <div className="timeline-header">
        <h2 className="timeline-title">EVENT TIMELINE</h2>
        <p className="timeline-subtitle">Schedule & Milestones</p>
      </div>

      {/* TIMELINE */}
      <div className="timeline-wrapper" ref={timelineRef}>

        <div className="timeline-line"></div>

        {scheduleData.map((item, index) => (
          <div
            key={item.id}
            data-id={item.id}
            className={`timeline-item
              ${index % 2 === 0 ? "left" : "right"}
              ${visibleItems.includes(item.id) ? "show" : ""}
            `}
          >

            {/* DOT */}
            <div className="timeline-dot"></div>

            {/* CARD */}
            <div className="timeline-card">

              <span className="timeline-date">{item.time}</span>

              <span
                className={`timeline-status ${item.status.toLowerCase()}`}
              >
                {item.status}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Timeline;
