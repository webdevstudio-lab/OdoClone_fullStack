import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Auth/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import ProfilePage from './pages/user/ProfilePage.jsx';
import AllClients from './pages/Clients/AllClients.jsx';
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="/activate/:id" element={<Login />} />
          <Route path="/404" element={<NotFound />} />

          {/* Protected routes */}
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clients" element={<AllClients />} />
            <Route path="/clients/new" element={<Dashboard />} />
            <Route path="/clients/:id" element={<Dashboard />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          {/* Catch all Route */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>

      <Toaster
        toastOptions={{
          className: '',
          style: {
            fontSize: '13px',
          },
        }}
      />
    </div>
  );
};

export default App;
