import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { session } = UserAuth();

  if (session === undefined) {
    return <div className="">Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/singup" replace />;
  }

  return <Outlet />;
}
