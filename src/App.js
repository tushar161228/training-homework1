import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listing from "./Listing.jsx";
import ProductPage from "./ProductPage.jsx";
import Cart from "./Cart.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
