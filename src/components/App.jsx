import React from 'react';
import Sidebar from './Sidebar';
import TopIcons from './TopIcons';
import StatCard from './StatCard';
import StatusTable from './StatusTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const App = () => {
  const advisorData = [
    ['Marguerite Nicolas', 'Marguerite45@gmail.com', '$5,904.12', 58, '11-02-25', 'High'],
    ['Terry Upton', 'Terry.Upton@gmail.com', '$65,735.69', '04', '22-02-25', 'Medium'],
    ['Marlene Kvalis', 'Marlene20@yahoo.com', '$852.45', 37, '04-03-25', 'High'],
    ['Zachary McLaughlin', 'Zachary McLaughlin', '$8,226.98', 'Nill', '14-03-25', 'Weak'],
    ['Laverne Jasmin', 'Laverne199@gmail.com', '$32,646.74', 24, '17-03-25', 'High'],
    ['Laverne O’Kon', 'Laverne_1@yahoo.com', '$32,646.74', 'Nill', '22-03-25', 'Weak']
  ];

  const clientData = [
    ['Marguerite Nicolas', 'Marguerite45@gmail.com', '44%', '$5,904.12', '12-02-25', 'Generated', 'Uploaded'],
    ['Terry Upton', 'Terry.Upton@gmail.com', '28%', '$65,735.69', '02-03-25', 'Generated', 'Pending'],
    ['Marlene Kvalis', 'Marlene20@yahoo.com', '32%', '$852.45', '04-03-25', 'Generated', 'Uploaded'],
    ['Zachary McLaughlin', 'Zachary199@gmail.com', '54%', '$8,226.98', '17-03-25', 'Generated', 'Uploaded'],
    ['Laverne O’Kon', 'Laverne_1@yahoo.com', '22%', '$32,646.74', '22-03-25', 'Generated', 'Uploaded']
  ];

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1 bg-light p-2" style={{ marginLeft: '320px' }}>
        <div className="container-fluid px-3">
        <TopIcons />
          <div className="row g-4" style={{ backgroundColor:'#E9F3FF03' }}>
          <div className="col-md-4"><StatCard title="Total Donations" value="$52,440" week={26} month={120} /></div>
          <div className="col-md-4"><StatCard title="Total Advisors" value={244} week={26} month={120} /></div>
          <div className="col-md-4"><StatCard title="Total Clients" value={1520} week={26} month={120} /></div>
          <div className="col-md-4"><StatCard title="Total Calculations" value={42540} week={26} month={120} /></div>
          <div className="col-md-4"><StatCard title="Received Checks" value={154} week={26} month={120} /></div>
          <div className="col-md-4"><StatCard title="Charity Partners" value={2461} week={26} month={120} /></div>
        </div>
        <StatusTable
          title="Advisors Status"
          headers={["Full Name", "Email", "Donations", "Clients", "Joining Date", "Status"]}
          data={advisorData}
        />
        <StatusTable
          title="Clients Status"
          headers={["Full Name", "E-mail", "Inc Tax Rate", "Total Tax", "Date Added", "QCD Report", "Donation Check"]}
          data={clientData}
        />
      </div>
      </div>
    </div>
  );
};

export default App;