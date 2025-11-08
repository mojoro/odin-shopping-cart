import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
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
        <div className={styles.productTitleRow}>
          <h3 className={styles.productTitle}>{product.title}</h3>
          <p className={styles.productRating}>
            {rating ? `${rating} ★ (${ratingCount ?? 0})` : "No rating"}
          </p>
          <h3 className={styles.productPrice}>{price}</h3>
        </div>
        <h4 className={styles.productCategory}>{product.category}</h4>
        <p className={styles.productDescription}>{product.description}</p>
      </div>
    </div>
  );
}
