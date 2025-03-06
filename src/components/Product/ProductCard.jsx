import React, { useContext } from "react";
import Rating from "@mui/material/Rating"; // Importing the Rating component from Material UI
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat"; // Importing my custom currency formatting component
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type"; // Importing action types for dispatching actions to the reducer

// Functional component for rendering a single product card
function ProductCard({ product, flex, renderDesc, renderAdd }) {
  // Destructuring product details
  const { image, title, id, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET, // Dispatching an action to add the item to the basket
      item: { image, title, id, rating, price, description },
    });
  };

  return (
    <div className={`${classes.productCard__container} ${flex ? classes.product_detail : ""}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className={classes.productCard__img__container} />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDesc ? <p className={classes.productCard__description}>{description}</p> : ""}
        <div className={classes.productCard__rating}>
          {/* Rating with a precision of 0.1 */}
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        {/* Display the product's price formatted as currency */}
        <div>
          <CurrencyFormat amount={price} /> {/* Custom currency formatting component */}
        </div>

        {renderAdd && (
          <button className={classes.productCard__button} onClick={addToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
