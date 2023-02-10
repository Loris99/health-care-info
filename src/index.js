import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createRoot} from 'react-dom/client';

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement =document.getElementById("root")
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // document.getElementById("root")
);
document.getElementById("root").style.height = "100%";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
// document.getElementById("root").style.height = "100%";

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
