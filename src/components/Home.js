// React Homework Final Project
// Stellar Store
// Allen P.
// 08/04/2022

// Home.js
// =======

// React Components
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Contexts
import { CartContext } from "../contexts/CartContext.js";

// Application Components

// Styles
import { ButtonContainer, Button } from "../styles/StyledComponents";
import { HomeDiv, HomeTitle } from "../styles/StyledHome";

// Home()
// ======

const Home = () => {
  const { items } = useContext(CartContext);
  const { test, setTest, incTest, decTest } = useContext(CartContext);
  const navigate = useNavigate();
  let Buttons;
  console.log(`Home! Test=${test}`);

  if (items.length === 0) {
    Buttons = (
      <ButtonContainer>
        <Button onClick={() => navigate("/products")}>View Products</Button>
        <Button onClick={incTest}>Increment Test</Button>
        <Button onClick={decTest}>Decrement Test</Button>
      </ButtonContainer>
    );
  } else {
    Buttons = (
      <ButtonContainer>
        <Button onClick={() => navigate("/products")}>View Products</Button>
        <br />
        <Button onClick={() => navigate("/cart")}>View Cart</Button>
        <br />
        <Button onClick={() => navigate("/checkout")}>Checkout</Button>
        <br />
        <Button onClick={incTest}>Increment Test</Button>
        <Button onClick={decTest}>Decrement Test</Button>
      </ButtonContainer>
    );
  }

  return (
    <HomeDiv>
      <HomeTitle>Stellar</HomeTitle>
      <HomeTitle>Store</HomeTitle>
      {Buttons}
    </HomeDiv>
  );
};

export default Home;
