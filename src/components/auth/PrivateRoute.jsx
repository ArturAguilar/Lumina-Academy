
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useContext(AuthContext);
  if (loading) {
    return <div style={{ padding: 32, textAlign: 'center' }}>Carregando...</div>;
  }
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
