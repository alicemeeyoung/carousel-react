import React, { useEffect, EffectCallback } from 'react';

import { DotButton } from './CarouselStyles';
import ImageList from './ImageList';

export type dotProps = {
  id: number;
  setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
  refElement: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>;
  imageRef: React.MutableRefObject<null>;
};

//@ts-ignore
const scrollTo = (ref: React.MutableRefObject<HTMLImageElement>): void => {
  ref.current.scrollIntoView({
    behavior: 'smooth'
  });
};

export default function Dot({ id, refElement, imageRef }: dotProps) {
  //@ts-ignore
  const scrollCallback = () => scrollTo(refElement.current[id], imageRef);

  //@ts-ignore
  return <DotButton aria-pressed="false" onClick={scrollCallback} />;
}
