import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const isAuthenticated = true; // change to auth state
    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
