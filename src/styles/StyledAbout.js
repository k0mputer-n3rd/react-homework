// React Homework Final Project
// Stellar Store
// Allen P.
// 08/05/2022

// StyledAbout.js
// ==============

// Styling for the about page.

// React Components
import styled from "styled-components";

// Style Constants
import { textFont, headingFont, blue1 } from "./StyleConstants";

// AboutDiv
// ========

const AboutDiv = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 85vh;
  font-family: ${textFont}, sans-serif;
  color: ${blue1};
`;

// AboutTitle
// ==========

const AboutTitle = styled.div`
  text-align: center;
  font-family: ${headingFont}, serif;
  font-size: 5rem;
  font-weight: 400;
`;

// AboutText
// =========

const AboutText = styled.div`
  padding: 0 10vw;
  text-align: justify;
  font-family: ${textFont}, serif;
  font-size: 1.6rem;
  font-weight: 400;
`;

export { AboutDiv, AboutTitle, AboutText };
