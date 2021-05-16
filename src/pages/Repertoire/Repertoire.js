import React, { useState } from 'react';
import Products from '../../components/Products/Products';
import Cart from '../../components/Cart/Cart';

import styles from './Repertoire.module.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

const Repertoire = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  return (
    <div className={styles.repertoire}>
      <div className={styles.header}>
        <img
          src={process.env.PUBLIC_URL + '/img/james-brown.jpg'}
          alt="A snapshot of the man himself"
          title="A snapshot of the man himself"
          width="200"
        />
        <p>
          Welcome to <i>Repertoire</i>, James Brown’s new portfolio building
          workshop series.
        </p>
        <p>
          An important distinction between Repertoire and other group workshops:
          all participants will be given ample time to work with models on their
          own without the disruption of a group. This way you have the chance to
          learn at your own pace without competing for time and attention.
        </p>
      </div>

    {/*   <div className={styles.cartMenu}>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({getCartTotal()})
        </button>

        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
          View Workshop Products
        </button>
        <hr />
      </div> */}

      <div className={styles.cartSelection}>
        {page === PAGE_PRODUCTS && <Products cart={cart} setCart={setCart} />}
        {page === PAGE_CART && <Cart cart={cart} setCart={setCart} />}
      </div>
    </div>
  );
};

export default Repertoire;
