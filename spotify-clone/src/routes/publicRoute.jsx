import React from "react";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  return !user ? children : <Navigate to="/home" />;
};
