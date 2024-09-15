// components/RightSection.js
import React from "react"; 
import './RightSection.css';

const RightSection = () => {
  return (
    <div className="right-content">
      <div className="illustration">

        <img src={`${process.env.PUBLIC_URL}/cleverbot.png`} alt="AI Illustration" className="cleverbot-img" />
        <p>AI is generating...</p>
        <button className="prompt-btn">Prompt</button>
      </div>
    </div>
  );
};

export default RightSection;

