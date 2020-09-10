import React from 'react';
import Slider from './Slider'
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <img className="logo" src="./assets/marvel-logo-header.jpg" alt="Marvel"/>
      <h1>Who is your favourite hero?</h1>
      <Slider/>
    </div>
  );
}

export default App;
