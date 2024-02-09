import React, { useContext } from "react";
import { PanierContext } from "./panier-context";
import styled from "styled-components";

const CartElem = styled.li`
  display: flex;
  flex-direction: row;
  margin-top: 3px;
`;

const CartDetail = styled.div`
  width: 15%;
  border: grey solid 1px;
  border-radius: 3px;
  margin-left: 2px;
  padding: 3px
`;

const CartPage = () => {
  const { items } = useContext(PanierContext);

  console.log(items);
  const totalCartPrice = () => {
    let total = 0;

    items.map((elem) => {
      total += elem.price * elem.quantity;
    });
    return total;
  };

  return (
    <>
      <ul>
        {items.map((elem) => (
          <CartElem>
            <CartDetail>{elem.name}</CartDetail>
            <CartDetail>Prix:{elem.price}€</CartDetail>
            <CartDetail>Quantité:{elem.quantity}</CartDetail>
            <CartDetail>Prix Total:{elem.price * elem.quantity}€</CartDetail>
          </CartElem>
        ))}
      </ul>
      <p>Prix du panier : {totalCartPrice()}€</p>
    </>
  );
};

export default CartPage;
