import React from 'react';

import Arrow from './Arrow';
import { Arrows } from './enums';
import Image from './Image';

import { CarouselContainer } from './CarouselStyles';

export default function Carousel() {

	return (
		<CarouselContainer>
			<Arrow arrow={Arrows.Left} />
			{/* <div>Hello World</div> */}
      <Image />
			<Arrow arrow={Arrows.Right} />
    </CarouselContainer>
	);
}
