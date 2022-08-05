// React Homework Final Project
// Stellar Store
// Allen P.
// 08/04/2022

// StyledHome.js
// =============

// Styling for the home page.

// React Components
import styled from "styled-components";

// Style Constants
import { textFont, headingFont, blue1 } from "./StyleConstants";

// HomeDiv
// =======

const HomeDiv = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 85vh;
  font-family: ${textFont}, sans-serif;
  color: ${blue1};
`;

// HomeTitle
// =========

const HomeTitle = styled.div`
  text-align: center;
  font-family: ${headingFont}, serif;
  font-size: 10rem;
  font-weight: 400;
`;

export { HomeDiv, HomeTitle };
