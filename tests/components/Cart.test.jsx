import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Cart from "../../src/routes/Cart/Cart";
import { CartProvider } from "../../src/context/CartContext";
import { BrowserRouter } from "react-router-dom";

describe("Cart", () => {
  it("shows empty cart message when cart is empty", () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <Cart />
        </CartProvider>
      </BrowserRouter>
    );

    expect(screen.getByText(/cart is empty/i)).toBeInTheDocument();
  });

  it("displays correct total with multiple items", () => {
    render(
      <BrowserRouter>
        <CartProvider
          initialState={{
            items: [
              { id: 1, title: "Item 1", price: 10.0, quantity: 2 },
              { id: 2, title: "Item 2", price: 20.0, quantity: 1 },
            ],
            total: 40.0,
          }}
        >
          <Cart />
        </CartProvider>
      </BrowserRouter>
    );

    // Use a more flexible matcher
    const priceElement = screen.getByText((content) => {
      return content.includes("40.00");
    });
    expect(priceElement).toBeInTheDocument();
  });
});
