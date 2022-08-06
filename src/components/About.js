// React Homework Final Project
// Stellar Store
// Allen P.
// 08/05/2022

// About.js
// ========

// React Components
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Contexts
import { CartContext } from "../contexts/CartContext.js";

// Styles
import { PageTitle, ButtonContainer, Button } from "../styles/StyledComponents";
import { AboutDiv, AboutTitle, AboutText } from "../styles/StyledAbout";

// About()
// =======

const About = () => {
  const { incTest, decTest } = useContext(CartContext);
  let navigate = useNavigate();

  console.log("About!");

  return (
    <AboutDiv>
      <AboutTitle>Stellar Store</AboutTitle>
      <AboutText>
        This is my final project for the BitWise React class, and I wanted it to be a stellar project.
        The assignment called for a fake store application, so after some contemplation, I decided to create a stellar store with a stellar background. 
        The data is from <bold>fakestoreapi.com</bold>.
      </AboutText>
      <ButtonContainer>
        <Button onClick={() => navigate("/")}>Home Page</Button>
        <Button onClick={incTest}>Increment Test</Button>
        <Button onClick={decTest}>Decrement Test</Button>
      </ButtonContainer>
    </AboutDiv>
  );
};

export default About;
