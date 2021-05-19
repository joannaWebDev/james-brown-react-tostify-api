import React, { useState } from 'react';
import { Button } from './../Button/Button';

import styles from './ImageSearch.module.css';

const ImageSearch = ({ searchText }) => {
  //  the local search component state
  const [text, setText] = useState('');
  //when we submit it, we need that to get put into term which is an App level state because then we need to make another request with that term. We do that through props

  //takes in an event parameter, we prevent the default, and we call the searchText and we pass in whatever is in our local state, whatever is in the input
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className={styles.imageSearchContainer}>
      <form onSubmit={onSubmit}>
        <div className={styles.imageSearch}>
          <input
            onChange={(e) => setText(e.target.value)}
            className={styles.searchInput}
            type="text"
            placeholder="Search Image Term..."
          />
          <Button
            buttonStyle="btn--primary"
            buttonSize="btn--small"
            type="submit"
          >
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;

//({ searchText }) destructured props
