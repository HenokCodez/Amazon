import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router.jsx";
import { auth } from "./Utility/firebase.js"; // Importing Firebase authentication instance
import { Type } from "./Utility/action.type.js"; // Importing action types for the reducer
import { useContext, useEffect } from "react";
import { DataContext } from "./components/DataProvider/DataProvider.jsx";

function App() {
  const [, dispatch] = useContext(DataContext); // Accessing the user and dispatch from global state

  // useEffect to handle Firebase authentication state
  useEffect(() => {
    // Firebase listener for auth state changes (user login/logout)
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // If a user is logged in, dispatch an action to set the user in the global state
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        // If no user is logged in, set the user to null in the global state
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
