// React Homework Final Project
// Stellar Store
// Allen P.
// 08/05/2022

// StyledHeader.js
// ===============

// Styling for the header bar.

// React Components
import styled from "styled-components";

// Style Constants
import { textFont, headingFont, blue1, shade1 } from "./StyleConstants";

// HeaderDiv
// =========

const HeaderDiv = styled.div`
  padding: 0.5rem 1rem;
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
  font-size: 2rem;
  font-weight: 400;
  color: ${blue1};
`;

// HeaderNav
// =========

const HeaderNav = styled.div`
  display: flex;
`;

// HeaderLink
// ==========

const HeaderLink = styled.div`
  padding: 1rem;
`;

export { HeaderDiv, HeaderText, BrandText, HeaderNav, HeaderLink };
