import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

// Auth Pages
import RegisterStep1 from "../pages/auth/RegisterStep1";
import RegisterStep2 from "../pages/auth/RegisterStep2";
import RegisterStep3 from "../pages/auth/RegisterStep3";
import EmailVerified from "../pages/auth/EmailVerified";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

// Dashboard Pages
import Dashboard from "../pages/Dashboard";
import FinancialAdvisorsIndex from "../pages/FinancialAdvisors/Index";
import AddNewAdvisor from "../pages/FinancialAdvisors/AddNew";
import ViewAdvisorProfile from "../pages/FinancialAdvisors/ViewProfile";
import EditAdvisorProfile from "../pages/FinancialAdvisors/EditProfile";

import Clients from "../pages/Clients";
import CharityPartners from "../pages/CharityPartners";
import DonationCheck from "../pages/DonationCheck";
import Users from "../pages/Users";
import Roles from "../pages/Roles";

const AppRoutes = () => {
    return (
        <Routes>
            {/* ======= Auth Routes ======== */}
            <Route path="/register">
                <Route index element={<RegisterStep1 />} />
                <Route path="step-2" element={<RegisterStep2 />} />
                <Route path="step-3" element={<RegisterStep3 />} />
                <Route path="verify" element={<EmailVerified />} />
            </Route>

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

                {/* Other Main Pages */}
                <Route path="clients" element={<Clients />} />
                <Route path="charity-partners" element={<CharityPartners />} />
                <Route path="donation-check" element={<DonationCheck />} />
                <Route path="users" element={<Users />} />
                <Route path="roles" element={<Roles />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
