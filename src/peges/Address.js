import React from 'react'
import "../csspagas/Address.css"
import { NavLink } from 'react-router-dom'

const Address = () => {
    return (
        <div>
            <div><h1 className='Address'>Address</h1></div>

            <div className='select-d-a'><h4>Select Delivery Address</h4></div>

            <div className='main-Address-div'>

                <div className='Address-user'>

                    <h5><div className='border-said'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8" />
                    </svg> <span>Ayush</span></div></h5>

                    <div className='border-cover'>
                        <h6>166/2, ram mandir bamangaon akhai district -khandwa, khandwa
                            Madhya Pradesh - 450001
                            7489048015</h6></div>

                    <div> <NavLink to="/Payment"><div className='button-to-address'> <button className='btn btn-outline-success'>Deliver to this Address</button></div></NavLink>
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
                </div>



            </div>


        </div>
    )
}

export default Address