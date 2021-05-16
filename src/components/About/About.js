import React from 'react';

import styles from './About.module.css';

const About = () => {
  return (
    <div id="about" className={styles.aboutContainer}>
      <div>
        <img
          src={process.env.PUBLIC_URL + '/img/james-brown.jpg'}
          alt="A snapshot of the man himself"
          title="A snapshot of the man himself"
          width="300"
        />
      </div>
      <div>
        <h2>James Brown</h2>
        <p>Creative photographer</p>
        <p>
          A photographer is a professional that focuses on the art of taking
          photographs with a digital or film camera.
        </p>
        <p>
          Photographers use artificial and/or natural lighting to snap pictures
          of various people, places and things in a variety of settings.{' '}
        </p>
        <p>
          The charges of this position are requiring the complete art direction
          of the brand, the creation and distribution of all contents through
          social networks, the start up of new communication initiatives,
          campaigns management in the most relevant social media, events
          organization, an improvement on the brand’s image, and what I enjoy
          most of all, being the photographer and creative director of all the
          fashion campaigns and the studio manager.
        </p>
        <p>
          I consider myself an active person, I have plenty of good ideas and
          initiative. I’ve worked in very competitive companies where I had to
          develop my ideas from different positions. I love to put everything in
          and try to reach the highest potencial of the brand.
        </p>
      </div>
    </div>
  );
};
export default About;
