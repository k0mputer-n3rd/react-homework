// React Homework Final Project
// Stellar Store
// Allen P.
// 08/04/2022

// StyledFooter.js
// ===============

// Styling for the footer bar.

// React Components
import styled from "styled-components";

// Style Constants
import { textFont, headingFont, blue1, shade1 } from "./StyleConstants";

// FooterDiv
// =========

const FooterDiv = styled.div`
padding: 0.5rem 1rem;
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

export { FooterDiv, FooterText };
