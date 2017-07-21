import React from 'react';
import { Text } from 'react-konva';

const MemeText = ({ text, style }) => {
  const { color, fontSize, fontFamily } = style;

  return (
      <Text 
        text={ text } 
        align="center" 
        fill={ color } 
        fontSize={ fontSize } 
        fontFamily={ fontFamily } />
  );
}

export default MemeText;
