import React from 'react';
import styles from './Section.module.css';

const Section = ({ imgSrc, title, subtitle, firstParagraph, secondParagraph, displayOrder }) => {
  return (
    <div
      className={displayOrder}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2%',
        margin: '2% ',
        textAlign: 'left',
      }}
    >
      <img loading="lazy" src={imgSrc} alt="snapshoot of the man himself" width="300" />

      <div className={styles.shared_section_container}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>{firstParagraph}</p>
        <p>{secondParagraph}</p>
      </div>
    </div>
  );
};

export default Section;
