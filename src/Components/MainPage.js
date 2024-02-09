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
  const [filter, setFilter] = useState({
    minPrice: 0,
    maxPrice: 0,
    name: "",
    brand: "",
  });

  useEffect(() => {
    axios("https://api-3wa-ecomm-524fde41edfa.herokuapp.com/api/product")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <MyDiv>
      {products && (
        <>
          <SideBar productList={products} setFilter={setFilter} />
          <ProductsDisplay products={products} filter={filter}/>
        </>
      )}
    </MyDiv>
  );
};

export default MainPage;
