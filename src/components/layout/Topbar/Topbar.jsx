import React from 'react';
import './Topbar.css'; // Assuming you have a CSS file for styling
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import NotificationItem from "../../common/NotificationItem/NotificationItem";

const Topbar = () => {
    // Example notifications
    const notifications = [
        { name: "Alex James", message: "Added By Albert Diagu", time: "5 Mins Ago", link: "New Client" },
        { name: "Gomez Alioa", message: "Completed QCD Report", time: "10 Mins Ago" },
        { name: "Alex Goarge", message: "Uploaded Donation Check Image", time: "10 Mins Ago" },
        { name: "Alex Goarge", message: "Signed Up", time: "10 Mins Ago", link: "New Advisor" },
        { name: "Alex James", message: "Added By Albert Diagu", time: "12 Mins Ago", link: "New Client" },
        { name: "Martin Jarel", message: "Generated QCD Report", time: "15 Mins Ago" },
        { name: "Philip Kaardi", message: "Uploaded Donation Check Image", time: "18 Mins Ago" },
        { name: "Josh Belter", message: "Signed Up", time: "22 Mins Ago", link: "New Advisor" },
        { name: "Justin Ford", message: "Created a New Client", time: "48 Mins Ago" }
    ];

    return (
        <div className="d-flex justify-content-end gap-3 pt-4 pb-4">
            <div className="icon-wrapper" style={{ padding: '12px' }}>
                <i className="fa-solid fa-gear"></i>
            </div>

            {/* <div className="icon-wrapper" style={{ padding: '12px' }}>
                <i className="far fa-bell fa-lg"></i>
            </div> */}
            
            {/* Notifications Dropdown */}
            <Dropdown align="end">

                <Dropdown.Toggle variant='light' className='icon-wrapper p-3 border-0'>
                    <i className="far fa-bell fa-lg"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ width: "750px", maxHeight: "550px", overflowY: "auto" }}>
                        {notifications.slice(0, 9).map((n,index) => (
                            <NotificationItem
                                key = {index}
                                name = {n.name}
                                message = {n.message}
                                time = {n.time}
                                link={n.link}
                            />
                        ))}
                        <div className="text-center">
                            <button className="btn btn-primary w-100 mt-2">
                                View All Notifications
                            </button>
                        </div>
                </Dropdown.Menu>
            </Dropdown>


            <div className="icon-wrapper" style={{ padding: '12px' }}>
                <i className="fa-regular fa-user"></i>
            </div>
        </div>
    );
};



export default Topbar;