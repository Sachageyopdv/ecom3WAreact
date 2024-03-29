import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { faker } from "@faker-js/faker";
import styled from "styled-components";
import { useContext } from "react";
import { PanierContext } from "./panier-context";

const Price = styled.p`
  font-size: 40px;
`;

const ProductPage = () => {
  let { id } = useParams();
  id = id.substring(1);
  const [productData, setProductData] = useState();
  const { addItemToCart } = useContext(PanierContext)

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
          <img alt="placeholderimage" src={faker.image.url()}></img>
          <h1>{productData.name}</h1>
          <label>{productData.color}</label>
          <Price>{productData.price}€</Price>
          <p>{productData.desc}</p>
          <p>Stock displonible: {productData.stock}</p>
          <button onClick={() => addItemToCart({ id: id, name: productData.name, price: productData.price })}>
          Ajouter au panier{" "}</button>
        </div>
      )}
    </>
  );
};

export default ProductPage;
