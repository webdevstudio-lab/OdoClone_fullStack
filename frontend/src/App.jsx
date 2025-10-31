import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound";
import Activate from "./pages/Auth/Activate";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassord from "./pages/Auth/ResetPassord";
import Devis from "./pages/Devis/Devis";
import Factures from "./pages/Factures/Factures";
import Client from "./pages/Clients/Client";
import UserProfile from "./pages/Profile/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import { setNavigate } from "./utils/navigate";

const App = () => {
  const navigate = useNavigate();
  setNavigate(navigate);
  return (
    <Routes>
      {/* redirection de la racine vers le dashboard  */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Public routes */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/sign-up"
        element={
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        }
      />
      <Route
        path="/activate/:id"
        element={
          <PublicRoute>
            <Activate />
          </PublicRoute>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <PublicRoute>
            <ForgotPassword />
          </PublicRoute>
        }
      />
      <Route
        path="/reset-password/:id"
        element={
          <PublicRoute>
            <ResetPassord />
          </PublicRoute>
        }
      />

      {/* Protected routes */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="clients" element={<Client />} />
        <Route path="devis" element={<Devis />} />
        <Route path="factures" element={<Factures />} />
        <Route path="profile" element={<UserProfile />} />
      </Route>

      {/* Catch all routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
