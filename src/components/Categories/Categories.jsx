import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../../styles/Categories.module.css";
import { IMAGE_CATEGORIES } from './../../utils/constants';


export default function Categories({categories, title}) {
    return (
        <section className={styles.section}>
          <h2>{title}</h2>
    
          <div className={styles.list}>
            {categories.map(({ id, name }) => (
              <Link to={`/categories/${id}`} key={id} className={styles.item}>
                <div
                  className={styles.image}
                  
                style={{ backgroundImage: `url(${IMAGE_CATEGORIES})` }}
                />
                <h3 className={styles.title}>{name}</h3>
              </Link>
            ))}
          </div>
        </section>
      );
}
