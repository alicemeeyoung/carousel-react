import React from 'react';

import { DotButton } from './CarouselStyles';

export type dotProps = {
  id: number;
  setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
  refElement: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>;
};

const scrollTo = (ref: React.RefObject<HTMLImageElement>): void => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

export default function Dot({ id, setCurrentImageId, refElement }: dotProps) {
  const handleDotClick = () => {
    scrollTo(refElement.current[id]);
    setCurrentImageId(id);
  };

  //@ts-ignore
  return <DotButton aria-pressed="false" onClick={handleDotClick} />;
}
