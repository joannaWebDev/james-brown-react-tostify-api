import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + '/logo.png'}
          alt="An alter me"
          width="180"
          height="70"
        />
      </Link>
    </div>
  );
};

export default Logo;
