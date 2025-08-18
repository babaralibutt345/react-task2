import React from "react";
import StatusTable  from "../../components/dashboard/StatusTable/StatusTable";
import CommonButton from '../../components/common/Button/CommonButton';
import ProfileCard from "../../components/ProfileCard";
import { FiMoreVertical } from 'react-icons/fi';
import { FaCircle, FaRegEdit } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';

const ViewAdvisorProfile = () => {
    const { advisorId } = useParams();
    const navigate = useNavigate();

    // This would normally come from an API or context
    // For now, we'll use sample data
    const advisors = [
        {
            advisorId: 1,
            name: "Marguerite Nicolas",
            email: "Marguerite45@gmail.com",
            donations: "$5,904.12",
            clients: "58",
            joiningDate: "11-02-25",
            lastLogin: "12:40",
            taxRate: "44%",
            totalTax: "$5,904.12",
            referredBy: "Louis Borer",
            firmName: "WealthBuild Financial",
            designation: "Senior Financial Advisor",
            state: "California",
            city: "San Francisco",
            disclaimer: "Securities offered through XYZ Broker-Dealer"
        },
        {
            advisorId: 2,
            name: "Terry Upton",
            email: "Terry.Upton@gmail.com",
            donations: "$65,735.69",
            clients: "104",
            joiningDate: "22-02-25",
            lastLogin: "09:15",
            taxRate: "38%",
            totalTax: "$24,979.56",
            referredBy: "Sarah Johnson",
            firmName: "Capital Growth Advisors",
            designation: "Wealth Manager",
            state: "New York",
            city: "Manhattan",
            disclaimer: "Investment advisory services offered separately"
        },
        {
            advisorId: 3,
            name: "Marlene Kuvalis",
            email: "Marlene20@yahoo.com",
            donations: "$8,572.45",
            clients: "37",
            joiningDate: "04-03-25",
            lastLogin: "14:30",
            taxRate: "32%",
            totalTax: "$2,743.18",
            referredBy: "David Miller",
            firmName: "Blue Horizon Financial",
            designation: "Certified Financial Planner",
            state: "Texas",
            city: "Austin",
            disclaimer: "Not FDIC insured"
        },
        {
            advisorId: 4,
            name: "Zachary McLaughlin",
            email: "Zachary19@gmail.com",
            donations: "$8,226.98",
            clients: "42",
            joiningDate: "14-03-25",
            lastLogin: "11:20",
            taxRate: "35%",
            totalTax: "$2,879.44",
            referredBy: "Emily Chen",
            firmName: "Summit Financial Partners",
            designation: "Investment Advisor",
            state: "Illinois",
            city: "Chicago",
            disclaimer: "Past performance not indicative of future results"
        },
        {
            advisorId: 5,
            name: "Lisa Effertz",
            email: "Lisa.Effertz73@gmail.com",
            donations: "$32,646.74",
            clients: "89",
            joiningDate: "17-03-25",
            lastLogin: "16:45",
            taxRate: "28%",
            totalTax: "$9,141.09",
            referredBy: "Robert Wilson",
            firmName: "Pinnacle Wealth Strategies",
            designation: "Financial Consultant",
            state: "Florida",
            city: "Miami",
            disclaimer: "Diversification does not guarantee profit"
        },
        {
            advisorId: 6,
            name: "Garrett Nicolas",
            email: "Garrett90@gmail.com",
            donations: "$18,327.51",
            clients: "31",
            joiningDate: "22-03-25",
            lastLogin: "10:10",
            taxRate: "40%",
            totalTax: "$7,331.00",
            referredBy: "Jennifer Lee",
            firmName: "Horizon Financial Group",
            designation: "Retirement Specialist",
            state: "Washington",
            city: "Seattle",
            disclaimer: "Consult your tax advisor"
        },
        {
            advisorId: 7,
            name: "Lana Kerluke",
            email: "Lana_Kerluke@hotmail.com",
            donations: "$14,892.33",
            clients: "67",
            joiningDate: "05-04-25",
            lastLogin: "13:25",
            taxRate: "33%",
            totalTax: "$4,914.47",
            referredBy: "Michael Brown",
            firmName: "Elite Capital Management",
            designation: "Portfolio Manager",
            state: "Massachusetts",
            city: "Boston",
            disclaimer: "Subject to market risk"
        },
        {
            advisorId: 8,
            name: "Blake Yost",
            email: "Blake_Yost@hotmail.com",
            donations: "$27,531.68",
            clients: "53",
            joiningDate: "12-04-25",
            lastLogin: "15:50",
            taxRate: "39%",
            totalTax: "$10,737.36",
            referredBy: "Amanda Taylor",
            firmName: "Vertex Financial Advisors",
            designation: "Senior Wealth Advisor",
            state: "Colorado",
            city: "Denver",
            disclaimer: "Not a deposit or other obligation"
        },
        {
            advisorId: 9,
            name: "Ashley Dickens",
            email: "Ashley_Dickens@hotmail.com",
            donations: "$9,876.54",
            clients: "28",
            joiningDate: "18-04-25",
            lastLogin: "08:30",
            taxRate: "31%",
            totalTax: "$3,061.73",
            referredBy: "Christopher Martin",
            firmName: "Apex Financial Planning",
            designation: "Financial Analyst",
            state: "Georgia",
            city: "Atlanta",
            disclaimer: "Not guaranteed by any bank"
        },
        {
            advisorId: 10,
            name: "Arnold Waters",
            email: "Arnold.Waters76@hotmail.com",
            donations: "$22,345.67",
            clients: "75",
            joiningDate: "25-04-25",
            lastLogin: "14:15",
            taxRate: "36%",
            totalTax: "$8,044.44",
            referredBy: "Jessica White",
            firmName: "Crestwood Financial",
            designation: "Investment Strategist",
            state: "North Carolina",
            city: "Charlotte",
            disclaimer: "May lose value"
        },
        {
            advisorId: 11,
            name: "Marcella Rippin",
            email: "Marcella.Rippin@yahoo.com",
            donations: "$15,789.01",
            clients: "49",
            joiningDate: "30-04-25",
            lastLogin: "11:45",
            taxRate: "34%",
            totalTax: "$5,368.26",
            referredBy: "Daniel Harris",
            firmName: "Olympus Financial Services",
            designation: "Financial Planner",
            state: "Arizona",
            city: "Phoenix",
            disclaimer: "Not insured by any government agency"
        },
        {
            advisorId: 12,
            name: "Vincent Carter",
            email: "Vincent.Carter@protonmail.com",
            donations: "$29,456.23",
            clients: "82",
            joiningDate: "05-05-25",
            lastLogin: "09:55",
            taxRate: "37%",
            totalTax: "$10,898.81",
            referredBy: "Olivia Thompson",
            firmName: "Vertex Capital Advisors",
            designation: "Chief Investment Officer",
            state: "Pennsylvania",
            city: "Philadelphia",
            disclaimer: "Consult your legal advisor"
        }
    ];

    const advisor = advisors.find(a => a.advisorId === parseInt(advisorId));

    if (!advisor) {
        return <div>Advisor not found</div>;
    }



   const ActionButton = ({ id }) => (
        <button 
        className="btn btn-lg p-0"
        style={{ border: 'none', background: 'transparent' }}
        onClick={() => alert(`More options for ID: ${id}`)}
        >
            <FiMoreVertical />
        </button>
   );

    

   const advisorclients = [
       [
        "Marguerite Nicolas", 
        "Marguerite45@gmail.com", 
        "44%", 
        "$5,904.12", 
        "12-02-25", 
        <ActionButton id="77457" />
    ],

       [
        "Terry Upton", 
        "Terry.Upton@gmail.com", 
        "28%", 
        "$65,735.69", 
        "02-03-25", 
        <ActionButton id="85735" />
    ],

       [
        "Marlene Kuvalis", 
        "Marlene20@yahoo.com", 
        "32%", 
        "$8,572.45", 
        "04-03-25",
        <ActionButton id="01753" />
    ],
       ["Zachary McLaughlin", 
        "Zachary19@gmail.com", 
        "54%", 
        "$8,226.98", 
        "17-03-25",  
        <ActionButton id="12921" />
    ],

       [
        "Laverne O'Kon", 
        "Laver11@yahoo.com", 
        "22%", 
        "$32,646.74", 
        "22-03-25", 
        <ActionButton id="09469" />
    ],

   ];

   const tableButtons = [
       <CommonButton
           key="deactivateprofile"
           text="Deactivate Profile"
           icon={<FaCircle style={{ color:'#F1B44C', fontSize:'18px'}} />}
           bgColor="#FFF5E5"
           textColor="#965F00"
           fontfamily="Proxima Nova"
           size="medium"
           shape="pill"
           onClick={() => alert("Deactivate Profile Button clicked")}
       />,
       <CommonButton
       
           key="editprofile"
           text="Edit Profile"
           icon={<FaRegEdit style={{fontSize:'19px'}} />}
           bgColor="#D6E7FF"
           fontfamily="Proxima Nova"
           textColor="#003276"
           hoverBgColor="#D3E4FF"
           size="medium"
           shape="pill"
           onClick={() => navigate(`/financial-advisors/${advisorId}/edit`)}
       />,
   ];
return (
   <>
        {/* <ProfileCard
            title={`Advisor's Profile`}
            buttons={tableButtons}
            data={[[
                advisor.name,
                advisor.email,
                advisor.donations,
                advisor.clients,
                advisor.joiningDate,
                advisor.lastLogin
            ]]}
            headers={["Full Name", "Email", "Donations", "Total Clients", "Joining Date", "Last Login"]}
       /> */}

       <ProfileCard 
       title={`Advisor's Profile`}
       advisor={advisor}
       buttons={tableButtons}
       onDeactivate={() => alert("Deactivate Profile Button clicked")}
        onEdit={() => navigate(`/financial-advisors/${advisorId}/edit`)}
       
       />

       <StatusTable 
            title="Advisor's Clients"
            headers={["Full Name", "Email", "Inc Tax Rate", "Total Tax", "Date Added", "Action"]}
            data={advisorclients}
       
       />
   </>
);
}



export default ViewAdvisorProfile;
