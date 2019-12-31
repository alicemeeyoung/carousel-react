import React, { useCallback } from 'react';
import { ArrowStyles } from '../CarouselStyles';
import { arrowProps } from '../types';
import { scrollTo } from '../shared';

export default function Arrow({ arrow, setCurrentImageId, currentImageId, lengthOfAPI, imageRef }: arrowProps) {
  const arrowCallback = useCallback(
    () => {
      const direction = arrow;
      const minusOrPlus = direction === 'left' ? -1 : 1;
      const nextImage = (currentImageId + minusOrPlus + lengthOfAPI) % lengthOfAPI;
      scrollTo(imageRef.current[nextImage]);
      setCurrentImageId(nextImage);
    },
    [ arrow, currentImageId, imageRef, lengthOfAPI, setCurrentImageId ]
  );

  return (
    <ArrowStyles onClick={arrowCallback}>
      {arrow === 'left' ? (
        <img src="/arrow_left.png" alt="Left arrow" />
      ) : (
        <img src="/arrow_right.png" alt="Right arrow" />
      )}
    </ArrowStyles>
  );
}
