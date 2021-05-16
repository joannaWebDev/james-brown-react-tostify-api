import React from 'react';
import Hero from '../../components/Hero/Hero';
import Cards from './../../components/Cards/Cards';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Cards />
      <About />
      <Contact />
    </>
  );
};

export default Home;
