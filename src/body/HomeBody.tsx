import React from "react";
import "./HomeBody.css";
import ProfileSection from "../sections/ProfileSection";
import WorkSection from "../sections/WorkSection";
const HomeBody: React.FC = () => {
  return (
    <div className="home-body">
      <ProfileSection />
      <WorkSection />
     <div style={{paddingTop: '200px'}}>
     <p>Atualmente estou buscando entrar em um time para resolver cada vez mais desafios. </p>
     <img src="/bitmap.svg" alt="" />
     </div>
    </div>
  );
};

export default HomeBody;
