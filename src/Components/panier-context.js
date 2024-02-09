import React, { createContext, useReducer } from "react";

export const PanierContext = createContext({
  items: [],
  addItemToCart: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === "AJOUTER_PANIER") {
    const elementPanier = [...state.items];

    const existingElementIndex = elementPanier.findIndex(
      (cartItem) => cartItem.id === action.payload.product.id
    );

    const existingElement = elementPanier[existingElementIndex];

    if (existingElement) {
      elementPanier[existingElementIndex] = {
        ...existingElement,
        quantity: existingElement.quantity + 1,
      };
    } else {
      const product = action.payload.product;

      if (product) {
        elementPanier.push({
          id: product.id,
          name: product.name,
          quantity: 1,
          price: product.price,
        });
        
      }
    }

    return {
      items: elementPanier,
    };
  }

  return state;
};

export const PanierContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    items: [],
  });

  const handleAddtoProductCart = (product) => {
    cartDispatch({
      type: "AJOUTER_PANIER",
      payload: {
        product,
      },
    });
  };

  const initialValue = {
    items: cartState.items,
    addItemToCart: handleAddtoProductCart,
  };

  return (
    <PanierContext.Provider value={initialValue}>
      {children}
    </PanierContext.Provider>
  );
};
