import { useState } from "react";
import styles from "./ProductButton.module.css";
import { useCart } from "../../context/CartContext";
import Notification from "../Notification/Notification";

const ProductButton = ({ quantityState, product }) => {
  const { cart, dispatch } = useCart();
  const [quantity, setQuantity] = quantityState;
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { ...product, quantity },
    });
    setShowNotification(true);
  };

  return (
    <>
      <button className={styles.productButton} onClick={handleAddToCart}>
        Add to cart
      </button>
      <Notification
        message={`Added ${quantity} ${
          quantity === 1 ? "item" : "items"
        } to cart`}
        isVisible={showNotification}
        onHide={() => setShowNotification(false)}
      />
    </>
  );
};

export default ProductButton;
