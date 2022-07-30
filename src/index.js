// React Homework Final Project
// Stellar Store
// Allen P.
// 07/30/2022

// index.js
// ========

// ReportWebVitals has been removed; I'm not using it, it isn't needed.

// React Components
import React from "react";
import ReactDOM from "react-dom/client";

// Application Components
import App from "./App";

// Stylesheets
import "./index.css";

// Global Variables
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render()
// =============

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
