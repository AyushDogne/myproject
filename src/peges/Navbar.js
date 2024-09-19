
import "../csspagas/Navbar.css";
import { Outlet, NavLink,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from '../Redux/Slice'
import Footer from "./Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaHome, FaUser, FaShoppingCart, FaSignInAlt, FaUserPlus, FaBars } from 'react-icons/fa';

// navbar----------------------------------------------------------------


import React, { useRef, useState,useEffect } from 'react'

const Navbar = () => {

  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  let searchHendle = (e) => {
    let searchData = e.target.value
  }

  const name_ref = useRef()
  const number_ref = useRef()
  const email_ref = useRef()
  const password_ref = useRef()
  const gender_ref = useRef()
  const city_ref = useRef()
  const pinCode_ref = useRef()
  const state_ref = useRef()
  const address_ref = useRef()


  let userDetails = useSelector(state => state.userProfile)
  console.log(userDetails);



  let dispatch = useDispatch()
  let handleEdit = (e) => {
    e.preventDefault();
    dispatch(editUser(
      {
        id: 1,
        name: name_ref.current.value,
        number: number_ref.current.value,
        email: email_ref.current.value,
        password: password_ref.current.value,
        gender: gender_ref.current.value,
        city: city_ref.current.value,
        pinCode: pinCode_ref.current.value,
        state: state_ref.current.value,
        address: address_ref.current.value,
      }
    ))

  }

  return (
    <div class="index-page">


<nav className="navbar">

        <h2 className="glow-mart-heading">𝔾𝕝𝕠𝕨-𝕄𝕒𝕣𝕥</h2>
      <div className="navbar-logo">
    
      </div>      <div className={`navbar-links ${isMobile ? 'navbar-links-mobile' : ''}`}>
        <NavLink to="/" onClick={()=>setIsMobile(false)}  exact className="nav-link">
          Home
        </NavLink>
        <NavLink to="/Signup"  onClick={()=>setIsMobile(false)} className="nav-link">
        Sign Up
        </NavLink>
        <NavLink to="/Login" onClick={()=>setIsMobile(false)}  className="nav-link">
        Login
        </NavLink>
        <NavLink to="/Profile" onClick={()=>setIsMobile(false)}  className="nav-link">
          <FaUser />
        </NavLink>
        <NavLink to="/Cart" onClick={()=>setIsMobile(false)}  className="nav-link">
          <FaShoppingCart />
        </NavLink>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <FaBars />
      </button>
    </nav>
      <Outlet />
      <Footer/>
    </div>

  )
}
export default Navbar






