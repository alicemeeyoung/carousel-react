import React from 'react';

import { DotButton } from './CarouselStyles';

export type dotProps = {
  id: number;
  setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
  imageRef: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>;
};

const scrollTo = (ref: React.RefObject<HTMLImageElement>): void => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

export default function Dot({ id, setCurrentImageId, imageRef }: dotProps) {
  const handleDotClick = () => {
    scrollTo(imageRef.current[id]);
    setCurrentImageId(id);
  };

  return <DotButton aria-pressed="false" onClick={handleDotClick} />;
}
