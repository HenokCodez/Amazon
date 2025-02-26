import React from "react";
import HeaderCss from "./Header.module.css";
import { CiLocationOn } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <div className={HeaderCss.container}>
        {/* Left Section */}
        <div className={HeaderCss.left}>
          <a href="/" className={HeaderCss.logo}>
            <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="logo" />
          </a>
          <div className={HeaderCss.location}>
            <CiLocationOn className={HeaderCss.icon} />
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className={HeaderCss.middle}>
          <select className={HeaderCss.category}>
            <option value="">All</option>
          </select>
          <input type="text" className={HeaderCss.searchInput} placeholder="Search Product" />
          <button className={HeaderCss.searchButton}>
            <FaSearch />
          </button>
        </div>

        {/* Right Section */}
        <div className={HeaderCss.right}>
          <div className={HeaderCss.language}>
            <img src="https://image.shutterstock.com/image-vector/usa-waving-flag-pattern-background-260nw-2480140689.jpg" alt="flag" />
            <select>
              <option value="EN">EN</option>
            </select>
          </div>
          <div className={HeaderCss.account}>
            <p>Hello, Log in</p>
            <span>Account & Lists</span>
          </div>
          <div className={HeaderCss.orders}>
            <p>Returns</p>
            <span>& Orders</span>
          </div>
          <div className={HeaderCss.cart}>
            <FiShoppingCart />
            <span>0</span>
          </div>
        </div>
      </div>

      <LowerHeader />
    </>
  );
}

export default Header;
