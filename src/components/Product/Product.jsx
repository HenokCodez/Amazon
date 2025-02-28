import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";

// Functional component to fetch and display a list of products
function Product() {
  const [products, setProducts] = useState([]);

  // useEffect hook to fetch products from the API when the component mounts
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, [setProducts]);

  return (
    <>
      <section className={classes.product__container}>
        {products?.map((singleProduct) => {
          return (
            <ProductCard
              key={singleProduct.id}
              product={singleProduct} // Pass the product data as a prop to ProductCard
            />
          );
        })}
      </section>
    </>
  );
}

export default Product;
