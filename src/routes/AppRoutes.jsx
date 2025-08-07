import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

// ===== Auth Pages =====
import RegisterForm from "../pages/auth/RegisterForm";
import EmailOtp from "../pages/auth/EmailOtp";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

// ======== Dashboard Pages ======
import Dashboard from "../pages/Dashboard/Dashboard";

// ======== Financial Advisors Pages =====
import FinancialAdvisorsIndex from "../pages/FinancialAdvisors/Index";
import AddNewAdvisor from "../pages/FinancialAdvisors/AddNew";
import ViewAdvisorProfile from "../pages/FinancialAdvisors/ViewProfile";
import EditAdvisorProfile from "../pages/FinancialAdvisors/EditProfile";

// ==== Clients Pages ======
import ClientsIndex from "../pages/Clients/Index";
import AddNewClient from "../pages/Clients/AddNewClient";
import ViewClientProfile from "../pages/Clients/ViewProfile";
import QdcDashboard from "../pages/Clients/QdcDashboard";
import QdcDashboardSelected from "../pages/Clients/QdcDashboardSelected";
import QcdReport from "../pages/Clients/QcdReport";
import ClientProfileAfterQcd from "../pages/Clients/ClientProfileAfterQcd";
import UploadCheckStep1 from "../pages/Clients/UploadCheckStep1";
import UploadCheckStep2 from "../pages/Clients/UploadCheckStep2";


// ===== Charity Partners Pages =====
import CharityPartnersIndex from "../pages/CharityPartners/Index";
import AddNewPartner from "../pages/CharityPartners/AddNewPartner";
import ViewPartner from "../pages/CharityPartners/ViewPartner";
import EditPartner from "../pages/CharityPartners/EditPartner";

// ===== Donation Checks Pages =====
import DonationChecksIndex from "../pages/DonationChecks/Index";
import ViewDonationCheck from "../pages/DonationChecks/ViewCheck";
import UploadDonationReceipt from "../pages/DonationChecks/UploadReceipt"; // optional

// ===== Admin Pages =====
import AdminProfile from "../pages/Admin/Profile";
import ChangePassword from "../pages/Admin/ChangePassword";
import AdminSettings from "../pages/Admin/Settings";
import Notifications from "../pages/Admin/Notifications";

// ========User Pages ==========
import UsersIndex from "../pages/Users/Index";
import AddNewUser from "../pages/Users/AddNew";
import ViewUserProfile from "../pages/Users/ViewProfile";
import EditUserProfile from "../pages/Users/EditProfile";

//=======Roles Page =======
import RolesIndex from "../pages/Roles/Index";
import AddNewRole from "../pages/Roles/AddNew";
import ViewRole from "../pages/Roles/ViewRole";
import EditRole from "../pages/Roles/EditRole";


const AppRoutes = () => {
    return (
        <Routes>
            {/* ======= Auth Routes ======== */}
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/email-otp" element={<EmailOtp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* ====== Protected Layout Routes ====== */}
            <Route path="/" element={<Layout />}>
                {/* Dashboard */}
                <Route index element={<Dashboard />} />

                {/* Financial Advisors Nested Routes */}
                <Route path="financial-advisors">
                    <Route index element={<FinancialAdvisorsIndex />} />
                    <Route path="add" element={<AddNewAdvisor />} />
                    <Route path=":advisorId">
                        <Route index element={<ViewAdvisorProfile />} />
                        <Route path="edit" element={<EditAdvisorProfile />} />
                    </Route>
                </Route>

                {/* Clients Nested Routes */}
                <Route path="clients">
                    <Route index element={<ClientsIndex />} />
                    <Route path="add" element={<AddNewClient />} />
                    <Route path=":clientId">
                        <Route index element={<ViewClientProfile />} />
                        <Route path="qdc-dashboard">
                            <Route index element={<QdcDashboard />} /> {/* Step 1 */}
                            <Route path="selected" element={<QdcDashboardSelected />} /> {/* Step 2 */}
                        </Route>
                        <Route path="qdc-report">
                            <Route index element={<QcdReport />} />
                            <Route path="client-profile" element={<ClientProfileAfterQcd />} />
                            <Route path="upload-check">
                                <Route index element={<UploadCheckStep1 />} />
                                <Route path=":charityId" element={<UploadCheckStep2 />} />
                            </Route>
                        </Route>
                    </Route>
                </Route>

                {/* Charity Partners Routes */}
                <Route path="charity-partners">
                    <Route index element={<CharityPartnersIndex />} />
                    <Route path="add" element={<AddNewPartner />} />
                    <Route path=":partnerId">
                        <Route index element={<ViewPartner />} />
                        <Route path="edit" element={<EditPartner />} />
                    </Route>
                </Route>

                {/* Donation Checks Route */}
                <Route path="donation-check">
                    <Route index element={<DonationChecksIndex />} />
                    <Route path=":checkId">
                        <Route index element={<ViewDonationCheck />} />
                        <Route path="upload-receipt" element={<UploadDonationReceipt />} />
                    </Route>
                </Route>

                {/* ====== Admin/Profile/Settings Routes ====== */}
                <Route path="admin">
                    <Route path="profile">
                        <Route index element={<AdminProfile />} />
                        <Route path="change-password" element={<ChangePassword />} />
                    </Route>

                    <Route path="settings" element={<AdminSettings />} />
                    <Route path="notifications" element={<Notifications />} />
                </Route>


                {/* ====== Users Routes ====== */}
                <Route path="users">
                    <Route index element={<UsersIndex />} />           
                    <Route path="add" element={<AddNewUser />} />      
                    <Route path=":userId">
                        <Route index element={<ViewUserProfile />} />    
                        <Route path="edit" element={<EditUserProfile />} /> 
                    </Route>
                </Route>

                
                {/* ====== Roles Routes ====== */}
                <Route path="roles">
                    <Route index element={<RolesIndex />} />          
                    <Route path="add" element={<AddNewRole />} />    
                    <Route path=":roleId">
                        <Route index element={<ViewRole />} />          
                        <Route path="edit" element={<EditRole />} />    
                    </Route>
                </Route>

            </Route>
            <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
        
    );
};

export default AppRoutes;
