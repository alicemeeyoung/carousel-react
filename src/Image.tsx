import React from 'react';

import { ImageStyle } from './CarouselStyles';
import { imageProps } from './types';

export default function Image({ source, imageRef, index }: imageProps) {
  if (!source) source = '';
  return (
    <ImageStyle
      ref={imageRef.current[index]}
      src={source}
      width="100%"
      alt=""
    />
  );
}
