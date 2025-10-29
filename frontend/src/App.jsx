import { Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/activate/:id" element={<Activate />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:id" element={<ResetPassord />} />

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
