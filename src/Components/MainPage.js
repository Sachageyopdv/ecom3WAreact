import axios from "axios";
import React from "react";
import styled from "styled-components";
import ProductsDisplay from "./ProductsDisplay";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";

const MyDiv = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const MainPage = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios("https://api-3wa-ecomm-524fde41edfa.herokuapp.com/api/product")
    .then(({ data }) => {
      setProducts(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
  }, [])
 
  return (
    <MyDiv>
      <SideBar />
      <ProductsDisplay products={products} />
    </MyDiv>
  );
};

export default MainPage;
