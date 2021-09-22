import React, { useState } from "react";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const prevSlide = () => {};
  const nextSlide = () => {};
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return <img src={slide.image} alt="travel image" className="image" />;
      })}
    </section>
  );
}

export default ImageSlider;
