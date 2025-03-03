import React from "react"; 
import { FadeLoader } from "react-spinners"; // Importing the FadeLoader component from the react-spinners library

// Functional component that displays a loading spinner
function Loader() {
  return (
    <div
      style={{
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        height: "50vh", 
      }}
    >
      {/* Rendering the FadeLoader spinner with custom color */}
      <FadeLoader color="#ff9900" />
    </div>
  );
}

export default Loader; 