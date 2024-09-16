
import React, { useRef, useState, useEffect } from 'react'


import slaider10 from "../slaider/slaider-10.jpg"
import slaider9 from "../slaider/sliader-9.jpg"
import slaider8 from "../slaider/slaider-8.jpg"
import slaider7 from "../slaider/slaider-7.jpg"
import slaider6 from "../slaider/slaider-6.jpg"
import slaider5 from "../slaider/slaider-5.jpg"
import slaider4 from "../slaider/slaider-4.jpg"
import logo from "../Cooler/images-removebg-preview (3).png"

import cooler1 from "../Cooler/cooler-2.jpeg"
import fen1 from "../fen/fen-10.jpeg"
import headPhone1 from "../headphone/h-1.jpg"
import Lcd1 from "../Lcd/lcd-6.jpeg"
import press1 from "../Categories_images/press-10.jpeg"
import speaker1 from "../Categories_images/speaker4.jpeg"
import washing1 from "../washing/washing7.jpeg"
import cooler2 from "../Cooler/cooler-9.jpeg"
import fen2 from "../fen/fen-6.jpeg"
import press2 from "../Press/press-4.jpeg"
import speaker2 from "../Speakers/speaker3.jpg"
import speaker3 from "../Speakers/speaker12.jpeg"
import headphone2 from "../headphone/h-4.jpeg"

import cooler8 from "../Cooler/cooler-8.jpeg"
import fen3 from "../fen/fen-3.jpeg"
import press8 from "../Press/press-8.jpeg"
import speaker8 from "../Speakers/speaker8.jpeg"
import speaker7 from "../headphone/h-7.jpeg"
import lcd4 from "../Lcd/lcd-6.jpeg"

import cooler5 from "../Cooler/cooler-3.jpeg"
import fen7 from "../fen/fen-7.png"
import press7 from "../Press/press-7.jpeg"
import speaker10 from "../Speakers/speaker10.jpeg"
import speaker9 from "../headphone/h-9.jpeg"
import lcd7 from "../Lcd/lcd-7.jpeg"







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
    const interval = setInterval(goToNext, 4000); // Auto change every 3 seconds
    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <div className='slider-main-div'>
        <marquee className="marquee-main-tag">
          <div className='marquee-images'>
            <img src={cooler1} alt="" />
            <img src={fen1} alt="" />
            <img src={headPhone1} alt="" />
            <img src={washing1} alt="" />
            <img src={speaker1} alt="" />
            <img src={Lcd1} alt="" />
            <img src={press1} alt="" />
            <img src={cooler2} alt="" />
            <img src={fen2} alt="" />
            <img src={speaker3} alt="" />
            <img src={press2} alt="" />
            <img src={headphone2} alt="" />
            <img src={speaker2} alt="" />
            <img src={press1} alt="" />
            <img src={cooler8} alt="" />
            <img src={fen3} alt="" />
            <img src={speaker7} alt="" />
            <img src={lcd4} alt="" />
            <img src={headphone2} alt="" />
            <img src={speaker8} alt="" />
            <img src={press8} alt="" />
            <img src={cooler5} alt="" />
            <img src={fen7} alt="" />
            <img src={speaker10} alt="" />
            <img src={speaker9} alt="" />
            <img src={lcd7} alt="" />
            <img src={press7} alt="" />
          </div>

        </marquee>
      </div>
      <div>
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
      </div>

 
    </>
  )
}
export default Slaider
