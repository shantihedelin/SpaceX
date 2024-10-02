import { useState } from "react";

function RocketSlideShow({ images }) {
  //   console.log(images);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    // console.log("Next slide clicked", currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    // console.log("Previous slide clicked", currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-container">
      <img
        src={images[currentIndex]}
        alt={`Rocket image ${currentIndex}`}
        className="slideshow-image"
      />
      <button className="left-arrow" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default RocketSlideShow;
