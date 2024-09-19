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
import AddAddress from './peges/AddAddress';

import Payment from './peges/Payment';
import Summery from './peges/Summery';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={Store}>
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route path='/' element={<Home />} />
                <Route path='/Login' element={<Login/>} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='Categories' element={<Categories />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='/Profile' element={<Profile />} />
                <Route path='/Address' element={<Address />} />
                <Route path='/AddAddress' element={<AddAddress />} />

                <Route path='/Payment' element={<Payment />} />
                <Route path='/Summery' element={<Summery/>} />
                <Route path='/Productdescription' element={<Productdiscription />} />
            </Route>
        </Routes>
        </Provider>
    </BrowserRouter>
    );

reportWebVitals();
