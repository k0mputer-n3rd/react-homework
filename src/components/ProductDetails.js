// React Homework Final Project
// Stellar Store
// Allen P.
// 08/05/2022

// ProductDetails.js
// =================

// React Components
import React from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Contexts
import { CartContext } from "../contexts/CartContext.js";

// Application Components

// Styles
import { PageTitle, ButtonContainer, Button } from "../styles/StyledComponents";
import { ProductDiv, ProductPoster2, ProductLayout } from "../styles/StyledProducts";

// ProductDetails()
// ================

const ProductDetails = () => {
  const { items, addToCart, cartFind, updateItem, deleteItem } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const params = useParams();
  let Buttons;

  console.log(`ProductDetails #${params.id}!`);

  const addItemToCart = (product, quantity) => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  const updateItemInCart = (id, quantity) => {
    updateItem(id, quantity);
    navigate("/cart");
  };

  const deleteItemInCart = (id) => {
    deleteItem(id);
    navigate("/cart");
  };

  useEffect(() => {
    const getProduct = async () => {
      const url = `https://fakestoreapi.com/products/${params.id}`;
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [params.id]);

  const item = cartFind(parseInt(params.id));
  console.log(item);
  if (item === undefined) {
    // setQuantity(1);
    console.log("Not in Cart");
    Buttons = (
      <ButtonContainer>
        <Button onClick={() => addItemToCart(product, quantity)}>Add Item to Cart</Button>
        <br />
        <Button onClick={() => navigate("/products")}>View Products</Button>
        <br />
        <Button onClick={() => navigate("/cart")}>View Cart</Button>
        <br />
      </ButtonContainer>
    );
  } else {
    // console.log(item.quantity);
    // setQuantity(item.quantity);
    console.log("Item in Cart");
    Buttons = (
      <ButtonContainer>
        <Button onClick={() => updateItemInCart(product.id, quantity)}>Update Item in Cart</Button>
        <br />
        <Button onClick={() => deleteItemInCart(product.id)}>Delete Item in Cart</Button>
        <br />
        <Button onClick={() => navigate("/products")}>View Products</Button>
        <br />
        <Button onClick={() => navigate("/cart")}>View Cart</Button>
        <br />
      </ButtonContainer>
    );
 }

  return (
    <ProductDiv>
      <p>Items in Cart: {items.length}</p>
      <PageTitle>{product.title}</PageTitle>
      <ProductPoster2
        src={product.image}
        alt="The Product"
      />
      <div>
        <label htmlFor="qty">Quantity</label>
        <input
          name="qty"
          type="number"
          autoComplete="off"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
      </div>
      {Buttons}
    </ProductDiv>
  );
};

export default ProductDetails;
