
import React, { useRef, useState,useEffect } from 'react'


import slaider10 from "../slaider/slaider-10.jpg"
import slaider9 from "../slaider/sliader-9.jpg"
import slaider8 from "../slaider/slaider-8.jpg"
import slaider7 from "../slaider/slaider-7.jpg"
import slaider6 from "../slaider/slaider-6.jpg"
import slaider5 from "../slaider/slaider-5.jpg"
import slaider4 from "../slaider/slaider-4.jpg"



const Slaider = () => {

  const images = [
    slaider4,
    slaider5,
    slaider6,
    slaider7,
    slaider8,
    slaider9,
    slaider10,  

  ];
  const [currentIndex, setCurrentIndex] = useState(0);


 
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect((images) => {
    const interval = setInterval(goToNext,4000); // Auto change every 3 seconds
    return () => clearInterval(interval);
  }, [images]);

  return (
    
    <div className="slider-container">
    <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="slider-image"
      />
      <button className="left-arrow" onClick={goToPrev}>
        &#10094;
      </button>
      <button className="right-arrow" onClick={goToNext}>
        &#10095;
      </button>
    </div>
   
  )
}
export default Slaider
