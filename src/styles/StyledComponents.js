// React Homework Final Project
// Stellar Store
// Allen P.
// 08/04/2022

// StyledComponents.js
// ===================

// React Components
import styled from "styled-components";

// Styles
import { textFont, headingFont, blue1, blue4, shade1 } from "./StyleConstants";

// AppDiv
// ======

const AppDiv = styled.div`
  font-family: ${textFont}, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${blue1};
  background-color: ${blue4};
  background-image: url("StellarBackground.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

// HeaderDiv
// =========

const HeaderDiv = styled.div`
  padding: 2px 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${shade1};
`;

// HeaderText
// ==========

const HeaderText = styled.div`
  justify-content: center;
  color: ${blue1};
`;

// BrandText
// =========

const BrandText = styled.div`
  font-family: ${headingFont}, serif;
  font-size: 2em;
  font-weight: 400;
  color: ${blue1};
`;

// FooterDiv
// =========

const FooterDiv = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${shade1};
`;

// FooterText
// ==========

const FooterText = styled.div`
  color: ${blue1};
`;

export { AppDiv, HeaderDiv, HeaderText, BrandText, FooterDiv, FooterText };
