import React from 'react';
import MemeGen from './MemeGen';
import logo from './logo.svg';

import './App.css';

const meme = {
  header: 'Hello World!',
  footer: 'My first meme is awesome :)',
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
