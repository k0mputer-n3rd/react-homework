// React Homework Final Project
// Stellar Store
// Allen P.
// 08/04/2022

// StyledComponents.js
// ===================

// React Components
import styled from "styled-components";

// Style Constants
import {
  textFont,
  headingFont,
  blue1,
  blue4,
  blue5,
  shade1,
  shade2,
} from "./StyleConstants";

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

const PageTitle = styled.div`
  padding: 0.5rem;
  text-align: center;
  font-family: ${headingFont}, serif;
  font-size: 3rem;
  font-weight: 400;
  color: ${blue1};
  //  background-color: ${shade1};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  //  background-color: ${shade1};
`;

const Button = styled.button`
  font-family: ${textFont}, serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${blue5};
  background-color: ${shade2};
`;

export { AppDiv, PageTitle, ButtonContainer, Button };
