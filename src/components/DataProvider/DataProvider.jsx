import React, { createContext } from "react";
import { useReducer } from "react"; 

// Creating a new context called DataContext
export const DataContext = createContext();

// DataProvider component that will wrap the application or part of the app to provide state and dispatch
export const DataProvider = ({ children, reducer, initialState }) => {
  return (
    // Providing the state and dispatch function to any child components via DataContext
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children} 
    </DataContext.Provider>
  );
};
