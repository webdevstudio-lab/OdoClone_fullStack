import React from 'react';
import DashboardLayout from '../layout/DashboardLayout';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticate = true;
  const loading = false;

  if (loading) {
    return <div>Chargement des données...</div>;
  }
  if (!isAuthenticate) {
    return <Navigate to="/login" replace />;
  }

  return <DashboardLayout>{children ? children : <Outlet />}</DashboardLayout>;
};

export default ProtectedRoute;
