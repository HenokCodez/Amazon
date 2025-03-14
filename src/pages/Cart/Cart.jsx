import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";
import { Type } from "../../Utility/action.type";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  // Calculate total price of items in the cart
  const total = basket.reduce((amount, item) => item.price * item.amount + amount, 0); //reduce(prev(callback),current)  0 means starting from the first one.

  // Increase quantity of an item
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  // Decrease quantity of an item
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className={classes.cart__container}>
        <div className={classes.cart__card}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No items in your cart.</p>
          ) : (
            basket?.map((item, i) => (
              <section key={i} className={classes.cart__product}>
                <ProductCard
                  key={item.id}
                  renderAdd={false} // Disable "Add to Cart" button
                  product={item}
                  add_description={true}
                  flex={true}
                  titleUp={true}
                />
                <div className={classes.cart__btn__container}>
                  {/* Increase item quantity */}
                  <button className={classes.cart__btn} onClick={() => increment(item)}>
                    <IoIosArrowUp size={20} />
                  </button>
                  <span>{item.amount}</span>
                  {/* Decrease item quantity */}
                  <button className={classes.cart__btn} onClick={() => decrement(item.id)}>
                    <IoIosArrowDown size={20} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {/* Display subtotal and checkout button if cart is not empty */}
        {basket?.length !== 0 && (
          <div className={classes.cart__subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>

            <Link to="/payment">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
