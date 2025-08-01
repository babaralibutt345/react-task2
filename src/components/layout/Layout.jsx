// 

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar.jsx";
import TopIcons from "./TopIcons/TopIcons.jsx";
import "./Layout.css";

const Layout = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div
                className="flex-grow-1 p-3"
                style={{
                    marginLeft: "320px",
                    background:
                        "linear-gradient(96.39deg, #F2F7FF -22.45%, #E8F2FF 55.85%, #F2F7FF 150.81%)",
                }}
            >
                <TopIcons />
                <Outlet /> {/* Yaha pages render honge */}
            </div>
        </div>
    );
};

export default Layout;
