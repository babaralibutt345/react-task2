import React from 'react';
import './StatusTable.css';

const StatusTable = ({ title, headers, data }) => {
    const getBadge = (value) => {
        switch (value.toLowerCase()) {
            case 'high': return <span className="high-badge">High</span>;
            case 'medium': return <span className="medium-badge">Medium</span>;
            case 'weak': return <span className="weak-badge">Weak</span>;
            case 'pending': return <span className="pending-badge">Pending</span>;
            case 'uploaded': return <span className="uploaded-badge">Uploaded</span>;
            case 'generated': return <span className="generated-badge">Generated</span>;
            default: return value;
        }
    };

    return (
        <div className="card p-5 mt-4 shadow-sm">
            <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-2">
                <h6>{title}</h6>
                <a href="#" className='text-decoration-none view-all-btn'>View All</a>
            </div>
            <div className="table-responsive">
                <table className="table table-borderless m-0">
                    <colgroup>
                        {headers.map((_, i) => (
                            <col key={i} style={{ width: `${100/headers.length}%` }} />
                        ))}
                    </colgroup>
                    <thead>
                        <tr>
                            {headers.map((h, i) => (
                                <th 
                                    key={i}
                                    className="px-1 py-3 text-nowrap table-header"
                                    style={{ fontFamily:'Open Sans'}}
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
                                        className="px-1 py-3 tab-content"
                                    >
                                        {typeof cell === 'string' && ['high', 'medium', 'weak', 'pending', 'uploaded', 'generated'].includes(cell.toLowerCase()) ? getBadge(cell) : cell}
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