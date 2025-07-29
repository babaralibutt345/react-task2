import React from 'react';
import './Sidebar.css';
import logo from '../assets/logo.png';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-start">
            <div>
                <div className="logo p-4">
                    <img src={logo} alt="" width={193} height={40} />
                </div>
                <ul className="nav flex-column px-1 py-4 gap-3">
                    <li className="nav-item px-4">
                        <a href="#" className="nav-link text-white sidebar-link active">Dashboard</a>
                    </li>
                    <li className="nav-item px-4">
                        <a href="#" className="nav-link sidebar-link text-white">Financial Advisors</a>
                    </li>
                    <li className="nav-item px-4 text-white">
                        <a href="#" className="nav-link sidebar-link text-white">Clients</a>
                    </li>
                    <li className="nav-item px-4 text-white">
                        <a href="#" className="nav-link sidebar-link text-white">Charity Partners</a>
                    </li>
                    <li className="nav-item px-4 text-white">
                        <a href="#" className="nav-link sidebar-link text-white">Donation Check</a>
                    </li>
                    <li className="nav-item px-4 text-white">
                        <a href="#" className="nav-link sidebar-link text-white">Users</a>
                    </li>
                    <li className="nav-item px-4 text-white">
                        <a href="#" className="nav-link sidebar-link text-white">Roles</a>
                    </li>
                </ul>
            </div>
            <div className="px-4 pb-2 sidebar-footer">
                <p className='text-decoration-underline my-1 text-white text'>Contact Support</p>
                <p className='text-decoration-underline my-1 text-white text'>Privacy Policy</p>
                <p className='text-decoration-underline my-1 text-white text'>Terms and Conditions</p>
                <p className="pt-4 text-decoration-none text-white text1">© 2025 charitydirect LLC. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Sidebar;