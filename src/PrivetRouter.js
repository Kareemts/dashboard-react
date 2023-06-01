import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivetRouter = () => {
  const login = localStorage.getItem("login");

  return login ? <Outlet /> : <Navigate to="/" />;
};
export default PrivetRouter;
