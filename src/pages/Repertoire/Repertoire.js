import React from 'react';
import Section from '../../components/Section/Section';
import Products from '../../components/Products/Products';

import styles from './Repertoire.module.css';

const Repertoire = (props) => {
  return (
    <div className={styles.repertoire}>
      <Section
        displayOrder={styles.displayOrder}
        imgSrc={process.env.PUBLIC_URL + '/img/james-brown.jpg'}
        title="Welcome to Repertoire,"
        subtitle="James Brown’s new portfolio building
        workshop series."
        firstParagraph="An important distinction between Repertoire and other group workshops:all
participants will be given ample time to work with models on their own without the disruption of a group. This way you have the chance to learn at your own pace without competing for time and attention."
      />

      <Products />
    </div>
  );
};

export default Repertoire;
