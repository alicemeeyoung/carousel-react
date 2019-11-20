import React from 'react';

import { ImageStyle } from './CarouselStyles';
export default function Image({
  source,
  imageRef,
  index
}: {
  source?: string;
  index: number;
  imageRef: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>;
}) {
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
