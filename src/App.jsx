import React from "react";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Category />
      <Product />
    </div>
  );
}

export default App;
