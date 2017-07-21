import React from 'react';
import { Stage, Layer, Group, Image, Text } from 'react-konva';

import StaticImage from './utils/StaticImage';

const MemePreview = ({ width, height, meme }) => {

  const { header, footer, imageUrl } = meme;

  return (
    <Stage width={ width } height={ height }>
      <Layer>
        <StaticImage src={ imageUrl } width={ width } height={ height } scale={ 'even' } />
      </Layer>
    </Stage>
  );

};

export default MemePreview;
