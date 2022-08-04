// React Homework Final Project
// Stellar Store
// Allen P.
// 07/30/2022

// Header.js
// =========

// React Components
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

// Application Components
import { CartContext } from "../contexts/CartContext.js";

// Styles
import { HeaderDiv, HeaderText, BrandText } from "../styles/StyledComponents";

// Header()
// ========

const Header = () => {
  const { items, test } = useContext(CartContext);
  return (
    <HeaderDiv>
      <BrandText>Stellar Store</BrandText>
      <HeaderText>
        <p>Items in Cart: {items.length}</p>
      </HeaderText>
      <HeaderText>
        <p>Test: {test}</p>
      </HeaderText>
      <HeaderText>Navigation Links</HeaderText>
    </HeaderDiv>
  );
};

// XHeader()
// ========

const XHeader = (props) => {
  const { items, test } = useContext(CartContext);
  return (
    <HeaderDiv>
      <p>Stellar Store</p>
      <div>
        <p>Items in Cart: {items.length}</p>
      </div>
      <div>
        <p>Test: {test}</p>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ padding: 10 }}>
          <Link to="/" className="Link">
            Home
          </Link>
        </div>
        <div style={{ padding: 10 }}>
          <Link to="/about" className="Link">
            About
          </Link>
        </div>
      </div>
    </HeaderDiv>
  );
};

export default Header;
