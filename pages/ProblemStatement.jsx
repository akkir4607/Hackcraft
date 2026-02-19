import React from "react";
import "./ProblemStatement.css";
import Navbar from "./Navbar";

const tracks = [
  {
    id: 1,
    name: "AI",
    description:
      "Artificial Intelligence solutions addressing education, governance, behavioral intelligence, energy forecasting, and structured AI data pipelines.",
    problems: [
      "AIP01: Context-Aware Academic & Research Knowledge Extraction",
      "AIP02: Early Detection of Online Behavioral Risk Patterns",
      "AIP03: AI-Driven Energy Demand Forecasting for Micro-Communities",
      "AIP04: Real-Time Multilingual Public Communication Intelligence",
      "AIP05 (Alactic AGI Integrated): Automated Grounding of Unstructured Research Data for Domain-Specific LLMs"
    ]
  },
  {
    id: 2,
    name: "Cybersecurity",
    description:
      "Advanced cyber defense systems for deepfake detection, fraud intelligence, identity protection, and automated security intelligence structuring.",
    problems: [
      "CSP01: Real-Time Detection of Deepfake and AI-Generated Misinformation",
      "CSP02: Behavioral Anomaly Detection in Financial Transactions",
      "CSP03: Secure Digital Identity for Public Service Access",
      "CSP04: Critical Infrastructure Threat Monitoring",
      "CSP05 (Alactic AGI Integrated): Automated Intelligence Extraction from Security Incident Reports"
    ]
  },
  {
    id: 3,
    name: "IoT",
    description:
      "Smart infrastructure and sensor-driven intelligence systems.",
    problems: [
      "IOTP01: Urban Water Leakage Monitoring",
      "IOTP02: Smart Waste Segregation Optimization",
      "IOTP03: Environmental Air Quality Intelligence",
      "IOTP04: Cold Chain Monitoring for Perishable Goods",
      "IOTP05 (Alactic AGI Integrated): Structuring Multi-Source Sensor Documentation"
    ]
  },
  {
    id: 4,
    name: "Finance",
    description:
      "AI-driven financial modeling, transparency, and inclusion systems.",
    problems: [
      "FNP01: Financial Inclusion Risk Assessment",
      "FNP02: Real-Time Small Business Cash Flow Prediction",
      "FNP03: Transparent Public Fund Tracking",
      "FNP04: AI-Driven Insider Trading Signal Detection",
      "FNP05 (Alactic AGI Integrated): Automated Structuring of Regulatory Filings"
    ]
  },
  {
    id: 5,
    name: "Healthcare",
    description:
      "Healthcare intelligence systems for predictive analysis and optimization.",
    problems: [
      "HCP01: Early Detection of Lifestyle Disease Risk",
      "HCP02: Rural Diagnostic Accessibility",
      "HCP03: Hospital Resource Allocation Optimization",
      "HCP04: Pharmaceutical Supply Chain Transparency",
      "HCP05 (Alactic AGI Integrated): Clinical Research Data Grounding"
    ]
  },
  {
    id: 6,
    name: "Shardeum Special Web3 Track",
    sponsor: true,
    description:
      "Decentralized transparency and blockchain-based innovation systems powered by Shardeum.",
    problems: [
      "W3P01: Comming Soon!",
    ]
  }
];

const ProblemStatements = () => {
  return (
    <>
      <Navbar />

      <div className="problem-page">
<br></br>
<br></br>
        <h1 className="problem-main-title">HACKCRAFT 3.0 PROBLEM STATEMENTS</h1>

        <div className="special-info-box">
          <h2>🔥 Alactic AGI Integrated Problems</h2>
          <p>
            Alactic AGI integrated problems require structured grounding of unstructured data
            for domain-specific intelligence systems. These problems evaluate your ability to
            design scalable AI architectures that convert raw, unstructured data into reliable,
            context-aware intelligence pipelines.
          </p>
          <p className="bonus-text">
            💎 Teams solving Alactic problems gain higher innovation weightage.
          </p>
        </div>

        <div className="special-info-box web3-box">
          <h2>💜 Shardeum Sponsor Track Advantage</h2>
          <p>
            The Web3 Sponsor Track powered by Shardeum focuses on decentralized systems,
            transparency protocols, blockchain-based verification, and trustless governance models.
          </p>
          <p className="bonus-text">
            🚀 Winning in this track increases sponsor recognition and partnership opportunities.
          </p>
        </div>

        {tracks.map((track) => (
          <div
            key={track.id}
            className={`track-container ${track.sponsor ? "sponsor-track" : ""}`}
          >
            <h2 className="track-title">{track.name}</h2>
            <p className="track-description">{track.description}</p>

            <div className="problem-grid">
              {track.problems.map((problem, index) => (
                <div
                  key={index}
                  className={`problem-card 
                  ${problem.includes("Alactic") ? "agi-highlight" : ""} 
                  ${track.sponsor ? "web3-highlight" : ""}`}
                >
                  {problem}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProblemStatements;
