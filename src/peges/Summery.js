import React from 'react'
import "../csspagas/Summery.css"
import { NavLink ,useLocation} from 'react-router-dom'

const Summery = () => {

  let location = useLocation();

  return (
    <div className='main-display'>
      <div>
        <div className='summery-cart-1'>

          <div><p className={location.state.from.image}></p></div>

          <div className='summery-image-border'></div>


          <div style={{ paddingTop: "10px", paddingLeft: "7px" }}><h6>{location.state.from.title}</h6>
            <span className='summery-bordar-to'>All issue easy returns allowed | </span>
            <span className='summery-bordar-to'>Size: Free Size  Qty: 1</span>


            <div className='Free-dd'>
              <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
              </svg>{location.state.from.price}</div>
              <div className='image-bordar'></div>
              <div >{location.state.from.delivery}</div>

            </div>
          </div>
        </div>

        <div className='summery-Address-user'>

          <h5><div className='border-said'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8" />
          </svg> <span>Ayush</span></div></h5>

          <div className='border-cover'>
            <h6>166/2, ram mandir bamangaon akhai district -khandwa, khandwa
              Madhya Pradesh - 450001
              7489048015</h6></div>
         
         </div>

         <div className='case-payment'>
          <h5>Case on Delivery</h5>
         </div>


      </div>


      <div>
      <div className='payment-cart-2'>

<div className='price-detail'><h3>price Details</h3></div>

<div className='total-p-d'>

  <div>Total Product Price</div>

 <div> +<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
    </svg><span>{location.state.from.price}</span>
  
  </div>
  
  </div>

<div className='last-order-total'>
<div><h5>Order total</h5></div>
<div><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
    </svg><span>{location.state.from.price}</span></div>
</div>


<div className='select-payment-button'>

<div className="button-1"> <NavLink to="/Summery"> <button className='btn btn-outline-success'>Plece Order</button>
</NavLink></div>
</div>

</div>

      </div>

    </div>
  )
}

export default Summery
