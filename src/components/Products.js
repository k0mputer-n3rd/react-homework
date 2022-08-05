// React Homework Final Project
// Stellar Store
// Allen P.
// 08/04/2022

// Products.js
// ===========

// React Components
import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Contexts
import { CartContext } from "../contexts/CartContext.js";

// Application Components
import ProductCard from "./ProductCard";

// Styles
import { PageTitle, ButtonContainer, Button } from "../styles/StyledComponents";
import { ProductDiv, ProductLayout } from "../styles/StyledProducts";

// Products()
// ==========

const Products = () => {
  // Create an empty product list as a state variable
  const { items } = useContext(CartContext);
  const { test, setTest, incTest, decTest } = useContext(CartContext);
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  let Buttons;
  console.log(`Products! Test=${test}`);

  console.log("Products!");

  useEffect(() => {
    const getProducts = async () => {
      const url = `https://fakestoreapi.com/products`;
      const response = await fetch(url);
      const data = await response.json();
      setProductList(data);
    };
    getProducts();
  }, []);

  // productList.map((product) => console.log(product));

  Buttons = (
    <ButtonContainer>
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={incTest}>Increment Test</Button>
      <Button onClick={decTest}>Decrement Test</Button>
    </ButtonContainer>
  );

  return (
    <ProductDiv>
      <PageTitle>Products</PageTitle>
      <ProductLayout>
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductLayout>
      {Buttons}
    </ProductDiv>
  );
};

export default Products;
