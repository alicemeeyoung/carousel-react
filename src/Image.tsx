import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
// import { API } from './imageAPI';

import { ImageStyle } from './CarouselStyles';

// export default function Image({ currentImageId }: { currentImageId?: number }) {
//   // const { src: matchingImgSrc }: { src: string } =  imageAPI[currentImageId];
//   const src: string | null = null;
//   if (currentImageId)
//     src = imageAPI[currentImageId][matchingImgSrc]

//   return <ImageStyle src={matchingImgSrc} width="100%" alt="" />
// }

export default function Image({
  source,
  refElement,
  index
}: {
  source?: string;
  index: number;
  refElement: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>;
}) {
  if (!source) source = '';
  return (
    <ImageStyle
      ref={refElement.current[index]}
      src={source}
      width="100%"
      alt=""
    />
  );
}
