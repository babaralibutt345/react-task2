import React from "react";
import StatusTable from "../../components/dashboard/StatusTable/StatusTable";
import CommonButton from '../../components/common/Button/CommonButton'
import { FiPlus, FiSearch, FiSliders, FiMoreVertical } from 'react-icons/fi';

const Dashboard = () => {
    const ActionButton = ({ id }) => (
        <button
            className="btn btn-lg p-0 "
            style={{ border: 'none', background: 'transparent' }}
            onClick={() => alert(`More options for ID: ${id}`)}
        >
            <FiMoreVertical />
        </button>
    );
    const advisorData = [
        ["77457", "Marguerite Nicolas", "Marguerite45@gmail.com", "44%", "$5,904.12", "Louis Borer", "12-02-25", "Success", "View", <ActionButton id="77457" /> ],
        ["85735", "Terry Upton", "Terry.Upton@gmail.com", "28%", "$65,735.69", "Latoya Kris", "02-03-25", "In-Process", "View", <ActionButton id="85735" />],
        ["01753", "Marlene Kuvalis", "Marlene20@yahoo.com", "32%", "$8,572.45", "William Stokes", "04-03-25", "Success", "View", <ActionButton id= "01753" />],
        ["12921", "Zachary McLaughlin", "Zachary19@gmail.com", "54%", "$8,226.98", "Joyce Corwin-Glover", "17-03-25", "Pending Review", "View", <ActionButton id="12921" />],
        ["09469", "Laverne O'Kon", "Laver11@yahoo.com", "22%", "$32,646.74", "Irving Wunsch", "22-03-25", "In-Process", "View", <ActionButton id="09469" />],
        ["83632", "Vivian Kertzmann", "Vivian39@yahoo.com", "22%", "$46,993.89", "Rebecca Zieme", "14-03-25", "Active", "View", <ActionButton id="83632" />],
        ["37366", "Lowell Borer", "Lowell120@hotmail.com", "22%", "$43,401.70", "Homer Beahan", "22-03-25", "Awaiting Checks", "View", <ActionButton id="37366" />],
        ["82966", "Isabel Gutkowski", "Isabel62@hotmail.com", "22%", "$63,455.24", "Mae Kessler", "16-04-25", "In-Process", "View", <ActionButton id="82966" />],
        ["77258", "Victor Barton", "Victor.Bart@hotmail.com", "22%", "$42,428.25", "Felix Purdy", "24-06-25", "Pending Review", "View", <ActionButton id="77258" />],
        ["65482", "Jane Feest", "Jane54@hotmail.com", "22%", "$51,480.84", "Lorraine Koeipin", "07-09-25", "Awaiting Checks", "View", <ActionButton id="65482" />],
        ["65482", "Jane Feest", "Jane54@hotmail.com", "22%", "$51,480.84", "Lorraine Koeipin", "07-09-25", "Active", "View", <ActionButton id="65482" />]
    ];
    

    const tableButtons = [
        <CommonButton
            key="add"
            text="Add New Client"
            icon={<FiPlus />}
            bgColor="#E7F0FF"
            textColor="#2D5DD0" 
            hoverBgColor="#D3E4FF"
            size="medium"
            shape="pill"
            onClick={() => alert("Add clicked")}
        />,
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
                title="My Clients"
                headers={["ID", "Ful Name", "E-mail", "Inc Tax Rate", "Total Tax", "Advisor", "Date Added", "Status", "QCD Report", "Action"]}
                data={advisorData}
                buttons={tableButtons}
            />
        </>
    );
};

export default Dashboard;
