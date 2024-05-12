import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './mesudar/navbar';
import Home from './mesudar/home.js'
import App from './app'
// import SignUp from './mesudar/signUp';
import {SignIn} from './features/users/Users'
import {SignUp} from './features/users/Users'

// import SignIn from './mesudar/signIn';
import UsersAndLinks from './mesudar/users&links';
import Users from './mesudar/users.js'
import AllUrls from './mesudar/allUrls.js';
import MyUrls from './mesudar/myUrls.js';
import Full from './full'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/app" element={<App/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/signin" element={<SignIn/>}></Route>
    <Route path="/usersAndLinks" element={<UsersAndLinks/>}></Route>
    <Route path="/users" element={<Users/>}></Route>
    <Route path="/allUrls" element={<AllUrls/>}></Route>
    <Route path="/full" element={<Full/>}></Route>
    <Route path="/myUrls" element={<MyUrls/>}></Route>

      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
