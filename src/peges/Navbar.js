import React, {useState} from 'react'
import "./Navbar.css";
import { Outlet, Link, NavLink } from "react-router-dom";


const Navbar = () => {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
<div>
      <nav>  
         <Link to="/" className='Navbar_1'>Ayush</Link>
         <div className='navspan' onClick={()=>{
          setMenuOpen(!menuOpen);
         }}>
          <span></span>
          <span></span>
          <span></span>
         </div>
        <ul className={menuOpen ? "open" : ""} type='none'>
          <li><NavLink to="/" exact className='Navboth'>Home</NavLink></li>
          <li><NavLink to="/Categories" exact className='Navboth'>Categories</NavLink></li>
          <li><NavLink to="/Signup" exact className='Navboth'>Signup</NavLink></li>
          <li><NavLink to="/Login" exact className='Navboth'>Login</NavLink></li>
        </ul>
          
      </nav>
         <Outlet />
</div>
  )
  }

export default Navbar
