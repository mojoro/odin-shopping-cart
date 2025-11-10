import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CartProvider, useCart } from "../../src/context/CartContext";

describe("CartContext", () => {
  it("adds item to cart", () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.dispatch({
        type: "ADD_ITEM",
        payload: { id: 1, price: 10, quantity: 1 },
      });
    });

    expect(result.current.cart.items).toHaveLength(1);
  });

  it("updates quantity of existing item", () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.dispatch({
        type: "ADD_ITEM",
        payload: { id: 1, price: 10, quantity: 1 },
      });
      result.current.dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: 1, quantity: 2 },
      });
    });

    expect(result.current.cart.items[0].quantity).toBe(2);
  });
});
