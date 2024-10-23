import React from "react";
import HomeHeader from "../header/HomeHeader";
import HomeBody from "../body/HomeBody";
import HomeFooter from "../footer/HomeFooter";

const HomeView: React.FC = () => {
  return (
    <>
      <header>
        <HomeHeader />
      </header>

      <body>
        <HomeBody />
      </body>
      <footer>
        <HomeFooter/>
      </footer>
    </>
  );
};

export default HomeView;
