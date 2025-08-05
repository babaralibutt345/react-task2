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
        maintainAspectRatio: false,
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
            },
            
        },
        layout: {
            padding: 0
        },
    };
    
    return (
        <div className="card pt-5 pb-5 pb-xl-4 pb-xxl-5 pt-xl-4 pt-xxl-5 p ps-4 ps-xl-1 ps-xxl-4 pe-4 pe-xl-1 pe-xxl-4 m-1 border-0" style={{ boxShadow:'0px 0px 10px 1px rgba(1, 79, 185, 0.05)'}}>
            <div className=" card-div" >
                <div className='card-text d-flex flex-column align-items-start align-items-xl-center align-items-xxl-start'>
                    <h6 className='text-nowrap'>{title}</h6>
                    <h4 className='text-nowrap'>{value}</h4>
                    
                </div>
                <div className='d-flex flex-row justify-content-between flex-xl-column flex-xxl-row align-items-center'>
                <div className="text-muted small pt-4 order-0 order-xl-1 order-xxl-0">
                    <p className='m-0 text-nowrap'>Past Week: <span style={{ color: '#4D98FF', fontWeight: 500 }}> {week} </span></p>
                    <p className='m-0 text-nowrap'>This Month: <span style={{ color: '#4D98FF', fontWeight: 500 }}>{month}</span></p>
                </div>
                {/* Right: Bar Chart Instead of Image */}
                    <div className=' mt-0 mt-xl-4 mt-xxl-0 order-1 order-xl-0 order-xxl-1' style={{ width: 'clamp(120px, 110.8px + 2.875vw, 166px)', height:'clamp(50px, 45.4px + 1.4375vw, 73px)'}}>
                    <Bar data={chartData} options={chartOptions} />
                </div>
                </div>
            </div>
        </div>
    );
};

export default StatCard;