import React from "react";
import "./App.scss";
import Search from "./Components/Search/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./Components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />

          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
