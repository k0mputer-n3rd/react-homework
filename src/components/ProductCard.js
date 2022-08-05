// React Homework Final Project
// Stellar Store
// Allen P.
// 08/04/2022

// Products.js
// ===========

// React Components
import React from "react";
import { useNavigate } from "react-router-dom";

// Application Components

// Styles
import { PageTitle, ButtonContainer, Button } from "../styles/StyledComponents";
import { ProductBox, ProductPoster, ProductTitle, ProductPrice } from "../styles/StyledProducts";

// ProductCard()
// =============

const ProductCard = (props) => {
  const product = props.product;
  const navigate = useNavigate();
  console.log(`Product #${product.id}!`);

  return (
    <ProductBox>
      <ProductPoster
        src={product.image}
        alt="The Product"
      />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
      <Button onClick={() => navigate("/products/${product.id")}>Details</Button>

    </ProductBox>
  );
};

export default ProductCard;
