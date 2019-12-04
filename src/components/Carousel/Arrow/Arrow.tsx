import React, { useCallback } from 'react';
import { ArrowStyles } from '../CarouselStyles';
import { arrowProps } from '../types';
import { scrollTo } from '../shared';

export default function Arrow({
  arrow,
  setCurrentImageId,
  currentImageId,
  lengthOfAPI,
  imageRef
}: arrowProps) {
  const arrowCallback = useCallback(() => {
    const direction = arrow;
    if (direction === 'left' && currentImageId !== 0) {
      scrollTo(imageRef.current[currentImageId - 1]);
      setCurrentImageId(currentImageId - 1);
    } else if (direction === 'left' && currentImageId === 0) {
      scrollTo(imageRef.current[lengthOfAPI - 1]);
      setCurrentImageId(lengthOfAPI - 1);
    } else if (direction === 'right' && currentImageId < lengthOfAPI - 1) {
      scrollTo(imageRef.current[currentImageId + 1]);
      setCurrentImageId(currentImageId + 1);
    } else {
      scrollTo(imageRef.current[0]);
      setCurrentImageId(0);
    }
  }, [arrow, currentImageId, imageRef, lengthOfAPI, setCurrentImageId]);

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