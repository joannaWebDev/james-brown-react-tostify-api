import React from 'react';
import Logo from '../Logo/Logo';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
    </div>
  );
};

export default Header;
