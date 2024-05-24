import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {SignIn} from './features/users/Users.js'
import {SignUp} from './features/users/Users.js'
import Advertiser from './arranged/advertiser.js';
import UserForm from './arranged/AdvertisingForm.js';
import AdvertisingLinks from './arranged/advertisingLinks.js';
import Dialog from './try/dialog.js';
// import Dialog from './mesudar/mailbox.js';
import ShowOptions from './check/showOptions.js';
import ManagerNavbar from './mesudar/managerNavbar.js'
import NavBar from './mesudar/managerNavbar.js';
// import Graph from './graph1.js';

import Full from './arranged/full.js'
import Home from './arranged/home.js'
import UsersAndLinks from './arranged/users&links.js';
import Users from './arranged/users.js'
import AllUrls from './arranged/allUrls.js';
import MyUrls from './arranged/myUrls.js';
import BarChart from './arranged/barChart.js'
import Graph from './arranged/graphs.js'
import Profile from './arranged/profile.js';
import Mail from './mesudar/mail.js';

import Check from './check/showOptions.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <NavBar/>
      <Routes>
     <Route path="/full" element={<Full/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/usersAndLinks" element={<UsersAndLinks/>}></Route>
      <Route path="/users" element={<Users/>}></Route>
      <Route path="/allUrls" element={<AllUrls/>}></Route>
    <Route path="/myUrls" element={<MyUrls/>}></Route>
    <Route path="/barChart" element={<BarChart/>}></Route>
    <Route path="/graph" element={<Graph/>}></Route>
    <Route path="/advertiser" element={<Advertiser/>}></Route>
    <Route path="/advertisingLinks" element={<AdvertisingLinks/>}></Route> 
    <Route path="/profile" element={<Profile/>}></Route> 
    <Route path="/mailbox" element={<Mail/>}></Route> 
      {/* עד כאן מסודר */}
      <Route path="/check" element={<Check/>}></Route>

      <Route path="/dialog" element={<Dialog/>}></Route>
      <Route path="/managerNavbar" element={<ManagerNavbar/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/signin" element={<SignIn/>}></Route>
    <Route path="/userForm" element={<UserForm/>}></Route> AdvertisingLinks
    <Route path="/" element={<Home/>}></Route> 



    
    
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
