// React Homework Final Project
// Stellar Store
// Allen P.
// 08/05/2022

// Checkout.js
// ===========

// React Components
import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Contexts
import { CartContext } from "../contexts/CartContext.js";

// Application Components

// Styles
import { PageTitle, ButtonContainer, Button } from "../styles/StyledComponents";
import { CheckoutDiv } from "../styles/StyledCheckout";

// Checkout()
// ==========

const Checkout = () => {
  const { items, totalCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [nameTo, setNameTo] = useState([]);
  const [shipTo, setShipTo] = useState([]);
  const [billTo, setBillTo] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);

  console.log("Checkout!");

  const cancelOrder = () => {
    clearCart();
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      nameTo,
      items,
      shipTo,
      billTo,
      cardInfo,
    };
    console.log("Order payload is: ", payload);
    clearCart();
    navigate("/");
  };

  return (
    <CheckoutDiv>
      <PageTitle>Checkout</PageTitle>
      <p>Your order total is: ${totalCart().toFixed(2)}</p>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Your Name</label>
          <input
            name="name"
            type="text"
            value={nameTo}
            onChange={(event) => setNameTo(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="ship">Shipping Address</label>
          <textarea
            name="ship"
            rows="4"
            cols="50"
            value={shipTo}
            onChange={(event) => setShipTo(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="bill">Shipping Address</label>
          <textarea
            name="bill"
            rows="4"
            cols="50"
            value={billTo}
            onChange={(event) => setBillTo(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="card">Credit/Debit Card Number</label>
          <input
            name="card"
            type="text"
            value={cardInfo}
            onChange={(event) => setCardInfo(event.target.value)}
          />
        </div>
        <ButtonContainer>
        <Button onClick={() => navigate("/products")}>View Products</Button>
        <Button onClick={() => navigate("/cart")}>View Cart</Button>
        <Button onClick={() => cancelOrder()}>Cancel Order</Button>
        <Button type="submit">Submit Order</Button>
        </ButtonContainer>
      </form>
    </CheckoutDiv>
  );
};

export default Checkout;
