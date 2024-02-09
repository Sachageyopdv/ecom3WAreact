import React from "react";
import Product from "./Product";
import styled from "styled-components";

const ProductZone = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 15%;
`;

const ProductsDisplay = ({ products }) => {
  return (
    <ProductZone>
      {products.map((elem) => (
        <Product key={elem._id} {...elem} />
      ))}
    </ProductZone>
  );
};

export default ProductsDisplay;
