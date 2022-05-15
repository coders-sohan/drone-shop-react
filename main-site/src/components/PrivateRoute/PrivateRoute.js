import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../contexts/Spinner/Spinner";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return <Spinner />;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
