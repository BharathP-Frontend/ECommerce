import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/datacontext";
import CartProvider from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <CartProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </CartProvider>
    </React.StrictMode>
  </BrowserRouter>
);
