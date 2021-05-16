import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Cards.module.css';

const CardItem = (props) => {
  return (
    <div className={styles.cardsItem}>
      <Link className={styles.cardsItemLink} to={props.path}>
        <figure className={styles.cardsItemPicWrap} data-category={props.label}>
          <img className={styles.cardsItemImg} alt="featured" src={props.src} />
        </figure>
        <div className={styles.cardsItemInfo}>
          <h5 className={styles.cardsItemText}>{props.text}</h5>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
