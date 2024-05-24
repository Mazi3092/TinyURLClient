import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from '../reportWebVitals.js';
import F from './check/f.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
   <F/>

</React.StrictMode>
);
reportWebVitals();
