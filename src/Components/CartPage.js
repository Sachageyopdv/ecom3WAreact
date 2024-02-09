import React, { useContext } from "react";
import { PanierContext } from "./panier-context";

const CartPage = () => {
  const { cart } = useContext(PanierContext);

  console.log(cart);
  return <div>CartPage</div>;
};

export default CartPage;
