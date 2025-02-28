import React from "react";
import numeral from "numeral"; // Importing the 'http://numeraljs.com/' library for formatting numbers (e.g., currency formatting)

// Functional component that formats and displays currency
const CurrencyFormat = ({ amount }) => {
  // Format the 'amount' prop to a currency format with commas and two decimal points
  const formattedAmount = numeral(amount).format("0,0.00$");
  return <div>{formattedAmount}</div>;
};

export default CurrencyFormat;
