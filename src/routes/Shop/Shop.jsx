import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Shop.module.css";

export async function loader() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  if (!products) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }

  return { products };
}

export default function Shop() {
  const { products } = useLoaderData();
  console.log(products);

  if (!products || products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className={styles.productDisplay}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
