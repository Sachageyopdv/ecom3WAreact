import axios from "axios";
import React from "react";
import styled from "styled-components";
import Product from "./Product";

const MyDiv = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const MainPage = () => {
  axios(
    "https://api-3wa-ecomm-524fde41edfa.herokuapp.com/api/product"
  )
    .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching data:", error));

  return (
    <MyDiv>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
    </MyDiv>
  );
};

export default MainPage;
