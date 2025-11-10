import { createContext, useContext, useReducer } from "react";

const defaultContext = {
  cart: { items: [], total: 0 },
  dispatch: () => null,
};

export const CartContext = createContext(defaultContext);

// create the context and describe initial state

// write reducer function with appropriate action types (state, action)

// export the cartProvider which will use the reducer to update the state

// export function to use the cart context which will reliably return the CartContext

const initialState = {
  items: [],
  total: 0,
};

const exampleAddAction = {
  type: "ADD_ITEM",
  payload: {
    /* all item info from API */
    quantity: 3,
    id: 0,
  },
};
const exampleUpdateAction = {
  type: "UPDATE_QUANTITY",
  payload: {
    /* all item info from API */
    quantity: 3,
    id: 0,
  },
};
const exampleDeleteAction = {
  type: "REMOVE_ITEM",
  payload: {
    /* all item info from API */
    id: 0,
  },
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      const items = existingItem
        ? state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        : [
            ...state.items,
            { ...action.payload, quantity: action.payload.quantity },
          ];
      console.log(items);

      return {
        items,
        total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
    }
    case "UPDATE_QUANTITY": {
      const items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      console.log(items);

      return {
        items,
        total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
    }
    case "REMOVE_ITEM": {
      const items = state.items.filter((item) => item.id !== action.payload.id);
      console.log(items);

      return {
        items,
        total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
    }
    default:
      return state;
  }
}

export function CartProvider({
  children,
  initialState = { items: [], total: 0 },
}) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const { cart, dispatch } = useContext(CartContext);
  return { cart, dispatch };
}
