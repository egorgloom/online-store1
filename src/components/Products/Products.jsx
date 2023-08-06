import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Products.module.css";
import { IMAGE_PRODUCTS } from "../../utils/constants";

export default function Products({ title, products=[]}) {
    const list = products.filter((_, i) => i < 5)

  return (
    <section className={styles.products}>
      {title && <h2>{title}</h2>}

      <div className={styles.list}>
        {list.map(({ id, title, category: { name: cat }, price }) => (
          <Link to={`/products/${id}`} key={id} className={styles.product}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${IMAGE_PRODUCTS})` }}
            />

            <div className={styles.wrapper}>
              <h3 className={styles.title}>{title}</h3>
              <div className={styles.cat}>{cat}</div>
              <div className={styles.info}>
                <div className={styles.prices}>
                  <div className={styles.price}>{price}$</div>
                  <div className={styles.oldPrice}>
                    {Math.floor(price * 0.8)}$
                  </div>
                </div>

                <div className={styles.purchases}>
                  {Math.floor(Math.random() * 20 + 1)} purchased
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
