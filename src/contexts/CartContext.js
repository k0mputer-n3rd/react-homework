// React Homework Final Project
// Stellar Store
// Allen P.
// 07/30/2022

// CartContext.js
// ==============

///// Review for console.log and debugging code
///// Review subfunction names and logical order

// React Components
import React from "react";
import { createContext, useState } from "react";

// Application Components

// Stylesheets

// CartContext
// ===========

const CartContext = createContext();

// CartProvider()
// ==============

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [test, setTest] = useState(0);

  // cartFind()
  // ----------

  const cartFind = (id) => {
    const index = items.findIndex((item) => item.id === id);
    console.log(`Index: ${index}, Id: ${id}`);
    return items[index];
  };

  // addToCart()
  // -----------

  const addToCart = (product, quantity) => {
    const newId = parseInt(product.id);
    let newItems = items;
    const newItem = {
      id: newId,
      title: product.title,
      price: parseFloat(product.price),
      quantity: parseInt(quantity),
    };
    let index = 0;
    // console.log("Array length is: ", newItems.length);
    // console.log("Item: ", index, "Id: ", items[index].id);
    while (index < newItems.length && items[index].id < newId) {
      console.log(
        `Index: ${index}  items[index.id: ${items[index].id}  newId: ${newId}`
      );
      console.log("Comparison: ", items[index].id < newId);
      index++;
    }
    console.log("Adding: ", newItem);
    console.log(`Index: ${index}, Id: ${newId}`);
    newItems.splice(index, 0, newItem);
    setItems(newItems);
  };

  // updateItem()
  // ------------

  const updateItem = (id, quantity) => {
    let newItems = items;
    const index = newItems.findIndex((item) => item.id === id);
    let item = items[index];
    const newItem = {
      id: parseInt(item.id),
      title: item.title,
      price: parseFloat(item.price),
      quantity: parseInt(quantity),
    };
    console.log("Updating: ", newItem);
    console.log(`Index: ${index}, Id: ${id}`);
    newItems.splice(index, 1, newItem);
    setItems(newItems);
  };

  // deleteItem()
  // ------------

  const deleteItem = (id) => {
    let newItems = items;
    const index = newItems.findIndex((item) => item.id === id);
    console.log("Deleting: ", items[index]);
    console.log(`Index: ${index}, Id: ${id}`);
    newItems.splice(index, 1);
    setItems(newItems);
  };

  // totalCart()
  // -----------

  const totalCart = () => {
    return items.reduce((prev, item) => prev + item.price * item.quantity, 0);
  };

  // clearCart()
  // -----------

  const clearCart = () => {
    setItems([]);
  };

  const incTest = () => {
    setTest(test + 1);
  };

  const decTest = () => {
    setTest(test - 1);
  };


  // Return from CartProvider
  // ------ ---- ------------

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        cartFind,
        updateItem,
        deleteItem,
        totalCart,
        clearCart,
        test,
        setTest,
        incTest,
        decTest,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
