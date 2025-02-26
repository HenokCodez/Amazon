import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import classes from "./Lower.module.css";

function LowerHeader() {
  return (
    <div className={classes.Lower_container}>
      <ul>
        <li>
          <CiMenuBurger />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
