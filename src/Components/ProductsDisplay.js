import React from "react";
import Product from "./Product";
import styled from "styled-components";

const ProductZone = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 15%;
`;

const ProductsDisplay = ({ products, filter }) => {
  const checkFilter = (product) => {
    if (filter.name !== "" && !product.name.includes(filter.name)) {
      return false;
    }
    if (filter.brand !== "" && product.brand !== filter.brand) {
      return false;
    }
    if (product.price < filter.minPrice || product.price > filter.maxPrice) {
      return false;
    }
    return true;
  };

  return (
    <ProductZone>
      {products.map((elem) => {
        if (checkFilter(elem)) {
          return <Product key={elem._id} {...elem} />;
        } else {
          return null;
        }
      })}
    </ProductZone>
  );
};

export default ProductsDisplay;
