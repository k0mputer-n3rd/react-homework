// React Homework Final Project
// Stellar Store
// Allen P.
// 08/04/2022

// Cart.js
// =======

// React Components
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Contexts
import { CartContext } from "../contexts/CartContext.js";

// Application Components

// Styles
import { PageTitle, ButtonContainer, Button } from "../styles/StyledComponents";

// Cart()
// ======

const Cart = () => {
  const { items, totalCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  let itemList;
  let Buttons;

  console.log("Cart!");
  console.log(items);

  const cancelOrder = () => {
    clearCart();
    navigate("/");
  };

  if (items.length === 0) {
    itemList = <li>Cart is empty.</li>;
    Buttons = (
      <>
        <button onClick={() => navigate("/products")}>View Products</button>
        <br />
      </>
    );
  } else {
    itemList = items.map((item, index) => (
      <tr key={index}>
        <td>{item.quantity}</td>
        <td>{item.title}</td>
        <td>${item.price.toFixed(2)}</td>
      </tr>
    ));
    Buttons = (
      <>
        <button onClick={() => navigate("/products")}>View Products</button>
        <br />
        <button onClick={() => cancelOrder()}>Cancel Order</button>
        <br />
        <button onClick={() => navigate("/checkout")}>Checkout</button>
        <br />
      </>
    );
  }

  return (
    <div>
      <PageTitle>Cart Contents</PageTitle>
      <p>Items in Cart: {items.length}</p>
      <table>
        <tbody>{itemList}</tbody>
      </table>
      <br />
      <p>Total is: ${totalCart().toFixed(2)}</p>
      <br />
      {Buttons}
    </div>
  );
};

export default Cart;
