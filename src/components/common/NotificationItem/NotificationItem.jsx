import React from "react";
import PropTypes from "prop-types";


const NotificationItem = ({name, time}) => {
    return (
        <div className="p-2 m-3 border-bottom" style={{ border: '1px solid red' }}>
            <div className="card-div">
                <div className="card-text d-flex justify-content-between">
                    <span className="fw-bold">{name }</span>
                    <div>
                    <span className="small text-muted">{time}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

NotificationItem.PropTypes = {
    name: PropTypes.string.isRequired,
    message:PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    link: PropTypes.string
}
export default NotificationItem;
