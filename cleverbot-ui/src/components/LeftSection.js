// components/LeftSection.js
import React from "react";
import './LeftSection.css';

const LeftSection = () => {
  return (
    <div className="left-content">
      <h1>Building the future of AI together</h1>
      <p>AI is transforming the world, and we are leading the charge. We are constructing the future of AI as a collective.</p>
      <button className="get-started-btn">Get started</button>

      <div className="user-stats">
        <div className="stat">
          <h4>430,000 Users</h4>
          <p>is building Cleverbot together</p>
        </div>
        <div className="stat">
          <h4>1M Users</h4>
          <p>Estimated additional reach</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
