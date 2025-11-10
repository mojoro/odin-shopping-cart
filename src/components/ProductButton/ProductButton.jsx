import styles from "./ProductButton.module.css";
import { useCart } from "../../context/CartContext";

const ProductButton = ({ quantityState, product }) => {
  const { cart, dispatch } = useCart();
  const [quantity, setQuantity] = quantityState;

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { ...product, quantity },
    });
  };
  const handleRemoveFromCart = () => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { ...product },
    });
  };

  return (
    <>
      <button className={styles.productButton} onClick={handleAddToCart}>
        Add to cart
      </button>
      <button className={styles.productButton} onClick={handleRemoveFromCart}>
        remove from cart
      </button>
    </>
  );
};

export default ProductButton;
