
import "./Navbar.css";
import { Outlet, NavLink } from "react-router-dom";

// navbar----------------------------------------------------------------


import React, { useRef, useState } from 'react'

const Navbar = () => {

  const inputRef = useRef(null);
  const [image, setImage] = useState("");


  const hendalImageClick = () => {

    inputRef.current.click();

  }

  const hendalImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);

  }




  return (
    <>
      <header className="header">
        <div className="logoo"></div>
        <div className='hamburger'>

          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>

        </div>


        <nav className='Navbar'>

          <ul className='active' >
            <li><NavLink to="/" exact className='active'>Home</NavLink></li>
            {/* <li><NavLink to="/Categories" className='active'>Categories</NavLink></li> */}
            <li><NavLink to="/Signup" className='active'>Signup</NavLink></li>
            <li><NavLink to="/Login" className='active'>Login</NavLink></li>
          </ul>

        </nav>
      </header>

      <nav className="nav">
        <div className="container">
          <div className="d_e"><h3>𝔾𝕝𝕠𝕨 𝕄𝕒𝕣𝕥</h3></div>

          <div className="input_box">
            <form action="">
              <input className="search" type="text" placeholder="Search..." />
              <span> <button className="btn btn-outline-info"><i class="bi bi-search"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg></i></button></span>
            </form>
          </div>

          <div className="p-and-c">


            <span id="dropdownMenuButton2" data-bs-toggle="dropdown">

              <NavLink to="" className='profile_flex'> <i className="bi bi-person"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
              </svg></i></NavLink>
            </span>
            <ul className="dropdown-menu" style={{ borderRadius: "25px 25px" }} >
              <li>
                <div className="drop-div">

                  <div>

                    <div>

                      {image ? (

                        <div><img src={URL.createObjectURL(image)} className="user-pic" /></div>
                      ) :
                        (
                          <div className="befor-image"></div>
                        )}
                      <input type="file" ref={inputRef} onChange={hendalImageChange} style={{ display: "none" }} />
                    </div>
                    <button className="upload-Image-Button " onClick={hendalImageClick}>Upload</button>

                  </div>

                  <form>
                    <h3 style={{ paddingLeft: "30px", fontFamily: "inherit", color: "white", borderBottom: "3px solid white" }}>About</h3>

                    <div className="p-input">

                      <div><input type="text" placeholder="Ayush Dogne" /></div><br />
                      <div><input type="text" placeholder="7489048015" /></div><br />
                      <div><input type="text" placeholder="ayushdogne2002@gmail.com" /></div><br />
                      </div>

                      <div style={{display:"flex",paddingLeft:"20px"}}>
                        <div style={{ color: "white" }}>male<input type="radio" name="male-female" /></div>
                        <div style={{ color: "white",paddingLeft:"20px"}}>Female<input type="radio" name="male-female" /></div>
                      </div><br/>

                      <div className="p-input-2">
                      <div><input type="text" placeholder="Enter your state" /></div><br/>
                      <div><input type="text" placeholder="Enter your city" /></div><br />
                      <div><input type="text" placeholder="Enter your pic-code" /></div><br />
                      <div><input type="text" placeholder="Enter your parmanent Address" /></div><br/>

                     <p style={{paddingLeft:"150px"}}><button className="btn btn-outline-success">Seve</button></p> 
                    </div>
                  </form>
                </div>
              </li>
            </ul>

            <NavLink to="/Cart" className='cart_flex'> <i className="bi bi-cart4"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg></i>  </NavLink>
         </div>
        </div>
      </nav>
     <Outlet />
    </>

  )
}
export default Navbar






