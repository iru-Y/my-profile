import React from "react";
import "./HomeBody.css";
import ProfileSection from "../sections/ProfileSection";
import WorkSection from "../sections/WorkSection";
const HomeBody: React.FC = () => {
  return (
    <div className="home-body">
      <ProfileSection />
      <WorkSection />
    </div>
  );
};

export default HomeBody;
