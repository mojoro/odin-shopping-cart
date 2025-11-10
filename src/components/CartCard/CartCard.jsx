import { useCart } from "../../context/CartContext";
import CartQuantity from "../CartQuantity/CartQuantity";
import styles from "./CartCard.module.css";

export default function CartCard({ item }) {
  const { dispatch } = useCart();

  const handleQuantityChange = (newQuantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: item.id, quantity: newQuantity },
    });
  };

  const handleRemove = () => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { id: item.id },
    });
  };

  return (
    <div className={styles.cartCard}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={styles.details}>
        <h3>{item.title}</h3>
        <p className={styles.price}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(item.price)}
        </p>
        <div className={styles.actions}>
          <CartQuantity
            quantity={item.quantity}
            onChange={handleQuantityChange}
          />
          <button onClick={handleRemove} className={styles.removeButton}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
