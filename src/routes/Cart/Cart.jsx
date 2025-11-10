import { useCart } from "../../context/CartContext";
import CartCard from "../../components/CartCard/CartCard";
import styles from "./Cart.module.css";

export default function Cart() {
  const { cart } = useCart();

  if (!cart.items || cart.items.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Your cart is empty</h2>
        <p>Add some items to get started!</p>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartItems}>
        {cart.items.map((item) => (
          <CartCard key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.cartSummary}>
        <h2>Cart Summary</h2>
        <div className={styles.summaryRow}>
          <span>Total ({cart.items.length} items)</span>
          <span>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(cart.total)}
          </span>
        </div>
      </div>
    </div>
  );
}
