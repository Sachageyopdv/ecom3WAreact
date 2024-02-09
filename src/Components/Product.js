import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { PanierContext } from "./panier-context";

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
  order-radius: 20px;
  align-self: center;
  font-family: Optima, sans-serif;
  color: grey;
  margin: 5px;
  padding: 3%;
  margin-left: auto;
`;

const Product = ({ name, price, _id }) => {
  const { addItemToCart } = useContext(PanierContext);
  
  return (
    <>
      <Card>
        <Link to={`/:${_id}`}>
          <CardImage src={faker.image.url()}></CardImage>
        </Link>
        <ProductTitle>{name}</ProductTitle>
        <PriceButton>{price}€</PriceButton>
        <button onClick={() => addItemToCart({ id: _id, name, price })}>
          Ajouter au panier{" "}
        </button>
      </Card>
    </>
  );
};

export default Product;
