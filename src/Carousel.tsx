import React from 'react';

import Arrow from './Arrow';
import { Arrows } from './enums';

import { CarouselContainer } from './CarouselStyles';

export default function Carousel() {
  return (
    <CarouselContainer>
      <Arrow arrow={Arrows.Left} />
      Hello World
      <Arrow arrow={Arrows.Right} />
    </CarouselContainer>
  );
}
