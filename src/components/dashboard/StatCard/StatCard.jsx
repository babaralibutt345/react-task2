import React from 'react';// Assuming you have a sample image for the StatCard
import './StatCard.css'; // Assuming you have a CSS file for styling the StatCard   
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from 'chart.js';

// Register chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const StatCard = ({ title, value, week, month }) => {
    const chartData = {
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        datasets: [
            {
                label: 'Stat Data',
                data: [10, 14, 6, 12, 14, 10, 12, 8],
                backgroundColor: [
                    '#d6e6ff', '#d6e6ff', '#d6e6ff', '#d6e6ff',
                    '#4da3ff', '#d6e6ff', '#d6e6ff', '#d6e6ff'
                ],
                borderRadius: 10,
                barThickness: 10
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                display: false
            },
            x: {
                display: false
            }
        }
    };
    
    return (
        <div className="card pt-5 pb-5 ps-4 pe-4 m-1 border-0" style={{ boxShadow:'0px 0px 10px 1px rgba(1, 79, 185, 0.05)'}}>
            <div className="d-flex justify-content-between align-items-end" >
                <div className='card-text'>
                    <h6 className='text-nowrap'>{title}</h6>
                    <h4 className='text-nowrap'>{value}</h4>
                    <div className="text-muted small pt-4">
                        <p className='m-0'>Past Week: <span style={{ color: '#4D98FF', fontWeight: 500}}> {week} </span></p>
                        <p className='m-0'>This Month: <span style={{ color: '#4D98FF', fontWeight: 500 }}>{month}</span></p>
                    </div>
                </div>
                {/* Right: Bar Chart Instead of Image */}
                <div style={{ width: '166px', height:'73px' }}>
                    <Bar data={chartData} options={chartOptions} />
                </div>
            </div>
        </div>
    );
};

export default StatCard;