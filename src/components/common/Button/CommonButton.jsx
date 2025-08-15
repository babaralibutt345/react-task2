import React from "react";
import './CommonButton.css';

const CommonButton = ({
    text,
    icon,
    onClick,
    bgColor,
    textColor,
    hoverBgColor,
    size, // small, medium, large
    shape, // pill, round, square
}) => {
    return (
        <button
            className={`common-btn ${size} ${shape}`}
            style={{
                background: bgColor,
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
