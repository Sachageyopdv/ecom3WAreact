import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { faker } from "@faker-js/faker";
import styled from "styled-components";

const Price = styled.p`
  font-size: 40px;
`;

const ProductPage = () => {
  let { id } = useParams();
  id = id.substring(1);
  const [productData, setProductData] = useState();

  useEffect(() => {
    axios(`https://api-3wa-ecomm-524fde41edfa.herokuapp.com/api/product/${id}`)
      .then(({ data }) => {
        setProductData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <>
      {productData && (
        <div>
          <img src={faker.image.url()}></img>
          <h1>{productData.name}</h1>
          <label>{productData.color}</label>
          <Price>{productData.price}€</Price>
          <p>{productData.desc}</p>
        </div>
      )}
    </>
  );
};

export default ProductPage;
