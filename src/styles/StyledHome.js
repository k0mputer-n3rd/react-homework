// React Homework Final Project
// Stellar Store
// Allen P.
// 08/04/2022

// StyledHome.js
// =============

// Styling for the home page.

// React Components
import styled from "styled-components";

// Styles
import { textFont, headingFont, blue1, blue4 } from "./StyleConstants";

// HomeDiv
// =======

const HomeDiv = styled.div`
  padding: 5px;
  font-family: ${textFont}, sans-serif;
  color: ${blue1};
`;

// TitleDiv
// ========

const TitleDiv = styled.div`
  text-align: center;
  font-family: ${headingFont}, serif;
  font-size: 10em;
  font-weight: 400;
`;

export { HomeDiv, TitleDiv };
