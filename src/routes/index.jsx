import { Link } from "react-router-dom";
import styles from "./index.module.css";
import image from "../assets/women-fashion.jpeg";

const CAT_ELECTRONICS =
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=60&auto=format&fit=crop";
const CAT_JEWELRY =
  "https://images.unsplash.com/photo-1640083239745-9bbd77a2097f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469";
const CAT_MENS =
  "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471";
const CAT_WOMENS = image;

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
            <img
              src={CAT_ELECTRONICS}
              alt="Electronics"
              className={styles.categoryImage}
            />
            <div className={styles.categoryContent}>
              <h3>Electronics</h3>
              <p>Latest gadgets</p>
            </div>
          </Link>

          <Link to="/shop" className={styles.category}>
            <img
              src={CAT_JEWELRY}
              alt="Jewelry"
              className={styles.categoryImage}
            />
            <div className={styles.categoryContent}>
              <h3>Jewelry</h3>
              <p>Timeless pieces</p>
            </div>
          </Link>

          <Link to="/shop" className={styles.category}>
            <img
              src={CAT_MENS}
              alt="Men's Fashion"
              className={styles.categoryImage}
            />
            <div className={styles.categoryContent}>
              <h3>Men's Fashion</h3>
              <p>Modern style</p>
            </div>
          </Link>

          <Link to="/shop" className={styles.category}>
            <img
              src={CAT_WOMENS}
              alt="Women's Fashion"
              className={styles.categoryImage}
            />
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
