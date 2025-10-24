import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Clients from "./pages/dashboard/clients/Clients";
import Devis from "./pages/dashboard/devis/Devis";
import User from "./pages/dashboard/user/User";
import Login from "./pages/auth/Login";
import NotFound from "./pages/404/NotFound";
import SignUp from "./pages/auth/SignUp";
const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="clients" element={<Clients />} />
        <Route path="devis" element={<Devis />} />
        <Route path="profile" element={<User />} />
      </Route>

      <Route path="connexion" element={<Login />} />
      <Route path="inscription" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
