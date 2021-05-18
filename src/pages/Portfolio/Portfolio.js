import React, { useState} from 'react';
import { useFetch } from '../../components/hooks';
import ImageCard from './../../components/ImageCard/ImageCard';
import ImageSearch from './../../components/ImageSearch/ImageSearch';

import styles from './Portfolio.module.css';

const Portfolio = (props) => { 
  // if we put in a value such as 'model', we'll fetch all pics of models
  const [term, setTerm] = useState('model');
  
  const [data, isLoading] = useFetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&safesearch=true&per_page=36`);


  return (
    <div>
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && data.length === 0 && <h1>No Images Found</h1>}
      
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.portfolioContainer}>
          {data.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;

//https://pixabay.com/api/?key=19199393-6d3b6b7d7d8e747d40c7d3776&q
