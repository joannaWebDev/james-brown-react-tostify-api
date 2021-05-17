import React, { useState, useEffect } from 'react';
import ImageCard from './../../components/ImageCard/ImageCard';
import ImageSearch from './../../components/ImageSearch/ImageSearch';

import styles from './Portfolio.module.css';

const Portfolio = () => {
  //is an empty array because is going to get filled once we make our request
  const [images, setImages] = useState([]);

  //once we're done fetching, we can set isLoading to false
  const [isLoading, setIsLoading] = useState(true);

  //an empty array gets random pics.
  // if we put in a value such as 'model', we'll fetch all pics of models
  const [term, setTerm] = useState('model');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&safesearch=true&per_page=36`
    )
      .then((res) => res.json())
      .then((data) => {
        //set that response hits array to our state [images, setImages]
        setImages(data.hits);

        //because we already got the data, set the setIsLoading to false
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div>
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && <h1>No Images Found</h1>}
      
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.portfolioContainer}>
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;

//https://pixabay.com/api/?key=19199393-6d3b6b7d7d8e747d40c7d3776&q
