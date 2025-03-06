import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./components/DataProvider/DataProvider.jsx"; // Importing the global state provider
import { initialState, reducer } from "./Utility/reducer.js"; // Importing the initial state and reducer for state management

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrapping the App component with the DataProvider to provide global state to the entire app */}
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </StrictMode>
);
