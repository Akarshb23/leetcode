import React from "react";
import { Navigate } from "react-router-dom";

function AdminRoutes({ children }) {
  const isAdmin = false;

  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default AdminRoutes;
