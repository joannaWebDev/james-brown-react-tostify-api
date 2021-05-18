import React from 'react';
import CardItem from './CardItem';
import PopUp from '../PopUp/PopUp';

import styles from './Cards.module.css';

const Cards = () => {
  return (
    <div className={styles.cards}>
      <h2>Moments suspended in soulful imagery + an enduring legacy</h2>
      <PopUp />
      <CardItem/>     
    </div>
  );
};

export default Cards;
