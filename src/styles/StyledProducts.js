// React Homework Final Project
// Stellar Store
// Allen P.
// 08/05/2022

// StyledProducts.js
// =================

// Styling for the product pages.

// React Components
import styled from "styled-components";

// Style Constants
import { textFont, blue1, shade3 } from "./StyleConstants";

// ProductDiv
// ==========

const ProductDiv = styled.div`
  padding: 0.5rem;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  font-family: ${textFont}, sans-serif;
  color: ${blue1};
`;

// ProductLayout
// =============

const ProductLayout = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

// ProductBox
// ==========

const ProductBox = styled.div`
  margin: 0.5rem;
  padding: 0.5rem 0;
  width: 20vw;
  height: 32vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-style: double;
  border-width: medium;
  border-color: ${blue1};
  border-radius: 5%;
  background-color: ${shade3};
`;

// ProductPoster1
// ==============

const ProductPoster1 = styled.img`
  margin: 0.5rem;
  max-width: 18vw;
  max-height: 24vw;
`;

// ProductPoster2
// ==============

const ProductPoster2 = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 60vw;
  max-height: 80vh;
`;

// ProductTitle
// ============

const ProductTitle = styled.div`
  margin-bottom: 0.5rem;
  width: 18vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${textFont}, sans-serif;
  font-size: 1rem;
  color: ${blue1};
`;

// ProductPrice
// ============

const ProductPrice = styled.div`
  margin-bottom: 0.5rem;
  width: 18vw;
  text-align: center;
  font-family: ${textFont}, sans-serif;
  font-size: 1rem;
  color: ${blue1};
`;

export {
  ProductDiv,
  ProductLayout,
  ProductBox,
  ProductPoster1,
  ProductPoster2,
  ProductTitle,
  ProductPrice,
};
