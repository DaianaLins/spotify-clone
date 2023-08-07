import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Auth/Home";
import Login from "./Login";
import Loading from "./Loading";

import { PrivateRoute } from "./privateRoutes";
import { PublicRoute } from "./publicRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route path="/" element={<Loading />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
