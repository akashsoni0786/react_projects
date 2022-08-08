import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import App from './App';
import Checkout from "./Checkout";
import App from "./App";
import Contxt from "./Contxt";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Contxt>
        <App />
      </Contxt>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
