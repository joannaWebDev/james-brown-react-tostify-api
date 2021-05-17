import React from 'react';
import Section from './../Section/Section';

import styles from './About.module.css';

const About = (props) => {
return (
  <div id="about">
    <Section
      displayOrder={styles.displayOrder}
      imgSrc={process.env.PUBLIC_URL + '/img/james-brown.jpg'}
      title="James Brown"
      subtitle="Creative photographer"
      firstParagraph="A photographer is a professional that focuses on the art of taking photographs with a digital or film camera. Photographers use artificial and/or natural lighting to snap pictures
          of various people, places and things in a variety of settings."
      secondParagraph=" The charges of this position are requiring the complete art direction
          of the brand, the creation and distribution of all contents through
          social networks, the start up of new communication initiatives,
          campaigns management in the most relevant social media, events
          organization, an improvement on the brand’s image, and what I enjoy
          most of all, being the photographer and creative director of all the
          fashion campaigns and the studio manager. I consider myself an active person, I have plenty of good ideas and
          initiative. I’ve worked in very competitive companies where I had to
          develop my ideas from different positions. I love to put everything in
          and try to reach the highest potencial of the brand."
    />
  </div>
);
};
export default About;
