import React from "react";
import './HeaderButton.css'
interface HeaderButtonProps {
    text: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({text}) => {

    return (
        <button className="headerButton" >{text}</button>
    );
};

export default HeaderButton;