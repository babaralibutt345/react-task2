import React from "react";
import StatusTable from "../../components/dashboard/StatusTable/StatusTable";
import CommonButton from  '../../components/common/Button/CommonButton';
import { Link } from "react-router-dom";
import { FiPlus, FiSearch, FiSliders } from 'react-icons/fi';

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

    const tableButtons = [
        <Link to = 'add'>
        <CommonButton
            key="add"
            text="Add New Financial Advisor"
            icon={<FiPlus />}
            bgColor="#E7F0FF"
            textColor="#2D5DD0"
            hoverBgColor="#D3E4FF"
            size="medium"
            shape="pill"
        />
        </Link>,
        <CommonButton
            key="search"
            icon={<FiSearch />}
            bgColor="#E7F0FF"
            textColor="#2D5DD0"
            hoverBgColor="#D3E4FF"
            size="medium"
            shape="round"
            onClick={() => alert("Search clicked")}
        />,
        <CommonButton
            key="settings"
            icon={<FiSliders />}
            bgColor="#E7F0FF"
            textColor="#2D5DD0"
            hoverBgColor="#D3E4FF"
            size="medium"
            shape="round"
            onClick={() => alert("Settings clicked")}
        />
    ];

    return (
        <>


            <StatusTable
                title="Financial Advisors"
                headers={["Full Name", "Email", "Donations", "Total Clients", "Joining Date", "Last Login", "Action"]}
                data={advisorData}
                buttons={tableButtons}
            />
        </>
    );
};

export default Dashboard;
