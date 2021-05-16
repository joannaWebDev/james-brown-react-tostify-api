import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Repertoire from './pages/Repertoire/Repertoire';
import Footer from './components/Footer/Footer';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/repertoire" exact component={Repertoire} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
