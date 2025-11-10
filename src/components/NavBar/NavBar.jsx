import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const { cart } = useCart();

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.navLink}>
        Home
      </NavLink>
      <NavLink to="/shop" className={styles.navLink}>
        Shop
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        Cart
        {cart?.items?.length > 0 && (
          <span className={styles.cartBadge}>{cart.items.length}</span>
        )}
      </NavLink>
    </nav>
  );
}
