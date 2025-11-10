import { useState } from "react";
import { useCart } from "../../context/CartContext";
import styles from "./ProductQuantity.module.css"; // Create a CSS module for styles

export default function ProductQuantity({ quantityState, product }) {
  const [quantity, setQuantity] = quantityState;

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value, 10)); // Ensure quantity is at least 1
    setQuantity(value);
  };

  return (
    <div className={styles.ProductQuantity}>
      <button onClick={decrement}>-</button>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        min="1"
        className={styles.quantityInput}
      />
      <button onClick={increment}>+</button>
    </div>
  );
}
