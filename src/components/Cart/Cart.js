import React from 'react';
import styles from './Cart.module.css';

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <div className={styles.cart}>
      <h1>Cart</h1>
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      <div className={styles.productsInCart}>
        {cart.map((product, idx) => (
          <div className={styles.productsDetails} key={idx}>
            <div>
              <h3>{product.name}</h3>
              <h4>${product.cost}</h4>
              <input
                className={styles.productsInput}
                value={product.quantity}
                onChange={(e) => setQuantity(product, parseInt(e.target.value))}
              />
            </div>
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>

      <div>Total Cost: ${getTotalSum()}</div>
    </div>
  );
}
