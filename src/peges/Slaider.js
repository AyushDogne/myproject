import React from 'react'
import slaider10 from "../slaider/slaider-10.jpg"
import slaider9 from "../slaider/sliader-9.jpg"
import slaider4 from "../slaider/slaider-4.jpg"
import slaider5 from "../slaider/slaider-5.jpg"
import slaider6 from "../slaider/slaider-6.jpg"
import slaider7 from "../slaider/slaider-7.jpg"
import slaider8 from "../slaider/slaider-8.jpg"



const Slaider = () => {
  return (

    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>




    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src={slaider10} class="slaider-1" />
        <div class="carousel-caption d-none d-md-block">
          <h1>Popular-Products</h1>
          <h2>Personal Air Fan with Addvance Features</h2>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src={slaider9} class="slaider-1" />
        <div class="carousel-caption d-none d-md-block">
        <h1 style={{color:"white"}}>Popular-Products</h1>
          <h2 style={{color:"white"}}>Genius Speaker SP-U115 USB/Bluetooth</h2>
        </div>
      </div>
      <div class="carousel-item">
        <img src={slaider4} class="slaider-1" />
        <div class="carousel-caption d-none d-md-block">
        <h1>Popular-Products</h1>
          <h2>None Cordless Electrical Iron/Press</h2>
        </div>
      </div>

      <div class="carousel-item">
        <img src={slaider5} class="slaider-1" />
        <div class="carousel-caption d-none d-md-block">
        <h1>Popular-Products</h1>
          <h2> Plus Amaze NI 1200 W Dry Iron</h2>
        </div>
      </div>

      <div class="carousel-item">
        <img src={slaider6} class="slaider-1" />
        <div class="carousel-caption d-none d-md-block">
        <h1>Popular-Products</h1>
          <h2> Wireless Headphone Bluetooth TB-2.202</h2>
        </div>
      </div>

      <div class="carousel-item">
        <img src={slaider7} class="slaider-1" />
        <div class="carousel-caption d-none d-md-block">
        <h1>Popular-Products</h1>
          <h2> Havells-Lloyd 8 Kg/6 Kg Inverter</h2>
        </div>
      </div>
      <div class="carousel-item">
        <img src={slaider8} class="slaider-1" />
        <div class="carousel-caption d-none d-md-block">
        <h1>Popular-Products</h1>
          <h2>Sony Sports Headphone Wireless Runing Time 24 hr</h2>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}
export default Slaider
