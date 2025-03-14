import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";
import classes from "./Results.module.css";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true); // Start loading
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false); // Stop loading
      });
  }, [categoryName]);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />

        {isLoading ? (
          <Loader /> // Show loader while fetching
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} renderDesc={false} renderAdd={true} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Results;
