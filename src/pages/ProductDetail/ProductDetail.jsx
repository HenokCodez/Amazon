import React, { useEffect, useState } from "react";
import { productUrl } from "../../Api/endPoints";
import Layout from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";
import axios from "axios";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error🤕: ", err);
        setIsLoading(false);
      });
  }, [productId]);

  return <Layout>{isLoading ? <Loader /> : <ProductCard key={product.id} titleUp={true} product={product} flex={true} renderDesc={true} add_button={true} renderAdd={true} />}</Layout>;
}

export default ProductDetail;
