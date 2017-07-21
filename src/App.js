import React from 'react';
import MemeGen from './MemeGen';
import logo from './img/logo.svg';

import './App.css';

const meme = {
  header: {text: 'Hello World!', style: {color: 'white', fontSize: 40, fontFamily: 'Ubuntu'}},
  footer: {text: 'My first meme is awesome :)', style: {color: 'white', fontSize: 40, fontFamily: 'Ubuntu'}},
  imageUrl: 'http://i.imgur.com/MbLijRZ.jpg',
};

const App = () => {
  return (
    <div>
      <MemeGen meme={ meme } />
    </div>
  );
}

export default App;
