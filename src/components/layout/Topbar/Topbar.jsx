import React from 'react';
import './Topbar.css'; // Assuming you have a CSS file for styling

const Topbar = () => {
    return (
        <div className="d-flex justify-content-end gap-3 pt-4 pb-4">
            <div className="icon-wrapper" style={{ padding: '12px' }}><i className="fa-solid fa-gear"></i></div>
            <div className="icon-wrapper" style={{ padding: '12px' }}><i className="far fa-bell fa-lg"></i></div>
            <div className="icon-wrapper" style={{ padding: '12px' }}><i className="fa-regular fa-user"></i></div>
        </div>
    );
};



export default Topbar;