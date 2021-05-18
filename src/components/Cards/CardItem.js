import React from 'react';
import { useFetch } from '../hooks';
import { Link } from 'react-router-dom';

import styles from './Cards.module.css';

const CardItem = () => {
  const [data, isLoading] = useFetch(`${process.env.PUBLIC_URL}/data.json`);
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul className={styles.cardsWrapper}>
          {data.map(({ id, src, label, description }) => (
            <li key={`photo-${id}`} className={styles.cardsItem}>
              <Link to="/portfolio" className={styles.cardsItemLink}>
                <figure className={styles.cardsItemPicWrap} data-category={label.split(' ')[0]}>
                  <img
                    alt={description}
                    src={`${process.env.PUBLIC_URL}/${src}`}
                    className={styles.cardsItemImg}
                    width="300"
                  />
                </figure>
                <div className={styles.cardsItemInfo}>
                  <h5 className={styles.cardsItemText}>{description} </h5>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CardItem;
