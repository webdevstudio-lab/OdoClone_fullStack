import BaseLayout from "@/layouts/BaseLayout";
import { Routes, Route } from "react-router-dom";
import { authRoutesPaths, protectedRoutesPaths } from "./Routes";
import AppLayout from "@/layouts/AppLayout";
import RouteGuard from "./RouteGuard";
import NotFound from "@/pages/404/NotFound";

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
      <Route path="/" element={<RouteGuard requiredAuth={true} />}>
        <Route element={<AppLayout />}>
          {protectedRoutesPaths?.map((route) => (
            <Route key={route.path} path={route.path} element={route.Element} />
          ))}
        </Route>
      </Route>

      {/* Catch all Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
