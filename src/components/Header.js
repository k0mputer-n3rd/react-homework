// React Homework Final Project
// Stellar Store
// Allen P.
// 08/05/2022

// Header.js
// =========

// React Components
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

// Application Components
import { CartContext } from "../contexts/CartContext.js";

// Styles
import { HeaderDiv, HeaderText, BrandText, HeaderNav, HeaderLink } from "../styles/StyledHeader";

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
      <HeaderNav>
        <HeaderLink>
          <Link to="/" className="Link">
            Home
          </Link>
        </HeaderLink>
        <HeaderLink>
          <Link to="/about" className="Link">
            About
          </Link>
        </HeaderLink>
      </HeaderNav>
    </HeaderDiv>
  );
};

export default Header;
