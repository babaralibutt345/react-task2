import React from 'react';
import Statgraph from '../assets/statgraph.png'; // Assuming you have a sample image for the StatCard
import './StatCard.css'; // Assuming you have a CSS file for styling the StatCard   

const StatCard = ({ title, value, week, month }) => {
    return (
        <div className="card p-5 shadow-sm">
            <div className="d-flex justify-content-between align-items-end">
                <div>
                    <h6>{title}</h6>
                    <h4>{value}</h4>
                    <div className="text-muted small pt-4">
                        <p className='m-0'>Past Week: <span style={{ color: '#4D98FF', fontWeight: 400}}> {week} </span></p>
                        <p className='m-0'>This Month: <span style={{ color: '#4D98FF', fontWeight: 400 }}>{month}</span></p>
                    </div>
                </div>
                {/* Right: Image */}
                <div>
                    <img
                        src={Statgraph}
                        alt="icon"
                        className='img-fluid'
                        style={{ width: '166px', height: '73px', objectFit: 'contain' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default StatCard;