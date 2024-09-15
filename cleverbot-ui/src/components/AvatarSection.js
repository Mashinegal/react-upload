// components/AvatarSection.js
import React from "react";
import './AvatarSection.css';

const AvatarSection = () => {
  return (
    <div className="avatar-section">
      <img src={`${process.env.PUBLIC_URL}/avatars/avatar1.png`} alt="User 1" className="avatar" />
      <img src={`${process.env.PUBLIC_URL}/avatars/avatar2.png`} alt="User 2" className="avatar" />
      <img src={`${process.env.PUBLIC_URL}/avatars/avatar3.png`} alt="User 3" className="avatar" />
      <img src={`${process.env.PUBLIC_URL}/avatars/avatar4.png`} alt="User 4" className="avatar" />
    </div>
  );
};

export default AvatarSection;

