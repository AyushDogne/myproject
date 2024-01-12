import React from 'react'
import "../csspagas/Cart.css"
import { NavLink, useLocation } from 'react-router-dom'


const Cart = (props) => {


  let location = useLocation();

  console.log(location)
  console.log(location.state.from.title)

  return (
    <div>
      <div className='heading-cart'><h1>Cart</h1>
      </div>
      <div className='display-flex-to'>

        <div className='cart-cart'>

          <div><p className={location.state.from.image} ></p>
          </div>

          <div className='image-bordar'></div>

          <div style={{ paddingTop: "10px", paddingLeft: "7px" }}><h6>{location.state.from.title}</h6>
            <span className='bordar-to'>All issue easy returns allowed | </span>
            <span className='bordar-to'>Size: Free Size  Qty: 1</span>


            <div className='Free-dd'>
              <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
              </svg><span>{location.state.from.prise}</span></div>
              <div className='image-bordar'></div>
              <div >{location.state.from.delivery}</div>

            </div>
          </div>
        </div>



        <div className='cart-2'>

          <div> <h6 className='Price-details'>Price  details</h6></div>
          <div>
            <div><span className='total-price'>Total Product Price</span> <span>+<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
            </svg>543 </span></div>
            <div className='total-bordar'></div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "10px" }}>
              <div><p>Order Total</p></div>
              <div><span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
              </svg>543 </span></div>
            </div>
          </div>
          <NavLink to="/Address"><div className='button-color'> <button className='btn btn-outline-success'>Continue</button></div></NavLink>

        </div>
      </div>

    </div>

  )
}

export default Cart







