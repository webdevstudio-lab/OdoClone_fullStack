import { Outlet } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";

const ProtectedRoute = ({ children }) => {
  return <DashboardLayout>{children ? children : <Outlet />}</DashboardLayout>;
};

export default ProtectedRoute;
