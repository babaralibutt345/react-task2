import React from "react";
import StatCard from "../../components/dashboard/StatCard/StatCard";
import StatusTable from "../../components/dashboard/StatusTable/StatusTable";

const Dashboard = () => {
    const advisorData = [
        ["Marguerite Nicolas", "Marguerite45@gmail.com", "$5,904.12", "58", "11-02-25", "12:40", "View Profile"],
        ["Terry Upton", "Terry.Upton@gmail.com", "$65,735.69", "04", "22-02-25", "12:40", "View Profile"],
        ["Marlene Kuvalis", "Marlene20@yahoo.com", "$852.45", "37", "04-03-25", "12:40", "View Profile"],
        ["Zachary McLaughlin", "Zachary McLaughlin", "$8,226.98", "Nill", "14-03-25", "12:40", "View Profile"],
        ["Lisa Effertz", "Lisa.Effertz73@gmail.com", "$32,646.74", "24", "17-03-25", "12:40", "View Profile"],
        ["Garrett Nicolas", "Garrett90@gmail.com", "$32,646.74", "Nill", "22-03-25", "12:40", "View Profile"],
        ["Lana Kerluke", "Lana_Kerluke@hotmail.com", "$32,646.74", "24", "17-03-25", "12:40", "View Profile"],
        ["Blake Yost", "Blake_Yost@hotmail.com", "$32,646.74", "Nill", "22-03-25", "12:40", "View Profile"],
        ["Ashley Dickens", "Ashley_Dickens@hotmail.com", "$32,646.74", "24", "17-03-25", "12:40", "View Profile"],
        ["Arnold Waters", "Arnold.Waters76@hotmail.com", "$32,646.74", "Nill", "22-03-25", "12:40", "View Profile"],
        ["Marcella Rippin", "Marcella.Rippin@yahoo.com", "$32,646.74", "Nill", "22-03-25", "12:40", "View Profile"],
        ["Marcella Rippin", "Marcella.Rippin@yahoo.com", "$32,646.74", "Nill", "22-03-25", "12:40", "View Profile"]
    ];

    return (
        <>


            <StatusTable
                title="Financial Advisors"
                headers={["Full Name", "Email", "Donations", "Total Clients", "Joining Date", "Last Login", "Action"]}
                data={advisorData}
            />
        </>
    );
};

export default Dashboard;
