// import React from 'react'
// import "../csspagas/Address.css"
// import { NavLink, useLocation } from 'react-router-dom'


// const Address = () => {
//     let location = useLocation();


//     return (
//         <div className='main-div-address'>
//             <div><h1 className='Address'>Address</h1></div>

//             <div className='select-d-a'><h4>Select Delivery Address</h4></div>

//             <div className='main-Address-div'>

//                 <div className='Address-user'>

//                     <h5><div className='border-said'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
//                         <circle cx="8" cy="8" r="8" />
//                     </svg> <span>Ayush</span></div></h5>

//                     <div className='border-cover'>
//                         <h6>166/2, ram mandir bamangaon akhai district -khandwa, khandwa
//                             Madhya Pradesh - 450001
//                             7489048015</h6></div>

//                     <div> <NavLink to="/Payment" state={{
//                         from: {
//                             title: location.state.from.title,
//                             image: location.state.from.image,
//                             price: location.state.from.price,
//                             delivery: location.state.from.delivery
//                         },
//                     }}

//                     ><div className='button-to-address'> <button className='btn btn-outline-success'>Deliver to this Address</button></div></NavLink>
//                     </div>


//                 </div>

//                 <div className='cart-22'>

//                     <div> <h6 className='Price-details'>Price  details</h6></div>
//                     <div className='order-11'>

//                         <div>Total Product Price</div>
//                         <div><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
//                             <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
//                         </svg>{location.state.from.price}
//                         </div>
//                     </div>
//                     <div>
//                         <div className='last-cart'>
//                             <div><p>Order Total</p></div>
//                             <div>|</div>
//                             <div><span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
//                                 <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
//                             </svg>{location.state.from.price}</span></div>
//                         </div>
//                     </div>
//                 </div>



//             </div>
//         </div>
//     )
// }

// export default Address


import React from 'react';
import "../csspagas/Address.css"
import { NavLink, useLocation } from 'react-router-dom';

const Address = () => {
    let location = useLocation();

    return (
        <div className="address-page-container">

            <div className="address-header">
                <h1>Delivery Details</h1>
            </div>

            <div className="address-content">
                <div className="address-left">
                    <h2 className="user-name">Ayush</h2>
                    <div className="address-info">
                        <p>166/2, Ram Mandir Bamangaon Akhai District - Khandwa, Khandwa, Madhya Pradesh - 450001</p>
                        <p>Phone: 7489048015</p>
                    </div>

                    <NavLink to="/AddAddress">
                        <button className="add-address-btn">Add New Address</button>
                    </NavLink>
                </div>

                <div className="address-right">
                    <div className="product-info">
                        <h3>Price Details</h3>
                        <p>Product Name: {location.state?.from?.title || "N/A"}</p>
                        <p>Price: ₹{location.state?.from?.price || "N/A"}</p>
                    </div>
                    
                    <NavLink to="/Payment" state={{
                        from: {
                            title: location.state?.from?.title,
                            image: location.state?.from?.image,
                            price: location.state?.from?.price,
                            delivery: location.state?.from?.delivery
                        }
                    }}>
                        <button className="deliver-btn">Deliver to this Address</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Address;
