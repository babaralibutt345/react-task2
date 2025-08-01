import React from "react";
import { NavLink } from "react-router-dom"; // <-- Link ke liye
import "./Sidebar.css";
import logo from "../../../assets/images/logo.png";

const Sidebar = () => {
    const menuItems = [
        { name: "Dashboard", path: "/" },
        { name: "Financial Advisors", path: "/financial-advisors" },
        { name: "Clients", path: "/clients" },
        { name: "Charity Partners", path: "/charity-partners" },
        { name: "Donation Check", path: "/donation-check" },
        { name: "Users", path: "/users" },
        { name: "Roles", path: "/roles" },
    ];

    return (
        <div className="sidebar d-flex flex-column justify-content-between">
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
    );
};

export default Sidebar;
