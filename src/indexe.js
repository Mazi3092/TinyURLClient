import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Nav from './mesudar/navbar.js'
import Home from './mesudar/home.js'
import SignUp from './mesudar/signUp';
import SignIn from './mesudar/signIn';
import UsersAndLinks from './mesudar/users&links';
import Users from './mesudar/users.js'
import AllUrls from './mesudar/allUrls.js';
import Full from './full'



import AddTarget from './mesudar/addTarget'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/signin" element={<SignIn/>}></Route>
    <Route path="/usersAndLinks" element={<UsersAndLinks/>}></Route>
    <Route path="/users" element={<Users/>}></Route>
    <Route path="/allUrls" element={<AllUrls/>}></Route>
    <Route path="/full" element={<Full/>}></Route>




  </Routes>
  </BrowserRouter>
);
reportWebVitals();
