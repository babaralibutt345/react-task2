import React from 'react';
import './StatusTable.css';

const StatusTable = ({ title, headers, data, view, buttons }) => {
    const getBadge = (value) => {
        switch (value.toLowerCase()) {
            case 'high': return <span className="high-badge">High</span>;
            case 'medium': return <span className="medium-badge">Medium</span>;
            case 'weak': return <span className="weak-badge">Weak</span>;
            case 'pending': return <span className="pending-badge">Pending</span>;
            case 'uploaded': return <span className="uploaded-badge">Uploaded</span>;
            case 'generated': return <span className="generated-badge">Generated</span>; 
            case 'view profile': return <span className='profile-badge'>View Profile</span>
            case 'success' : return <span className='success-badge'>Success</span>
            case 'in-process': return <span className='in-process-badge'>In-Process</span>
            case 'pending review': return <span className='pending-review-badge'>Pending Review</span>
            case 'active': return <span className='active-badge'>Active</span>
            case 'awaiting checks': return <span className='awaiting-checks'>Awaiting Checks</span>
            case 'view': return <span className='view'>View</span>
            default: return value;
        }
    };


    return (
        <div className="card p-5 mt-3 mb-4 shadow-sm border-0">
            <div className="d-flex justify-content-between align-items-center pb-3 mb-2" style={{ borderBottom: '1px solid #D6E7FF' }}>
                <h6>{title}</h6>
                {view && <a href="#" className='text-decoration-none view-all-btn'>{view}</a>}
                {buttons && <div className='button-group d-flex gap-2'>{buttons}</div>}
                
            </div>
            <div className="status-table-wrapper">
                <table className=" table-borderless overflow-x-auto">
                    <colgroup>
                        {headers.map((_, i) => (
                            <col key={i} style={{ width: `${120 / headers.length}%` }} />
                        ))}
                    </colgroup>
                    <thead>
                        <tr>
                            {headers.map((h, i) => (
                                <th
                                    key={i}
                                    className="px-1 py-3 text-nowrap table-header"
                                    style={{ fontFamily: 'Open Sans' }}
                                >
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) => (
                            <tr key={i}>
                                {row.map((cell, j) => (
                                    <td
                                        key={j}
                                        className="px-1 py-3 tab-content text-nowrap"
                                    >
                                        {typeof cell === 'string' && ['high', 'medium', 'weak', 'pending', 'uploaded', 'generated', 'view profile', 'success', 'in-process', 'pending review' , 'active' , 'awaiting checks', 'view'].includes(cell.toLowerCase()) ? getBadge(cell) : cell}
                                    </td>
                                    
                                ))}
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StatusTable;