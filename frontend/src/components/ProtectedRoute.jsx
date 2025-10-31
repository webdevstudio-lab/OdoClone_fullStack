import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import { Loader2 } from "lucide-react";
import Logo from "../Layout/Logo";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  return isLoading ? (
    <div className="min-h-screen w-full flex flex-col items-center p-6 gap-4 justify-center">
      <Logo />
      <div className="flex flex-row items-center justify-center gap-2">
        <Loader2 className="animate-spin text-indigo-600" size={20} />
        <p className="font-bold text-xl text-indigo-600/80">
          Chargement des données...
        </p>
      </div>
    </div>
  ) : user ? (
    <DashboardLayout>{children ? children : <Outlet />}</DashboardLayout>
  ) : (
    <Navigate
      to="/login"
      replace
      state={{ redirectUrl: window.location.pathname }}
    />
  );
};

export default ProtectedRoute;
