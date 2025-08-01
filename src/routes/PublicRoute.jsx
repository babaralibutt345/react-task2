import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
    const isAuthenticated = false; // change to auth state
    return !isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PublicRoute;
