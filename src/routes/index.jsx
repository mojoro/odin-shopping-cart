import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function Index() {
  return (
    <div className={styles.homepage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to StyleStore</h1>
          <p>Discover our curated collection of modern essentials</p>
          <Link to="/shop" className={styles.shopButton}>
            Shop Now
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <span className={styles.icon}>🚚</span>
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
        <div className={styles.feature}>
          <span className={styles.icon}>⭐</span>
          <h3>Top Rated</h3>
          <p>Customer favorites</p>
        </div>
        <div className={styles.feature}>
          <span className={styles.icon}>✅</span>
          <h3>Guaranteed</h3>
          <p>30 day returns</p>
        </div>
      </section>

      <section className={styles.categories}>
        <h2>Shop Categories</h2>
        <div className={styles.categoryGrid}>
          <Link to="/shop" className={styles.category}>
            <div className={styles.categoryContent}>
              <h3>Electronics</h3>
              <p>Latest gadgets</p>
            </div>
          </Link>
          <Link to="/shop" className={styles.category}>
            <div className={styles.categoryContent}>
              <h3>Jewelry</h3>
              <p>Timeless pieces</p>
            </div>
          </Link>
          <Link to="/shop" className={styles.category}>
            <div className={styles.categoryContent}>
              <h3>Men's Fashion</h3>
              <p>Modern style</p>
            </div>
          </Link>
          <Link to="/shop" className={styles.category}>
            <div className={styles.categoryContent}>
              <h3>Women's Fashion</h3>
              <p>Trending now</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
