import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  requiredAuth?: boolean;
}
const RouteGuard = (requiredAuth: Props) => {
  console.log(requiredAuth);
  const { user } = useAuth();
  console.log(user);
  if (requiredAuth && !user) return <Navigate to="/" replace />;

  if (!requiredAuth && user) return <Navigate to="/dashboard" replace />;
  return <Outlet />;
};

export default RouteGuard;
