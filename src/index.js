import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import Navbar from './peges/Navbar';
import Productdiscription from './peges/Productdiscription';
import Home from './peges/Home';
 import Login from './peges/Login';
import Signup from './peges/Signup';
import Categories from './peges/Categories';
import Cart from './peges/Cart';
import Profile from './peges/Profile';
import Address from './peges/Address';
import Payment from './peges/Payment';
import Summery from './peges/Summery';




import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path='Login' element={<Login/>} />
                <Route path='Signup' element={<Signup />} />
                <Route path='Categories' element={<Categories />} />
                <Route path='Cart' element={<Cart />} />

                <Route path='Profile' element={<Profile />} />
                <Route path='Address' element={<Address />} />
                <Route path='/Payment' element={<Payment />} />
                <Route path='/Summery' element={<Summery/>} />

                <Route path='Productdescription' element={<Productdiscription />} />




            </Route>
        </Routes>
      
    </BrowserRouter>);

reportWebVitals();
