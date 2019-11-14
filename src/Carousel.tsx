import React from 'react';

import Arrow from './Arrow';
import { Arrows } from './enums';

// import { CarouselContainer } from './CarouselStyles';

export default function Carousel() {
  return (
    // <CarouselContainer>
    <div>
      <Arrow arrow={Arrows.Left} />
      <div>Hello World</div>
      <Arrow arrow={Arrows.Right} />

    </div>
    // </CarouselContainer>
  );
}
