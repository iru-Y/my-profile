import './HomeHeader.css'
import '../components/buttons/HeaderButton.css'
import { useState } from "react";
const HomeHeader: React.FC = () =>{

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return (
      

        <div className="homeHeader">
          
          <img src="/header-icon.svg" alt="" style={{width: '100px', height: '100px'}}/>
          
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul className="group-headerButton">
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
        </div>
          
    );
};

export default HomeHeader;