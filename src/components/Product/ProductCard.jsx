import React, { useContext } from "react";
import Rating from "@mui/material/Rating"; // Importing the Rating component from Material UI
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat"; // Importing my custom currency formatting component
import classes from "./Product.module.css";

// Functional component for rendering a single product card
function ProductCard({ product }) {
  // Destructuring product details
  const { image, title, id, rating, price, description } = product;

  return (
    <div className={classes.productCard__container}>
      <a href={`/products/${id}`}>
        <img src={image} alt={title} className={classes.productCard__img__container} />
      </a>

      <div>
        <h3>{title}</h3>
        <div className={classes.productCard__rating}>
          {/* Rating with a precision of 0.1 */}
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        {/* Display the product's price formatted as currency */}
        <div>
          <CurrencyFormat amount={price} /> {/* Custom currency formatting component */}
        </div>

        <button className={classes.productCard__button}>Add href cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
