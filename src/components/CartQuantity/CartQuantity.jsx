import { useState } from "react";
import styles from "./CartQuantity.module.css";

export default function CartQuantity({ quantity, onChange }) {
  const handleChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    onChange(value);
  };

  const increment = () => onChange(quantity + 1);
  
  const decrement = () => {
    if (quantity > 1) {
      onChange(quantity - 1);
    }
  };

  return (
    <div className={styles.cartQuantity}>
      <button onClick={decrement} className={styles.quantityButton}>−</button>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        min="1"
        className={styles.quantityInput}
      />
      <button onClick={increment} className={styles.quantityButton}>+</button>
    </div>
  );
}