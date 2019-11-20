import React from 'react';

import { Arrows } from './enums';
import { ArrowStyles } from './CarouselStyles';
import { arrowProps } from './types';
import { scrollTo } from './shared';

export default function Arrow({
  arrow,
  setCurrentImageId,
  currentImageId,
  lengthOfAPI,
  imageRef
}: arrowProps) {
  const handleArrowClick = (direction: Arrows): void => {
    if (direction === 'left' && currentImageId !== 0) {
      scrollTo(imageRef.current[currentImageId - 1]);
      setCurrentImageId(currentImageId - 1);
    }

    if (direction === 'right' && lengthOfAPI && currentImageId < lengthOfAPI) {
      scrollTo(imageRef.current[currentImageId + 1]);
      setCurrentImageId(currentImageId + 1);
    }
  };

  return (
    <ArrowStyles onClick={() => handleArrowClick(arrow)}>
      {arrow === 'left' ? (
        <img src="/arrow_left.png" alt="Left arrow" />
      ) : (
        <img src="/arrow_right.png" alt="Right arrow" />
      )}
    </ArrowStyles>
  );
}
