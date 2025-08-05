import React from "react";
import StatCard from "../components/dashboard/StatCard/StatCard";
import StatusTable from "../components/dashboard/StatusTable/StatusTable";

const Dashboard = () => {
    const advisorData = [
        ["Marguerite Nicolas", "Marguerite45@gmail.com", "$5,904.12", 58, "11-02-25", "High"],
        ["Terry Upton", "Terry.Upton@gmail.com", "$65,735.69", "04", "22-02-25", "Medium"],
        ["Marlene Kvalis", "Marlene20@yahoo.com", "$852.45", 37, "04-03-25", "High"],
        ["Zachary McLaughlin", "Zachary McLaughlin", "$8,226.98", "Nill", "14-03-25", "Weak"],
        ["Laverne Jasmin", "Laverne199@gmail.com", "$32,646.74", 24, "17-03-25", "High"],
        ["Laverne O’Kon", "Laverne_1@yahoo.com", "$32,646.74", "Nill", "22-03-25", "Weak"],
    ];

    const clientData = [
        ["Marguerite Nicolas", "Marguerite45@gmail.com", "44%", "$5,904.12", "12-02-25", "Generated", "Uploaded"],
        ["Terry Upton", "Terry.Upton@gmail.com", "28%", "$65,735.69", "02-03-25", "Generated", "Pending"],
        ["Marlene Kvalis", "Marlene20@yahoo.com", "32%", "$852.45", "04-03-25", "Generated", "Uploaded"],
        ["Zachary McLaughlin", "Zachary199@gmail.com", "54%", "$8,226.98", "17-03-25", "Generated", "Uploaded"],
        ["Laverne O’Kon", "Laverne_1@yahoo.com", "22%", "$32,646.74", "22-03-25", "Generated", "Uploaded"],
    ];

    return (
        <>
            <div className="row g-3">
                <div className="col-6 col-lg-4 col-xl-4 col-xxl-4">
                    <StatCard title="Total Donations" value="$52,440" week={26} month={120} />
                </div>
                <div className="col-6 col-lg-4 col-xl-4 col-xxl-4">
                    <StatCard title="Total Advisors" value={244} week={26} month={120} />
                </div>
                <div className="col-6 col-lg-4 col-xl-4 col-xxl-4">
                    <StatCard title="Total Clients" value={1520} week={26} month={120} />
                </div>
                <div className="col-6 col-lg-4 col-xl-4 col-xxl-4">
                    <StatCard title="Total Calculations" value={42540} week={26} month={120} />
                </div>
                <div className="col-6 col-lg-4 col-xl-4 col-xxl-4">
                    <StatCard title="Received Checks" value={154} week={26} month={120} />
                </div>
                <div className="col-6 col-lg-4 col-xl-4 col-xxl-4">
                    <StatCard title="Charity Partners" value={2461} week={26} month={120} />
                </div>
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
        </>
    );
};

export default Dashboard;
