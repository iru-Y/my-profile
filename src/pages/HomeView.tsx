import React from "react";
import HomeHeader from "../header/HomeHeader";
import HomeBody from "../body/HomeBody";

const HomeView: React.FC = () => {
  return (
    <>
      <header>
        <HomeHeader />
      </header>

      <body>
        <HomeBody />
      </body>
    </>
  );
};

export default HomeView;
