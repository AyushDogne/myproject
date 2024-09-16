import React from 'react'
import { NavLink } from 'react-bootstrap'
import '../csspagas/Footer.css'

const Footer = () => {
  return (
    <div>
        <div className='footer-main-div'>
        <h1 className='GLOW-MART'>GLOW-MART</h1>

        <div>
          <p>It is a only for Electronice item's<br/> Very Good + Fast E-Shop<br/>
          </p>
        </div>
        <div>
          <p>Links</p>
          <div className='footer-main-navlink'>
            <li><NavLink to="/" exact className='footer-Navlink'>Home</NavLink></li><br/>
            <li><NavLink to="/Signup" className='footer-Navlink'>Sign up</NavLink></li><br/>
            <li><NavLink to="/About" className='footer-Navlink'>Login</NavLink></li><br/>
            <li><NavLink to="/Contect" className='footer-Navlink'>Contect</NavLink></li>
          </div>
        </div>

        <div>
          <p>Help</p>
          <div className='footer-main-navlink'>
            <li><NavLink to="/" exact className='footer-Navlink'>Payment Options</NavLink></li><br/>
            <li><NavLink to="/Shop" className='footer-Navlink'>Returns</NavLink></li><br/>
            <li><NavLink to="/About" className='footer-Navlink'>Privacy Policies</NavLink></li>
          </div>
        </div>

        <div>
          <p>Newsletter</p>
          <input type="text" placeholder='Enter Your Email Address' className='footer-input'/>
          <button className='subscribe-button'>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  )
}

export default Footer