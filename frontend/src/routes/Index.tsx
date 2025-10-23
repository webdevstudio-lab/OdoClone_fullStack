import BaseLayout from "@/layouts/BaseLayout";
import { Routes, Route } from "react-router-dom";
import { authRoutesPaths, protectedRoutesPaths } from "./Routes";
import AppLayout from "@/layouts/AppLayout";
import RouteGuard from "./RouteGuard";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth /PublicRoute */}
      <Route path="/" element={<RouteGuard requiredAuth={false} />}>
        <Route element={<BaseLayout />}>
          {authRoutesPaths?.map((route) => (
            <Route key={route.path} path={route.path} element={route.Element} />
          ))}
        </Route>
      </Route>

      {/* Prtected Routes*/}
      <Route path="/" element={<RouteGuard requiredAuth />}>
        <Route element={<AppLayout />}>
          {protectedRoutesPaths?.map((route) => (
            <Route key={route.path} path={route.path} element={route.Element} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
