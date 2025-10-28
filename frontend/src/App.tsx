import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Clients from "./pages/dashboard/clients/Clients";
import Devis from "./pages/dashboard/devis/Devis";
import Login from "./pages/auth/Login";
import NotFound from "./pages/404/NotFound";
import SignUp from "./pages/auth/SignUp";
import { useUser } from "./hooks/useUser";
import UserProfile from "./pages/dashboard/user/UserProfile";
import Factures from "./pages/dashboard/factures/Factures";
import BonDeLivraison from "./pages/dashboard/bon de livraison/BonDeLivraison";
import Team from "./pages/dashboard/team/Team";
const App = () => {
  const { currentUser } = useUser();
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="clients" element={<Clients />} />
        <Route path="clients/:id" element={<Clients />} />

        <Route path="devis" element={<Devis />} />
        <Route path="devis/:id" element={<Devis />} />

        <Route path="factures" element={<Factures />} />
        <Route path="factures/:id" element={<Factures />} />

        <Route path="bon-de-livraison" element={<BonDeLivraison />} />
        <Route path="bon-de-livraison/:id" element={<BonDeLivraison />} />

        <Route path="team" element={<Team />} />
        <Route path="team/:id" element={<Team />} />

        <Route path="profile" element={<UserProfile />} />
      </Route>

      <Route
        path="connexion"
        element={!currentUser ? <Login /> : <Navigate replace to="/" />}
      />
      <Route
        path="inscription"
        element={!currentUser ? <SignUp /> : <Navigate replace to="/" />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
