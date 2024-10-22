import React from "react";

interface HeaderButtonProps {
    text: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({text}) => {

    return (
        <button className="headerButton" >{text}</button>
    );
};

export default HeaderButton;