import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Shop.module.css";

export async function loader({ request }) {
  let products = await fetch("https://fakestoreapi.com/products", {
    signal: request.signal,
  });

  if (!products.ok) {
    throw new Response("", {
      status: products.status,
      statusText: "API Error",
    });
  }

  return { products: await products.json() };
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
