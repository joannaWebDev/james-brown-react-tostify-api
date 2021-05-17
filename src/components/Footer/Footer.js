import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <ul className={styles.footerLinks}>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/repertoire">
            Repertoire</NavLink>
        </li>
        <li>
          <a
            href="https://joannasmerea.com/"
            className="fa fa-instagram"
            target="_blank"
            rel="noopener noreferrer"
            title="dev's Portfolio"
          >
            Instagram
          </a>
        </li>
      </ul>
      <p>&copy; James Brown</p>
    </div>
  );
};
export default Footer;
