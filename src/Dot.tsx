import React from 'react';

import { DotButton } from './CarouselStyles';

export type dotProps = {
  id: number;
  setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
  refElement: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>
};

//@ts-ignore
const scrollTo = (ref: React.MutableRefObject<HTMLImageElement>): void => {
  console.log({ref})
  window.scrollTo(0, ref.current.offsetTop)
}

export default function Dot({ id, setCurrentImageId, refElement }: dotProps) {
  const handleButtonClick = () => {
    console.log(refElement, id)
    //@ts-ignore
    scrollTo(refElement.current[id])
  }
  //@ts-ignore
  return <DotButton aria-pressed="false" onClick={handleButtonClick} />;
}