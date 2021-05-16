import React from 'react';
import CardItem from './CardItem';
import PopUp from '../PopUp/PopUp';

import styles from './Cards.module.css';

const Cards = () => {
  return (
    <div className={styles.cards}>
      <h2>Moments suspended in soulful imagery + an enduring legacy</h2>
      <PopUp />
      <div className={styles.cardsWrapper}>
        <CardItem
          src={process.env.PUBLIC_URL + '/img/male-paint-brush.jpg'}
          text="Explore the hidden waterfall deep inside the Amazon Jungle"
          width="300"
          label="Adventure"
          path="/portfolio"
        />
        <CardItem
          src={process.env.PUBLIC_URL + '/img/pin-up.jpg'}
          text="Travel through the Islands of Bali in a Private Cruise"
          height="400"
          label="Luxury"
          path="/portfolio"
        />
        <CardItem
          src={process.env.PUBLIC_URL + '/img/gangster-look.jpg'}
          text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
          width="300"
          label="Mystery"
          path="/portfolio"
        />
        <CardItem
          src={process.env.PUBLIC_URL + '/img/wedding-limusine.jpg'}
          text="Experience Football on Top of the Himilayan Mountains"
          width="300"
          label="Luxury"
          path="/portfolio"
        />
        <CardItem
          src={process.env.PUBLIC_URL + '/img/lonely-man.jpg'}
          text="Ride through the Sahara Desert on a guided camel tour"
          width="300"
          label="Adrenaline"
          path="/portfolio"
        />
        <CardItem
          src={process.env.PUBLIC_URL + '/img/ballerina.jpg'}
          text="Ride through the Sahara Desert on a guided camel tour"
          width="300"
          label="Adrenaline"
          path="/portfolio"
        />
        <CardItem
          src={process.env.PUBLIC_URL + '/img/girl-teddy-bear.jpg'}
          text="Ride through the Sahara Desert on a guided camel tour"
          width="300"
          label="Children"
          path="/portfolio"
        />
        <CardItem
          src={process.env.PUBLIC_URL + '/img/blond-girl.jpg'}
          text="Ride through the Sahara Desert on a guided camel tour"
          width="300"
          label="Portraits"
          path="/portfolio"
        />
        <CardItem
          src={process.env.PUBLIC_URL + '/img/couple.jpg'}
          text="Ride through the Sahara Desert on a guided camel tour"
          width="300"
          label="Couple"
          path="/portfolio"
        />
        <p className={styles.hiddenText}>
          While these pictures are unique in their own ways, there are some rare
          pictures that tell their own story. They may be funny, impressive and
          inspiring all the same but the story behind them is so powerful that
          we absolutely can relate to. We have collected 15 meaningful pictures
          that will motivate you to start your day with a smile.
        </p>
      </div>
    </div>
  );
};

export default Cards;
