// React Homework Final Project
// Stellar Store
// Allen P.
// 07/30/2022

// Home.js
// =======

// React Components
import React from "react";
import { useContext } from "react";
// import { useNavigate } from "react-router-dom";

// Contexts
import { CartContext } from "../contexts/CartContext.js";

// Application Components

// Styles
import { HomeDiv, TitleDiv } from "../styles/StyledHome";

// Home()
// ======

const Home = () => {
  // const { items } = useContext(CartContext);
  const { test, setTest } = useContext(CartContext);

  const incrementTest = () => {
    setTest(test + 1);
  };

  console.log(`Home! Test=${test}`);

  return (
    <HomeDiv>
      <TitleDiv>Stellar</TitleDiv>
      <TitleDiv>Store</TitleDiv>
      <p>Home Page</p>
      <br />
      <button onClick={() => incrementTest()}>Test</button>
      <p>This is a test, and nothing more.</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo totam ut
        voluptate, ipsum suscipit itaque consequatur mollitia nesciunt incidunt
        nostrum quia enim minus voluptatum molestias quisquam ratione! Fuga
        laborum itaque voluptate mollitia reprehenderit asperiores atque magni
        facere, pariatur quo laudantium voluptatum expedita rem earum sint
        repellat quam! Quae, aspernatur sint.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo totam ut
        voluptate, ipsum suscipit itaque consequatur mollitia nesciunt incidunt
        nostrum quia enim minus voluptatum molestias quisquam ratione! Fuga
        laborum itaque voluptate mollitia reprehenderit asperiores atque magni
        facere, pariatur quo laudantium voluptatum expedita rem earum sint
        repellat quam! Quae, aspernatur sint.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo totam ut
        voluptate, ipsum suscipit itaque consequatur mollitia nesciunt incidunt
        nostrum quia enim minus voluptatum molestias quisquam ratione! Fuga
        laborum itaque voluptate mollitia reprehenderit asperiores atque magni
        facere, pariatur quo laudantium voluptatum expedita rem earum sint
        repellat quam! Quae, aspernatur sint.
      </p>
    </HomeDiv>
  );
};

export default Home;
