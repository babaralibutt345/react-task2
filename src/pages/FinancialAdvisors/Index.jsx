import React from "react";
import StatusTable from "../../components/dashboard/StatusTable/StatusTable";
import CommonButton from  '../../components/common/Button/CommonButton';
import { Link, useNavigate } from "react-router-dom";
import { FiPlus, FiSearch, FiSliders } from 'react-icons/fi';

const Dashboard = () => {
    const navigate = useNavigate();
    // const advisorData = [
    //     ["Marguerite Nicolas", "Marguerite45@gmail.com", "$5,904.12", "58", "11-02-25", "12:40", "View Profile"],
    //     ["Terry Upton", "Terry.Upton@gmail.com", "$65,735.69", "04", "22-02-25", "12:40", "View Profile"],
    //     ["Marlene Kuvalis", "Marlene20@yahoo.com", "$852.45", "37", "04-03-25", "12:40", "View Profile"],
    //     ["Zachary McLaughlin", "Zachary McLaughlin", "$8,226.98", "Nill", "14-03-25", "12:40", "View Profile"],
    //     ["Lisa Effertz", "Lisa.Effertz73@gmail.com", "$32,646.74", "24", "17-03-25", "12:40", "View Profile"],
    //     ["Garrett Nicolas", "Garrett90@gmail.com", "$32,646.74", "Nill", "22-03-25", "12:40", "View Profile"],
    //     ["Lana Kerluke", "Lana_Kerluke@hotmail.com", "$32,646.74", "24", "17-03-25", "12:40", "View Profile"],
    //     ["Blake Yost", "Blake_Yost@hotmail.com", "$32,646.74", "Nill", "22-03-25", "12:40", "View Profile"],
    //     ["Ashley Dickens", "Ashley_Dickens@hotmail.com", "$32,646.74", "24", "17-03-25", "12:40", "View Profile"],
    //     ["Arnold Waters", "Arnold.Waters76@hotmail.com", "$32,646.74", "Nill", "22-03-25", "12:40", "View Profile"],
    //     ["Marcella Rippin", "Marcella.Rippin@yahoo.com", "$32,646.74", "Nill", "22-03-25", "12:40", "View Profile"],
    //     ["Marcella Rippin", "Marcella.Rippin@yahoo.com", "$32,646.74", "Nill", "22-03-25", "12:40", "View Profile"]
    // ];

    const advisorData = [
        {
            id: 1,
            name: "Marguerite Nicolas",
            email: "Marguerite45@gmail.com",
            donations: "$5,904.12",
            clients: "58",
            joiningDate: "11-02-25",
            lastLogin: "12:40",
            action: "View Profile"
        },
        {
            id: 2,
            name: "Terry Upton",
            email: "Terry.Upton@gmail.com",
            donations: "$65,735.69",
            clients: "04",
            joiningDate: "22-02-25",
            lastLogin: "12:40",
            action: "View Profile"
        },
        {
            id: 3,
            name: "Marlene Kuvalis",
            email: "Marlene20@yahoo.com",
            donations: "$852.45",
            clients: "37",
            joiningDate: "04-03-25",
            lastLogin: "12:40",
            action: "View Profile"
        },
        {
            id: 4,
            name: "Zachary McLaughlin",
            email: "Zachary McLaughlin",
            donations: "$8,226.98",
            clients: "Nill",
            joiningDate: "14-03-25",
            lastLogin: "12:40",
            action: "View Profile"
        },
        {
            id: 5,
            name: "Lisa Effertz",
            email: "Lisa.Effertz73@gmail.com",
            donations: "$32,646.74",
            clients: "24",
            joiningDate: "17-03-25",
            lastLogin: "12:40",
            action: "View Profile"
        },
        {
            id: 6,
            name: "Garrett Nicolas",
            email: "Garrett90@gmail.com",
            donations: "$32,646.74",
            clients: "Nill",
            joiningDate: "22-03-25",
            lastLogin: "12:40",
            action: "View Profile"
        },
        {
            id: 7,
            name: "Lana Kerluke",
            email: "Lana_Kerluke@hotmail.com",
            donations: "$32,646.74",
            clients: "24",
            joiningDate: "17-03-25",
            lastLogin: "12:40",
            action: "View Profile"
        },
        {
            id: 8,
            name: "Blake Yost",
            email: "Blake_Yost@hotmail.com",
            donations: "$32,646.74",
            clients: "Nill",
            joiningDate: "22-03-25",
            lastLogin: "12:40",
            action: "View Profile"
        },
        {
            id: 9,
            name: "Ashley Dickens",
            email: "Ashley_Dickens@hotmail.com",
            donations: "$32,646.74",
            clients: "24",
            joiningDate: "17-03-25",
            lastLogin: "12:40",
            action: "View Profile"
        },
        {
            id: 10,
            name: "Arnold Waters",
            email: "Arnold.Waters76@hotmail.com",
            donations: "$32,646.74",
            clients: "Nill",
            joiningDate: "22-03-25",
            lastLogin: "12:40",
            action: "View Profile"
        },
        {
            id: 11,
            name: "Marcella Rippin",
            email: "Marcella.Rippin@yahoo.com",
            donations: "$32,646.74",
            clients: "Nill",
            joiningDate: "22-03-25",
            lastLogin: "12:40",
            action: "View Profile"
        },
        {
            id: 12,
            name: "Marcella Rippin",
            email: "Marcella.Rippin@yahoo.com",
            donations: "$32,646.74",
            clients: "Nill",
            joiningDate: "22-03-25",
            lastLogin: "12:40",
            action: "View Profile"
        }
    ];

    // Convert to array format for table and add View Profile button
    const tableData = advisorData.map(advisor => [
        advisor.name,
        advisor.email,
        advisor.donations,
        advisor.clients,
        advisor.joiningDate,
        advisor.lastLogin,
        <button
            key={advisor.id}
            className=""
            style={{
                backgroundColor:'#ECF7FF',
                color: '#014FB9',
                border: 'none',
                borderRadius:'40px',
                padding:'6px 12px',
                fontWeight:'600',
                fontSize:'14px',
                cursor:'pointer',
            }}
            onClick={() => navigate(`/financial-advisors/${advisor.id}`)}
        >
            View Profile
        </button>
    ]);


    const tableButtons = [
        <Link to = 'add'>
        <CommonButton
            key="add"
            text="Add New Financial Advisor"
            icon={<FiPlus />}
            bgColor={'#D6E7FF'}
            textColor="#003276"
            hoverBgColor="#D3E4FF"
            size="medium"
            shape="pill"
        />
        </Link>,
        <CommonButton
            key="search"
            icon={<FiSearch />}
            bgColor={'#D6E7FF'}
            textColor="#003276"
            hoverBgColor="#D3E4FF"
            size="medium"
            shape="round"
            onClick={() => alert("Search clicked")}
        />,
        <CommonButton
            key="settings"
            icon={<FiSliders />}
            bgColor={'#D6E7FF'}
            textColor="#003276"
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
                data={tableData}
                buttons={tableButtons}
            />
        </>
    );
};

export default Dashboard;
