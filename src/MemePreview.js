import React from 'react';
import { Stage, Layer } from 'react-konva';

import MemeText from './MemeText';
import StaticImage from './utils/StaticImage';

const MemePreview = ({ width, height, meme }) => {

  const { header, footer, imageUrl } = meme;

  return (
    <Stage width={ width } height={ height }>
      <Layer>
        <MemeText text={ header.text } style={ header.style } />
        <StaticImage src={ imageUrl } width={ width } height={ height } sizing="original" />
        <MemeText text={ footer.text } style={ footer.style } />
      </Layer>
    </Stage>
  );

};

export default MemePreview;
