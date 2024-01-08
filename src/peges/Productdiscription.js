import React from 'react'
import "../csspagas/productdescription.css"
import { NavLink } from 'react-router-dom'

const Productdiscription = () => {
  return (
    <div className='main-div-p-d'>
      <div>
        <div className='img-p-d'></div>
        <NavLink to="/Cart" > <div className='Add-to-cart'><button className='btn btn-outline-success'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
        </svg>Add to cart</button></div></NavLink>
      </div>

      <div style={{ paddingTop: "30px" }}>

        <div className='price-product'>

          <h5 className='blutooth-text'>Blutooth Speaker</h5>
          <h4 className='rupee-icon'><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
          </svg>543</h4>

         <div><h6 className='Free-d'> Free Delivary</h6></div> 
        </div>

        <div className='product-details'>
           
       <div><h4 className='p-d'>Product Details</h4>  </div> 
       <div><h6 className='blutooth-details-2'>Zebronics Zeb-Action Portable 10W BT Speaker with TWS Function, USB,mSD, AUX, FM, Mic & Fabric Finish(Red)</h6>
       </div> 
        </div>
      </div>


    </div>
  )
}

export default Productdiscription
