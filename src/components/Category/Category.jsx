import React from "react";
import { categoryInfo } from "./categoryFullInfos"; // Importing an array containing category information
import CategoryCard from "./CategoryCard"; // Importing the CategoryCard component to render individual categories
import classes from "./Category.module.css";

function Category() {
  return (
    <>
      <section className={classes.category__container}>
        {/* Looping over categoryInfo array and rendering CategoryCard for each item */}
        {categoryInfo.map((infos, index) => {
          return <CategoryCard key={index} data={infos} />;
        })}
      </section>
    </>
  );
}

export default Category;
