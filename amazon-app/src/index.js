import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App';
import { ContextFuncName } from './MyContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextFuncName>
    <App />
    </ContextFuncName>
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
