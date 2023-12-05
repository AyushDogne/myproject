import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './peges/Navbar';
import Home from './peges/Home';
 import Login from './peges/Login';
import Signup from './peges/Signup';
import Categories from './peges/Categories';
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
            </Route>
        </Routes>
      
    </BrowserRouter>);

reportWebVitals();
