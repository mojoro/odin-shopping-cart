import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import NavBar from "../../src/components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import { CartContext } from "../../src/context/CartContext";

describe("NavBar", () => {
  it("displays cart badge when items exist", () => {
    const mockCartContext = {
      cart: {
        items: [{ id: 1 }, { id: 2 }],
        total: 0,
      },
      dispatch: vi.fn(),
    };

    render(
      <BrowserRouter>
        <CartContext.Provider value={mockCartContext}>
          <NavBar />
        </CartContext.Provider>
      </BrowserRouter>
    );

    const badge = screen.getByText("2");
    expect(badge).toBeInTheDocument();
  });
});
