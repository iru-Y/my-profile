import React from "react";
import "./HomeBody.css";
import ProfileSection from "../sections/ProfileSection";
const HomeBody: React.FC = () => {
  return (
    <div className="home-body">
      <ProfileSection />
    </div>
  );
};

export default HomeBody;
