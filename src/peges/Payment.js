import React from 'react'
import "../csspagas/Payment.css"
import { NavLink ,useLocation} from 'react-router-dom'

const Payment = () => {
   let location = useLocation();
  return (
    <div>
      <div className='select-p-f-s'><h2>Select Payment for send</h2></div>

      <div className='main-cart'>

        <div className='payment-cart'>

          <NavLink rel="stylesheet" to="https://www.phonepe.com">

            <div className='phonepe-img-text'>
              <div className='phonepay-image'></div>
              <div className='phonepe-text'><h5>Phonepe</h5></div>

            </div>
          </NavLink>

          <NavLink rel="stylesheet" to="https://pay.google.com/about">

            <div className='phonepe-img-text'>
              <div className='google-image'></div>
              <div className='phonepe-text'><h5>Google pay</h5></div>
            </div>
          </NavLink>

          <NavLink rel="stylesheet" to="https://paytm.com">

            <div className='phonepe-img-text'>
              <div className='paytym-image'></div>
              <div className='phonepe-text'><h5>Paytym</h5></div>
            </div>
          </NavLink>



          <div className='Case-on-d'>
            <div><form action="">
              <input type="checkbox" />
            </form>
            </div>
            <div>
              <h5>Case on Delivery</h5>
            </div>
          </div>

          <div className='pay-full'></div>


        </div>


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

        <div className="button-1"> <NavLink to="/Summery"
        state={{ 
          from:{
              title : location.state.from.title,
              image : location.state.from.image,
              price : location.state.from.price,
              delivery : location.state.from.delivery
            },
          }}
        
        > <button className='btn btn-outline-success'>Add payment</button>
        </NavLink></div>
         </div>

        </div>



      </div>


    </div>
  )
}

export default Payment
