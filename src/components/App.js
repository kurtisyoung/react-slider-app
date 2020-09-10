import React from 'react';
import Slider from './Slider'
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <img className="logo" src="./assets/marvel-logo-header.jpg" alt="Marvel"/>
      <h1 className="title">Who is your favourite <span className="hero-text">hero</span> or <span className="villian-text">villian</span>?</h1>
      <Slider/>
    </div>
  );
}

export default App;
