import React from "react";
import './CommonButton.css';

const CommonButton = ({
    text,
    icon,
    onClick,
    bgColor = '#E7F0FF',
    textColor = '#2D5DD0',
    hoverBgColor = '#D3E4FF',
    size = 'medium', // small, medium, large
    shape = 'pill', // pill, round, square
}) => {
    return (
        <button
            className={`common-btn ${size} ${shape}`}
            style={{
                backgroundColor: bgColor,
                color:textColor,
            }}
            onClick={onClick}
            onMouseEnter={(e) => (e.target.style.backgroundColor = hoverBgColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = bgColor)}
        >
            {icon && <span className="btn-icon">{icon}</span>}
            {text && <span className="btn-text">{text}</span>}

        </button>
    );
};

export default CommonButton;
