import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importing the default styles for the carousel from " https://www.npmjs.com/package/react-responsive-carousel "
import classes from "./Carousel.module.css";
import { imgs } from "./imgs/data";

// Function component that implements a carousel with custom left and right arrows
function CarouselsEffect() {
  return (
    <div className={classes.container}>
      <Carousel
        autoPlay={true} // Enables auto-playing of images
        infiniteLoop={true} // Enables continuous looping through images
        showIndicators={false} // Hides the small indicator dots under the carousel
        showThumbs={false} // Hides the thumbnail previews of the images
        showStatus={false} // Hides the status information (like image number)
      >
        {/* Loop through images and render them inside the carousel */}
        {imgs.map((imageItemsLinks, i) => {
          return <img key={i} src={imageItemsLinks} alt={`carousel-${i}`} />;
        })}
      </Carousel>

      {/* Placeholder for additional styling/content */}
      <div className={classes.hero__img}></div>
    </div>
  );
}

export default CarouselsEffect;
