import React from 'react';

import styles from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  //the tag data is a comma separated value, so we turn into an array, and then loop through that array and than output one span for each one
  const tags = image.tags.split(',');

  return (
    <div className={styles.imageCardContainer}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={styles.imageCard}
        width="480"
      />

      <div className={styles.imageTextContainer}>
        <h2>Photo by {image.user}</h2>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>

      <div className={styles.imageCardTagContainer}>
        {tags
          .filter((i, index) => index > 0 && index < 4)
          .map((tag, index) => (
            <span key={index} className={styles.imageCardTag}>
              #{tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default ImageCard;

//line 35 map through the tags, and for each tag we want to output span and then put #{tag}. we give it a key
