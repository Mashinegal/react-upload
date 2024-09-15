// components/MainPage.js
import React from "react";
import './MainPage.css';
import AvatarSection from "./AvatarSection";
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="left-section">
        <LeftSection />
        <AvatarSection />
      </div>
      <div className="right-section">
        <RightSection />
      </div>
    </div>
  );
};

export default MainPage;
