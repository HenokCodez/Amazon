import React from "react";
import { Link } from "react-router-dom";
import HeaderCss from "./Header.module.css";
import { CiLocationOn } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import { useContext } from "react";
import { auth } from "../../Utility/firebase";

function Header() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  // Calculate total items in the basket (cart) using reduce
  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);
  return (
    <>
      <div className={HeaderCss.container}>
        {/* Left Section */}
        <div className={HeaderCss.left}>
          <Link to="/" className={HeaderCss.logo}>
            <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="logo" />
          </Link>
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

          {/* Sign In / Sign Out */}
          <Link to={!user ? "/auth" : null}>
            <div>
              {user ? ( // If the user is signed in
                <>
                  <p>Hello, {user?.email?.split("@")[0]}</p> {/* split returns an array example if email = abebe@gmail.com then email.split(@) returns ["abebe","gmail.com"] */}
                  <span onClick={() => auth.signOut()}>Sign out</span>
                </>
              ) : (
                <>
                  <p>Hello, Sign In</p> {/* If no user, show Sign In */}
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>

          <Link to="/orders" className={HeaderCss.orders}>
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          <Link to="/cart" className={HeaderCss.cart}>
            <FiShoppingCart />
            <span>{totalItem}</span>
          </Link>
        </div>
      </div>

      <LowerHeader />
    </>
  );
}

export default Header;
