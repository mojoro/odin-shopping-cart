import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductCard from "../../src/components/ProductCard/ProductCard";
import { CartProvider } from "../../src/context/CartContext";

describe("ProductCard", () => {
  const mockProduct = {
    id: 1,
    title: "Test Product",
    price: 99.99,
    image: "test.jpg",
    description: "Test description",
  };

  it("renders product information correctly", () => {
    render(
      <CartProvider>
        <ProductCard product={mockProduct} />
      </CartProvider>
    );

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText("$99.99")).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.title)).toBeInTheDocument();
  });

  it("allows quantity adjustment", async () => {
    render(
      <CartProvider>
        <ProductCard product={mockProduct} />
      </CartProvider>
    );

    const incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton);
    expect(screen.getByDisplayValue("2")).toBeInTheDocument();
  });
});
