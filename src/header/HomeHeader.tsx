import HeaderButton from "../components/buttons/HeaderButton"
import './HomeHeader.css'
import '../components/buttons/HeaderButton.css'
const HomeHeader: React.FC = () =>{
    return (
        <div className="homeHeader">
          <img src="src/assets/header-icon.svg" alt="" />
          <div className="group-headerButton">
          <HeaderButton text="Início"/>      
          <HeaderButton text="Sobre"/>
          <HeaderButton text="Contato"/>
          </div>
        </div>
          
    );
};

export default HomeHeader;