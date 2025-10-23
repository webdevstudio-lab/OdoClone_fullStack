import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import Dashboard from "@/pages/dashboard/Dashboard";

export const AUTH_ROUTES = {
  LOGIN: "/",
  SIGNUP: "/sign-in",
};

export const PROTECTED_ROUTES = {
  DASHBOARD: "/dashboard",
  CLIENT: "/clients/clients",
};

export const authRoutesPaths = [
  {
    path: AUTH_ROUTES.SIGNUP,
    Element: <SignUp />,
  },
  {
    path: AUTH_ROUTES.LOGIN,
    Element: <Login />,
  },
];

export const protectedRoutesPaths = [
  {
    path: PROTECTED_ROUTES.DASHBOARD,
    Element: <Dashboard />,
  },
];

export const isAuthRoute = (pathname: string) => {
  return Object.values(AUTH_ROUTES).includes(pathname);
};
