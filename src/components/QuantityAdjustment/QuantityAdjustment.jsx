import { useState } from "react";
import styles from "./QuantityAdjustment.module.css"; // Create a CSS module for styles

export default function QuantityAdjustment() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value, 10)); // Ensure quantity is at least 1
    setQuantity(value);
  };

  return (
    <div className={styles.quantityAdjustment}>
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
