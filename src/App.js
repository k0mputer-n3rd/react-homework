// React Homework Final Project
// Stellar Store
// Allen P.
// 08/04/2022

// App.js
// ======

// React Components
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Contexts
import { CartProvider } from "./contexts/CartContext.js";

// Application Components
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

// Styles
import { AppDiv } from "./styles/StyledComponents";

// App()
// =====

const App = () => {
  return (
    <AppDiv>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </AppDiv>
  );
};

export default App;
