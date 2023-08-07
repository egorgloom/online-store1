import React from 'react'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { addToCart, removeItem } from '../../features/user/userSlice';
import { sumToItems } from './../../utils/common';

import { IMAGE_PRODUCTS } from '../../utils/constants';

import styles from "../../styles/Cart.module.css";



export default function Cart() {
    const dispatch = useDispatch()
    const { cart } = useSelector(({ user }) => user)

    const changeQuantity = (item, quantity) => {
        dispatch(addToCart({ ...item, quantity }))
    }
    const removeItemToCart = (id) => {
        dispatch(removeItem(id))
    }
    return (
        <section className={styles.cart}>
            <h2 className={styles.title}>Your cart</h2>
            {!cart.length ? (
                <div className={styles.empty}>Here is empty</div>
            ) : (
                <>
                    <div className={styles.list}>
                        {cart.map((item) => {
                            const { title, category, price, id, quantity } = item;
                            return (
                                <div className={styles.item} key={id}>
                                    <div
                                        className={styles.image}
                                        style={{ backgroundImage: `url(${IMAGE_PRODUCTS})` }}
                                    />
                                    <div className={styles.info}>
                                        <h3 className={styles.name}>{title}</h3>
                                        <div className={styles.category}>{category.name}</div>
                                    </div>
                                    <div className={styles.price}>{price}$</div>
                                    <div className={styles.quantity}>
                                        <div
                                            className={styles.minus}
                                            onClick={() =>
                                                changeQuantity(item, Math.max(1, quantity - 1))
                                            }
                                        >
                                            <svg className="icon">
                                                <use
                                                    xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#minus`}
                                                />
                                            </svg>
                                        </div>
                                        <span>{quantity}</span>
                                        <div
                                            className={styles.plus}
                                            onClick={() =>
                                                changeQuantity(item, Math.max(1, quantity + 1))
                                            }
                                        >
                                            <svg className="icon">
                                                <use
                                                    xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#plus`}
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={styles.total}>{price * quantity}$</div>
                                    <div
                                        className={styles.close}
                                        onClick={() => removeItemToCart(item.id)}
                                    >
                                        <svg className="icon">
                                            <use
                                                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                                            />
                                        </svg>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.actions}>
                        <div className={styles.total}>
                            TOTAL PRICE:{" "}
                            <span>
                                {sumToItems(cart.map(({ price, quantity }) => price * quantity))}$
                            </span>
                        </div>
                        <button className={styles.proceed}>Proceed to checkout</button>
                    </div>
                </>
            )}
        </section>
    )
}
