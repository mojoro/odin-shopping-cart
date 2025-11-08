import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.navLink}>
        Home
      </NavLink>
      <NavLink to="/shop" className={styles.navLink}>
        Shop
      </NavLink>
      <NavLink to="/cart" className={styles.navLink}>
        Cart
      </NavLink>
    </nav>
  );
};

export default NavBar;
