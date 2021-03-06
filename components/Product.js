import Image from "next/image";

import Cart from "../components/Cart";
import styles from "../styles/Product.module.scss";

export default function Product({ product, currency }) {
  return (
    <div className={styles.product}>
      <div>
        <Image
          src={product.image_url}
          alt={product.title}
          height={100}
          width={100}
        />
      </div>
      <div className={styles.titleContainer}>
        <h5> {product.title}</h5>
        <p>
          {currency === "USD" ? "$" : null}
          {product.price}
        </p>

        <Cart product={product} />
      </div>
    </div>
  );
}
