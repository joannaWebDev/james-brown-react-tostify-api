import React from 'react';
import { Button } from './../Button/Button';
import { NavLink } from 'react-router-dom';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <video
        src={process.env.PUBLIC_URL + '/video/women-modelling_conv.mp4'}
        autoPlay
        loop
        muted
      />
      <h1>PROFESSIONAL PHOTOSHOOT</h1>
      <p>What are you waiting for?</p>
      <div className={styles.heroBtns}>
        <NavLink to="/portfolio">
          <Button
            className={styles.btns}
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            WATCH MORE
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
