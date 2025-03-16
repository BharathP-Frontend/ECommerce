import React from "react";
import HomePage from "./pages/HomePage";
import MenClothing from "./pages/MenClothing";
import WomenClothing from "./pages/WomenClothing";
import Jewelry from "./pages/Jewelry";
import Electronics from "./pages/Electronics";
import SingleProduct from "./components/SingleProduct";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menclothing" element={<MenClothing />} />
        <Route path="/womenclothing" element={<WomenClothing />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
