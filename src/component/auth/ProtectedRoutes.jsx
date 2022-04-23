import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
  const useAuth = () => {
      const token = localStorage.getItem("accessToken");

      return token && token.length > 0;
  };

  return useAuth() ? <Outlet /> : <Navigate to="/Login" />;
}
