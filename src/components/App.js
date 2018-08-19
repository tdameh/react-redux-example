import React from 'react';
import Header from '../containers/Header';
import VisibleUsers from '../containers/VisibleUsers';
import Footer from '../containers/Footer';
import './App.css';

const App = () => (
  <div className="container">
    <Header />
    <VisibleUsers />
    <Footer />
  </div>
);

export default App;
