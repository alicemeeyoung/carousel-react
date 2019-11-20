import React from 'react';

import { Arrows } from './enums';
import { ArrowStyles } from './CarouselStyles';

type arrowProps = {
  arrow: Arrows;
  setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
  currentImageId: number;
  lengthOfAPI?: number;
  refElement: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>;
};

const scrollTo = (ref: React.RefObject<HTMLImageElement>): void => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

export default function Arrow({
  arrow,
  setCurrentImageId,
  currentImageId,
  lengthOfAPI,
  refElement
}: arrowProps) {
  const handleArrowClick = (direction: Arrows): void => {
    if (direction === 'left' && currentImageId !== 0) {
      scrollTo(refElement.current[currentImageId - 1]);
      setCurrentImageId(currentImageId - 1);
    }

    if (direction === 'right' && lengthOfAPI && currentImageId < lengthOfAPI) {
      scrollTo(refElement.current[currentImageId + 1]);
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
