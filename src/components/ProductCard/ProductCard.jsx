import styles from "./ProductCard.module.css";
import ProductButton from "../ProductButton/ProductButton";
import ProductQuantity from "../ProductQuantity/ProductQuantity"; // Import ProductQuantity
import { useState } from "react";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  if (!product) return null;

  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  const rating = product.rating?.rate ?? null;
  const ratingCount = product.rating?.count ?? null;

  return (
    <div className={styles.productCard}>
      <div className={styles.imgWrapper}>
        <img src={product.image} alt={product.title || "product image"} />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <div className={styles.productTitleRow}>
          <h3 className={styles.productPrice}>{price}</h3>
          <p className={styles.productRating}>
            {rating ? `${rating} ★ (${ratingCount ?? 0})` : "No rating"}
          </p>
        </div>
        <p className={styles.productDescription}>{product.description}</p>
      </div>
      <div className={styles.actionRow}>
        <ProductQuantity
          quantityState={[quantity, setQuantity]}
          product={product}
        />
        <ProductButton
          quantityState={[quantity, setQuantity]}
          product={product}
        >
          Add to Cart
        </ProductButton>
      </div>
    </div>
  );
}
