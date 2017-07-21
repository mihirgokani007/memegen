import React from 'react';
import ReactDOM from 'react-dom';

import MemePreview from './MemePreview';

const width = 400;
const height = 400;

const MemeGen = ({ meme }) => {

  return (
    <div>
      <MemePreview width={ width } height={ height } meme={ meme } />
    </div>
  );
};

export default MemeGen;
