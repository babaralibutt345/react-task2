import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // <-- Link ke liye
import "./Sidebar.css";
import logo from "../../../assets/images/logo.png";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        { name: "Dashboard", path: "/" },
        { name: "Financial Advisors", path: "/financial-advisors" },
        { name: "Clients", path: "/clients" },
        { name: "Charity Partners", path: "/charity-partners" },
        { name: "Donation Check", path: "/donation-check" },
        { name: "Users", path: "/users" },
        { name: "Roles", path: "/roles" },
    ];

    // Close sidebar on window resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) setIsOpen(true);
            else setIsOpen(false);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {/* Hamburger Button */}
            <button
                className="hamburger-btn d-xl-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>
            <div className={`sidebar d-flex flex-column justify-content-between ${isOpen ? "open" : ""}`}>
            <div>
                <div className="logo p-4">
                    <img src={logo} alt="Logo" width={193} height={40} />
                </div>
                <ul className="nav flex-column px-1 py-4 gap-3">
                    {menuItems.map((item, idx) => (
                        <li className="nav-item px-4" key={idx}>
                            <NavLink
                                to={item.path}
                                end
                                className={({ isActive }) =>
                                    `nav-link sidebar-link text-white ${isActive ? "active" : ""}`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="px-4 pb-2 sidebar-footer">
                <p className="text-decoration-underline my-1 text-white text">
                    Contact Support
                </p>
                <p className="text-decoration-underline my-1 text-white text">
                    Privacy Policy
                </p>
                <p className="text-decoration-underline my-1 text-white text">
                    Terms and Conditions
                </p>
                <p className="pt-4 text-decoration-none text-white text1">
                    © 2025 charitydirect LLC. All rights reserved.
                </p>
            </div>
        </div>
        </>
    );
};

export default Sidebar;
