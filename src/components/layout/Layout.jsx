// 
import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar.jsx";
import TopIcons from "./Topbar/Topbar.jsx";
import "./Layout.css";

const Layout = () => {
    return (
        <div className="layout-wrapper">
            <Sidebar />
            <div className="content-wrapper">
                <TopIcons />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
