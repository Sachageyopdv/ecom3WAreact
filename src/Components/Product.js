import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";

const Card = styled.div`
  border: grey solid 1px;
  background-color: grey;
  border-radius: 10px;
  width: 30%;
  margin: 5px;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  height: 80%;
  width: 80%;
  padding-left: 10%;
`;

const ProductTitle = styled(Link)`
  text-decoration: none;
  font-family: Optima, sans-serif;
  color: white;
`;

const PriceButton = styled.button`

`

const Product = ({ name, price, _id }) => {
  return (
    <>
      <Card>
        <Link to={`/:${_id}`}>
          <CardImage src={faker.image.url()}></CardImage>
        </Link>
        <ProductTitle>{name}</ProductTitle>
        <button>{price}€</button>
      </Card>
    </>
  );
};

export default Product;
