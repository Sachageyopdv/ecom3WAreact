import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CG from "../img/img.jpg";

const Card = styled.div`
  border: grey solid 1px;
  background-color: grey;
  border-radius: 10px;
  width: 19%;
  height: 300px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  column-count: 5;
`;

const CardImage = styled.img`
  height: 200px;
  width: 200px;
  padding: 10px;
  align-self
`;

const Product = () => {
  return (
    <>
      <Card>
        <Link to="">
          <CardImage src={CG}></CardImage>
          <p>Nom du produit</p>
        </Link>
        <button>Prix</button>
      </Card>
    </>
  );
};

export default Product;
