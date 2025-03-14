import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

// Functional component to protect routes that require authentication
function ProtectedRoute({ children, msg, redirect }) {
  const navigate = useNavigate();
  const [{ user }] = useContext(DataContext);

  // useEffect hook to check if the user is authenticated when the component renders
  useEffect(() => {
    if (!user) {
      // If user is not logged in, redirect to the /auth page with a message and redirect path
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user, navigate, msg, redirect]);

  return children; // If the user is authenticated, render the child components
}

export default ProtectedRoute;
