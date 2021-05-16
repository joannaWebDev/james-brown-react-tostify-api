import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={styles.navigationMenu}>
      <li>
        <HashLink
          to="/#about"
          scroll={(el) =>
            el.scrollIntoView({ behavior: 'smooth', block: 'end' })
          }
        >
          About
        </HashLink>
      </li>
      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/repertoire">Repertoire</NavLink>
      </li>
      <li>
        <HashLink
          to="/#contact"
          scroll={(el) =>
            el.scrollIntoView({ behavior: 'smooth', block: 'end' })
          }
        >
          Contact
        </HashLink>
      </li>
    </ul>
  );
};

export default Navigation;

//ANCHOR TAGS 
//When you click on a link created with react-router-hash-link it will scroll to the element on the page with the id that matches the #hash-fragment in the link.
