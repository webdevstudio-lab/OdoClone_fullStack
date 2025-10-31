import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Logo from "../Layout/Logo";
import { Loader2 } from "lucide-react";

const PublicRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center p-6 gap-4 justify-center">
        <Logo />
        <div className="flex flex-row items-center justify-center gap-2">
          <Loader2 className="animate-spin text-indigo-600" size={20} />
          <p className="font-bold text-xl text-indigo-600/80">
            Chargement des données...
          </p>
        </div>
      </div>
    );
  }

  if (user) {
    return (
      <Navigate
        to="/dashboard"
        replace
        state={{ redirectUrl: window.location.pathname }}
      />
    );
  }
  return children;
};

export default PublicRoute;
