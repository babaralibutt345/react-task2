import React from "react";
import {Table} from 'react-bootstrap';

const ProfileCard = ({
    title,
    advisor,
    buttons
}) => {
    return (
        <div className="card shadow-sm p-5 border-0 p-5 mt-3 mb-4 ">
            <div className="d-flex justify-content-between align-items-center pb-3 mb-2 border-bottom">
                <h6 className="">{title}</h6>
                <div className="d-flex gap-2">
                    {buttons && <div className='button-group d-flex gap-2'>{buttons}</div>}
                </div>
            </div>

            <div className="card-body p-0">
                <div className="row">
                    
                    <Table borderless className="mb-0">
                        {/* First Row */}
                        <thead>
                            <tr>
                                <th className="ps-4 fw-normal">Full Name</th>
                                <th className="fw-normal">Email Address</th>
                                <th className="fw-normal">State</th>
                                <th className="fw-normal">City</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="ps-4 fw-normal pt-0">{advisor.name}</td>
                                <td className="fw-normal pt-0">{advisor.email}</td>
                                <td className="fw-normal pt-0">{advisor.state}</td>
                                <td className="fw-normal pt-0">{advisor.city}</td>
                            </tr>

                            {/* Second Row */}
                            <tr>
                                <th className="ps-4 fw-normal pt-5">Firm Name</th>
                                <th className="fw-normal pt-5">Designation</th>
                                <th colSpan="2" className="fw-normal pt-5">Discloser Disclaimer</th>
                            </tr>
                            <tr>
                                <td className="ps-4 fw-normal">{advisor.firmName}</td>
                                <td className="fw-normal">{advisor.designation}</td>
                                <td colSpan="2" className="fw-bold small text-muted">
                                    {advisor.disclaimer}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                {/* <div className="mt-4 pt-3 border-top">
                    <h6 className="text-muted mb-2">Discloser Disclaimer</h6>
                    <p className="text-muted small">{advisor.disclaimer}</p>
                </div> */}
            </div>
        </div>
    );
};

export default ProfileCard;