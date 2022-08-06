// React Homework Final Project
// Stellar Store
// Allen P.
// 08/05/2022

// StyledCheckout.js
// =================

// Styling for the cart page.

// React Components
import styled from "styled-components";

// Style Constants
import { textFont, blue1, shade3 } from "./StyleConstants";

// CheckoutDiv
// ===========

const CheckoutDiv = styled.div`
  padding: 0.5rem;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  font-family: ${textFont}, sans-serif;
  color: ${blue1};
`;

export { CheckoutDiv };
